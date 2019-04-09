import { call, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "../reducers/documentTypes";
import {
  getDocumentTypes as getAllDocumentTypes,
  createDocumentType,
  updateDocumentType
} from "../service";
import { message } from "antd";

function* getDocumentType(action) {
  const { filters } = action;

  try {
    const documentTypes = yield call(getAllDocumentTypes, filters);
    yield put({
      type: actionTypes.GET_DOCUMENT_TYPES_SUCCESS,
      documentTypes
    });
    message.success("Successfully get all document types");
  } catch (err) {
    const error = err.message || err;
    yield put({ type: actionTypes.GET_DOCUMENT_TYPES_FAILED, error });
    message.error("Failed to get document types");
  }
}

function* createType(action) {
  const { documentType } = action;

  try {
    const newType = yield call(createDocumentType, documentType);
    yield put({
      type: actionTypes.CREATE_DOCUMENT_TYPES_SUCCESS,
      newType
    });
  } catch (err) {
    const error = err.message || err;
    yield put({ type: actionTypes.CREATE_DOCUMENT_TYPES_FAILED, error });
  }
}

function* updateType(action) {
  try {
    const { documentTypeId, documentType } = action;

    const updatedType = yield call(
      updateDocumentType,
      documentTypeId,
      documentType
    );

    yield put({
      type: actionTypes.UPDATE_DOCUMENT_TYPES_SUCCESS,
      updatedType
    });
    message.success("Successfully updated type");
  } catch (err) {
    const error = err.message || err;
    yield put({ type: actionTypes.UPDATE_DOCUMENT_TYPES_FAILED, error });

    message.error("Failed to update type");
  }
}

function* watchGetDocumentTypesRequest() {
  yield takeEvery(actionTypes.GET_DOCUMENT_TYPES, getDocumentType);
}

function* watchCreateDocumentTypeRequest() {
  yield takeEvery(actionTypes.CREATE_DOCUMENT_TYPES, createType);
}

function* watchUpdateDocumentTypeRequest() {
  yield takeEvery(actionTypes.UPDATE_DOCUMENT_TYPES, updateType);
}

export default [
  watchGetDocumentTypesRequest(),
  watchCreateDocumentTypeRequest(),
  watchUpdateDocumentTypeRequest()
];
