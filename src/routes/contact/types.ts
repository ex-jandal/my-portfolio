export enum SpenerKey {
  Show = "SHOW",
  Hide = "HIDE",
}

export const SpenerConfig = {
  [SpenerKey.Show]: { show: true, displayProp: "flex" },
  [SpenerKey.Hide]: { show: false, displayProp: "hidden" },
};
