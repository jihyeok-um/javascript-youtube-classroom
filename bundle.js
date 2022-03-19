/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/constants/constant.js":
/*!**************************************!*\
  !*** ./src/js/constants/constant.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAIN_TO_WATCH_BUTTONS": () => (/* binding */ MAIN_TO_WATCH_BUTTONS),
/* harmony export */   "MAIN_WATCHED_BUTTONS": () => (/* binding */ MAIN_WATCHED_BUTTONS),
/* harmony export */   "MAX_RENDER_VIDEOS_COUNT": () => (/* binding */ MAX_RENDER_VIDEOS_COUNT),
/* harmony export */   "MAX_SAVABLE_VIDEOS_COUNT": () => (/* binding */ MAX_SAVABLE_VIDEOS_COUNT),
/* harmony export */   "MODAL_SAVE_BUTTON": () => (/* binding */ MODAL_SAVE_BUTTON),
/* harmony export */   "SAVED_VIDEO_LIST_KEY": () => (/* binding */ SAVED_VIDEO_LIST_KEY),
/* harmony export */   "SERVER_URL": () => (/* binding */ SERVER_URL),
/* harmony export */   "WATCHED_VIDEO_LIST_KEY": () => (/* binding */ WATCHED_VIDEO_LIST_KEY)
/* harmony export */ });
// 비디오관련 갯수 상숭
var MAX_SAVABLE_VIDEOS_COUNT = 100;
var MAX_RENDER_VIDEOS_COUNT = 1; // 로컬 스토리지 키

var SAVED_VIDEO_LIST_KEY = 'saved-video-list-key';
var WATCHED_VIDEO_LIST_KEY = 'watched-video-list-key'; // 서버 URL

var SERVER_URL = 'https://silly-volhard-192918.netlify.app/.netlify/functions/youtube'; // 버튼 DOM

var MAIN_TO_WATCH_BUTTONS = "\n<button id=\"check-button\" class=\"button main-videos-button\">\u2705</button>\n<button id=\"delete-button\" class=\"button main-videos-button\">\uD83D\uDDD1\uFE0F</button>";
var MAIN_WATCHED_BUTTONS = "\n<button id=\"check-button\" disabled class=\"button main-videos-button\">\u2705</button>\n<button id=\"delete-button\" class=\"button main-videos-button\">\uD83D\uDDD1\uFE0F</button>";
var MODAL_SAVE_BUTTON = "\n<button class=\"video-item__save-button button\">\u2B07 \uC800\uC7A5</button>";

/***/ }),

/***/ "./src/js/core/mainPage.js":
/*!*********************************!*\
  !*** ./src/js/core/mainPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _searchModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchModal */ "./src/js/core/searchModal.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _views_renderVideoItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/renderVideoItems */ "./src/js/views/renderVideoItems.js");
/* harmony import */ var _stateController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stateController */ "./src/js/core/stateController.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable max-lines-per-function */





