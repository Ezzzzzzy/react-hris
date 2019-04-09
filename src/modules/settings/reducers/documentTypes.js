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
  UPDATE_DOCUMENT_TYPES_FAILED: "UPDATE_DOCUMENT_TYPES_FAILED"
};

// Reducer
const initialState = {
  documentTypes: null,
  meta: null,
  isLoading: false,
  errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DOCUMENT_TYPES:
    case actionTypes.CREATE_DOCUMENT_TYPES:
    case actionTypes.GET_DOCUMENT_TYPES:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_DOCUMENT_TYPES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        documentTypes: action.documentTypes
      });

    case actionTypes.CREATE_DOCUMENT_TYPES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        documentTypes: state.documentTypes.concat([action.newType])
      });

    case actionTypes.UPDATE_DOCUMENT_TYPES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        documentTypes: state.documentTypes.results.map(item => {
          if (item.id === action.updatedType.id) {
            return action.updatedType;
          } else {
            return item;
          }
        })
      });

    case actionTypes.GET_DOCUMENT_TYPES_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        documentTypes: null
      });

    default:
      return state;
  }
};

export const actionCreators = {
  getDocumentTypesRequest: () => ({
    type: actionTypes.GET_DOCUMENT_TYPES
  }),
  createDocumentType: documentType => ({
    type: actionTypes.CREATE_DOCUMENT_TYPES,
    documentType
  }),
  updateDocumentType: (documentTypeId, documentType) => ({
    type: actionTypes.UPDATE_DOCUMENT_TYPES,
    documentTypeId,
    documentType
  })
};
