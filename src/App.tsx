import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Row from './components/layout/Row';
import All from './pages/All';
import Emotion from './pages/Emotion';

function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Nav>
            <Row gap={15}>
              <LinkItem to="/">All</LinkItem>
              <LinkItem to="/sadness">슬픔</LinkItem>
            </Row>
          </Nav>
        </Header>

        <Switch>
          <Route path="/sadness">
            <Emotion emotion="슬픔" />
          </Route>
          <Route path="/">
            <All />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

const StyledLink = styled(Link)`
  color: var(--color-font);
`;

type LinkItemProps = {
  to: string;
  children: React.ReactNode;
};

const LinkItem = ({ to, children }: LinkItemProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

const Container = styled.div`
  height: 100vh;
`;

const Header = styled.header`
  height: 50px;
  border-bottom: 1px solid var(--color-border);
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default App;
