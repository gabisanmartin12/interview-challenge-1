import { mapApiHousesToHouses } from "@/adapters/IceAndFire";
import type { House } from "@/types/IceAndFire";
import { Axios } from "axios";

export default class IceAndFireHousesService {
  private caller: Axios;

  constructor(caller: Axios) {
    this.caller = caller;
  }

  async getHouses(): Promise<House[]> {
    return this.caller
      .get("/api/houses")
      .then((res) => res.data)
      .then(mapApiHousesToHouses);
  }
}