var MainPage = /*#__PURE__*/function (_StateController) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MainPage, _StateController);

  var _super = _createSuper(MainPage);

  function MainPage() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MainPage);

    _this = _super.call(this);

    _this.addEvent();

    new _searchModal__WEBPACK_IMPORTED_MODULE_7__["default"]();
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MainPage, [{
    key: "init",
    value: function () {
      var _init = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.initVideoLists();

              case 2:
                if (!(_stateController__WEBPACK_IMPORTED_MODULE_10__["default"].savedToWatchVideoList.length === 0)) {
                  _context.next = 5;
                  break;
                }

                _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult.classList.add('search-result--no-result');
                return _context.abrupt("return");

              case 5:
                (0,_views_renderVideoItems__WEBPACK_IMPORTED_MODULE_9__.renderVideoItems)(_stateController__WEBPACK_IMPORTED_MODULE_10__["default"].savedToWatchVideoList, _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "addEvent",
    value: function addEvent() {
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$searchModalButton.addEventListener('click', this.openModal);
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$watchedVideoMenuButton.addEventListener('click', this.handleClickWatchedButton.bind(this));
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$toWatchedVideoMenuButton.addEventListener('click', this.handleClickNoWatchedButton.bind(this));
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList.addEventListener('click', this.handleClickVideoButtons.bind(this));
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$dimmer.addEventListener('click', this.closeModal.bind(this));
    }
  }, {
    key: "handleClickVideoButtons",
    value: function handleClickVideoButtons(e) {
      if (e.target === (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.$)('#check-button', _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList)) {
        this.handleClickCheckButton(e);
      }

      if (e.target === (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.$)('#delete-button', _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList)) {
        this.handleClickDeleteButton(e);
      }
    }
  }, {
    key: "handleClickCheckButton",
    value: function handleClickCheckButton(e) {
      e.target.setAttribute('disabled', '');
      var $videoItem = e.target.closest('.video-item');
      var videoId = $videoItem.getAttribute('data-video-id');
      this.watchVideo(videoId);
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList.replaceChildren();
      (0,_views_renderVideoItems__WEBPACK_IMPORTED_MODULE_9__.renderVideoItems)(_stateController__WEBPACK_IMPORTED_MODULE_10__["default"].savedToWatchVideoList, _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult);
    }
  }, {
    key: "handleClickDeleteButton",
    value: function handleClickDeleteButton(e) {
      var $videoItem = e.target.closest('.video-item');
      var videoId = $videoItem.getAttribute('data-video-id');
      var isDelete = confirm('정말 삭제하시겠습니까?');

      if (!isDelete) {
        return;
      }

      this.deleteVideo(videoId);
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList.replaceChildren();

      if (_utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList.classList.contains('watched-video-list')) {
        (0,_views_renderVideoItems__WEBPACK_IMPORTED_MODULE_9__.renderVideoItems)(_stateController__WEBPACK_IMPORTED_MODULE_10__["default"].savedWatchedVideoList, _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult);
        return;
      }

      (0,_views_renderVideoItems__WEBPACK_IMPORTED_MODULE_9__.renderVideoItems)(_stateController__WEBPACK_IMPORTED_MODULE_10__["default"].savedToWatchVideoList, _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult);
    }
  }, {
    key: "handleClickWatchedButton",
    value: function handleClickWatchedButton() {
      if (_utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList.classList.contains('watched-video-list')) {
        return;
      }

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.$)('.nav__no-watched-button').classList.remove('button-active');
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.$)('.nav__watched-button').classList.add('button-active');
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList.classList.add('watched-video-list');
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList.replaceChildren();
      var videos = _stateController__WEBPACK_IMPORTED_MODULE_10__["default"].savedWatchedVideoList;

      if (videos.length === 0) {
        _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult.classList.add('search-result--no-result');
        return;
      }

      (0,_views_renderVideoItems__WEBPACK_IMPORTED_MODULE_9__.renderVideoItems)(videos, _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult);
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult.classList.remove('search-result--no-result');
    }
  }, {
    key: "handleClickNoWatchedButton",
    value: function handleClickNoWatchedButton() {
      if (!_utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList.classList.contains('watched-video-list')) {
        return;
      }

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.$)('.nav__no-watched-button').classList.add('button-active');
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.$)('.nav__watched-button').classList.remove('button-active');
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList.classList.remove('watched-video-list');
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList.replaceChildren();
      var videos = _stateController__WEBPACK_IMPORTED_MODULE_10__["default"].savedToWatchVideoList;

      if (videos.length === 0) {
        _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult.classList.add('search-result--no-result');
        return;
      }

      (0,_views_renderVideoItems__WEBPACK_IMPORTED_MODULE_9__.renderVideoItems)(videos, _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult);
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult.classList.remove('search-result--no-result');
    }
  }, {
    key: "openModal",
    value: function openModal() {
      var $modalContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.$)('.modal-container');
      $modalContainer.classList.toggle('hide');
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$searchKeyWordInput.value = '';
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$modalSearchResult.classList.remove('search-result--no-result');
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$modalVideoList.replaceChildren();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.$)('.modal-container').classList.add('hide');

      if (_utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList.classList.contains('watched-video-list')) {
        return;
      }

      if (_stateController__WEBPACK_IMPORTED_MODULE_10__["default"].savedToWatchVideoList.length === 0) {
        _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult.classList.add('search-result--no-result');
        return;
      }

      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult.classList.remove('search-result--no-result');
      _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainVideoList.replaceChildren();
      (0,_views_renderVideoItems__WEBPACK_IMPORTED_MODULE_9__.renderVideoItems)(_stateController__WEBPACK_IMPORTED_MODULE_10__["default"].savedToWatchVideoList, _utils_dom__WEBPACK_IMPORTED_MODULE_8__.$mainSearchResult);
    }
  }]);

  return MainPage;
}(_stateController__WEBPACK_IMPORTED_MODULE_10__["default"]);


var mainPage = new MainPage();
mainPage.init();

/***/ }),

/***/ "./src/js/core/searchModal.js":
/*!************************************!*\
  !*** ./src/js/core/searchModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/constant */ "./src/js/constants/constant.js");
/* harmony import */ var _videoItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../videoItem */ "./src/js/videoItem.js");
/* harmony import */ var _utils_checkvalue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/checkvalue */ "./src/js/utils/checkvalue.js");
/* harmony import */ var _views_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/skeleton */ "./src/js/views/skeleton.js");
/* harmony import */ var _views_renderVideoItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/renderVideoItems */ "./src/js/views/renderVideoItems.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/request */ "./src/js/utils/request.js");
/* harmony import */ var _stateController__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stateController */ "./src/js/core/stateController.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable max-lines-per-function */









