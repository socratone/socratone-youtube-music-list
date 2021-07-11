export type Emotion = '슬픔' | '기쁨';

export type Music = {
  videoId: string;
  artist: string;
  title: string;
  emotion: Emotion;
  rating: number;
};
