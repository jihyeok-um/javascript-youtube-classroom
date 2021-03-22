describe("youtube classroom 기능 테스트", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/");
  });

  it("저장버튼을 누르면 볼 영상에 추가된다.", () => {
    cy.get("#search-button").click();
    cy.get("#search-form > input").type("javascript");
    cy.get("#search-form > button").click();

    cy.get("#search-results button[data-video-id]")
      .eq(0)
      .click()
      .then(([$clickedButton]) => $clickedButton.dataset.videoId)
      .then((savedVideoId) => {
        cy.get("#search-modal-close").click();
        cy.get("#saved-videos").children().should("have.length", 1);
        cy.get("#saved-videos > article button")
          .eq(0)
          .then(([$watchedViewButton]) => {
            expect($watchedViewButton.dataset.videoId).to.eq(savedVideoId);
          });
      });
  });

  it("watch 버튼을 누르면, 본 영상에 추가된다.", () => {
    cy.get("#saved-videos button[data-button-type='watched']")
      .eq(0)
      .click()
      .then(([$clickedButton]) => $clickedButton.dataset.videoId)
      .then((watchedVideoId) => {
        cy.get("#empty-img").should("be.visible");

        cy.get("#watched-view-button").click();
        cy.get("#saved-videos").children().should("have.length", 1);
        cy.get("#saved-videos > article button")
          .eq(0)
          .then(([$watchedButton]) => {
            expect($watchedButton.dataset.videoId).to.eq(watchedVideoId);
          });

        cy.get("#saved-videos button[data-button-type='watched']")
          .eq(0)
          .should("not.have.class", "opacity-hover");
      });
  });

  it("watch 버튼을 다시 누르면, 볼 영상에 추가된다.", () => {
    cy.get("#saved-videos button[data-button-type='watched']")
      .eq(0)
      .click()
      .then(([$clickedButton]) => $clickedButton.dataset.videoId)
      .then((watchedVideoId) => {
        cy.get("#empty-img").should("be.visible");

        cy.get("#watch-later-view-button").click();
        cy.get("#saved-videos").children().should("have.length", 1);
        cy.get("#saved-videos > article button")
          .eq(0)
          .then(([$watchedButton]) => {
            expect($watchedButton.dataset.videoId).to.eq(watchedVideoId);
          });

        cy.get("#saved-videos button[data-button-type='watched']")
          .eq(0)
          .should("have.class", "opacity-hover");
      });
  });

  it("delete 버튼을 누르면, 볼 영상에서 삭제된다.", () => {
    const confirmStub = cy.stub();

    cy.on("window:confirm", (message) => {
      confirmStub(message);
      return true;
    });

    cy.get("#saved-videos button[data-button-type='delete']")
      .eq(0)
      .click()
      .then(() => {
        expect(confirmStub.getCall(0)).to.be.calledWith(
          "정말로 삭제하시겠습니까?"
        );
      });

    cy.get("#empty-img").should("be.visible");
    cy.get("#watched-view-button").click();
    cy.get("#empty-img").should("be.visible");
  });

  it("delete 버튼을 누르면, 본 영상에서 삭제된다.", () => {
    const confirmStub = cy.stub();

    cy.on("window:confirm", (message) => {
      confirmStub(message);
      return true;
    });

    cy.get("#search-button").click();
    cy.get("#search-results button[data-video-id]").eq(0).click();
    cy.get("#search-modal-close").click();

    cy.get("#saved-videos button[data-button-type='watched']").eq(0).click();
    cy.get("#empty-img").should("be.visible");

    cy.get("#watched-view-button").click();
    cy.get("#saved-videos button[data-button-type='delete']")
      .eq(0)
      .click()
      .then(() => {
        expect(confirmStub.getCall(0)).to.be.calledWith(
          "정말로 삭제하시겠습니까?"
        );
      });
    cy.get("#empty-img").should("be.visible");
  });

  it("볼 영상에서 좋아요 버튼을 누르면 좋아요 한 영상에 해당 영상이 추가된다.", () => {
    cy.get("#search-button").click();
    cy.get("#search-results button[data-video-id]").eq(0).click();
    cy.get("#search-modal-close").click();

    cy.get("#saved-videos button[data-button-type='liked']")
      .eq(0)
      .click()
      .then(([$clickedButton]) => $clickedButton.dataset.videoId)
      .then((likedVideoId) => {
        cy.get("#saved-videos button[data-button-type='liked']")
          .eq(0)
          .should("not.have.class", "opacity-hover");

        cy.get("#liked-view-button").click();
        cy.get("#saved-videos > article button")
          .eq(0)
          .then(([$likedButton]) => {
            expect($likedButton.dataset.videoId).to.eq(likedVideoId);
          });

        cy.get("#saved-videos button[data-button-type='liked']")
          .eq(0)
          .should("not.have.class", "opacity-hover");
      });
  });

  it("본 영상에서 좋아요 버튼을 누르면 좋아요 한 영상에 해당 영상이 추가된다.", () => {
    cy.get("#search-button").click();
    cy.get("#search-results button[data-video-id]").eq(2).click();
    cy.get("#search-modal-close").click();

    cy.get("#saved-videos button[data-button-type='watched']").eq(1).click();

    cy.get("#watched-view-button").click();

    cy.get("#saved-videos button[data-button-type='liked']")
      .eq(0)
      .click()
      .then(([$clickedButton]) => $clickedButton.dataset.videoId)
      .then((likedVideoId) => {
        cy.get("#saved-videos button[data-button-type='liked']")
          .eq(0)
          .should("not.have.class", "opacity-hover");

        cy.get("#liked-view-button").click();
        cy.get("#saved-videos button[data-button-type='liked']")
          .eq(1)
          .then(([$likedButton]) => {
            expect($likedButton.dataset.videoId).to.eq(likedVideoId);
          });
      });
  });

  it("좋아요 취소를 누르면 좋아요 한 영상에서 사라진다.", () => {
    cy.get("#saved-videos button[data-button-type='liked']").eq(0).click();
    cy.get("#saved-videos").children().should("have.length", 1);
  });
});