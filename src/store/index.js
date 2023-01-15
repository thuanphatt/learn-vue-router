import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      count: 1000,
      transaction: null,
      transactions: [],
      error: null,
    };
  },
  getters: {
    transactionFilterd(state) {
      return state.transactions.filter((transaction) => transaction % 2 === 0);
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTransaction(state, transactionPayload) {
      state.transaction = transactionPayload;
    },
    setTransactions(state, transactionsPayload) {
      state.transactions = transactionsPayload;
    },
    setError(state, errrorPayload) {
      state.error = errrorPayload;
    },
  },
  actions: {
    async fetchTraction({ commit }, { id }) {
      const res = await fetch("http://localhost:3000/transactions/" + id);
      const data = await res.json();
      commit("setTransaction", data);
    },
    async fetchAllTransaction({ commit }) {
      try {
        const response = await fetch("http://localhost:3000/transactions");
        if (!response.ok) throw new Error("Something went wrong");
        const data = await response.json();
        commit("setTransactions", data);
      } catch (err) {
        commit("setError", err.message);
        console.log(err);
      }
    },
  },
});
export default store;
