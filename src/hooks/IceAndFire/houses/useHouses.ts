import HOUSES_KEYS from "./keys";
import services from "@/services";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type Output = Awaited<ReturnType<typeof services.iceAndFire.houses.getHouses>>;

export const useHouses = <T = Output>(
  options?: Omit<UseQueryOptions<Output, Error, T>, "queryKey" | "queryFn">
) =>
  useQuery<Output, Error, T>({
    ...options,
    queryFn: services.iceAndFire.houses.getHouses,
    queryKey: HOUSES_KEYS.all,
  });
