import hulk from '../assets/hulk.jpg';
import iron_man from '../assets/iron-man.jpg';
import spider_man from '../assets/spider-man.jpg';
import black_widow from '../assets/black-widow.jpg';
import captain_america from '../assets/captain-america.jpg';
import Avengers_Disassembled from '../assets/Avengers Disassembled.jpg';
import Amazing_Spider_Man from '../assets/The Amazing Spider Man.jpg';
import Avengers_Infinity_War from '../assets/Avengers_Infinity_War.jpg';
import Captain_America_Civil_War from '../assets/Captain_America_Civil_War.jpg';
import Black_Widow_Things_They_Say from '../assets/Black_Widow_Things_They_Say.jpg';

export const characters = [
  {
    id: 1,
    name: 'Iron Man',
    description: 'Tony Stark, billionaire, brilliant inventor and playboy, he created a high-tech suit to maintain his life and save his kidnappers. Since then, he has improved his suit and became known as Iron Man, protecting the world from threats.',
    image: iron_man,
    comics: [1, 3, 5]
  },
  {
    id: 2,
    name: 'Spider Man',
    description: 'Peter Parker, a teenager who gained spider powers after being bitten by a radioactive spider. He uses his new powers to fight crime in New York City, often facing moral dilemmas and personal loss while trying to balance his life as a hero and a normal teenager.',
    image: spider_man,
    comics: [1, 2, 3, 5]
  },
  {
    id: 3,
    name: 'Black Widow',
    description: 'Natasha Romanova, a highly skilled spy and martial artist. Spent most of her life studying in Russia, she now uses her skills to fight for justice and redemption.',
    image: black_widow,
    comics: [1, 3, 4, 5]
  },
  {
    id: 4,
    name: 'Captain America',
    description: 'Steve Rogers, a World War II soldier who became a symbol of freedom and justice after receiving the super soldier serum. He fights against evil with the help of his shield and ideals.',
    image: captain_america,
    comics: [1, 3, 5]
  },
  {
    id: 5,
    name: 'Hulk',
    description: "Bruce Banner, a genius scientist who, when exposed to gamma radiation, transforms into the Hulk, a huge green monster with incredible strength. The Hulk is a product of Banner's rage and often struggles to control his transformation.",
    image: hulk,
    comics: [1, 3, 5]
  }
];

export const comics = [
  {
    id: 1,
    name: "Avengers: Disassembled",
    description: "An event that sees the Avengers torn apart by betrayal and emotional turmoil, leading to the disbandment of the team.", 
    image: Avengers_Disassembled,
    characters_id: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    name: "The Amazing Spider-Man",
    image: Amazing_Spider_Man,
    description: "A storyline where Doctor Octopus swaps bodies with Peter Parker, leading to Otto Octavius taking on the role of Spider-Man.",
    characters_id: [2]
  },
  {
    id: 3,
    name: "Infinity War",
    image: Avengers_Infinity_War,
    description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    characters_id: [1,2,3,4,5]
  },
  {
    id: 4,
    name: "Black Widow: The Things They Say About Her",
    image: Black_Widow_Things_They_Say,
    description: "A miniseries that delves into Black Widow's past, exploring the rumors and truths of her life as a spy and Avenger.",
    characters_id: [3]
  },
  {
    id: 5,
    name: "Captain America: Civil War",
    image: Captain_America_Civil_War,
    description: "Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. This creates a rift between the heroes, splitting them into opposing factions.",
    characters_id: [1,2,3,4,5]
  },
]

