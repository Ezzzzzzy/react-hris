export const actionTypes = {
  REMOVE_TOAST: "REMOVE_TOAST",

  GET_REPORTS: "GET_REPORTS",
  GET_REPORTS_SUCCESS: "GET_REPORTS_SUCCESS",
  GET_REPORTS_FAILED: "GET_REPORTS_FAILED",

  GET_TEMPLATES: "GET_TEMPLATES",
  GET_TEMPLATES_SUCCESS: "GET_TEMPLATES_SUCCESS",
  GET_TEMPLATES_FAILED: "GET_TEMPLATES_FAILED",

  CREATE_REPORT: "CREATE_REPORT",
  CREATE_REPORT_SUCCESS: "CREATE_REPORT_SUCCESS",
  CREATE_REPORT_FAILED: "CREATE_REPORT_FAILED",

  GENERATE_TEMPLATE: "GENERATE_TEMPLATE",
  GENERATE_TEMPLATE_SUCCESS: "GENERATE_TEMPLATE_SUCCESS",
  GENERATE_TEMPLATE_FAILED: "GENERATE_TEMPLATE_FAILED",
};

const initialState = {
  data: null,
  downloadLink: null,
  templates: null,
  meta: null,
  links: null,
  toast: null,
  isLoading: false,
  errors: null
};

export const actionCreators = {
  removeToast: payload => ({
    type: actionTypes.REMOVE_TOAST,
    payload
  }),
  getReportRequest: params => ({ type: actionTypes.GET_REPORTS, params }),
  createReportRequest: body => ({ type: actionTypes.CREATE_REPORT, body }),
  getTemplateRequest: () => ({ type: actionTypes.GET_TEMPLATES }),
  generateTemplateRequest: id => ({ type: actionTypes.GENERATE_TEMPLATE, id })
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_TOAST:
      return Object.assign({}, state, { toast: null });
    case actionTypes.CREATE_REPORT:
    case actionTypes.GET_REPORTS:
    case actionTypes.GET_TEMPLATES:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_REPORTS_SUCCESS:
      console.log(action.payload.data)
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data,
        meta: action.payload.meta,
        links: action.payload.links
      });

    case actionTypes.GENERATE_TEMPLATE_SUCCESS:
      console.log('reducer: ', action.payload.file_url)
      return Object.assign({}, state, {
        isLoading: false,
        downloadLink: action.payload.file_url,
        toast: { type: "success", message: "Generating Report..." }
      });
    case actionTypes.CREATE_REPORT_SUCCESS:
      console.log('reducer: ', action.payload.file_url)
      return Object.assign({}, state, {
        isLoading: false,
        downloadLink: action.payload.file_url,
        toast: { type: "success", message: "Generating Report..." }
      });

    case actionTypes.GET_TEMPLATES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        templates: action.payload.data
      })

    case actionTypes.CREATE_REPORT_FAILED:
    case actionTypes.GET_REPORTS_FAILED:
    case actionTypes.GET_TEMPLATES_FAILED:
      return Object.assign({}, state, {
        isLoading: false
        // errors: action.payload.errors
      });
    default:
      return state;
  }
};
