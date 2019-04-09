// Action Types
export const actionTypes = {
  GET_MEMBERS: "GET_MEMBERS",
  GET_MEMBERS_SUCCESS: "GET_MEMBERS_SUCCESS",
  GET_MEMBERS_FAILED: "GET_MEMBERS_FAILED",

  GET_MEMBER_PROFILE: "GET_MEMBER_PROFILE",
  GET_MEMBER_PROFILE_SUCCESS: "GET_MEMBER_PROFILE_SUCCESS",
  GET_MEMBER_PROFILE_FAILED: "GET_MEMBER_PROFILE_FAILED",

  GET_MEMBER_WORK_HISTORY: "GET_MEMBER_WORK_HISTORY",
  GET_MEMBER_WORK_HISTORY_SUCCESS: "GET_MEMBER_WORK_HISTORY_SUCCESS",
  GET_MEMBER_WORK_HISTORY_FAILED: "GET_MEMBER_WORK_HISTORY_FAILED",

  GET_MEMBER_DOCUMENTS: "GET_MEMBER_DOCUMENTS",
  GET_MEMBER_DOCUMENTS_SUCCESS: "GET_MEMBER_DOCUMENTS_SUCCESS",
  GET_MEMBER_DOCUMENTS_FAILED: "GET_MEMBER_DOCUMENTS_FAILED",

  CREATE_MEMBERS: "CREATE_MEMBERS",
  CREATE_MEMBERS_SUCCESS: "CREATE_MEMBERS_SUCCESS",
  CREATE_MEMBERS_FAILED: "CREATE_MEMBERS_FAILED",

  UPDATE_MEMBERS: "UPDATE_MEMBERS",
  UPDATE_MEMBERS_SUCCESS: "UPDATE_MEMBERS_SUCCESS",
  UPDATE_MEMBERS_FAILED: "UPDATE_MEMBERS_FAILED",

  UPLOAD_MEMBER_DOCUMENT: "UPLOAD_MEMBER_DOCUMENT",
  UPLOAD_MEMBER_DOCUMENT_SUCCESS: "UPLOAD_MEMBER_DOCUMENT_SUCCESS",
  UPLOAD_MEMBER_DOCUMENT_FAILED: "UPLOAD_MEMBER_DOCUMENT_FAILED",

  DEPLOY_MEMBERS: "DEPLOY_MEMBERS",
  DEPLOY_MEMBERS_SUCCESS: "DEPLOY_MEMBERS_SUCCESS",
  DEPLOY_MEMBERS_FAILED: "DEPLOY_MEMBERS_FAILED",

  END_WORK: "END_WORK",
  END_WORK_SUCCESS: "END_WORK_SUCCESS",
  END_WORK_FAILED: "END_WORK_FAILED",

  UPDATE_MEMBER_STATUS: "UPDATE_MEMBER_STATUS",
  UPDATE_MEMBER_STATUS_SUCCESS: "UPDATE_MEMBER_STATUS_SUCCESS",
  UPDATE_MEMBER_STATUS_FAILED: "UPDATE_MEMBER_STATUS_FAILED",

  GET_DOCUMENT_TYPE: "GET_DOCUMENT_TYPE",
  GET_DOCUMENT_TYPE_SUCCESS: "GET_DOCUMENT_TYPE_SUCCESS",
  GET_DOCUMENT_TYPE_FAILED: "GET_DOCUMENT_TYPE_FAILED",

  UPLOAD_BULK_MEMBERS: "UPLOAD_BULK_MEMBERS",
  UPLOAD_BULK_MEMBERS_SUCCESS: "UPLOAD_BULK_MEMBERS_SUCCESS",
  UPLOAD_BULK_MEMBERS_FAILED: "UPLOAD_BULK_MEMBERS_FAILED",

  CREATE_DISCIPLINARY: "CREATE_DISCIPLINARY",
  CREATE_DISCIPLINARY_SUCCESS: "CREATE_DISCIPLINARY_SUCCESS",
  CREATE_DISCIPLINARY_FAILED: "CREATE_DISCIPLINARY_FAILED",

  UPDATE_DISCIPLINARY: "UPDATE_DISCIPLINARY",
  UPDATE_DISCIPLINARY_SUCCESS: "UPDATE_DISCIPLINARY_SUCCESS",
  UPDATE_DISCIPLINARY_FAILED: "UPDATE_DISCIPLINARY_FAILED",
};