var SearchModal = /*#__PURE__*/function (_StateController) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchModal, _StateController);

  var _super = _createSuper(SearchModal);

  function SearchModal() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchModal);

    _this = _super.call(this);
    _this.nextPageToken = null;

    _this.addEvent();

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SearchModal, [{
    key: "addEvent",
    value: function addEvent() {
      _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$searchButton.addEventListener('click', this.handleClickSearchButton.bind(this));
      _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalVideoList.addEventListener('click', this.handleClickSaveButton.bind(this));
      _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalVideoList.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }, {
    key: "handleScroll",
    value: function () {
      var _handleScroll = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {
        var title, isScrollEnd, searchResult, videos;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                title = _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$searchKeyWordInput.value;
                isScrollEnd = _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalVideoList.scrollHeight - _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalVideoList.scrollTop === _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalVideoList.clientHeight;

                if (!(isScrollEnd && _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalVideoList.scrollTop !== 0)) {
                  _context.next = 14;
                  break;
                }

                (0,_views_skeleton__WEBPACK_IMPORTED_MODULE_11__.renderSkeletonItems)(_constants_constant__WEBPACK_IMPORTED_MODULE_8__.MAX_RENDER_VIDEOS_COUNT, _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalVideoList);
                _context.next = 6;
                return (0,_utils_request__WEBPACK_IMPORTED_MODULE_13__.searchResultRequest)(title, this.nextPageToken);

              case 6:
                searchResult = _context.sent;
                (0,_views_skeleton__WEBPACK_IMPORTED_MODULE_11__.removeSkeleton)(_utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalSearchResult);

                if (!(searchResult === null)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return");

              case 10:
                this.nextPageToken = searchResult.nextPageToken;
                videos = searchResult.items.map(function (item) {
                  return new _videoItem__WEBPACK_IMPORTED_MODULE_9__.VideoItem(item);
                });
                this.updateWholeVideoList(videos);
                (0,_views_renderVideoItems__WEBPACK_IMPORTED_MODULE_12__.renderVideoItems)(videos, _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalSearchResult);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleScroll() {
        return _handleScroll.apply(this, arguments);
      }

      return handleScroll;
    }()
  }, {
    key: "handleClickSearchButton",
    value: function () {
      var _handleClickSearchButton = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee2() {
        var searchKeyWord, searchResult, videos;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalVideoList.replaceChildren();
                searchKeyWord = _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$searchKeyWordInput.value;

                if (!(0,_utils_checkvalue__WEBPACK_IMPORTED_MODULE_10__.isInputValueEmpty)(searchKeyWord)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", true);

              case 4:
                _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalSearchResult.classList.remove('search-result--no-result');
                (0,_views_skeleton__WEBPACK_IMPORTED_MODULE_11__.renderSkeletonItems)(_constants_constant__WEBPACK_IMPORTED_MODULE_8__.MAX_RENDER_VIDEOS_COUNT, _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalVideoList); //const searchResult = await testRequest(searchKeyWord, this.nextPageToken);

                _context2.next = 8;
                return (0,_utils_request__WEBPACK_IMPORTED_MODULE_13__.searchResultRequest)(searchKeyWord, this.nextPageToken);

              case 8:
                searchResult = _context2.sent;
                (0,_views_skeleton__WEBPACK_IMPORTED_MODULE_11__.removeSkeleton)(_utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalVideoList);
                videos = (0,_videoItem__WEBPACK_IMPORTED_MODULE_9__.checkSearchResult)(searchResult);

                if (!(videos.length === 0)) {
                  _context2.next = 14;
                  break;
                }

                _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalSearchResult.classList.add('search-result--no-result');
                return _context2.abrupt("return");

              case 14:
                this.updateWholeVideoList(videos);
                _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalSearchResult.classList.remove('search-result--no-result');
                (0,_views_renderVideoItems__WEBPACK_IMPORTED_MODULE_12__.renderVideoItems)(videos, _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$modalSearchResult);
                this.nextPageToken = searchResult.nextPageToken;

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleClickSearchButton() {
        return _handleClickSearchButton.apply(this, arguments);
      }

      return handleClickSearchButton;
    }()
  }, {
    key: "handleClickSaveButton",
    value: function handleClickSaveButton(e) {
      var _JSON$parse;

      if (!e.target === _utils_dom__WEBPACK_IMPORTED_MODULE_7__.$saveButton) {
        return;
      }

      var $videoItem = e.target.closest('.video-item');
      var videoId = $videoItem.getAttribute('data-video-id');
      var videoList = (_JSON$parse = JSON.parse(localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_8__.SAVED_VIDEO_LIST_KEY))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];

      if (this.isSaveVideo(videoId, videoList)) {
        e.target.setAttribute('hidden', true);
      }
    }
  }, {
    key: "isSaveVideo",
    value: function isSaveVideo(videoId, videoList) {
      if (videoList.length >= _constants_constant__WEBPACK_IMPORTED_MODULE_8__.MAX_SAVABLE_VIDEOS_COUNT) {
        alert("\uBE44\uB514\uC624\uB294 ".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_8__.MAX_SAVABLE_VIDEOS_COUNT, "\uAC1C \uC774\uC0C1 \uC800\uC7A5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"));
        return false;
      }

      this.saveVideo(videoId);
      return true;
    }
  }]);

  return SearchModal;
}(_stateController__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ "./src/js/core/stateController.js":
/*!****************************************!*\
  !*** ./src/js/core/stateController.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StateController)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/constant */ "./src/js/constants/constant.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/request */ "./src/js/utils/request.js");
/* harmony import */ var _videoItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../videoItem */ "./src/js/videoItem.js");






/* eslint-disable max-lines-per-function */




var StateController = /*#__PURE__*/function () {
  function StateController() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StateController);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StateController, [{
    key: "initVideoLists",
    value: function () {
      var _initVideoLists = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.SAVED_VIDEO_LIST_KEY)) {
                  localStorage.setItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.SAVED_VIDEO_LIST_KEY, '[]');
                }

                if (!localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.WATCHED_VIDEO_LIST_KEY)) {
                  localStorage.setItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.WATCHED_VIDEO_LIST_KEY, '[]');
                }

                if (!localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.SAVED_VIDEO_LIST_KEY)) {
                  _context.next = 8;
                  break;
                }

                _context.t0 = _videoItem__WEBPACK_IMPORTED_MODULE_7__.checkSearchResult;
                _context.next = 6;
                return (0,_utils_request__WEBPACK_IMPORTED_MODULE_6__.getSaveVideoList)(JSON.parse(localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.SAVED_VIDEO_LIST_KEY)));

              case 6:
                _context.t1 = _context.sent;
                StateController.savedToWatchVideoList = (0, _context.t0)(_context.t1);

              case 8:
                if (!localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.WATCHED_VIDEO_LIST_KEY)) {
                  _context.next = 14;
                  break;
                }

                _context.t2 = _videoItem__WEBPACK_IMPORTED_MODULE_7__.checkSearchResult;
                _context.next = 12;
                return (0,_utils_request__WEBPACK_IMPORTED_MODULE_6__.getSaveVideoList)(JSON.parse(localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.WATCHED_VIDEO_LIST_KEY)));

              case 12:
                _context.t3 = _context.sent;
                StateController.savedWatchedVideoList = (0, _context.t2)(_context.t3);

              case 14:
                StateController.wholeVideoList = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(StateController.savedToWatchVideoList), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(StateController.savedWatchedVideoList));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function initVideoLists() {
        return _initVideoLists.apply(this, arguments);
      }

      return initVideoLists;
    }()
  }, {
    key: "updateWholeVideoList",
    value: function updateWholeVideoList(videoList) {
      var _StateController$whol;

      (_StateController$whol = StateController.wholeVideoList).push.apply(_StateController$whol, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(videoList));
    }
  }, {
    key: "saveVideo",
    value: function saveVideo(videoId) {
      var oldLocalToWatchVideos = JSON.parse(localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.SAVED_VIDEO_LIST_KEY)) || [];

      if (oldLocalToWatchVideos.includes(videoId)) {
        return;
      }

      var newToWatchVideos = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(oldLocalToWatchVideos), [videoId]);
      localStorage.setItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.SAVED_VIDEO_LIST_KEY, JSON.stringify(newToWatchVideos));
      StateController.savedToWatchVideoList = StateController.wholeVideoList.filter(function (video) {
        return newToWatchVideos.includes(video.id);
      });
    }
  }, {
    key: "watchVideo",
    value: function watchVideo(videoId) {
      var oldLocalToWatchVideos = JSON.parse(localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.SAVED_VIDEO_LIST_KEY)) || [];
      var oldLocalWatchedVideos = JSON.parse(localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.WATCHED_VIDEO_LIST_KEY)) || [];
      var newToWatchVideos = oldLocalToWatchVideos.filter(function (id) {
        return id !== videoId;
      });
      var newWatchedVideos = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(oldLocalWatchedVideos), [videoId]);
      localStorage.setItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.SAVED_VIDEO_LIST_KEY, JSON.stringify(newToWatchVideos));
      localStorage.setItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.WATCHED_VIDEO_LIST_KEY, JSON.stringify(newWatchedVideos));
      StateController.savedToWatchVideoList = StateController.wholeVideoList.filter(function (video) {
        return newToWatchVideos.includes(video.id);
      });
      StateController.savedWatchedVideoList = StateController.wholeVideoList.filter(function (video) {
        return newWatchedVideos.includes(video.id);
      });
    }
  }, {
    key: "deleteVideo",
    value: function deleteVideo(videoId) {
      var oldLocalWatchedVideos = JSON.parse(localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.WATCHED_VIDEO_LIST_KEY)) || [];
      var oldLocalToWatchVideos = JSON.parse(localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.SAVED_VIDEO_LIST_KEY)) || [];
      var newWatchedVideos = oldLocalWatchedVideos.filter(function (id) {
        return id !== videoId;
      });
      var newToWatchVideos = oldLocalToWatchVideos.filter(function (id) {
        return id !== videoId;
      });
      localStorage.setItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.SAVED_VIDEO_LIST_KEY, JSON.stringify(newToWatchVideos));
      localStorage.setItem(_constants_constant__WEBPACK_IMPORTED_MODULE_5__.WATCHED_VIDEO_LIST_KEY, JSON.stringify(newWatchedVideos));
      StateController.savedToWatchVideoList = StateController.wholeVideoList.filter(function (video) {
        return newToWatchVideos.includes(video.id);
      });
      StateController.savedWatchedVideoList = StateController.wholeVideoList.filter(function (video) {
        return newWatchedVideos.includes(video.id);
      });
    }
  }]);

  return StateController;
}();


