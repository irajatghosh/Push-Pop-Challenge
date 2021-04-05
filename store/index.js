export const state = () => ({
  resolved: [],
  unresolved: [],
  backlog: []
});

export const getters = {
  getResolvedErros(state) {
    return state.resolved;
  },
  getUnresolvedErros(state) {
    return state.unresolved;
  },
  getBacklogErros(state) {
    return state.backlog;
  }
};

export const mutations = {
  setResolvedErrors(state, payload) {
    state.resolved = payload;
  },
  setUnresolvedErrors(state, payload) {
    state.unresolved = payload;
  },
  setBacklogErrors(state, payload) {
    state.backlog = payload;
  },
  errorMovedToResolved(state, payload) {
    const selectedData = state.unresolved.find(item => item.index === payload);
    const newData = state.unresolved.filter(item => item.index !== payload);
    state.unresolved = newData;
    state.resolved.unshift(selectedData);
  },
  undoTheResolved(state, payload) {
    const selectedData = state.resolved.find(item => item.index === payload);
    const newData = state.resolved.filter(item => item.index !== payload);
    state.resolved = newData;
    state.unresolved.unshift(selectedData);
  },
  errorMovedToUnresolved(state, payload) {
    const selectedData = state.backlog.find(item => item.index === payload);
    const newData = state.backlog.filter(item => item.index !== payload);
    state.backlog = newData;
    state.unresolved.unshift(selectedData);
  },
  undoTheUnresolved(state, payload) {
    const selectedData = state.unresolved.find(item => item.index === payload);
    const newData = state.unresolved.filter(item => item.index !== payload);
    state.unresolved = newData;
    state.backlog.unshift(selectedData);
  }
};

export const actions = {
  async loadErrors(context) {
    const PATH_API = "/get_lists";
    try {
      const { resolved, unresolved, backlog } = await this.$axios.$get(
        `/api/${PATH_API}`
      );
      context.commit("setResolvedErrors", resolved);
      context.commit("setUnresolvedErrors", unresolved);
      context.commit("setBacklogErrors", backlog);
    } catch (error) {
      console.log(
        `Couldn't get error lists:\n${error}\nDid you start the API?`
      );
      console.log(
        "HINT: You can comment out the full `asyncData` method and work with mocked data for UI/UX development, if you want to."
      );
    }
  },
  moveToResoved(context, index) {
    context.commit("errorMovedToResolved", index);
  },
  undoResolved(context, index) {
    context.commit("undoTheResolved", index);
  },
  moveBacklogToUnresolved(context, index) {
    context.commit("errorMovedToUnresolved", index);
  },
  undoBacklog(context, index) {
    context.commit("undoTheUnresolved", index);
  }
};
