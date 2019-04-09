import { all, call, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import {
  getReports as getReportsService,
  generateReport as generateReportService,
  getTemplates as getTemplatesService,
  generateFromTemplate as generateFromTemplateService
} from "./service";
import processSetting from "../../utils/processSetting"

function* getReports(action) {
  const { params } = action;
  console.log('params:', params)
  try {
    const payload = yield call(getReportsService, params);

    yield put({
      type: actionTypes.GET_REPORTS_SUCCESS,
      payload
    });
  } catch (err) {
    yield put({
      type: actionTypes.GET_REPORTS_FAILED,
      err
    });
  }
}

function* generateReports({ body }) {
  yield processSetting({
    params: body,
    service: generateReportService,
    success: actionTypes.CREATE_REPORT_SUCCESS,
    failed: actionTypes.CREATE_REPORT_FAILED
  });
}

function* generateFromTemplate({ id }) {
  yield processSetting({
    params: id,
    service: generateFromTemplateService,
    success: actionTypes.GENERATE_TEMPLATE_SUCCESS,
    failed: actionTypes.GENERATE_TEMPLATE_FAILED
  });
}

function* getTemplates() {
  yield processSetting({
    service: getTemplatesService,
    success: actionTypes.GET_TEMPLATES_SUCCESS,
    failed: actionTypes.GET_TEMPLATES_FAILED
  })
}

function* watchReportsRequest() {
  yield all([
    takeEvery(actionTypes.GET_REPORTS, getReports),
    takeEvery(actionTypes.CREATE_REPORT, generateReports),
    takeEvery(actionTypes.GET_TEMPLATES, getTemplates),
    takeEvery(actionTypes.GENERATE_TEMPLATE, generateFromTemplate)
  ]);
}

export default [watchReportsRequest()];