StateController.prototype.savedToWatchVideoList = [];
StateController.prototype.savedWatchedVideoList = [];
StateController.prototype.wholeVideoList = [];

/***/ }),

/***/ "./src/js/utils/checkvalue.js":
/*!************************************!*\
  !*** ./src/js/utils/checkvalue.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInputValueEmpty": () => (/* binding */ isInputValueEmpty)
/* harmony export */ });
var isInputValueEmpty = function isInputValueEmpty(value) {
  return value === '';
};

/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$dimmer": () => (/* binding */ $dimmer),
/* harmony export */   "$mainSearchResult": () => (/* binding */ $mainSearchResult),
/* harmony export */   "$mainVideoList": () => (/* binding */ $mainVideoList),
/* harmony export */   "$modal": () => (/* binding */ $modal),
/* harmony export */   "$modalSearchResult": () => (/* binding */ $modalSearchResult),
/* harmony export */   "$modalVideoList": () => (/* binding */ $modalVideoList),
/* harmony export */   "$nav": () => (/* binding */ $nav),
/* harmony export */   "$saveButton": () => (/* binding */ $saveButton),
/* harmony export */   "$searchButton": () => (/* binding */ $searchButton),
/* harmony export */   "$searchKeyWordInput": () => (/* binding */ $searchKeyWordInput),
/* harmony export */   "$searchModalButton": () => (/* binding */ $searchModalButton),
/* harmony export */   "$toWatchedVideoMenuButton": () => (/* binding */ $toWatchedVideoMenuButton),
/* harmony export */   "$watchedVideoMenuButton": () => (/* binding */ $watchedVideoMenuButton)
/* harmony export */ });
var $ = function $(selector) {
  var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return parentNode.querySelector(selector);
};
var $nav = $('.nav'); // modal

