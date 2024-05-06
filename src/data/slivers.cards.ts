import { Card, CardType, Mana } from '../types'

const cards = [
  {
    id: '2zR2j',
    name: 'Island',
    manaCost: new Set([]),
    type: CardType.BasicLand,
    typeText: 'Basic Land — Island',
    oracleText: '({T}: Add {U}.)',
    produces: new Set([Mana.Blue]),
    copies: 1
  },
  {
    id: 'YBb8W',
    name: 'Mountain',
    manaCost: new Set([]),
    type: CardType.BasicLand,
    typeText: 'Basic Land — Mountain',
    oracleText: '({T}: Add {R}.)',
    produces: new Set([Mana.Red]),
    copies: 1
  },
  {
    id: 'LVROx',
    name: 'Plains',
    manaCost: new Set([]),
    type: CardType.BasicLand,
    typeText: 'Basic Land — Plains',
    oracleText: '({T}: Add {W}.)',
    produces: new Set([Mana.White]),
    copies: 1
  },
  {
    id: 'lojRl',
    name: 'Forest',
    manaCost: new Set([]),
    type: CardType.BasicLand,
    typeText: 'Basic Land — Forest',
    oracleText: '({T}: Add {G}.)',
    produces: new Set([Mana.Green]),
    copies: 4
  },
  {
    id: 'LDpO5',
    name: 'Swamp',
    manaCost: new Set([]),
    type: CardType.BasicLand,
    typeText: 'Basic Land — Swamp',
    oracleText: '({T}: Add {B}.)',
    produces: new Set([Mana.Black]),
    copies: 1
  },
  {
    id: 'Wavlb',
    name: 'Command Tower',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: "{T}: Add one mana of any color in your commander's color identity.",
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Black,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'YBBlG',
    name: 'Ancient Ziggurat',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: '{T}: Add one mana of any color. Spend this mana only to cast a creature spell.',
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Black,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'o8Dxj',
    name: 'Crumbling Necropolis',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: 'Crumbling Necropolis enters the battlefield tapped.\n{T}: Add {U}, {B}, or {R}.',
    produces: new Set([
      Mana.Blue,
      Mana.Black,
      Mana.Red
    ]),
    copies: 1
  },
  {
    id: '01ywl',
    name: 'Scoured Barrens',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: 'Scoured Barrens enters the battlefield tapped.\nWhen Scoured Barrens enters the battlefield, you gain 1 life.\n{T}: Add {W} or {B}.',
    produces: new Set([
      Mana.White,
      Mana.Black
    ]),
    copies: 1
  },
  {
    id: 'o83ej',
    name: 'Unclaimed Territory',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: 'As Unclaimed Territory enters the battlefield, choose a creature type.\n{T}: Add {C}.\n{T}: Add one mana of any color. Spend this mana only to cast a creature spell of the chosen type.',
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Black,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'aQv1O',
    name: 'Tranquil Cove',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: 'Tranquil Cove enters the battlefield tapped.\nWhen Tranquil Cove enters the battlefield, you gain 1 life.\n{T}: Add {W} or {U}.',
    produces: new Set([
      Mana.White,
      Mana.Blue
    ]),
    copies: 1
  },
  {
    id: 'LRwPl',
    name: 'Exotic Orchard',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: '{T}: Add one mana of any color that a land an opponent controls could produce.',
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Black,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'Q48BB',
    name: 'Seaside Citadel',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: 'Seaside Citadel enters the battlefield tapped.\n{T}: Add {G}, {W}, or {U}.',
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'Q4pq2',
    name: 'Path of Ancestry',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: "Path of Ancestry enters the battlefield tapped.\n{T}: Add one mana of any color in your commander's color identity. When that mana is spent to cast a creature spell that shares a creature type with your commander, scry 1. (Look at the top card of your library. You may put that card on the bottom.)",
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Black,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: '4303N',
    name: 'Naya Panorama',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: '{T}: Add {C}.\n{1}, {T}, Sacrifice Naya Panorama: Search your library for a basic Mountain, Forest, or Plains card, put it onto the battlefield tapped, then shuffle.',
    produces: new Set([]),
    copies: 1
  },
  {
    id: 'jqnzy',
    name: 'Brushland',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: '{T}: Add {C}.\n{T}: Add {G} or {W}. Brushland deals 1 damage to you.',
    produces: new Set([
      Mana.White,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'EQaBa',
    name: 'Karplusan Forest',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: '{T}: Add {C}.\n{T}: Add {R} or {G}. Karplusan Forest deals 1 damage to you.',
    produces: new Set([
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: '3q3pJ',
    name: 'Battlefield Forge',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: '{T}: Add {C}.\n{T}: Add {R} or {W}. Battlefield Forge deals 1 damage to you.',
    produces: new Set([
      Mana.White,
      Mana.Red
    ]),
    copies: 1
  },
  {
    id: 'ZOdMN',
    name: "Rith's Grove",
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land — Lair',
    oracleText: "When Rith's Grove enters the battlefield, sacrifice it unless you return a non-Lair land you control to its owner's hand.\n{T}: Add {R}, {G}, or {W}.",
    produces: new Set([
      Mana.White,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'vrr6e',
    name: 'Reflecting Pool',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: '{T}: Add one mana of any type that a land you control could produce.',
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Black,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'vrRw1',
    name: 'Flood Plain',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: 'Flood Plain enters the battlefield tapped.\n{T}, Sacrifice Flood Plain: Search your library for a Plains or Island card, put it onto the battlefield, then shuffle.',
    produces: new Set([]),
    copies: 1
  },
  {
    id: 'naK43',
    name: 'Grasslands',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: 'Grasslands enters the battlefield tapped.\n{T}, Sacrifice Grasslands: Search your library for a Forest or Plains card, put it onto the battlefield, then shuffle.',
    produces: new Set([]),
    copies: 1
  },
  {
    id: 'pRWRj',
    name: 'Mountain Valley',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: 'Mountain Valley enters the battlefield tapped.\n{T}, Sacrifice Mountain Valley: Search your library for a Mountain or Forest card, put it onto the battlefield, then shuffle.',
    produces: new Set([]),
    copies: 1
  },
  {
    id: 'EJ3A8',
    name: 'Indatha Triome',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land — Plains Swamp Forest',
    oracleText: '({T}: Add {W}, {B}, or {G}.)\nIndatha Triome enters the battlefield tapped.\nCycling {3} ({3}, Discard this card: Draw a card.)',
    produces: new Set([
      Mana.White,
      Mana.Black,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'E13ZA',
    name: 'Ketria Triome',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land — Forest Island Mountain',
    oracleText: '({T}: Add {G}, {U}, or {R}.)\nKetria Triome enters the battlefield tapped.\nCycling {3} ({3}, Discard this card: Draw a card.)',
    produces: new Set([
      Mana.Blue,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'Yl9xn',
    name: 'Savai Triome',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land — Mountain Plains Swamp',
    oracleText: '({T}: Add {R}, {W}, or {B}.)\nSavai Triome enters the battlefield tapped.\nCycling {3} ({3}, Discard this card: Draw a card.)',
    produces: new Set([
      Mana.White,
      Mana.Black,
      Mana.Red
    ]),
    copies: 1
  },
  {
    id: 'kpZWO',
    name: 'Raugrin Triome',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land — Island Mountain Plains',
    oracleText: '({T}: Add {U}, {R}, or {W}.)\nRaugrin Triome enters the battlefield tapped.\nCycling {3} ({3}, Discard this card: Draw a card.)',
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Red
    ]),
    copies: 1
  },
  {
    id: 'L3vm1',
    name: 'Zagoth Triome',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land — Swamp Forest Island',
    oracleText: '({T}: Add {B}, {G}, or {U}.)\nZagoth Triome enters the battlefield tapped.\nCycling {3} ({3}, Discard this card: Draw a card.)',
    produces: new Set([
      Mana.Blue,
      Mana.Black,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'pRO91',
    name: 'Secluded Courtyard',
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land',
    oracleText: 'As Secluded Courtyard enters the battlefield, choose a creature type.\n{T}: Add {C}.\n{T}: Add one mana of any color. Spend this mana only to cast a creature spell of the chosen type or activate an ability of a creature source of the chosen type.',
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Black,
      Mana.Red,
      Mana.Green]),
    copies: 1
  },
  {
    id: '01yg5',
    name: "Spara's Headquarters",
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land — Forest Plains Island',
    oracleText: "({T}: Add {G}, {W}, or {U}.)\nSpara's Headquarters enters the battlefield tapped.\nCycling {3} ({3}, Discard this card: Draw a card.)",
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'vrOAV',
    name: "Raffine's Tower",
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land — Plains Island Swamp',
    oracleText: "({T}: Add {W}, {U}, or {B}.)\nRaffine's Tower enters the battlefield tapped.\nCycling {3} ({3}, Discard this card: Draw a card.)",
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Black
    ]),
    copies: 1
  },
  {
    id: 'O94D0',
    name: "Ziatora's Proving Ground",
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land — Swamp Mountain Forest',
    oracleText: "({T}: Add {B}, {R}, or {G}.)\nZiatora's Proving Ground enters the battlefield tapped.\nCycling {3} ({3}, Discard this card: Draw a card.)",
    produces: new Set([
      Mana.Black,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'BX6OP',
    name: "Xander's Lounge",
    manaCost: new Set([]),
    type: CardType.Land,
    typeText: 'Land — Island Swamp Mountain',
    oracleText: "({T}: Add {U}, {B}, or {R}.)\nXander's Lounge enters the battlefield tapped.\nCycling {3} ({3}, Discard this card: Draw a card.)",
    produces: new Set([Mana.Blue, Mana.Black, Mana.Red]),
    copies: 1
  },
  {
    id: 'ErnNK',
    name: 'Birds of Paradise',
    type: CardType.Creature,
    typeText: 'Creature - Bird',
    oracleText: 'Flying\n{T}: Add one mana of any color.',
    manaCost: new Set([Mana.Green]),
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Black,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'L3WKv',
    name: 'Druid of the Anima',
    type: CardType.Creature,
    typeText: 'Creature - Elf Druid',
    oracleText: '{T}: Add {R}, {G}, or {W}.',
    manaCost: new Set([
      Mana.Green,
      Mana.Colorless
    ]),
    produces: new Set([
      Mana.White,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: '3qD31',
    name: 'Arcane Signet',
    type: CardType.Artifact,
    typeText: 'Artifact',
    oracleText: '{T}: Add one mana of any color.',
    manaCost: new Set([
      Mana.Colorless,
      Mana.Colorless
    ]),
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Black,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  },
  {
    id: 'bRmNg',
    name: "Commander's Sphere",
    type: CardType.Artifact,
    typeText: 'Artifact',
    oracleText: '{T}: Add one mana of any color.',
    manaCost: new Set([
      Mana.Colorless,
      Mana.Colorless,
      Mana.Colorless
    ]),
    produces: new Set([
      Mana.White,
      Mana.Blue,
      Mana.Black,
      Mana.Red,
      Mana.Green
    ]),
    copies: 1
  }
] as Card[]

export default cards
