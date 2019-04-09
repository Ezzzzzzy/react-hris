// Action Types
export const actionTypes = {
  GET_ALL_EMPLOYEE_STATUSES: "GET_ALL_EMPLOYEE_STATUSES",
  GET_ALL_EMPLOYEE_STATUSES_SUCCESS: "GET_ALL_EMPLOYEE_STATUSES_SUCCESS",
  GET_ALL_EMPLOYEE_STATUSES_FAILED: "GET_ALL_EMPLOYEE_STATUSES_FAILED",
  GET_EMPLOYEE_STATUSES: "GET_EMPLOYEE_STATUSES",
  GET_EMPLOYEE_STATUSES_SUCCESS: "GET_EMPLOYEE_STATUSES_SUCCESS",
  GET_EMPLOYEE_STATUSES_FAILED: "GET_EMPLOYEE_STATUSES_FAILED",
  CREATE_EMPLOYEE_STATUSES: "CREATE_EMPLOYEE_STATUSES",
  CREATE_EMPLOYEE_STATUSES_SUCCESS: "CREATE_EMPLOYEE_STATUSES_SUCCESS",
  CREATE_EMPLOYEE_STATUSES_FAILED: "CREATE_EMPLOYEE_STATUSES_FAILED",
  UPDATE_EMPLOYEE_STATUSES: "UPDATE_EMPLOYEE_STATUSES",
  UPDATE_EMPLOYEE_STATUSES_SUCCESS: "UPDATE_EMPLOYEE_STATUSES_SUCCESS",
  UPDATE_EMPLOYEE_STATUSES_FAILED: "UPDATE_EMPLOYEE_STATUSES_FAILED",
  DELETE_EMPLOYEE_STATUSES: "DELETE_EMPLOYEE_STATUSES",
  DELETE_EMPLOYEE_STATUSES_SUCCESS: "DELETE_EMPLOYEE_STATUSES_SUCCESS",
  DELETE_EMPLOYEE_STATUSES_FAILED: "DELETE_EMPLOYEE_STATUSES_FAILED"
};

// Reducer
const initialState = {
  data: null,
  data_all: null,
  meta: null,
  isLoading: false,
  errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_EMPLOYEE_STATUSES:
    case actionTypes.GET_EMPLOYEE_STATUSES:
    case actionTypes.GET_ALL_EMPLOYEE_STATUSES:
    case actionTypes.UPDATE_EMPLOYEE_STATUSES:
    case actionTypes.DELETE_EMPLOYEE_STATUSES:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_ALL_EMPLOYEE_STATUSES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data_all: action.payload.data
      });

    case actionTypes.GET_EMPLOYEE_STATUSES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data,
        meta: action.payload.meta
      });

    case actionTypes.CREATE_EMPLOYEE_STATUSES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.concat([action.payload])
      });

    case actionTypes.UPDATE_EMPLOYEE_STATUSES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        })
      });

    case actionTypes.DELETE_EMPLOYEE_STATUSES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.filter(item => item.id !== action.payload.id)
      });

    case actionTypes.CREATE_EMPLOYEE_STATUSES_FAILED:
    case actionTypes.UPDATE_EMPLOYEE_STATUSES_FAILED:
    case actionTypes.DELETE_EMPLOYEE_STATUSES_FAILED:
    case actionTypes.GET_EMPLOYEE_STATUSES_FAILED:
    case actionTypes.GET_ALL_EMPLOYEE_STATUSES_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        employeeStatuses: null
      });

    default:
      return state;
  }
};

export const actionCreators = {
  allEmployeeStatus: () => ({
    type: actionTypes.GET_ALL_EMPLOYEE_STATUSES
  }),
  getEmployeeStatusesRequest: filters => ({
    type: actionTypes.GET_EMPLOYEE_STATUSES,
    filters
  }),
  createEmployeeStatus: body => ({
    type: actionTypes.CREATE_EMPLOYEE_STATUSES,
    body
  }),
  updateEmployeeStatus: (id, body) => ({
    type: actionTypes.UPDATE_EMPLOYEE_STATUSES,
    id,
    body
  }),
  deleteEmployeeStatus: id => ({
    type: actionTypes.DELETE_EMPLOYEE_STATUSES,
    id
  })
};
