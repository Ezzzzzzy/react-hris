export const actionTypes = {
  //TOAST
  REMOVE_TOAST: "REMOVE_TOAST",

  //CLIENTS
  GET_ALL_CLIENTS: "GET_ALL_CLIENTS",
  GET_ALL_CLIENTS_SUCCESS: "GET_ALL_CLIENTS_SUCCESS",
  GET_ALL_CLIENTS_FAILED: "GET_ALL_CLIENTS_FAILED",

  GET_CLIENTS: "GET_CLIENTS",
  GET_CLIENTS_SUCCESS: "GET_CLIENTS_SUCCESS",
  GET_CLIENTS_FAILED: "GET_CLIENTS_FAILED",

  CREATE_CLIENT: "CREATE_CLIENT",
  CREATE_CLIENT_SUCCESS: "CREATE_CLIENT_SUCCESS",
  CREATE_CLIENT_FAILED: "CREATE_CLIENT_FAILED",

  UPDATE_CLIENT: "UPDATE_CLIENT",
  UPDATE_CLIENT_SUCCESS: "UPDATE_CLIENT_SUCCESS",
  UPDATE_CLIENT_FAILED: "UPDATE_CLIENT_FAILED",

  //SINGLE CLIENT
  GET_SINGLE_CLIENT: "GET_SINGLE_CLIENT",
  GET_SINGLE_CLIENT_SUCCESS: "GET_SINGLE_CLIENT_SUCCESS",
  GET_SINGLE_CLIENT_FAILED: "GET_SINGLE_CLIENT_FAILED",

  //MEMBERS
  GET_CLIENT_MEMBERS: "GET_CLIENT_MEMBERS",
  GET_CLIENT_MEMBERS_SUCCESS: "GET_CLIENTS_MEMBERS_SUCCESS",
  GET_CLIENT_MEMBERS_FAILED: "GET_CLIENTS_MEMBERS_FAILED",

  MEMBER_END: "MEMBER_END",
  MEMBER_END_SUCCESS: "MEMBER_END_SUCCESS",
  MEMBER_END_FAILED: "MEMBER_END_FAILED",

  MEMBER_UPDATE: "MEMBER_UPDATE",
  MEMBER_UPDATE_SUCCESS: "MEMBER_UPDATE_SUCCESS",
  MEMBER_UPDATE_FAILED: "MEMBER_UPDATE_FAILED",

  MEMBER_REASSIGN: "MEMBER_REASSIGN",
  MEMBER_REASSIGN_SUCCESS: "MEMBER_REASSIGN_SUCCESS",
  MEMBER_REASSIGN_FAILED: "MEMBER_REASSIGN_FAILED",

  //BUSINESS UNIT
  GET_CLIENT_BU: "GET_CLIENT_BU",
  GET_CLIENT_BU_SUCCESS: "GET_CLIENT_BU_SUCCESS",
  GET_CLIENT_BU_FAILED: "GET_CLIENT_BU_FAILED",

  GET_ALL_BU: "GET_ALL_BU",
  GET_ALL_BU_SUCCESS: "GET_ALL_BU_SUCCESS",
  GET_ALL_BU_FAILED: "GET_ALL_BU_FAILED",

  CREATE_CLIENT_BU: "CREATE_CLIENT_BU",
  CREATE_CLIENT_BU_SUCCESS: "CREATE_CLIENT_BU_SUCCESS",
  CREATE_CLIENT_BU_FAILED: "CREATE_CLIENT_BU_FAILED",

  UPDATE_CLIENT_BU: "UPDATE_CLIENT_BU",
  UPDATE_CLIENT_BU_SUCCESS: "UPDATE_CLIENT_BU_SUCCESS",
  UPDATE_CLIENT_BU_FAILED: "UPDATE_CLIENT_BU_FAILED",

  //BRAND
  GET_CLIENT_BRANDS: "GET_CLIENT_BRANDS",
  GET_CLIENT_BRANDS_SUCCESS: "GET_CLIENT_BRANDS_SUCCESS",
  GET_CLIENT_BRANDS_FAILED: "GET_CLIENT_BRANDS_FAILED",

  GET_CLIENT_BRAND_LIST: "GET_CLIENT_BRAND_LIST",
  GET_CLIENT_BRAND_LIST_SUCCESS: "GET_CLIENT_BRAND_LIST_SUCCESS",
  GET_CLIENT_BRAND_LIST_FAILED: "GET_CLIENT_BRAND_LIST_FAILED",

  CREATE_CLIENT_BRAND: "CREATE_CLIENT_BRAND",
  CREATE_CLIENT_BRAND_SUCCESS: "CREATE_CLIENT_BRAND_SUCCESS",
  CREATE_CLIENT_BRAND_FAILED: "CREATE_CLIENT_BRAND_FAILED",

  UPDATE_CLIENT_BRAND: "UPDATE_CLIENT_BRAND",
  UPDATE_CLIENT_BRAND_SUCCESS: "UPDATE_CLIENT_BRAND_SUCCESS",
  UPDATE_CLIENT_BRAND_FAILED: "UPDATE_CLIENT_BRAND_FAILED",

  //BRANCH
  GET_CLIENT_BRANCHES: "GET_CLIENT_BRANCHES",
  GET_CLIENT_BRANCHES_SUCCESS: "GET_CLIENT_BRANCHES_SUCCESS",
  GET_CLIENT_BRANCHES_FAILED: "GET_CLIENT_BRANCHES_FAILED",

  CREATE_CLIENT_BRANCH: "CREATE_CLIENT_BRANCH",
  CREATE_CLIENT_BRANCH_SUCCESS: "CREATE_CLIENT_BRANCH_SUCCESS",
  CREATE_CLIENT_BRANCH_FAILED: "CREATE_CLIENT_BRANCH_FAILED",

  UPDATE_CLIENT_BRANCH: "UPDATE_CLIENT_BRANCH",
  UPDATE_CLIENT_BRANCH_SUCCESS: "UPDATE_CLIENT_BRANCH_SUCCESS",
  UPDATE_CLIENT_BRANCH_FAILED: "UPDATE_CLIENT_BRANCH_FAILED",

  //SINGLE BRAND
  GET_CLIENT_SINGLE_BRAND: "GET_CLIENT_SINGLE_BRAND",
  GET_CLIENT_SINGLE_BRAND_SUCCESS: "GET_CLIENT_SINGLE_BRAND_SUCCESS",
  GET_CLIENT_SINGLE_BRAND_FAILED: "GET_CLIENT_SINGLE_BRAND_FAILED",

  //SINGLE BRAND - MEMBERS
  GET_CLIENT_SINGLE_BRAND_MEMBERS: "GET_CLIENT_SINGLE_BRAND_MEMBERS",
  GET_CLIENT_SINGLE_BRAND_MEMBERS_SUCCESS:
    "GET_CLIENT_SINGLE_BRAND_MEMBERS_SUCCESS",
  GET_CLIENT_SINGLE_BRAND_MEMBERS_FAILED:
    "GET_CLIENT_SINGLE_BRAND_MEMBERS_FAILED"
};

