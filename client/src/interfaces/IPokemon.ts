export interface IPokemon {
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: any;
  game_indices: any;
  height: number;
  held_items: any;
  id: number;
  is_default: boolean;
  location_area_encounters: any;
  moves: { move: { name: string; url: string } }[];
  name: string;
  order: number;
  past_types: any;
  species: any;
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    stats: { base_stat: number; effort: number; stat: { name: string; url: string } }[];
    types: { slot: number; type: { name: string; url: string } }[];
    weight: number;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  types: { type: { name: string; url: string } }[];
  weight: number;
}
