export type Music = {
  videoId: string;
  artist: string;
  title: string;
  tags: string[];
  rating: number;
};

const musics: Music[] = [
  {
    videoId: 'FApu12-BJNk',
    artist: 'Dara Maclean',
    title: 'For Once In My Life',
    tags: ['emotional', 'pop'],
    rating: 5,
  },
  {
    videoId: 'O71zRU_sj4k',
    artist: '이문세, 김윤희',
    title: '휘파람',
    tags: ['애절한'],
    rating: 5,
  },
  {
    videoId: 'Lx61vBPj_iY',
    artist: '이문세, 김윤희',
    title: '그녀의 웃음소리뿐',
    tags: ['애절한'],
    rating: 5,
  },
  {
    videoId: 'hRzJImkqRVQ',
    artist: '한수진',
    title: 'Ave Maria - Bach Gounod',
    tags: ['평화로운'],
    rating: 5,
  },
  {
    videoId: 'fQ4DG0SBH-0',
    artist: '가을 방학',
    title: '가끔 미치도록 네가 안고싶어 질때가 있어',
    tags: ['평화로운'],
    rating: 5,
  },
];

export default musics;
