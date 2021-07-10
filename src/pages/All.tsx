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

  const handlePlay = (videoId: string) => {
    const newOpens = _.cloneDeep(opens);
    const resetedOpens = newOpens.map(() => false);
    const clickedIndex = musics.findIndex((music) => music.videoId === videoId);
    resetedOpens[clickedIndex] = true;
    setOpens(resetedOpens);
  };

  const handleStop = () => {
    const newOpens = _.cloneDeep(opens);
    const resetedOpens = newOpens.map(() => false);
    setOpens(resetedOpens);
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
          />
        ))}
      </MainGrid>
    </MainContainer>
  );
};

export default All;
