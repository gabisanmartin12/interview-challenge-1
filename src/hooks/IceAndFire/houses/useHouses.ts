import { getHouses } from "@/services/IceAndFire";
import HOUSES_KEYS from "./keys";
import { useInfiniteQuery } from "@tanstack/react-query";

type Input = Parameters<typeof getHouses>[0];

export const useHouses = ({ page = 1, pageSize = 10 }: Partial<Input> = {}) =>
  useInfiniteQuery({
    initialPageParam: page,
    queryFn: ({ pageParam }) => getHouses({ page: pageParam, pageSize }),
    queryKey: HOUSES_KEYS.all,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length % pageSize === 0) return lastPageParam + 1;
    },
    select: ({ pages }) => pages.flatMap((page) => page),
  });
