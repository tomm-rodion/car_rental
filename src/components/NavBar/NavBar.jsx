import { Header, Nav, Link } from './NavBar.styled';

export default function NavBar() {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="favorites">Favorites</Link>
        </Nav>
      </Header>
    </>
  );
}
