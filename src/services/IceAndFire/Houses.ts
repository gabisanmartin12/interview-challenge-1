import { Axios } from "axios";

export default class IceAndFireHousesService {
  private caller: Axios;

  constructor(caller: Axios) {
    this.caller = caller;
  }

  async getHouses() {
    return this.caller.get("/api/houses").then((res) => res.data);
  }
}
