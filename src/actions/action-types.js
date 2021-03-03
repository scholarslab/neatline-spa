// All of the actions live here...
// if this gets unweildy, it can be split into multiple files
export const PREVIEW_BASELAYER = 'PREVIEW_BASELAYER';
export const RECORD_PREVIEWED = 'RECORD_PREVIEWED';
export const RECORD_UNPREVIEWED = 'RECORD_UNPREVIEWED';

export const RECORD_CACHE_CLEAR = 'RECORD_CACHE_CLEAR';
export const RECORD_CACHE_CLEAR_UNSAVED = 'RECORD_CACHE_CLEAR_UNSAVED';
export const EXHIBIT_CACHE_SAVE = 'EXHIBIT_CACHE_SAVE';
export const RECORD_CACHE_UPDATE = 'RECORD_CACHE_UPDATE';
export const RECORD_CACHE_REMOVE = 'RECORD_CACHE_REMOVE';
export const RECORD_CACHE_UPDATE_AND_SAVE = 'RECORD_CACHE_UPDATE_AND_SAVE';
export const SET_AVAILABLE_TILELAYERS = 'SET_AVAILABLE_TILELAYERS';
export const HAS_UNSAVED_CHANGES = 'HAS_UNSAVED_CHANGES';

// Exhibits
export const EXHIBIT_CACHE_UPDATE = 'EXHIBIT_CACHE_UPDATE';
export const EXHIBIT_LOADING = 'exhibitShow/EXHIBIT_LOADING';
export const EXHIBIT_ERRORED = 'exhibitShow/EXHIBIT_ERRORED';
export const EXHIBIT_FETCH = 'EXHIBIT_FETCH';
export const EXHIBIT_FETCH_RESPONSE_RECEIVED = 'EXHIBIT_FETCH_RESPONSE_RECEIVED';
export const EXHIBIT_FETCH_SUCCESS = 'exhibitShow/EXHIBIT_FETCH_SUCCESS';
export const EXHIBIT_RESET = 'exhibitShow/EXHIBIT_RESET';
export const EXHIBIT_LOADED = 'exhibitShow/EXHIBIT_LOADED';
export const EXHIBIT_NOT_FOUND = 'exhibitShow/EXHIBIT_NOT_FOUND';

export const RECORD_SELECTED = 'exhibitShow/RECORD_SELECTED';
export const RECORD_DESELECTED = 'exhibitShow/RECORD_DESELECTED';

export const EDITOR_NEW_RECORD = 'exhibitShow/EDITOR_NEW_RECORD';
export const EDITOR_CLOSE_NEW_RECORD = 'exhibitShow/EDITOR_CLOSE_NEW_RECORD';
export const TAB_INDEX_SET = 'exhibitShow/TAB_INDEX';
export const RECORD_ADDED = 'exhibitShow/RECORD_ADDED';
export const RECORD_REPLACED = 'exhibitShow/RECORD_REPLACED';
export const RECORD_REMOVED = 'exhibitShow/RECORD_REMOVED';
export const RECORD_COVERAGE_SET = 'exhibitShow/RECORD_COVERAGE_SET';

// Records
export const LEAFLET_IS_SAVING = 'LEAFLET_IS_SAVING';
export const LEAFLET_IS_EDITING = 'LEAFLET_IS_EDITING';
export const RECORD_ERROR = 'RECORD_ERROR';
export const NEW_RECORD_RESET = 'recordCreate/NEW_RECORD_RESET';
export const RECORD_CACHE_REMOVE_RECORD = 'RECORD_CACHE_REMOVE_RECORD';

export const RECORD_CREATE = 'recordCreate/RECORD_CREATE'
export const CREATE_RECORD_RESPONSE_RECEIVED = 'CREATE_RECORD_RESPONSE_RECEIVED';

export const RECORD_DELETE = 'recordDelete/RECORD_DELETE';
export const DELETE_RECORD_RESPONSE_RECEIVED = 'DELETE_RECORD_RESPONSE_RECEIVED';

