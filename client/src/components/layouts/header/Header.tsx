import { FC } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HeaderNavigationItem from "../../ui/HeaderNavigationItem";
const Header: FC = () => {
  // array of object of header navigation items
  const headerNavigationItems: { URL: string; content: string }[] = [
    { URL: "/", content: "Home" },
    { URL: "/about", content: "About" },
    { URL: "/battle", content: "Battle" },
  ];

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>Straight Outta Kanto</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "200px" }} navbarScroll>
              {headerNavigationItems.map((headerNavigationItem) => {
                return (
                  <HeaderNavigationItem
                    key={headerNavigationItem.URL}
                    URL={headerNavigationItem.URL}
                    content={headerNavigationItem.content}
                  />
                );
              })}
            </Nav>
            {/* <HeaderNavigationItem URL="" content="register" /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
