import type { ApiHouse, House } from "@/types/IceAndFire";
import { extractIdFromUrl } from "@/utils";

export const mapApiHouseToHouse = (apiHouse: ApiHouse): House => ({
  id: extractIdFromUrl(apiHouse.url),
  name: apiHouse.name,
  region: apiHouse.region,
  swornMembersIds: apiHouse.swornMembers.map(extractIdFromUrl),
  words: apiHouse.words || null,
});

export const mapApiHousesToHouses = (apiHouses: ApiHouse[]): House[] =>
  apiHouses.map(mapApiHouseToHouse);
