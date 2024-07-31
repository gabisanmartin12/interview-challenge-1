export interface ApiCharacter {
  died: string;
  gender: string;
  name: string;

  // Unmapped properties
  aliases: string[];
  allegiance: string[];
  books: string[];
  born: string;
  culture: string;
  father: string;
  mother: string;
  playedBy: string[];
  povBooks: string[];
  spouse: string;
  titles: string[];
  tvSeries: string[];
  url: string;
}

export interface Character {
  deathReason: string | null;
  gender: string;
  hasDied: boolean;
  id: number;
  name: string;
}
