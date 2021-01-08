export const data = {
  state: { jams: null },
  reducers: {
    fetchJams: (state, payload) => {
      state.jams = payload;
      return state;
    },
  },
  effects: {
    async fetchJamsAsync(payload, rootState) {
      try {
        const response = await fetch(`http://localhost:3001/jams${payload}`);
        const data = await response.json();
        this.fetchJams(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
