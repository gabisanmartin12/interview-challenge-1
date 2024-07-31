export interface ApiHouse {
  name: string;
  region: string;
  swornMembers: string[];
  words: string;

  // Unmapped properties
  ancestralWeapons: string[];
  cadetBranches: string[];
  coatOfArms: string;
  currentLord: string;
  diedOut: string;
  founded: string;
  founder: string;
  heir: string;
  overlord: string;
  seats: string[];
  titles: string[];
  url: string;
}

export interface House {
  id: number;
  name: string;
  region: string;
  swornMembersIds: number[];
  words: string | null;
}
