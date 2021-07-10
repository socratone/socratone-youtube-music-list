import _ from 'lodash';
import { useEffect } from 'react';
import { useState } from 'react';
import MainContainer from '../components/layout/MainContainer';
import MainGrid from '../components/layout/MainGrid';
import MusicItem from '../components/MusicItem';
import musics from '../data/musics';

const Ballad = () => {
  const [opens, setOpens] = useState<boolean[]>([]);

  useEffect(() => {
    const initialOpens = musics.map(() => false);
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
            onPlay={handlePlay}
            onStop={handleStop}
          />
        ))}
      </MainGrid>
    </MainContainer>
  );
};

export default Ballad;