var $modal = $('.search-modal');
var $modalSearchResult = $('.modal__search-result', $modal);
var $modalVideoList = $('.video-list', $modalSearchResult);
var $searchKeyWordInput = $('#search-input-keyword', $modal);
var $searchButton = $('#search-button', $modal);
var $saveButton = $('#search-button', $modal); // main

var $mainSearchResult = $('.main__search-result');
var $mainVideoList = $('.video-list', $mainSearchResult);
var $searchModalButton = $('#search-modal-button', $nav);
var $watchedVideoMenuButton = $('.nav__watched-button', $nav);
var $toWatchedVideoMenuButton = $('.nav__no-watched-button', $nav);
var $dimmer = $('.dimmer');

/***/ }),

/***/ "./src/js/utils/request.js":
/*!*********************************!*\
  !*** ./src/js/utils/request.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSaveVideoList": () => (/* binding */ getSaveVideoList),
/* harmony export */   "searchResultRequest": () => (/* binding */ searchResultRequest),
/* harmony export */   "testRequest": () => (/* binding */ testRequest),
/* harmony export */   "testSaveRequest": () => (/* binding */ testSaveRequest)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constant */ "./src/js/constants/constant.js");



/* eslint-disable max-lines-per-function */

var searchResultRequest = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(query, nextPageToken) {
    var url, parameters, response, body;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            url = new URL(_constants_constant__WEBPACK_IMPORTED_MODULE_2__.SERVER_URL);
            parameters = new URLSearchParams({
              part: 'snippet',
              type: 'video',
              maxResults: _constants_constant__WEBPACK_IMPORTED_MODULE_2__.MAX_RENDER_VIDEOS_COUNT,
              regionCode: 'kr',
              safeSearch: 'strict',
              pageToken: nextPageToken || '',
              q: query
            });
            url.search = parameters.toString();
            _context.next = 6;
            return fetch(url);

          case 6:
            response = _context.sent;
            console.log(response);
            _context.next = 10;
            return response.json();

          case 10:
            body = _context.sent;

            if (response.ok) {
              _context.next = 13;
              break;
            }

            throw new Error(body.error.message);

          case 13:
            return _context.abrupt("return", body);

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            return _context.abrupt("return", null);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function searchResultRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getSaveVideoList = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(videoIdList) {
    var url, parameters, response, body;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            url = new URL(_constants_constant__WEBPACK_IMPORTED_MODULE_2__.SERVER_URL);
            parameters = new URLSearchParams({
              part: 'snippet',
              type: 'video',
              maxResults: _constants_constant__WEBPACK_IMPORTED_MODULE_2__.MAX_RENDER_VIDEOS_COUNT,
              regionCode: 'kr',
              safeSearch: 'strict',
              id: videoIdList.join(',')
            });
            url.search = parameters.toString();
            _context2.next = 6;
            return fetch(url);

          case 6:
            response = _context2.sent;
            console.log(response);
            _context2.next = 10;
            return response.json();

          case 10:
            body = _context2.sent;

            if (response.ok) {
              _context2.next = 13;
              break;
            }

            throw new Error(body.error.message);

          case 13:
            return _context2.abrupt("return", body);

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            return _context2.abrupt("return", null);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function getSaveVideoList(_x3) {
    return _ref2.apply(this, arguments);
  };
}(); // 실험용 리퀘스트 

var testRequest = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(query, nextPageToken) {
    var url, parameters, response, body;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = new URL('https://www.googleapis.com/youtube/v3/search?');
            parameters = new URLSearchParams({
              part: 'snippet',
              type: 'video',
              maxResults: _constants_constant__WEBPACK_IMPORTED_MODULE_2__.MAX_RENDER_VIDEOS_COUNT,
              regionCode: 'kr',
              pageToken: nextPageToken || '',
              q: query,
              key: 'AIzaSyBont2LnhVYyMI4wd6JFZ6AuiJlVxiVrB4'
            });
            url.search = parameters.toString();
            _context3.next = 5;
            return fetch(url);

          case 5:
            response = _context3.sent;
            console.log(response);
            _context3.next = 9;
            return response.json();

          case 9:
            body = _context3.sent;
            return _context3.abrupt("return", body);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function testRequest(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var testSaveRequest = /*#__PURE__*/function () {
  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(videoIdList) {
    var url, parameters, response, body;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = new URL('https://www.googleapis.com/youtube/v3/videos?');
            parameters = new URLSearchParams({
              part: 'snippet',
              maxResults: _constants_constant__WEBPACK_IMPORTED_MODULE_2__.MAX_RENDER_VIDEOS_COUNT,
              regionCode: 'kr',
              id: videoIdList.join(),
              key: 'AIzaSyBont2LnhVYyMI4wd6JFZ6AuiJlVxiVrB4'
            });
            url.search = parameters.toString();
            _context4.next = 5;
            return fetch(url);

          case 5:
            response = _context4.sent;
            _context4.next = 8;
            return response.json();

          case 8:
            body = _context4.sent;
            return _context4.abrupt("return", body);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function testSaveRequest(_x6) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/js/videoItem.js":
/*!*****************************!*\
  !*** ./src/js/videoItem.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoItem": () => (/* binding */ VideoItem),
/* harmony export */   "checkSearchResult": () => (/* binding */ checkSearchResult)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var VideoItem = /*#__PURE__*/function () {
  function VideoItem(item) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VideoItem);

    var id = item.id,
        _item$snippet = item.snippet,
        publishedAt = _item$snippet.publishedAt,
        title = _item$snippet.title,
        thumbnails = _item$snippet.thumbnails,
        channelTitle = _item$snippet.channelTitle;
    this.id = id.videoId || id;
    this.publishedAt = this.conventPublishedAtFormat(publishedAt);
    this.title = title;
    this.thumbnailUrl = thumbnails.medium.url;
    this.channelTitle = channelTitle;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(VideoItem, [{
    key: "conventPublishedAtFormat",
    value: function conventPublishedAtFormat(publishedAt) {
      var _publishedAt$split$0$ = publishedAt.split('T')[0].trim().split('-'),
          _publishedAt$split$0$2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_publishedAt$split$0$, 3),
          year = _publishedAt$split$0$2[0],
          month = _publishedAt$split$0$2[1],
          day = _publishedAt$split$0$2[2];

      return "".concat(year, "\uB144 ").concat(month, "\uC6D4 ").concat(day, "\uC77C");
    }
  }]);

  return VideoItem;
}();
var checkSearchResult = function checkSearchResult(searchResult) {
  if (searchResult === null) {
    return [];
  }

  var videos = searchResult.items.map(function (item) {
    return new VideoItem(item);
  });
  return videos;
};

/***/ }),

