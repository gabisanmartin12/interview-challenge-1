import { mapApiHousesToHouses } from "@/adapters/IceAndFire";
import { client } from "@/services/IceAndFire/base.service";
import type { House } from "@/types/IceAndFire";

export const getHouses = (): Promise<House[]> =>
  client
    .get("/api/houses")
    .then((res) => res.data)
    .then(mapApiHousesToHouses);
