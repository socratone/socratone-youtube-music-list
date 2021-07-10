import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Row from './components/layout/Row';
import All from './pages/All';
import Genre from './pages/Genre';

function App() {
  return (
    <Router>
      <Container>
        <Header>
          <Nav>
            <Row gap={10}>
              <LinkItem to="/">All</LinkItem>
              <LinkItem to="/ballad">Ballad</LinkItem>
              <LinkItem to="/rock">Rock</LinkItem>
              <LinkItem to="/metal">Metal</LinkItem>
            </Row>
          </Nav>
        </Header>

        <Switch>
          <Route path="/ballad">
            <Genre genre="ballad" />
          </Route>
          <Route path="/rock">
            <Genre genre="rock" />
          </Route>
          <Route path="/metal">
            <Genre genre="metal" />
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
  color: black;
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
  border-bottom: gainsboro 1px solid;
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
