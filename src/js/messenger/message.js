const MESSAGE = Object.freeze({
  KEYWORD_SUBMITTED: Symbol("KEYWORD_SUBMITTED"),
  DATA_LOADED: Symbol("DATA_LOADED"),
  HIDE_IF_VIDEO_IS_SAVED: Symbol("HIDE_IF_VIDEO_IS_SAVED"),
  SAVE_VIDEO_BUTTON_CLICKED: Symbol("SAVE_VIDEO_BUTTON_CLICKED"),
  SAVE_VIDEO: Symbol("SAVE_VIDEO"),
  CANCEL_VIDEO_BUTTON_CLICKED: Symbol("CANCEL_VIDEO_BUTTON_CLICKED"),
  SAVED_VIDEO_DELETED: Symbol("SAVED_VIDEO_DELETED"),
  MOVE_TO_HISTORY_ICON_CLICKED: Symbol("MOVE_TO_HISTORY_ICON_CLICKED"),
  MOVE_TO_WATCH_LATER_ICON_CLICKED: Symbol("MOVE_TO_WATCH_LATER_ICON_CLICKED"),
});

export default MESSAGE;