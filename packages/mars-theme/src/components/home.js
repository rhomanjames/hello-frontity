import { connect, styled } from "frontity";


const Home = ({  }) => {
  return (
<StyledDiv>
    <FlexDiv>
        <VertDiv>
            <Title>Great People <br /> Great Culture</Title>
            <p>We're the #1 plastics wholesale distributor in North America for a reason. </p>
            <Button>About us</Button>
        </VertDiv>
    </FlexDiv>
    <FlexDiv>
        <VertDiv>
            <Title>Great People <br /> Great Culture</Title>
            <p>We're the #1 plastics wholesale distributor in North America for a reason. </p>
            <Button>About us</Button>
        </VertDiv>
    </FlexDiv>
</StyledDiv>

  )}

  
const StyledDiv = styled.div`
width: 100%;
padding: 1rem;
text-align: center;
justify-content: center;

`;

const Card = styled.div`
width: 200px;
height: 200px;
margin-left: 1rem;
margin-right: 1rem;
padding: .25rem;
background: black;
text-align: center;
justify-content: center;

`;

const BigText = styled.h1`
font-size: 4rem;
font-weight: 600;
text-align: left;

`;

const SmallText = styled.p`
font-size: 1rem;

`;
const Button = styled.button`
font-size: 1rem;
border: none;
padding: .75rem;
border-radius: 25px;
background: green;
color: white

`;

const ULText = styled.p`
font-size: 1rem;
  text-decoration: underline;
`;

const Title = styled.h1`
font-size: 5rem;

`;

const GreenDiv = styled.div`
  justify-self: center;
  text-align: center;
  color: white;
  height: fit-conent;
  background: green;
  padding: 1rem;
  border-radius: 20px;
  margin-right: 2rem;
  margin-left: 2rem;
`;

const FlexDiv = styled.div`
width: 100%;
height: 100vh
padding: 1rem;
display: flex;
text-align: center;
justify-content: center;

`;

const VertDiv = styled.div`
width: 100%;
padding: 1rem;
text-align: left;
justify-content: left;

`;
export default connect(Home);