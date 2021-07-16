import YouTube from 'react-youtube';
import styled from 'styled-components';

type YoutubePlayerProps = {
  videoId: string;
  onEnd: () => void;
};

const YoutubePlayer = ({ videoId, onEnd }: YoutubePlayerProps) => {
  return (
    <Container>
      <StyledYoutube
        videoId={videoId}
        opts={{
          playerVars: {
            autoplay: 1,
          },
        }}
        onEnd={onEnd}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative; /* absolute는 부모가 relative일 때 부모를 따라간다. */
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 비율 */
`;

const StyledYoutube = styled(YouTube)`
  position: absolute;
  width: 100%; /* 부모에 맞게 꽉 채운다. */
  height: 100%;
  border: 0;
`;

export default YoutubePlayer;
