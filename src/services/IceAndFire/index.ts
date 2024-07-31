import { Axios } from "axios";
import IceAndFireHousesService from "./Houses";
import IceAndFireCharactersService from "@/services/IceAndFire/Characters";

export default class IceAndFireService {
  private caller: Axios;
  characters: IceAndFireCharactersService;
  houses: IceAndFireHousesService;

  constructor(baseURL: string) {
    this.caller = new Axios({
      baseURL,
      transformResponse: (data: string) => JSON.parse(data),
    });

    this.characters = new IceAndFireCharactersService(this.caller);
    this.houses = new IceAndFireHousesService(this.caller);
  }
}
