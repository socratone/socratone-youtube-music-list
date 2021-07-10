import styled from 'styled-components';

type MainGridProps = {
  children: React.ReactNode;
};

const MainGrid = ({ children }: MainGridProps) => {
  return <GridContainer>{children}</GridContainer>;
};

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export default MainGrid;
