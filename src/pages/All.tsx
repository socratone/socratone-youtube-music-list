import _ from 'lodash';
import { useEffect } from 'react';
import { useState } from 'react';
import MainContainer from '../components/layout/MainContainer';
import MainGrid from '../components/layout/MainGrid';
import MusicItem from '../components/MusicItem';
import data from '../data/musics';
import { Music } from '../types/music';

const All = () => {
  const [opens, setOpens] = useState<boolean[]>([]);
  const [musics, setMusics] = useState<Music[]>([]);

  useEffect(() => {
    setMusics(data);

    const initialOpens = data.map(() => false);
    setOpens(initialOpens);
  }, []);

  const playVideo = (index: number) => {
    const newOpens = _.cloneDeep(opens);
    const resetedOpens = newOpens.map(() => false);
    resetedOpens[index] = true;
    setOpens(resetedOpens);
  };

  const handlePlay = (videoId: string) => {
    const clickedIndex = musics.findIndex((music) => music.videoId === videoId);
    playVideo(clickedIndex);
  };

  const handleStop = () => {
    const newOpens = _.cloneDeep(opens);
    const resetedOpens = newOpens.map(() => false);
    setOpens(resetedOpens);
  };

  const handleEnd = (index: number) => {
    if (index === opens.length - 1) playVideo(0);
    else playVideo(index + 1);
  };

  return (
    <MainContainer>
      <MainGrid>
        {musics.map((music, index) => (
          <MusicItem
            key={music.videoId}
            open={opens[index]}
            artist={music.artist}
            title={music.title}
            videoId={music.videoId}
            rating={music.rating}
            onPlay={handlePlay}
            onStop={handleStop}
            onEnd={() => handleEnd(index)}
          />
        ))}
      </MainGrid>
    </MainContainer>
  );
};

export default All;