/***/ "./src/js/views/renderVideoItems.js":
/*!******************************************!*\
  !*** ./src/js/views/renderVideoItems.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertButtons": () => (/* binding */ insertButtons),
/* harmony export */   "renderVideoItems": () => (/* binding */ renderVideoItems)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constant */ "./src/js/constants/constant.js");
/* eslint-disable max-lines-per-function */


var insertButtons = function insertButtons(htmlElement, videoId) {
  if (htmlElement.classList.contains('main__search-result')) {
    if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list', htmlElement).classList.contains('watched-video-list')) {
      return _constants_constant__WEBPACK_IMPORTED_MODULE_1__.MAIN_WATCHED_BUTTONS;
    }

    return _constants_constant__WEBPACK_IMPORTED_MODULE_1__.MAIN_TO_WATCH_BUTTONS;
  }

  if (htmlElement.classList.contains('modal__search-result')) {
    if (JSON.parse(localStorage.getItem(_constants_constant__WEBPACK_IMPORTED_MODULE_1__.SAVED_VIDEO_LIST_KEY)).includes(videoId)) {
      return '';
    }

    return _constants_constant__WEBPACK_IMPORTED_MODULE_1__.MODAL_SAVE_BUTTON;
  }

  return null;
};
var renderVideoItems = function renderVideoItems(videos, htmlElement) {
  var videoListTemplate = videos.map(function (video) {
    return "<li class=\"video-item\" data-video-id=\"".concat(video.id, "\">\n      <img\n        src=\"").concat(video.thumbnailUrl, "\"\n        alt=\"video-item-thumbnail\" class=\"video-item__thumbnail\" />\n      <h4 class=\"video-item__title\">").concat(video.title, "</h4>\n      <p class=\"video-item__channel-name\">").concat(video.channelTitle, "</p>\n      <p class=\"video-item__published-date\">").concat(video.publishedAt, "</p>\n      <p class=\"buttons-container\">").concat(insertButtons(htmlElement, video.id), "</p>\n    </li>");
  }).join('\n');
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list', htmlElement).insertAdjacentHTML('beforeend', videoListTemplate);
};

/***/ }),

/***/ "./src/js/views/skeleton.js":
/*!**********************************!*\
  !*** ./src/js/views/skeleton.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeSkeleton": () => (/* binding */ removeSkeleton),
/* harmony export */   "renderSkeletonItems": () => (/* binding */ renderSkeletonItems)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");


