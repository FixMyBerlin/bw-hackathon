export const getNetworkName = (nid: number) =>
  ({
    1: "Freizeitnetz",
    3: "Alltagsnetz",
    4: "Zielnetz",
    6: "Alltag/Freizeit-Netz",
  }[nid]);
