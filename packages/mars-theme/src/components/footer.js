import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import NAP from "./images/nap.png";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <Div>
        <a href="/"><Logo src={NAP} /></a>
        </Div>
      
        <Div>
        <a href= "/about"><b>About us</b></a>
          <a href="/">Home</a>
          <a href= "/about"> Who is North American Plastics</a>
        </Div>
        <Div>
          <b>Brands</b>
          <a href= "/sustainability">Sustainability</a>
          <a href= "/testimonials">Acquisiton Testimonials</a>
          <a href= "/brands">View All Brands</a>
        </Div>
        <Div>
          <b>Quick Links</b>
          <a href= "/career">Careers</a>
          <a href= "/college">College Recruitment</a>
        </Div>
        <Div>
          <b>Headquarters</b>
          <a>North American Plastics Service Center</a>
          <a>Irving, TX 75063</a>
        </Div>
      

      </Container>
    
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  border-top: black 1px solid;
  padding: 2rem;
  color: black;
  display: flex;
  align-items: top;
  justify-content: space-between;

  @media screen and (max-width: 860px) {
    text-align: center;
    font-size: .75rem;
    
  }

  @media screen and (max-width: 560px) {
    text-align: center;
    flex-direction: column;
    font-size: .75rem;
    
  }
`;

const Div = styled.div`
  width: 100%;
  max-width: 100%;
  padding: .5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

`;

const Logo = styled.img`
  width: 150px;
  height: 27px;
  margin-top: auto;
  margin-bottom: auto;
  @media screen and (max-width: 560px) {
    width: 150px;
  height: 27px;
}
  
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
