import { mapApiCharacterToCharacter } from "@/adapters/IceAndFire";
import { Character } from "@/types/IceAndFire";
import type { Axios } from "axios";

export default class IceAndFireCharactersService {
  private caller: Axios;

  constructor(caller: Axios) {
    this.caller = caller;
  }

  async getCharacterById(id: Character["id"]): Promise<Character> {
    return this.caller
      .get(`/api/characters/${id}`)
      .then((res) => res.data)
      .then(mapApiCharacterToCharacter);
  }
}
