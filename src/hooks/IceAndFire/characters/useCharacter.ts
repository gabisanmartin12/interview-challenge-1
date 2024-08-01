import CHARACTERS_KEYS from "@/hooks/IceAndFire/characters/keys";
import { getCharacterById } from "@/services/IceAndFire";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type Input = Parameters<typeof getCharacterById>[0];
type Output = Awaited<ReturnType<typeof getCharacterById>>;

export const useCharacter = <T = Output>(
  id: Input,
  options: Omit<UseQueryOptions<Output, Error, T>, "queryKey" | "queryFn"> = {}
) =>
  useQuery<Output, Error, T>({
    ...options,
    queryFn: () => getCharacterById(id),
    queryKey: CHARACTERS_KEYS.detail(id),
  });