export const RECORD_UPDATE = 'recordUpdate/RECORD_UPDATE';
export const UPDATE_RECORD_RESPONSE_RECEIVED = 'UPDATE_RECORD_RESPONSE_RECEIVED';

export const EXHIBIT_UPDATE = 'EXHIBIT_UPDATE';
export const EXHIBIT_UPDATE_RESPONSE_RECEIVED = 'EXHIBIT_UPDATE_RESPONSE_RECEIVED';
export const EXHIBIT_UPDATED = 'exhibitUpdate/EXHIBIT_CREATED';
export const EXHIBIT_PATCH_SUCCESS = 'exhibitUpdate/EXHIBIT_POST_SUCCESS';
export const EXHIBIT_PATCH_ERRORED = 'exhibitUpdate/EXHIBIT_POST_ERRORED';

// Exhibits
export const EXHIBIT_CREATED = 'exhibitCreate/EXHIBIT_CREATED';
export const EXHIBIT_POST_SUCCESS = 'exhibitCreate/EXHIBIT_POST_SUCCESS';
export const EXHIBIT_POST_ERRORED = 'exhibitCreate/EXHIBIT_POST_ERRORED';
export const NEW_EXHIBIT_RESET = 'exhibitCreate/NEW_EXHIBIT_RESET';

export const EXHIBIT_DELETED = 'exhibitDelete/EXHIBIT_DELETED';
export const EXHIBIT_DELETE_SUCCESS = 'exhibitDelete/EXHIBIT_DELETE_SUCCESS';
export const EXHIBIT_DELETE_ERRORED = 'exhibitDelete/EXHIBIT_DELETE_ERRORED';

export const EXHIBITS_LOADING = 'exhibits/EXHIBITS_LOADING';
export const EXHIBITS_ERRORED = 'exhibits/EXHIBITS_ERRORED';
export const EXHIBITS_FETCH_SUCCESS = 'exhibits/EXHIBITS_FETCH_SUCCESS';


export const RECORD_CACHE_REMOVE_BY_ID = 'RECORD_CACHE_REMOVE_BY_ID';
export const RECORDS_LOADING = 'RECORDS_LOADING';
export const RECORD_FETCH_BY_SLUG = 'RECORD_FETCH_BY_SLUG';
export const RECORDS_FETCH = 'RECORDS_FETCH';
export const RECORDS_FETCH_RESPONSE_RECEIVED = 'RECORDS_FETCH_RESPONSE_RECEIVED';
export const RECORDS_FETCH_SUCCESS = 'RECORDS_FETCH_SUCCESS';
export const RECORDS_FILTER = 'RECORDS_FILTER';

export const EVENT_REFRESH_MAP = 'EVENT_REFRESH_MAP';
export const EVENT_REFRESH_MAP_GEOMETRY = 'EVENT_REFRESH_MAP_GEOMETRY';

export const SHOW_RECORDS = 'SHOW_RECORDS';
export const RECORD_EDITOR_TYPE = 'RECORD_EDITOR_TYPE';
export const SHOW_EXHIBIT_SETTINGS = 'SHOW_EXHIBIT_SETTINGS';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERRORED = 'USER_LOGIN_ERRORED';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_ERRORED = 'USER_LOGOUT_ERRORED';

export const MAP_FETCH = 'MAP_FETCH';
export const MAP_FETCH_SUCCESS = 'MAP_FETCH_SUCCESS';
export const MAP_FETCH_ERROR = 'MAP_FETCH_ERROR';

export const MAP_RECORDS_FETCH = 'MAP_RECORDS_FETCH';
export const MAP_RECORDS_FETCH_SUCCESS = 'MAP_RECORDS_FETCH_SUCCESS';
export const MAP_RECORDS_FETCH_ERROR = 'MAP_RECORDS_FETCH_ERROR';