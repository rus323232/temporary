import { updateField } from 'vuex-map-fields';

export default {
  setStateData(state, { key = null, newData = {} }) {
    if (!state[key]) return false;

    if (typeof newData === 'object') {
      state[key] = { ...newData };
    } else {
      state[key] = newData;
    }
    return true;
  },
  updateField,
};
