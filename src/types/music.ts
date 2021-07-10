export type Genre = 'metal' | 'ballad' | 'rock';

type Tag = '애절한' | '평화로운' | 'emotional';

export type Music = {
  videoId: string;
  artist: string;
  title: string;
  genre: Genre;
  tags?: Tag[];
  rating: number;
};
