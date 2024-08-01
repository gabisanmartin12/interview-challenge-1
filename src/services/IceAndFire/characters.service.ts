import { mapApiCharacterToCharacter } from "@/adapters/IceAndFire";
import { client } from "@/services/IceAndFire/base.service";
import type { Character } from "@/types/IceAndFire";

export const getCharacterById = (id: Character["id"]): Promise<Character> =>
  client
    .get(`/api/characters/${id}`)
    .then((res) => res.data)
    .then(mapApiCharacterToCharacter);