/* eslint-disable max-lines-per-function */
var renderSkeletonItems = function renderSkeletonItems(videoCount, htmlElement) {
  var skeletonListHtmlString = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(videoCount).keys()).map(function () {
    return "\n        <div class=\"skeleton\">\n          <div class=\"image\"></div>\n          <p class=\"line\"></p>\n          <p class=\"line\"></p>\n        </div>\n      ";
  }).join('');

  htmlElement.insertAdjacentHTML('beforeend', skeletonListHtmlString);
};
var removeSkeleton = function removeSkeleton(htmlElement) {
  (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(htmlElement.querySelectorAll('.skeleton')).forEach(function ($el) {
    return $el.remove();
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    padding: 64px 0;\n    font-size: 16px;\n}\n\n#app {\n    max-width: 1020px;\n    margin: 0 auto;\n}\n\n.classroom-container__title {\n    text-align: center;\n    font-weight: bold;\n    font-size: 34px;\n    line-height: 36px;\n    margin-bottom: 64px;\n}\n\n.nav {\n    display: flex;\n    justify-content: space-between;\n}\n\n.button {\n    cursor: pointer;\n    border-radius: 4px;\n    border: none;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    letter-spacing: 1.25px;\n}\n\n.nav__button {\n    width: 80px;\n    height: 36px;\n    background: #F5F5F5;\n}\n\n.nav__button:hover {\n    background: #ebebeb;\n}\n\n.nav__no-watched-button {\n    width: 117.17px;\n    height: 36px;\n    left: 0px;\n    top: 0px;\n\n    background: #F5F5F5;\n    border: 1px solid rgba(0, 0, 0, 0.12);\n    box-sizing: border-box;\n    border-radius: 4px 0px 0px 4px;\n}\n\n.nav__watched-button {\n    width: 117.17px;\n    height: 36px;\n    left: 115.83px;\n    top: 0px;\n    \n    border: 1px solid rgba(0, 0, 0, 0.12);\n    box-sizing: border-box;\n    border-radius: 0px 4px 4px 0px;\n}\n\n.nav__button-container {\n    display: flex;\n}\n\n.main__search-result {\n    margin-top: 30px;\n}\n\n.buttons-container {\n    display: flex;\n    justify-content: end;\n}\n\n.buttons-container {\n    display: flex;\n    justify-content: end;\n}\n\n.main-videos-button:first-child {\n    margin-right: 8px;\n}\n\n.main-videos-button {\n    padding: 10px;\n}\n\n.button-active {\n    background: #E0F8F9;\n}\n\n.delete {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,SAAS;IACT,QAAQ;;IAER,mBAAmB;IACnB,qCAAqC;IACrC,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,cAAc;IACd,QAAQ;;IAER,qCAAqC;IACrC,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB","sourcesContent":["body {\n    padding: 64px 0;\n    font-size: 16px;\n}\n\n#app {\n    max-width: 1020px;\n    margin: 0 auto;\n}\n\n.classroom-container__title {\n    text-align: center;\n    font-weight: bold;\n    font-size: 34px;\n    line-height: 36px;\n    margin-bottom: 64px;\n}\n\n.nav {\n    display: flex;\n    justify-content: space-between;\n}\n\n.button {\n    cursor: pointer;\n    border-radius: 4px;\n    border: none;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    letter-spacing: 1.25px;\n}\n\n.nav__button {\n    width: 80px;\n    height: 36px;\n    background: #F5F5F5;\n}\n\n.nav__button:hover {\n    background: #ebebeb;\n}\n\n.nav__no-watched-button {\n    width: 117.17px;\n    height: 36px;\n    left: 0px;\n    top: 0px;\n\n    background: #F5F5F5;\n    border: 1px solid rgba(0, 0, 0, 0.12);\n    box-sizing: border-box;\n    border-radius: 4px 0px 0px 4px;\n}\n\n.nav__watched-button {\n    width: 117.17px;\n    height: 36px;\n    left: 115.83px;\n    top: 0px;\n    \n    border: 1px solid rgba(0, 0, 0, 0.12);\n    box-sizing: border-box;\n    border-radius: 0px 4px 4px 0px;\n}\n\n.nav__button-container {\n    display: flex;\n}\n\n.main__search-result {\n    margin-top: 30px;\n}\n\n.buttons-container {\n    display: flex;\n    justify-content: end;\n}\n\n.buttons-container {\n    display: flex;\n    justify-content: end;\n}\n\n.main-videos-button:first-child {\n    margin-right: 8px;\n}\n\n.main-videos-button {\n    padding: 10px;\n}\n\n.button-active {\n    background: #E0F8F9;\n}\n\n.delete {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nol,ul {\n    list-style: none;\n}\n\nhtml, body {\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n}\n\ninput, button, textarea, select {\n    font: inherit;\n}\n\n.search-result .no-result {\n  display: none;\n}\n\n.search-result--no-result .video-list {\n  display: none;\n}\n\n.search-result--no-result h3 {\n  display: none;\n}\n\n.search-result--no-result .no-result {\n  display: block;\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAIA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,aAAa;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB","sourcesContent":["@import './app.css';\n@import './modal.css';\n@import './skeleton.css';\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nol,ul {\n    list-style: none;\n}\n\nhtml, body {\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n}\n\ninput, button, textarea, select {\n    font: inherit;\n}\n\n.search-result .no-result {\n  display: none;\n}\n\n.search-result--no-result .video-list {\n  display: none;\n}\n\n.search-result--no-result h3 {\n  display: none;\n}\n\n.search-result--no-result .no-result {\n  display: block;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\n.modal-container.hide {\n    display: none;\n}\n\n.dimmer {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n    position: relative;\n    width: 1080px;\n    height: 727px;\n    background: #FFFFFF;\n    border: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 4px;\n    padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n    font-weight: bold;\n    font-size: 34px;\n    line-height: 36px;\n    text-align: center;\n    margin-bottom: 40px;\n}\n\n.search-input {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 40px;\n}\n\n.search-input__keyword {\n    width: 400px;\n    height: 36px;\n    margin-right: 20px;\n    padding: 4px 8px;\n    border: 1px solid #B4B4B4;\n    border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n    color: #8B8B8B;\n    font-size: 16px;\n}\n\n.search-input__search-button {\n    width: 72px;\n    height: 36px;\n    background: #00BCD4;\n    color: #FFFFFF;\n}\n\n.search-result .no-result {\n    text-align: center;\n}\n\n.search-result.search-result--no-result {\n    justify-content: center;\n    align-items: center;\n}\n\n.no-result__image {\n    width: 190px;\n    height: 140px;\n    margin-bottom: 32px;\n}\n\n.no-result__description {\n    font-size: 16px;\n    line-height: 150%;\n    text-align: center;\n    letter-spacing: 0.5px;\n}\n\n.video-list {\n    width: 1040px;\n    height: 493px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 32px 20px;\n    overflow-y: scroll;\n}\n\n@media (min-width: 960px) and (max-width: 1280px) {\n    #app {\n        width: 760px;\n    }\n    .video-list {\n        width: 900px;\n    }\n}\n\n@media (min-width: 600px) and (max-width: 960px)  {\n    #app {\n        width: 500px;\n    }\n    .video-list {\n        width: 600px;\n    }\n}\n\n@media (max-width: 600px) {\n    #app {\n        width: 400px;\n    }\n    .video-list {\n        width: 300px;\n    }\n}\n\n.video-list::-webkit-scrollbar {\n    display: none; \n}\n\n.video-item {\n    position: relative;\n    width: 240px;\n    height: 255px;\n}\n\n.video-item__thumbnail {\n    width: 100%;\n    height: 135px;\n}\n\n.video-item__title {\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 24px;\n    letter-spacing: 0.5px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 4px 0;\n}\n\n.video-item__channel-name {\n    font-size: 16px;\n    line-height: 24px;\n    letter-spacing: 0.5px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n    font-size: 12px;\n    line-height: 24px;\n    letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n    position: absolute;\n    right: 0;\n    width: 80px;\n    height: 36px;\n    background: #F9F9F9;\n    margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n    background: #efefef;\n}\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,MAAM;IACN,OAAO;AACX;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,qCAAqC;IACrC,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":[".modal-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\n.modal-container.hide {\n    display: none;\n}\n\n.dimmer {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n    position: relative;\n    width: 1080px;\n    height: 727px;\n    background: #FFFFFF;\n    border: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 4px;\n    padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n    font-weight: bold;\n    font-size: 34px;\n    line-height: 36px;\n    text-align: center;\n    margin-bottom: 40px;\n}\n\n.search-input {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 40px;\n}\n\n.search-input__keyword {\n    width: 400px;\n    height: 36px;\n    margin-right: 20px;\n    padding: 4px 8px;\n    border: 1px solid #B4B4B4;\n    border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n    color: #8B8B8B;\n    font-size: 16px;\n}\n\n.search-input__search-button {\n    width: 72px;\n    height: 36px;\n    background: #00BCD4;\n    color: #FFFFFF;\n}\n\n.search-result .no-result {\n    text-align: center;\n}\n\n.search-result.search-result--no-result {\n    justify-content: center;\n    align-items: center;\n}\n\n.no-result__image {\n    width: 190px;\n    height: 140px;\n    margin-bottom: 32px;\n}\n\n.no-result__description {\n    font-size: 16px;\n    line-height: 150%;\n    text-align: center;\n    letter-spacing: 0.5px;\n}\n\n.video-list {\n    width: 1040px;\n    height: 493px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 32px 20px;\n    overflow-y: scroll;\n}\n\n@media (min-width: 960px) and (max-width: 1280px) {\n    #app {\n        width: 760px;\n    }\n    .video-list {\n        width: 900px;\n    }\n}\n\n@media (min-width: 600px) and (max-width: 960px)  {\n    #app {\n        width: 500px;\n    }\n    .video-list {\n        width: 600px;\n    }\n}\n\n@media (max-width: 600px) {\n    #app {\n        width: 400px;\n    }\n    .video-list {\n        width: 300px;\n    }\n}\n\n.video-list::-webkit-scrollbar {\n    display: none; \n}\n\n.video-item {\n    position: relative;\n    width: 240px;\n    height: 255px;\n}\n\n.video-item__thumbnail {\n    width: 100%;\n    height: 135px;\n}\n\n.video-item__title {\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 24px;\n    letter-spacing: 0.5px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin: 4px 0;\n}\n\n.video-item__channel-name {\n    font-size: 16px;\n    line-height: 24px;\n    letter-spacing: 0.5px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n    font-size: 12px;\n    line-height: 24px;\n    letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n    position: absolute;\n    right: 0;\n    width: 80px;\n    height: 36px;\n    background: #F9F9F9;\n    margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n    background: #efefef;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".skeleton {\n  width: 236px;\n}\n\n.skeleton .image,\n.skeleton .line {\n  background-image: linear-gradient(\n    90deg,\n    #e0e0e0 0px,\n    #ededed 30px,\n    #e0e0e0 60px\n  );\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .image {\n  height: 150px;\n  margin-bottom: 8px;\n}\n\n.skeleton .line {\n  height: 16px;\n}\n\n.skeleton .line:first-of-type {\n  width: 50%;\n  margin-bottom: 8px;\n}\n\n.skeleton .line:last-of-type {\n  width: 80%;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/skeleton.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;;EAEE;;;;;GAKC;EACD,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF","sourcesContent":[".skeleton {\n  width: 236px;\n}\n\n.skeleton .image,\n.skeleton .line {\n  background-image: linear-gradient(\n    90deg,\n    #e0e0e0 0px,\n    #ededed 30px,\n    #e0e0e0 60px\n  );\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .image {\n  height: 150px;\n  margin-bottom: 8px;\n}\n\n.skeleton .line {\n  height: 16px;\n}\n\n.skeleton .line:first-of-type {\n  width: 50%;\n  margin-bottom: 8px;\n}\n\n.skeleton .line:last-of-type {\n  width: 80%;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _js_core_mainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/core/mainPage */ "./src/js/core/mainPage.js");


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map