import { Character } from "@/types/IceAndFire";

const CHARACTERS_KEYS = {
  all: ["characters"] as const,
  detail: (id: Character["id"]) =>
    [...CHARACTERS_KEYS.all, "detail", id] as const,
};

export default CHARACTERS_KEYS;
