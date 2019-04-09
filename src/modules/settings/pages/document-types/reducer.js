// Action Types
export const actionTypes = {
  GET_DOCUMENT_TYPES: "GET_DOCUMENT_TYPES",
  GET_DOCUMENT_TYPES_SUCCESS: "GET_DOCUMENT_TYPES_SUCCESS",
  GET_DOCUMENT_TYPES_FAILED: "GET_DOCUMENT_TYPES_FAILED",
  CREATE_DOCUMENT_TYPES: "CREATE_DOCUMENT_TYPES",
  CREATE_DOCUMENT_TYPES_SUCCESS: "CREATE_DOCUMENT_TYPES_SUCCESS",
  CREATE_DOCUMENT_TYPES_FAILED: "CREATE_DOCUMENT_TYPES_FAILED",
  UPDATE_DOCUMENT_TYPES: "UPDATE_DOCUMENT_TYPES",
  UPDATE_DOCUMENT_TYPES_SUCCESS: "UPDATE_DOCUMENT_TYPES_SUCCESS",
  UPDATE_DOCUMENT_TYPES_FAILED: "UPDATE_DOCUMENT_TYPES_FAILED",
  DELETE_DOCUMENT_TYPES: "DELETE_DOCUMENT_TYPES",
  DELETE_DOCUMENT_TYPES_SUCCESS: "DELETE_DOCUMENT_TYPES_SUCCESS",
  DELETE_DOCUMENT_TYPES_FAILED: "DELETE_DOCUMENT_TYPES_FAILED"
};

// Reducer
const initialState = {
  data: null,
  meta: null,
  isLoading: false,
  errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_DOCUMENT_TYPES:
    case actionTypes.GET_DOCUMENT_TYPES:
    case actionTypes.UPDATE_DOCUMENT_TYPES:
    case actionTypes.DELETE_DOCUMENT_TYPES:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_DOCUMENT_TYPES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data,
        meta: action.payload.meta
      });

    case actionTypes.CREATE_DOCUMENT_TYPES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.concat([action.payload])
      });

    case actionTypes.UPDATE_DOCUMENT_TYPES_SUCCESS:
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

    case actionTypes.DELETE_DOCUMENT_TYPES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        data: state.data.filter(item => item.id !== action.payload.id)
      });

    case actionTypes.CREATE_DOCUMENT_TYPES_FAILED:
    case actionTypes.UPDATE_DOCUMENT_TYPES_FAILED:
    case actionTypes.DELETE_DOCUMENT_TYPES_FAILED:
    case actionTypes.GET_DOCUMENT_TYPES_FAILED:
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
  getDocumentTypesRequest: filters => ({
    type: actionTypes.GET_DOCUMENT_TYPES,
    filters
  }),
  createDocumentType: body => ({
    type: actionTypes.CREATE_DOCUMENT_TYPES,
    body
  }),
  updateDocumentType: (id, body) => ({
    type: actionTypes.UPDATE_DOCUMENT_TYPES,
    id,
    body
  }),
  deleteDocumentType: id => ({
    type: actionTypes.DELETE_DOCUMENT_TYPES,
    id
  })
};
