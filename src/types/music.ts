export type Emotion = '슬픔' | '각오' | '희망' | '미분류';

export type Music = {
  videoId: string;
  artist: string;
  title: string;
  emotion: Emotion;
  rating: number;
};
