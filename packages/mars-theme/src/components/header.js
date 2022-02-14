import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import NAP from "./images/nap.png";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        
        <a href="/"><Logo src={NAP} /></a>
          <Nav />
        

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
  padding: 2rem;
  color: black;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 300px;
  height: 55px;
  @media screen and (max-width: 560px) {
    width: 150px;
  height: 22.5px;}
  
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
