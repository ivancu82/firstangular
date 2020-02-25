export interface CharacterI {
  id: number;
  name: string;
  image: string;
  url?: string;
}

export interface ApiRessponseI {
  info: {
    [key: string]: {
      count: number,
      pages: number,
      next: string,
      prev: string,
    }
  };
  results: CharacterI[];
}
