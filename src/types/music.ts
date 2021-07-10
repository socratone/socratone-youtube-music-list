export type Genre = 'r&b' | 'metal' | 'ballad' | 'rock' | 'classic';

type Tag = '애절한' | '평화로운' | 'emotional';

export type Music = {
  videoId: string;
  artist: string;
  title: string;
  genre: Genre;
  tags?: Tag[];
  rating: number;
};
