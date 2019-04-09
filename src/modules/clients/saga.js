import { all, call, put, takeEvery } from "redux-saga/effects";
import { actionTypes as clientActionTypes } from "./reducer";
import {
  getAllClients as getAllService,
  getClients as getClientsService,
  createClient as createClientService,
  updateClient as updateClientService,
  getSingleClient as getSingleClientService,
  getClientMembers as getClientMembersService,
  updateClientMemberEnd as updateClientMemberEndService,
  updateClientMemberStatus as updateClientMemberStatusService,
  updateClientMemberReassign as updateClientMemberReassignService,
  getClientBusinessUnits as getClientBusinessUnitsService,
  getAllClientBusinessUnits as getAllClientBusinessUnitsService,
  createBusinessUnit as createBusinessUnitService,
  updateBusinessUnit as updateBusinessUnitService,
  getClientBrands as getClientBrandsService,
  getAllClientBrands as getClientBrandsAllRequest,
  createBrand as createBrandService,
  updateBrand as updateBrandService,
  getClientBranches as getClientBranchesService,
  createBranch as createBranchService,
  updateBranch as updateBranchService,
  getClientSingleBrand as getClientSingleBrandService,
  getClientBrandMembers as getClientBrandMembersService
} from "./service";
import { whoami as getProfileRequest } from "../profile/service";
import processAction from "../../utils/processAction";

function* getAllClients() {
  yield processAction({
    service: getAllService,
    success: clientActionTypes.GET_ALL_CLIENTS_SUCCESS,
    failed: clientActionTypes.GET_ALL_CLIENTS_FAILED
  });
}

function* getClients({ params }) {
  try {
    const [payload] = yield all([call(getClientsService, params)]);
    yield put({
      type: clientActionTypes.GET_CLIENTS_SUCCESS,
      payload
    });
  } catch (error) {
    yield put({
      type: clientActionTypes.GET_CLIENTS_FAILED,
      error
    });
  }
}

function* postClient(action) {
  const { client } = action;
  try {
    const payload = yield call(createClientService, client);
    yield put({
      type: clientActionTypes.CREATE_CLIENT_SUCCESS,
      payload
    });

    const action = yield call(getProfileRequest);
    yield put({ type: "GET_PROFILE_REQUEST", action });
  } catch (error) {
    yield put({
      type: clientActionTypes.CREATE_CLIENT_FAILED,
      error
    });
  }
}

function* updateClient({ id, body }) {
  try {
    yield call(updateClientService, id, body);
    yield put({ type: clientActionTypes.UPDATE_CLIENT_SUCCESS });
  } catch (error) {
    yield put({
      type: clientActionTypes.UPDATE_CLIENT_FAILED,
      error
    });
  }
}

function* getSingleClient(action) {
  const { id } = action;
  try {
    const payload_details = yield call(getSingleClientService, id);
    console.log("single client: ", payload_details);
    yield put({
      type: clientActionTypes.GET_SINGLE_CLIENT_SUCCESS,
      payload_details
    });
  } catch (error) {
    yield put({ type: clientActionTypes.GET_SINGLE_CLIENT_ERROR, error });
  }
}

function* getClientMembers({ id, params }) {
  try {
    const payload = yield call(getClientMembersService, id, params);
    yield put({ type: clientActionTypes.GET_CLIENT_MEMBERS_SUCCESS, payload });

    const payload_details = yield call(getSingleClientService, id);
    yield put({
      type: clientActionTypes.GET_SINGLE_CLIENT_SUCCESS,
      payload_details
    });
  } catch (error) {
    yield put({ type: clientActionTypes.GET_CLIENT_MEMBERS_FAILED, error });
  }
}

function* updateClientMemberEnd({ id, body }) {
  try {
    yield call(updateClientMemberEndService, id, body);
    yield put({ type: clientActionTypes.MEMBER_END_SUCCESS });
  } catch (error) {
    yield put({ type: clientActionTypes.MEMBER_END_FAILED, error });
  }
}

function* updateClientMemberStatus({ id, body }) {
  try {
    yield call(updateClientMemberStatusService, id, body);
    yield put({ type: clientActionTypes.MEMBER_UPDATE_SUCCESS });
  } catch (error) {
    yield put({ type: clientActionTypes.MEMBER_UPDATE_FAILED, error });
  }
}

function* updateClientMemberReassign({ id, body }) {
  try {
    yield call(updateClientMemberReassignService, id, body);
    yield put({ type: clientActionTypes.MEMBER_REASSIGN_SUCCESS });
  } catch (error) {
    yield put({ type: clientActionTypes.MEMBER_REASSIGN_FAILED, error });
  }
}

function* getClientBusinessUnits({ id, params }) {
  try {
    const payload = yield call(getClientBusinessUnitsService, id, params);
    yield put({ type: clientActionTypes.GET_CLIENT_BU_SUCCESS, payload });
    const payload_details = yield call(getSingleClientService, id);
    yield put({
      type: clientActionTypes.GET_SINGLE_CLIENT_SUCCESS,
      payload_details
    });
  } catch (error) {
    yield put({ type: clientActionTypes.GET_CLIENT_BU_FAILED, error });
  }
}

