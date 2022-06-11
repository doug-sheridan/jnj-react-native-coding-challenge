export type ComicItem = {
  resourceURI: string;
  name: string;
};

export type MarvelCharacter = {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    items: ComicItem[];
  };
  urls: {
    type: string;
    url: string;
  }[];
};
