import { Music } from '../types/music';
import metal from './metal';
import rock from './rock';
import pop from './pop';
import popRock from './popRock';
import popBallad from './popBallad';

const musics: Music[] = [
  {
    videoId: 'FApu12-BJNk',
    artist: 'Dara Maclean',
    title: 'For Once In My Life',
    genre: 'r&b',
    tags: [],
    rating: 5,
  },
  {
    videoId: 'hRzJImkqRVQ',
    artist: '한수진',
    title: 'Ave Maria - Bach Gounod',
    genre: 'classic',
    tags: ['평화로운'],
    rating: 5,
  },
  {
    videoId: 'fQ4DG0SBH-0',
    artist: '가을 방학',
    title: '가끔 미치도록 네가 안고싶어 질때가 있어',
    genre: 'ballad',
    tags: ['평화로운'],
    rating: 5,
  },
];

export default musics
  .concat(metal)
  .concat(rock)
  .concat(pop)
  .concat(popRock)
  .concat(popBallad);
