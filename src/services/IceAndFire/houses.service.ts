import { mapApiHousesToHouses } from "@/adapters/IceAndFire";
import { client } from "@/services/IceAndFire/base.service";
import { Paginated } from "@/types";
import type { House } from "@/types/IceAndFire";

export const getHouses = (params: Paginated): Promise<House[]> =>
  client
    .get("/api/houses", { params })
    .then((res) => res.data)
    .then(mapApiHousesToHouses);
