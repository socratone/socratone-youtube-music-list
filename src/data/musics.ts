import { Music } from '../types/music';
import sadness from './sadness';
import resolve from './resolve';
import hope from './hope';
import unclassified from './unclassified';
// import metal from './metal';
// import rock from './rock';
// import pop from './pop';
// import popRock from './popRock';
// import popBallad from './popBallad';
// import rnb from './rnb';

const musics: Music[] = [
  // {
  //   videoId: 'hRzJImkqRVQ',
  //   artist: '한수진',
  //   title: 'Ave Maria - Bach Gounod',
  //   genre: 'classic',
  //   rating: 5,
  // },
  // {
  //   videoId: 'fQ4DG0SBH-0',
  //   artist: '가을 방학',
  //   title: '가끔 미치도록 네가 안고싶어 질때가 있어',
  //   genre: 'ballad',
  //   rating: 5,
  // },
];

export default musics
  .concat(sadness)
  .concat(resolve)
  .concat(hope)
  .concat(unclassified);
