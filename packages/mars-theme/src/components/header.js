import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import NAP from "./images/nap.png";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
        <Logo src={NAP} />
          <Nav />
          <MobileMenu />
        </StyledLink>
  
      </Container>
    
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background-color: white;
  padding: 3rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 300px;
  height: auto
  
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
`;
