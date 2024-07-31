import CHARACTERS_KEYS from "@/hooks/IceAndFire/characters/keys";
import services from "@/services";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type Input = Parameters<
  typeof services.iceAndFire.characters.getCharacterById
>[0];
type Output = Awaited<
  ReturnType<typeof services.iceAndFire.characters.getCharacterById>
>;

export const useCharacter = <T = Output>(
  id: Input,
  options: Omit<UseQueryOptions<Output, Error, T>, "queryKey" | "queryFn"> = {}
) =>
  useQuery<Output, Error, T>({
    ...options,
    queryFn: () => services.iceAndFire.characters.getCharacterById(id),
    queryKey: CHARACTERS_KEYS.detail(id),
  });