function* getAllClientBusinessUnits({ id }) {
  try {
    const payload = yield call(getAllClientBusinessUnitsService, id);
    yield put({ type: clientActionTypes.GET_ALL_BU_SUCCESS, payload });
  } catch (error) {
    yield put({ type: clientActionTypes.GET_ALL_BU_FAILED, error });
  }
}

function* postBusinessUnit({ id, business_unit }) {
  try {
    const payload = yield call(createBusinessUnitService, id, business_unit);
    yield put({
      type: clientActionTypes.CREATE_CLIENT_BU_SUCCESS,
      payload
    });
  } catch (error) {
    yield put({
      type: clientActionTypes.CREATE_CLIENT_BU_FAILED,
      error
    });
  }
}

function* updateBusinessUnit({ id, bu_id, body }) {
  try {
    yield call(updateBusinessUnitService, id, bu_id, body);
    yield put({ type: clientActionTypes.UPDATE_CLIENT_BU_SUCCESS });
  } catch (error) {
    yield put({
      type: clientActionTypes.UPDATE_CLIENT_BU_FAILED,
      error
    });
  }
}

function* getAllClientBrands({ id }) {
  yield processAction({
    params: id,
    service: getClientBrandsAllRequest,
    success: clientActionTypes.GET_CLIENT_BRAND_LIST_SUCCESS,
    failed: clientActionTypes.GET_CLIENT_BRAND_LIST_FAILED
  });
}

function* getClientBrands({ id, params }) {
  try {
    const payload = yield call(getClientBrandsService, id, params);
    yield put({ type: clientActionTypes.GET_CLIENT_BRANDS_SUCCESS, payload });
    const payload_details = yield call(getSingleClientService, id);
    yield put({
      type: clientActionTypes.GET_SINGLE_CLIENT_SUCCESS,
      payload_details
    });
  } catch (error) {
    yield put({ type: clientActionTypes.GET_CLIENT_BRANDS_FAILED, error });
  }
}

function* postBrand({ id, brand }) {
  try {
    const payload = yield call(createBrandService, id, brand);
    yield put({
      type: clientActionTypes.CREATE_CLIENT_BRAND_SUCCESS,
      payload
    });
  } catch (error) {
    yield put({
      type: clientActionTypes.CREATE_CLIENT_BRAND_FAILED,
      error
    });
  }
}

function* updateBrand({ id, brand_id, body }) {
  try {
    yield call(updateBrandService, id, brand_id, body);
    yield put({ type: clientActionTypes.UPDATE_CLIENT_BRAND_SUCCESS });
  } catch (error) {
    yield put({
      type: clientActionTypes.UPDATE_CLIENT_BRAND_FAILED,
      error
    });
  }
}

function* getClientBranches({ id, params }) {
  try {
    const payload = yield call(getClientBranchesService, id, params);
    yield put({ type: clientActionTypes.GET_CLIENT_BRANCHES_SUCCESS, payload });
    const payload_details = yield call(getSingleClientService, id);
    yield put({
      type: clientActionTypes.GET_SINGLE_CLIENT_SUCCESS,
      payload_details
    });
  } catch (error) {
    yield put({ type: clientActionTypes.GET_CLIENT_BRANCHES_FAILED, error });
  }
}

function* postBranch({ id, branch }) {
  try {
    const payload = yield call(createBranchService, id, branch);
    yield put({
      type: clientActionTypes.CREATE_CLIENT_BRANCH_SUCCESS,
      payload
    });
  } catch (error) {
    yield put({
      type: clientActionTypes.CREATE_CLIENT_BRANCH_FAILED,
      error
    });
  }
}

function* updateBranch({ id, branch_id, body }) {
  try {
    yield call(updateBranchService, id, branch_id, body);
    yield put({ type: clientActionTypes.UPDATE_CLIENT_BRANCH_SUCCESS });
  } catch (error) {
    yield put({
      type: clientActionTypes.UPDATE_CLIENT_BRANCH_FAILED,
      error
    });
  }
}

function* getClientSingleBrand({ client_id, brand_id }) {
  try {
    const payload = yield call(
      getClientSingleBrandService,
      client_id,
      brand_id
    );
    yield put({
      type: clientActionTypes.GET_CLIENT_SINGLE_BRAND_SUCCESS,
      payload
    });
    const payload_details = yield call(getSingleClientService, client_id);
    yield put({
      type: clientActionTypes.GET_SINGLE_CLIENT_SUCCESS,
      payload_details
    });
  } catch (error) {
    yield put({
      type: clientActionTypes.GET_CLIENT_SINGLE_BRAND_FAILED,
      error
    });
  }
}

