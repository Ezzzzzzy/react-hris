import { all, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import {
  getMembers as getMembersService,
  createMember as createMemberService,
  updateMember as updateMemberService,
  getMemberProfile as getProfile,
  getMemberWorkHistory,
  getMemberDocuments,
  deployMember as deployService,
  endTenure as endTenureService,
  getDocumentTypes as getDocumentTypeService,
  uploadDocument as uploadDocumentService,
  updateStatus as updateStatusService,
  bulkUploadMember as bulkUploadService,
  createDisciplinary as createDisciplinaryService,
  updateDisciplinary as updateDisciplinaryService
} from "./service";
import processAction from "../../utils/processAction";
import processSetting from "../../utils/processSetting";

function* getMemberProfile({ id }) {
  yield processAction({
    params: id,
    service: getProfile,
    success: actionTypes.GET_MEMBER_PROFILE_SUCCESS,
    failed: actionTypes.GET_MEMBER_PROFILE_FAILED
  });
}

function* getDocuments({ id }) {
  yield processAction({
    params: id,
    service: getMemberDocuments,
    success: actionTypes.GET_MEMBER_DOCUMENTS_SUCCESS,
    failed: actionTypes.GET_MEMBER_DOCUMENTS_FAILED
  });
}

function* getWorkHistory({ id }) {
  yield processAction({
    params: id,
    service: getMemberWorkHistory,
    success: actionTypes.GET_MEMBER_WORK_HISTORY_SUCCESS,
    failed: actionTypes.GET_MEMBER_WORK_HISTORY_FAILED
  });
}

function* getMembers({ filters }) {
  yield processAction({
    params: filters,
    service: getMembersService,
    success: actionTypes.GET_MEMBERS_SUCCESS,
    failed: actionTypes.GET_MEMBERS_FAILED
  });
}

function* createMember({ body }) {
  yield processAction({
    params: body,
    service: createMemberService,
    success: actionTypes.CREATE_MEMBERS_SUCCESS,
    failed: actionTypes.CREATE_MEMBERS_FAILED
  });
}

function* updateMember({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: updateMemberService,
    success: actionTypes.UPDATE_MEMBERS_SUCCESS,
    failed: actionTypes.UPDATE_MEMBERS_FAILED
  });

  yield put({ type: actionTypes.GET_MEMBER_PROFILE, id });
}

function* deployMember({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: deployService,
    success: actionTypes.DEPLOY_MEMBERS_SUCCESS,
    failed: actionTypes.DEPLOY_MEMBERS_FAILED
  });

  yield put({ type: actionTypes.GET_MEMBER_WORK_HISTORY, id });
}

function* endWork({ id, body, member_id }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: endTenureService,
    success: actionTypes.END_WORK_SUCCESS,
    failed: actionTypes.END_WORK_FAILED
  });

  yield put({ type: actionTypes.GET_MEMBER_WORK_HISTORY, id: member_id });
}

function* updateStatus({ id, body, member_id }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: updateStatusService,
    success: actionTypes.UPDATE_MEMBER_STATUS_SUCCESS,
    failed: actionTypes.END_WORK_FAILED
  });

  yield put({ type: actionTypes.GET_MEMBER_WORK_HISTORY, id: member_id });
}

function* getDocumentTypes() {
  yield processSetting({
    service: getDocumentTypeService,
    success: actionTypes.GET_DOCUMENT_TYPE_SUCCESS,
    failed: actionTypes.GET_DOCUMENT_TYPE_FAILED
  });
}

function* uploadDocument({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: actions,
    service: uploadDocumentService,
    success: actionTypes.UPLOAD_MEMBER_DOCUMENT_SUCCESS,
    failed: actionTypes.UPLOAD_MEMBER_DOCUMENT_FAILED
  });

  yield put({ type: actionTypes.GET_MEMBER_DOCUMENTS, id: actions[0] });
}

function* bulkUploadMember({ body }) {
  const actions = Object.values({ body }).map(item => item);

  yield processSetting({
    params: actions,
    service: bulkUploadService,
    success: actionTypes.UPLOAD_BULK_MEMBERS_SUCCESS,
    failed: actionTypes.UPLOAD_BULK_MEMBERS_FAILED
  });

  yield put({ type: actionTypes.GET_MEMBERS });
}

function* createDisciplinary({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: createDisciplinaryService,
    success: actionTypes.CREATE_DISCIPLINARY_SUCCESS,
    failed: actionTypes.CREATE_DISCIPLINARY_FAILED
  });
}

function* updateDisciplinary({ id, da_id, body }) {
  const actions = Object.values({ id, da_id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: updateDisciplinaryService,
    success: actionTypes.UPDATE_DISCIPLINARY_SUCCESS,
    failed: actionTypes.UPDATE_DISCIPLINARY_FAILED
  })
}

function* watchMemberRequests() {
  yield all([takeEvery(actionTypes.GET_MEMBERS, getMembers)]);
  yield all([takeEvery(actionTypes.CREATE_MEMBERS, createMember)]);
  yield all([takeEvery(actionTypes.UPDATE_MEMBERS, updateMember)]);
  yield all([takeEvery(actionTypes.GET_MEMBER_PROFILE, getMemberProfile)]);
  yield all([takeEvery(actionTypes.GET_MEMBER_WORK_HISTORY, getWorkHistory)]);
  yield all([takeEvery(actionTypes.GET_MEMBER_DOCUMENTS, getDocuments)]);
  yield all([takeEvery(actionTypes.DEPLOY_MEMBERS, deployMember)]);
  yield all([takeEvery(actionTypes.END_WORK, endWork)]);
  yield all([takeEvery(actionTypes.GET_DOCUMENT_TYPE, getDocumentTypes)]);
  yield all([takeEvery(actionTypes.UPLOAD_MEMBER_DOCUMENT, uploadDocument)]);
  yield all([takeEvery(actionTypes.UPDATE_MEMBER_STATUS, updateStatus)]);
  yield all([takeEvery(actionTypes.UPLOAD_BULK_MEMBERS, bulkUploadMember)]);
  yield all([takeEvery(actionTypes.CREATE_DISCIPLINARY, createDisciplinary)]);
  yield all([takeEvery(actionTypes.UPDATE_DISCIPLINARY, updateDisciplinary)])
}

export default [watchMemberRequests()];
