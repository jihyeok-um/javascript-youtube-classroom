import { CLASSNAME, LOCAL_STORAGE_KEY } from "../constants/index.js";
import { $, fetchYoutubeData } from "../utils/index.js";
import { messenger, MESSAGE } from "../messenger/index.js";

export default class SearchForm {
  constructor() {
    this.initializeVariables();
    this.selectHTMLElements();
    this.addEventListeners();
  }

  initializeVariables() {
    this.query =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.QUERY)) || "";
  }

  selectHTMLElements() {
    this.$youtubeSearchForm = $(`.${CLASSNAME.SEARCH_FORM}`);
    this.$youtubeSearchFormInput = $(`.${CLASSNAME.SEARCH_FORM_INPUT}`);
  }

  addEventListeners() {
    this.$youtubeSearchForm.addEventListener(
      "submit",
      this.handleFormSubmit.bind(this)
    );
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.query = this.$youtubeSearchFormInput.value;

    localStorage.setItem(LOCAL_STORAGE_KEY.QUERY, JSON.stringify(this.query));

    this.searchKeyword();
  }

  async searchKeyword() {
    if (this.query === "") return;

    messenger.deliverMessage(MESSAGE.KEYWORD_SUBMITTED, {
      query: this.query,
    });

    try {
      const { nextPageToken, items } = await fetchYoutubeData(this.query);

      messenger.deliverMessage(MESSAGE.DATA_LOADED, {
        nextPageToken,
        items,
      });

      this.$youtubeSearchFormInput.value = "";
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
}