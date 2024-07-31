import IceAndFireService from "./IceAndFire";

export default {
  iceAndFire: new IceAndFireService(import.meta.env.VITE_API_URL),
};
