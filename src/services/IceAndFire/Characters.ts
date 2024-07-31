import type { Axios } from "axios";

export default class IceAndFireCharactersService {
  private caller: Axios;

  constructor(caller: Axios) {
    this.caller = caller;
  }

  async getCharacterById(id: number) {
    return this.caller
      .get(`/api/characters/${id}`)
      .then((res) => res.data)
      .then(console.log);
  }
}
