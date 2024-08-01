import { getHouses } from "@/services/IceAndFire";
import HOUSES_KEYS from "./keys";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type Output = Awaited<ReturnType<typeof getHouses>>;

export const useHouses = <T = Output>(
  options: Omit<UseQueryOptions<Output, Error, T>, "queryKey" | "queryFn"> = {}
) =>
  useQuery<Output, Error, T>({
    ...options,
    queryFn: getHouses,
    queryKey: HOUSES_KEYS.all,
  });