// Reducer
const initialState = {
  data: null,
  meta: null,
  work: null,
  uploadError: null,
  uploadSuccess: null,
  documents: [],
  documentTypes: [],
  profile: null,
  isLoading: false,
  errors: null,
  actionType: { id: null, type: null }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DOCUMENT_TYPE:
    case actionTypes.GET_MEMBERS:
    case actionTypes.UPLOAD_BULK_MEMBERS:
    case actionTypes.GET_MEMBER_PROFILE:
    case actionTypes.GET_MEMBER_WORK_HISTORY:
    case actionTypes.GET_MEMBER_DOCUMENTS:
    case actionTypes.DEPLOY_MEMBERS:
    case actionTypes.UPLOAD_MEMBER_DOCUMENT:
    case actionTypes.UPDATE_MEMBER_STATUS:
    case actionTypes.END_WORK:
    case actionTypes.CREATE_DISCIPLINARY:
    case actionTypes.UPDATE_DISCIPLINARY:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_MEMBER_DOCUMENTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        documents: action.payload.data,
        actionType: {
          type: actionTypes.GET_MEMBER_DOCUMENTS_SUCCESS
        }
      });

    case actionTypes.GET_MEMBER_WORK_HISTORY_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        work: action.payload.data,
        actionType: {
          type: actionTypes.GET_MEMBER_WORK_HISTORY_SUCCESS
        }
      });

    case actionTypes.GET_MEMBER_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        profile: action.payload,
        actionType: {
          id: null,
          type: actionTypes.GET_MEMBER_PROFILE_SUCCESS
        }
      });

    case actionTypes.GET_MEMBER_PROFILE_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors
      });

    case actionTypes.GET_MEMBERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data,
        meta: action.payload.meta
      });

    case actionTypes.UPDATE_MEMBERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        actionType: {
          id: action.payload.id,
          type: actionTypes.UPDATE_MEMBERS_SUCCESS
        }
      });

    case actionTypes.MEMBER_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false
      });

    case actionTypes.GET_MEMBERS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors
      });

    case actionTypes.UPDATE_MEMBERS:
      return Object.assign({}, state, {
        isLoading: true,
        errors: null,
        actionType: {
          id: null,
          type: actionTypes.UPDATE_MEMBERS
        }
      });

    case actionTypes.UPDATE_MEMBERS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        actionType: {
          id: null,
          type: actionTypes.UPDATE_MEMBERS_FAILED
        }
      });
    case actionTypes.CREATE_DISCIPLINARY_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        actionType: {
          id: null,
          type: actionTypes.CREATE_DISCIPLINARY_FAILED
        }
      });
    case actionTypes.UPDATE_DISCIPLINARY_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.error,
        actionType: {
          id: null,
          type: actionTypes.UPDATE_DISCIPLINARY_FAILED
        }
      })
    case actionTypes.CREATE_MEMBERS:
      return Object.assign({}, state, {
        isLoading: true,
        errors: null,
        actionType: {
          id: null,
          type: actionTypes.CREATE_MEMBERS
        }
      });

    case actionTypes.CREATE_MEMBERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        actionType: {
          id: action.payload.id,
          type: actionTypes.CREATE_MEMBERS_SUCCESS
        }
      });

    case actionTypes.CREATE_MEMBERS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
        actionType: {
          id: null,
          type: actionTypes.CREATE_MEMBERS_FAILED
        }
      });

    case actionTypes.END_WORK_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        actionType: {
          type: actionTypes.END_WORK_SUCCESS
        }
      });

    case actionTypes.DEPLOY_MEMBERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        actionType: {
          id: action.payload.id,
          type: actionTypes.DEPLOY_MEMBERS_SUCCESS
        }
      });

    case actionTypes.CREATE_DISCIPLINARY_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        actionType: {
          type: actionTypes.CREATE_DISCIPLINARY_SUCCESS
        }
      });

    case actionTypes.UPDATE_DISCIPLINARY_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        actionType: {
          type: actionTypes.UPDATE_DISCIPLINARY_SUCCESS
        }
      });

    case actionTypes.GET_DOCUMENT_TYPE_SUCCESS:
      return Object.assign({}, state, {
        documentTypes: action.payload.data,
        isLoading: false
      });

    case actionTypes.GET_DOCUMENT_TYPE_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.payload.error
      });

    case actionTypes.UPLOAD_MEMBER_DOCUMENT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        actionType: {
          type: actionTypes.UPLOAD_MEMBER_DOCUMENT_SUCCESS
        }
      });

    case actionTypes.UPLOAD_BULK_MEMBERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        uploadError: action.payload.errors,
        uploadSuccess: action.payload.data,
        actionType: {
          type: actionTypes.UPLOAD_BULK_MEMBERS_SUCCESS
        }
      });

    case actionTypes.UPLOAD_MEMBER_DOCUMENT_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.payload.error
      });

    default:
      return state;
  }
};

export const actionCreators = {
  getMembersRequest: filters => ({ type: actionTypes.GET_MEMBERS, filters }),
  getProfile: id => ({ type: actionTypes.GET_MEMBER_PROFILE, id }),
  getDocuments: id => ({ type: actionTypes.GET_MEMBER_DOCUMENTS, id }),
  getDocumentTypes: () => ({ type: actionTypes.GET_DOCUMENT_TYPE }),
  getWorkHistory: id => ({ type: actionTypes.GET_MEMBER_WORK_HISTORY, id }),
  createMember: body => ({ type: actionTypes.CREATE_MEMBERS, body }),
  updateMember: (id, body) => ({ type: actionTypes.UPDATE_MEMBERS, id, body }),
  deployMember: (id, body) => ({ type: actionTypes.DEPLOY_MEMBERS, id, body }),
  createDisciplinary: (id, body) => ({
    type: actionTypes.CREATE_DISCIPLINARY,
    id,
    body
  }),
  updateDisciplinary: (id, da_id, body) => ({
    type: actionTypes.UPDATE_DISCIPLINARY,
    id,
    da_id,
    body
  }),
  updateMemberStatus: (id, body) => ({
    type: actionTypes.UPDATE_MEMBER_STATUS,
    id,
    body
  }),
  uploadBulkMembers: body => ({
    type: actionTypes.UPLOAD_BULK_MEMBERS,
    body
  }),
  uploadDocument: (id, body) => ({
    type: actionTypes.UPLOAD_MEMBER_DOCUMENT,
    id,
    body
  }),
  endWork: (id, body, member_id) => ({
    type: actionTypes.END_WORK,
    id,
    body,
    member_id
  })
};
