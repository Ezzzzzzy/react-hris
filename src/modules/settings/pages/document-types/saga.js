import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import {
  getDocumentTypes as getAllDocumentTypes,
  createDocumentType,
  updateDocumentType,
  deleteDocumentType
} from "./service";
import processSetting from "../../../../utils/processSetting";

function* getDocumentTypes({ filters }) {
  yield processSetting({
    params: filters,
    service: getAllDocumentTypes,
    success: actionTypes.GET_DOCUMENT_TYPES_SUCCESS,
    failed: actionTypes.GET_DOCUMENT_TYPES_FAILED
  });
}

function* createDocument({ body }) {
  yield processSetting({
    params: body,
    service: createDocumentType,
    success: actionTypes.CREATE_DOCUMENT_TYPES_SUCCESS,
    failed: actionTypes.CREATE_DOCUMENT_TYPES_FAILED
  });
}

function* updateDocument({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: updateDocumentType,
    success: actionTypes.UPDATE_DOCUMENT_TYPES_SUCCESS,
    failed: actionTypes.UPDATE_DOCUMENT_TYPES_FAILED
  });
}

function* deleteDocument({ id }) {
  const actions = Object.values({ id }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: deleteDocumentType,
    success: actionTypes.DELETE_DOCUMENT_TYPES_SUCCESS,
    failed: actionTypes.DELETE_DOCUMENT_TYPES_FAILED
  });
}

function* watchDocumentTypeRequests() {
  yield all([
    takeEvery(actionTypes.GET_DOCUMENT_TYPES, getDocumentTypes),
    takeEvery(actionTypes.CREATE_DOCUMENT_TYPES, createDocument),
    takeEvery(actionTypes.UPDATE_DOCUMENT_TYPES, updateDocument),
    takeEvery(actionTypes.DELETE_DOCUMENT_TYPES, deleteDocument)
  ]);
}

export default [watchDocumentTypeRequests()];
