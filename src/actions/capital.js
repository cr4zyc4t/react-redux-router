export const CAPITAL_SET_TEXT = "HOME_SET_TEXT";

export const setText = (text) => ({
  type: CAPITAL_SET_TEXT,
  payload: {
    text,
  },
});
