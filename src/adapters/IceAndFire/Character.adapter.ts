import type { ApiCharacter, Character } from "@/types/IceAndFire";
import { extractIdFromUrl } from "@/utils";

export const mapApiCharacterToCharacter = (
  apiCharacter: ApiCharacter
): Character => ({
  id: extractIdFromUrl(apiCharacter.url),
  name: apiCharacter.name,
  hasDied: apiCharacter.died !== "",
  deathReason: apiCharacter.died || null,
  gender: apiCharacter.gender,
});
