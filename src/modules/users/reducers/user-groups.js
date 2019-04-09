// Action Types
export const actionTypes = {
  GET_USER_GROUPS: "GET_USER_GROUPS",
  GET_USER_GROUPS_SUCCESS: "GET_USER_GROUPS_SUCCESS",
  GET_USER_GROUPS_FAILED: "GET_USER_GROUPS_FAILED",

  GET_SINGLE_USER_GROUP: "GET_SINGLE_USER_GROUP",
  GET_SINGLE_USER_GROUP_SUCCESS: "GET_SINGLE_USER_GROUP_SUCCESS",
  GET_SINGLE_USER_GROUP_FAILED: "GET_SINGLE_USER_GROUP_FAILED",

  GET_ALL_USER_GROUPS: "GET_ALL_USER_GROUPS",
  GET_ALL_USER_GROUPS_SUCCESS: "GET_ALL_USER_GROUPS_SUCCESS",
  GET_ALL_USER_GROUPS_FAILED: "GET_ALL_USER_GROUPS_FAILED",

  CREATE_USER_GROUPS: "CREATE_USER_GROUPS",
  CREATE_USER_GROUPS_SUCCESS: "CREATE_USER_GROUPS_SUCCESS",
  CREATE_USER_GROUPS_FAILED: "CREATE_USER_GROUPS_FAILED",

  UPDATE_USER_GROUPS: "UPDATE_USER_GROUPS",
  UPDATE_USER_GROUPS_SUCCESS: "UPDATE_USER_GROUPS_SUCCESS",
  UPDATE_USER_GROUPS_FAILED: "UPDATE_USER_GROUPS_FAILED"
};

// Reducer
const initialState = {
  data: null,
  selected: {},
  data_all: [],
  meta: null,
  isLoading: false,
  errors: null,
  actionType: { id: null, type: null }
};

export const actionCreators = {
  createUserGroup: body => ({
    type: actionTypes.CREATE_USER_GROUPS,
    body
  }),
  getSingleUserGroup: id => ({
    type: actionTypes.GET_SINGLE_USER_GROUP,
    id
  }),
  getUserGroupsRequest: filters => ({
    type: actionTypes.GET_USER_GROUPS,
    filters
  }),
  getAllUserGroupsRequest: () => ({ type: actionTypes.GET_ALL_USER_GROUPS }),
  updateUserGroup: (id, body) => ({
    type: actionTypes.UPDATE_USER_GROUPS,
    id,
    body
  })
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SINGLE_USER_GROUP:
    case actionTypes.GET_USER_GROUPS:
    case actionTypes.GET_ALL_USER_GROUPS:
    case actionTypes.CREATE_USER_GROUPS:
    case actionTypes.UPDATE_USER_GROUPS:
      return Object.assign({}, state, { isLoading: true, errors: null });

    case actionTypes.GET_SINGLE_USER_GROUP_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        selected: action.payload.data
      });

    case actionTypes.CREATE_USER_GROUPS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        actionType: {
          id: action.payload.data.id,
          type: actionTypes.CREATE_USER_GROUPS_SUCCESS
        }
      });

    case actionTypes.UPDATE_USER_GROUPS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        actionType: {
          id: action.payload.data.id,
          type: actionTypes.UPDATE_USER_GROUPS_SUCCESS
        }
      });

    case actionTypes.GET_USER_GROUPS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data,
        meta: {
          current: action.payload.meta.current_page,
          total: action.payload.meta.total,
          pageSize: action.payload.meta.per_page
        },
        actionType: {
          id: null,
          type: actionTypes.GET_USER_GROUPS_SUCCESS
        }
      });

    case actionTypes.GET_ALL_USER_GROUPS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data_all: action.payload.data
      });

    case actionTypes.GET_SINGLE_USER_GROUP_FAILED:
    case actionTypes.GET_ALL_USER_GROUPS_FAILED:
    case actionTypes.GET_USER_GROUPS_FAILED:
    case actionTypes.CREATE_USER_GROUPS_FAILED:
    case actionTypes.UPDATE_USER_GROUPS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors
      });

    default:
      return state;
  }
};
