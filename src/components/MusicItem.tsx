import styled from 'styled-components';
import EjectIcon from '@material-ui/icons/Eject';
import StopIcon from '@material-ui/icons/Stop';
import YoutubePlayer from './YoutubePlayer';
import Row from './layout/Row';

type MusicItemProps = {
  videoId: string;
  artist: string;
  title: string;
  open: boolean;
  onPlay: (videoId: string) => void;
  onStop: () => void;
  rating: number;
};

const MusicItem = ({
  videoId,
  artist,
  title,
  open,
  onPlay,
  onStop,
  rating,
}: MusicItemProps) => {
  const setStar = () => {
    let stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  };

  return (
    <Container>
      {!open && (
        <Thumbnail
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt={title}
        />
      )}
      {open && <YoutubePlayer videoId={videoId} />}

      <Footer>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
        <Row gap={3} justifyContent="center">
          {setStar()}
        </Row>
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

const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 5px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Artist = styled.p`
  color: grey;
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
`;

const Star = () => <div style={{ width: '20px', height: '20px' }}>⭐️</div>;

const ToolBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MusicItem;
