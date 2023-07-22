import { reactive, toRefs } from "vue";
import { api } from "../boot/axios";
import Utils from "../helpers/Utils";

export default function useStats() {
  const state = reactive({
    memberLoading: false,
    transactionLoading: false,
    memberItems: [],
    transactionItems: [],
  });
  const token = localStorage.getItem("template-admin-token")
    ? localStorage.getItem("template-admin-token")
    : state.token;
  const headers = {};
  if (token) {
    headers.authorization = "Bearer " + token;
  }

  const memberColumns = [
    {
      name: "customer_id",
      label: "Member ID",
      required: true,
      field: (row) => row?.member_ID,
      align: "left",
      sortable: false,
    },
    {
      name: "member_name",
      label: "Member Name",
      required: true,
      field: (row) =>
        row.first_name
          ? row?.first_name + " " + row?.last_name
          : row.idd + row.phone_number,
      align: "left",
      sortable: false,
    },
    {
      name: "created_at",
      label: "Login Time",
      required: true,
      field: (row) => row.created_at,
      align: "left",
      sortable: false,
    },
    {
      name: "ip_address",
      label: "Login IP",
      required: true,
      field: (row) => row.ip_address,
      align: "left",
      sortable: false,
    },
  ];

  const transactionColumns = [
    {
      name: "member_id",
      label: "Member ID",
      required: true,
      field: (row) => row?.member_ID,
      align: "left",
      sortable: false,
    },
    {
      name: "member_name",
      label: "Member Name",
      required: true,
      field: (row) =>
        row.first_name
          ? row?.first_name + " " + row?.last_name
          : row.idd + row.phone_number,
      align: "left",
      sortable: false,
    },
    {
      name: "created_at",
      label: "Date",
      required: true,
      field: (row) => row.created_at,
      align: "left",
      sortable: false,
    },
    {
      name: "amount",
      label: "Amount",
      required: true,
      field: (row) => row,
      align: "right",
      sortable: false,
    },
  ];

  const getThisMonthOnlineUsers = async () => {
    try {
      const response = await api.get(`/stats/this-month-online-members`);
      return response;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    }
  };

  const getThisMontTransaction = async (filters) => {
    try {
      const response = await api.get(`/stats/monthly-transaction`, {
        params: filters,
      });
      return response;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    }
  };

  const getThisMonthNewMembers = async () => {
    try {
      const response = await api.get(`/stats/this-month-new-members`);
      return response;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    }
  };

  const getOnlineStats = async (filters) => {
    try {
      const response = await api.get(`/stats/graph-members-online`, {
        params: filters,
      });
      return response;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    }
  };

  const getRecentMemberOnline = async () => {
    state.memberLoading = true;

    try {
      const response = await api.get("/stats/recent-member-online");
      state.memberItems = response.data;
      state.memberLoading = false;
      return response;
    } catch (err) {
      state.memberLoading = false;
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    }
  };

  const getRecentTransactions = async () => {
    state.transactionLoading = true;

    try {
      const response = await api.get("/stats/recent-order");
      state.transactionItems = response.data;
      state.transactionLoading = false;
      return response;
    } catch (err) {
      state.transactionLoading = false;
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    }
  };

  const getDashboard = async () => {
    try {
      state.loading = true;
      const response = await api.get(`/stats/dashboard`);
      return response.data;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    } finally {
      state.loading = false;
    }
  };

  const slotPurchase = async (filters) => {
    try {
      const response = await api.get(`/stats/slot-purchase`, {
        params: filters,
      });
      return response;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    }
  };

  const tranferAmount = async (filters) => {
    try {
      const response = await api.get(`/stats/tranfer-amount`, {
        params: filters,
      });
      return response;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    }
  };
  const revenueChart = async (filters) => {
    try {
      const response = await api.get(`/settlements/total`, {
        params: filters,
      });
      return response;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    }
  };

  const checkOTPbalance = async () => {
    try {
      const response = await api.get(`/get/otp-balance`);
      return response;
    } catch (err) {
      //throw Error(Utils.getErrorMessage(err));
      throw Utils.getErrorMessage(err);
    }
  };

  return {
    ...toRefs(state),
    memberColumns,
    transactionColumns,
    getThisMonthOnlineUsers,
    getThisMontTransaction,
    getThisMonthNewMembers,
    getOnlineStats,
    getRecentMemberOnline,
    getRecentTransactions,
    getDashboard,
    slotPurchase,
    tranferAmount,
    revenueChart,
    checkOTPbalance,
  };
}