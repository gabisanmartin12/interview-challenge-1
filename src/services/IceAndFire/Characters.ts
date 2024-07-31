import { mapApiCharacterToCharacter } from "@/adapters/IceAndFire";
import type { Character } from "@/types/IceAndFire";
import type { Axios } from "axios";

export default class IceAndFireCharactersService {
  private caller: Axios;

  constructor(caller: Axios) {
    this.caller = caller;
  }

  getCharacterById = (id: Character["id"]): Promise<Character> =>
    this.caller
      .get(`/api/characters/${id}`)
      .then((res) => res.data)
      .then(mapApiCharacterToCharacter);
}
