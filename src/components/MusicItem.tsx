import styled from 'styled-components';
import EjectIcon from '@material-ui/icons/Eject';
import StopIcon from '@material-ui/icons/Stop';
import YoutubePlayer from './YoutubePlayer';
import { useRef } from 'react';

type MusicItemProps = {
  videoId: string;
  artist: string;
  title: string;
  open: boolean;
  onPlay: (videoId: string) => void;
  onStop: () => void;
};

const MusicItem = ({
  videoId,
  artist,
  title,
  open,
  onPlay,
  onStop,
}: MusicItemProps) => {
  const videoAreaRef = useRef(null);

  const handleClickTitle = () => {
    // history.push('/' + videoId);
  };

  return (
    <Container>
      <div ref={videoAreaRef}>
        {!open && (
          <Thumbnail
            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
            alt={title}
          />
        )}
        {open && <YoutubePlayer videoId={videoId} />}
      </div>

      <Footer>
        <Title onClick={handleClickTitle}>{title}</Title>
        <Artist>{artist}</Artist>
        <ToolBar>
          {!open && (
            <EjectIcon
              style={{ cursor: 'pointer' }}
              onClick={() => onPlay(videoId)}
            />
          )}
          {open && <StopIcon style={{ cursor: 'pointer' }} onClick={onStop} />}
        </ToolBar>
      </Footer>
    </Container>
  );
};

const Container = styled.article`
  border: 1px solid gainsboro;
  border-radius: 3px;
  overflow: hidden;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const Footer = styled.div`
  padding: 10px;
`;

const ToolBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  margin-bottom: 5px;
`;

const Artist = styled.p`
  color: grey;
  font-size: 14px;
  text-align: center;
  margin-bottom: 3px;
`;

export default MusicItem;