function* getClientSingleBrandMembers({ client_id, brand_id, params }) {
  try {
    const payload = yield call(
      getClientBrandMembersService,
      client_id,
      brand_id,
      params
    );
    yield put({
      type: clientActionTypes.GET_CLIENT_SINGLE_BRAND_MEMBERS_SUCCESS,
      payload
    });
    const payload_details = yield call(
      getClientSingleBrandService,
      client_id,
      brand_id
    );
    yield put({
      type: clientActionTypes.GET_CLIENT_SINGLE_BRAND_SUCCESS,
      payload_details
    });
  } catch (error) {
    yield put({
      type: clientActionTypes.GET_CLIENT_SINGLE_BRAND_MEMBERS_FAILED,
      error
    });
  }
}

function* watchGetAllClient() {
  yield all([takeEvery(clientActionTypes.GET_ALL_CLIENTS, getAllClients)]);
}

function* watchGetClient() {
  yield all([takeEvery(clientActionTypes.GET_CLIENTS, getClients)]);
}

function* watchCreateClient() {
  yield all([takeEvery(clientActionTypes.CREATE_CLIENT, postClient)]);
}

function* watchUpdateClient() {
  yield all([takeEvery(clientActionTypes.UPDATE_CLIENT, updateClient)]);
}

function* watchGetSingleClient() {
  yield all([takeEvery(clientActionTypes.GET_SINGLE_CLIENT, getSingleClient)]);
}

function* watchGetClientMembers() {
  yield all([
    takeEvery(clientActionTypes.GET_CLIENT_MEMBERS, getClientMembers)
  ]);
}

function* watchUpdateClientMemberEnd() {
  yield all([takeEvery(clientActionTypes.MEMBER_END, updateClientMemberEnd)]);
}

function* watchUpdateClientMemberStatus() {
  yield all([
    takeEvery(clientActionTypes.MEMBER_UPDATE, updateClientMemberStatus)
  ]);
}

function* watchUpdateClientMemberReassign() {
  yield all([
    takeEvery(clientActionTypes.MEMBER_REASSIGN, updateClientMemberReassign)
  ]);
}

function* watchGetClientBusinessUnits() {
  yield all([
    takeEvery(clientActionTypes.GET_CLIENT_BU, getClientBusinessUnits)
  ]);
}

function* watchGetAllClientBusinessUnits() {
  yield all([
    takeEvery(clientActionTypes.GET_ALL_BU, getAllClientBusinessUnits)
  ]);
}

function* watchCreateBusinessUnit() {
  yield all([takeEvery(clientActionTypes.CREATE_CLIENT_BU, postBusinessUnit)]);
}

function* watchUpdateBusinessUnit() {
  yield all([
    takeEvery(clientActionTypes.UPDATE_CLIENT_BU, updateBusinessUnit)
  ]);
}

function* watchGetClientBrands() {
  yield all([takeEvery(clientActionTypes.GET_CLIENT_BRANDS, getClientBrands)]);
}

function* watchCreateBrand() {
  yield all([takeEvery(clientActionTypes.CREATE_CLIENT_BRAND, postBrand)]);
}

function* watchUpdateBrand() {
  yield all([takeEvery(clientActionTypes.UPDATE_CLIENT_BRAND, updateBrand)]);
}

function* watchGetClientBranches() {
  yield all([
    takeEvery(clientActionTypes.GET_CLIENT_BRANCHES, getClientBranches)
  ]);
}

function* watchCreateBranch() {
  yield all([takeEvery(clientActionTypes.CREATE_CLIENT_BRANCH, postBranch)]);
}

function* watchUpdateBranch() {
  yield all([takeEvery(clientActionTypes.UPDATE_CLIENT_BRANCH, updateBranch)]);
}

function* watchGetClientSingleBrand() {
  yield all([
    takeEvery(clientActionTypes.GET_CLIENT_SINGLE_BRAND, getClientSingleBrand)
  ]);
}

function* watchGetClientSingleBrandMembers() {
  yield all([
    takeEvery(
      clientActionTypes.GET_CLIENT_SINGLE_BRAND_MEMBERS,
      getClientSingleBrandMembers
    )
  ]);
}

function* watchGetAllClientBrands() {
  yield all([
    takeEvery(clientActionTypes.GET_CLIENT_BRAND_LIST, getAllClientBrands)
  ]);
}
export default [
  watchGetAllClient(),
  watchGetClient(),
  watchCreateClient(),
  watchUpdateClient(),
  watchGetSingleClient(),
  watchGetClientMembers(),
  watchUpdateClientMemberEnd(),
  watchUpdateClientMemberStatus(),
  watchUpdateClientMemberReassign(),
  watchGetClientBusinessUnits(),
  watchGetAllClientBusinessUnits(),
  watchCreateBusinessUnit(),
  watchUpdateBusinessUnit(),
  watchGetClientBrands(),
  watchCreateBrand(),
  watchUpdateBrand(),
  watchGetClientBranches(),
  watchCreateBranch(),
  watchUpdateBranch(),
  watchGetClientSingleBrand(),
  watchGetClientSingleBrandMembers(),
  watchGetAllClientBrands()
];