const initialState = {
  data: null,
  data_all: null,
  client_details: {
    data: {},
    members: {},
    business_units: {},
    brands: {},
    branches: {}
  },
  brand_details: {
    data: [],
    members: {},
    meta: {},
    links: {}
  },
  meta: null,
  links: null,
  isLoading: false,
  toast: null,
  errors: null
};

export const actionCreators = {
  //TOAST
  removeToast: payload => ({
    type: actionTypes.REMOVE_TOAST,
    payload
  }),

  //CLIENTS
  getAllClientRequest: () => ({ type: actionTypes.GET_ALL_CLIENTS }),
  getClientRequest: params => ({ type: actionTypes.GET_CLIENTS, params }),
  createClientRequest: client => ({ type: actionTypes.CREATE_CLIENT, client }),
  updateClientRequest: (id, body) => ({
    type: actionTypes.UPDATE_CLIENT,
    id,
    body
  }),

  //SINGLE CLIENT
  getSingleClientRequest: id => ({ type: actionTypes.GET_SINGLE_CLIENT, id }),

  //MEMBERS
  getClientMembersRequest: (id, params) => ({
    type: actionTypes.GET_CLIENT_MEMBERS,
    id,
    params
  }),
  updateClientMemberEnd: (id, body) => ({
    type: actionTypes.MEMBER_END,
    id,
    body
  }),
  updateClientMemberStatus: (id, body) => ({
    type: actionTypes.MEMBER_UPDATE,
    id,
    body
  }),
  updateClientMemberReassign: (id, body) => ({
    type: actionTypes.MEMBER_REASSIGN,
    id,
    body
  }),

  //BUSINESS UNIT
  getClientBusinessUnitsRequest: (id, params) => ({
    type: actionTypes.GET_CLIENT_BU,
    id,
    params
  }),
  getAllClientBusinessUnitsRequest: id => ({
    type: actionTypes.GET_ALL_BU,
    id
  }),
  createClientBusinessUnitRequest: (id, business_unit) => ({
    type: actionTypes.CREATE_CLIENT_BU,
    id,
    business_unit
  }),
  updateClientBusinessUnitRequest: (id, bu_id, body) => ({
    type: actionTypes.UPDATE_CLIENT_BU,
    id,
    bu_id,
    body
  }),

  //BRANDS
  getClientBrandsAllRequest: id => ({
    type: actionTypes.GET_CLIENT_BRAND_LIST,
    id
  }),
  getClientBrandsRequest: (id, params) => ({
    type: actionTypes.GET_CLIENT_BRANDS,
    id,
    params
  }),
  createClientBrandRequest: (id, brand) => ({
    type: actionTypes.CREATE_CLIENT_BRAND,
    id,
    brand
  }),
  updateClientBrandRequest: (id, brand_id, body) => ({
    type: actionTypes.UPDATE_CLIENT_BRAND,
    id,
    brand_id,
    body
  }),

  //BRANCH
  getClientBranchesRequest: (id, params) => ({
    type: actionTypes.GET_CLIENT_BRANCHES,
    id,
    params
  }),
  createClientBranchRequest: (id, branch) => ({
    type: actionTypes.CREATE_CLIENT_BRANCH,
    id,
    branch
  }),
  updateClientBranchRequest: (id, branch_id, body) => ({
    type: actionTypes.UPDATE_CLIENT_BRANCH,
    id,
    branch_id,
    body
  }),

  //SINGLE BRAND
  getClientSingleBrand: (client_id, brand_id) => ({
    type: actionTypes.GET_CLIENT_SINGLE_BRAND,
    client_id,
    brand_id
  }),

  //SINGLE BRAND - MEMBERS
  getClientSingleBrandMembers: (client_id, brand_id, params) => ({
    type: actionTypes.GET_CLIENT_SINGLE_BRAND_MEMBERS,
    client_id,
    brand_id,
    params
  })
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_TOAST:
      return Object.assign({}, state, { toast: null });
    //Request
    case actionTypes.GET_ALL_CLIENTS:
    case actionTypes.GET_CLIENTS:
    case actionTypes.CREATE_CLIENT:
    case actionTypes.UPDATE_CLIENT:
    /* falls through */
    case actionTypes.GET_SINGLE_CLIENT:
    /* falls through */
    case actionTypes.GET_CLIENT_MEMBERS:
    /* falls through */
    case actionTypes.MEMBER_END:
    /* falls through */
    case actionTypes.MEMBER_UPDATE:
    /* falls through */
    case actionTypes.MEMBER_REASSIGN:
    /* falls through */
    case actionTypes.GET_CLIENT_BU:
    /* falls through */
    case actionTypes.GET_ALL_BU:
    /* falls through */
    case actionTypes.CREATE_CLIENT_BU:
    /* falls through */
    case actionTypes.UPDATE_CLIENT_BU:
    /* falls through */
    case actionTypes.GET_CLIENT_BRANCHES:
    /* falls through */
    case actionTypes.CREATE_CLIENT_BRANCH:
    /* falls through */
    case actionTypes.UPDATE_CLIENT_BRANCH:
    /* falls through */
    case actionTypes.GET_CLIENT_BRAND_LIST:
    /* falls through */
    case actionTypes.GET_CLIENT_BRANDS:
    /* falls through */
    case actionTypes.CREATE_CLIENT_BRAND:
    /* falls through */
    case actionTypes.UPDATE_CLIENT_BRAND:
    /* falls through */
    case actionTypes.GET_CLIENT_SINGLE_BRAND:
    /* falls through */
    case actionTypes.GET_CLIENT_SINGLE_BRAND_MEMBERS:
      return Object.assign({}, state, { isLoading: true, errors: null });

    //Failed
    case actionTypes.GET_ALL_CLIENTS_FAILED:
    /* falls through */
    case actionTypes.GET_CLIENTS_FAILED:
    /* falls through */
    case actionTypes.CREATE_CLIENT_FAILED:
    /* falls through */
    case actionTypes.UPDATE_CLIENT_FAILED:
    /* falls through */

    case actionTypes.GET_SINGLE_CLIENT_FAILED:
    /* falls through */

    case actionTypes.GET_CLIENT_MEMBERS_FAILED:
    /* falls through */

    case actionTypes.MEMBER_END_FAILED:
    /* falls through */
    case actionTypes.MEMBER_UPDATE_FAILED:
    /* falls through */
    case actionTypes.MEMBER_REASSIGN_FAILED:
    /* falls through */

    case actionTypes.GET_CLIENT_BU_FAILED:
    /* falls through */
    case actionTypes.CREATE_CLIENT_BU_FAILED:
    /* falls through */
    case actionTypes.UPDATE_CLIENT_BU_FAILED:
    /* falls through */

    case actionTypes.GET_CLIENT_BRANCHES_FAILED:
    /* falls through */
    case actionTypes.CREATE_CLIENT_BRANCH_FAILED:
    /* falls through */
    case actionTypes.UPDATE_CLIENT_BRANCH_FAILED:
    /* falls through */

    case actionTypes.GET_CLIENT_BRANDS_FAILED:
    /* falls through */
    case actionTypes.GET_CLIENT_BRAND_LIST_FAILED:
    /* falls through */
    case actionTypes.CREATE_CLIENT_BRAND_FAILED:
    /* falls through */
    case actionTypes.UPDATE_CLIENT_BRAND_FAILED:
    /* falls through */

    case actionTypes.GET_CLIENT_SINGLE_BRAND_FAILED:
    case actionTypes.GET_CLIENT_SINGLE_BRAND_MEMBERS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        toast: { type: "error", message: action.error }
      });

    //Success
    case actionTypes.GET_ALL_CLIENTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data_all: action.payload.data
      });

    case actionTypes.GET_CLIENTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        data: action.payload.data,
        meta: action.payload.meta,
        links: action.payload.links
      });

    case actionTypes.CREATE_CLIENT_SUCCESS:
      return Object.assign({}, state, {
        toast: { type: "success", message: "New Client Created" },
        isLoading: false
      });
    case actionTypes.UPDATE_CLIENT_SUCCESS:
      return Object.assign({}, state, {
        toast: { type: "success", message: "Client Updated" },
        isLoading: false
      });
    //
    case actionTypes.GET_SINGLE_CLIENT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        errors: null,
        client_details: {
          ...state.client_details,
          data: action.payload_details
        }
      });
    //
    case actionTypes.GET_CLIENT_MEMBERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        client_details: {
          ...state.client_details,
          members: action.payload
        }
      });
    case actionTypes.MEMBER_END_SUCCESS:
      return Object.assign({}, state, {
        toast: {
          type: "success",
          message: "Member has ended tenure in the company"
        },
        isLoading: false
      });
    case actionTypes.MEMBER_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        toast: { type: "success", message: "Member Status Updated" },
        isLoading: false
      });
    case actionTypes.MEMBER_REASSIGN_SUCCESS:
      return Object.assign({}, state, {
        toast: { type: "success", message: "Member Reassigned" },
        isLoading: false
      });
    //
    case actionTypes.GET_CLIENT_BU_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        client_details: {
          ...state.client_details,
          business_units: {
            ...state.client_details.business_units,
            ...action.payload
          }
        }
      });
    case actionTypes.GET_ALL_BU_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        client_details: {
          ...state.client_details,
          business_units: {
            ...state.client_details.business_units,
            data_all: action.payload
          }
        }
      });
    case actionTypes.CREATE_CLIENT_BU_SUCCESS:
      return Object.assign({}, state, {
        toast: { type: "success", message: "New Business Unit Created" },
        isLoading: false
      });

    case actionTypes.UPDATE_CLIENT_BU_SUCCESS:
      return Object.assign({}, state, {
        toast: { type: "success", message: "Business Unit Updated" },
        isLoading: false
      });

    case actionTypes.GET_CLIENT_BRAND_LIST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        client_details: {
          ...state.client_details,
          brands: {
            ...state.client_details.brands,
            data_all: action.payload.data
          }
        }
      });

    case actionTypes.GET_CLIENT_BRANDS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        client_details: {
          ...state.client_details,
          brands: action.payload
        }
      });
    case actionTypes.CREATE_CLIENT_BRAND_SUCCESS:
      return Object.assign({}, state, {
        toast: { type: "success", message: "Brand Created" },
        isLoading: false
      });
    case actionTypes.UPDATE_CLIENT_BRAND_SUCCESS:
      return Object.assign({}, state, {
        toast: { type: "success", message: "Brand Updated" },
        isLoading: false
      });
    //
    case actionTypes.GET_CLIENT_BRANCHES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        client_details: {
          ...state.client_details,
          branches: action.payload
        }
      });
    case actionTypes.CREATE_CLIENT_BRANCH_SUCCESS:
      return Object.assign({}, state, {
        toast: { type: "success", message: "New Branch Created" },
        isLoading: false
      });
    case actionTypes.UPDATE_CLIENT_BRANCH_SUCCESS:
      return Object.assign({}, state, {
        toast: { type: "success", message: "Branch Updated" },
        isLoading: false
      });
    //
    case actionTypes.GET_CLIENT_SINGLE_BRAND_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        brand_details: {
          ...state.brand_details,
          data: action.payload_details
        }
      });
    case actionTypes.GET_CLIENT_SINGLE_BRAND_MEMBERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        brand_details: {
          ...state.brand_details,
          members: action.payload
        }
      });
    default:
      return state;
  }
};
