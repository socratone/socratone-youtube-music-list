import styled from 'styled-components';

type YoutubePlayerProps = {
  videoId: string;
};

const YoutubePlayer = ({ videoId }: YoutubePlayerProps) => {
  return (
    <Container>
      <Iframe
        // type="text/html"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        // frameborder="0"
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative; /* absolute는 부모가 relative일 때 부모를 따라간다. */
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 비율 */
`;

const Iframe = styled.iframe`
  position: absolute;
  width: 100%; /* 부모에 맞게 꽉 채운다. */
  height: 100%;
  border: 0;
`;

export default YoutubePlayer;
