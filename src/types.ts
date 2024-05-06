export enum Mana {
  Red,
  Blue,
  Green,
  White,
  Black,
  Colorless,
}

export enum CardType {
  Creature,
  Instant,
  Sorcery,
  Enchantment,
  Artifact,
  Planeswalker,
  Land,
  BasicLand,
}

export interface Card {
  id: string;
  name: string;
  manaCost: Set<Mana>;
  type: CardType;
  typeText: string;
  oracleText: string;
  produces: Set<Mana>;
  copies: number;
}

export interface Deck {
  name: string;
  cards: Card[];
  colors: Set<Mana>;
  commander?: Card;
  image?: string;
}

export enum AvailableDeck {
  SeriousSlivers = 'serious-slivers'
}
