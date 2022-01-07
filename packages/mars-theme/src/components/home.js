import { connect, styled } from "frontity";


const Home = ({  }) => {
  return (
<StyledDiv>
    <FlexDiv>
        <VertDiv>
            <Title>Great People <br /> Great Culture</Title>
            <h2>We're the #1 plastics wholesale distributor in North America for a reason. </h2>
            <GreenButton ><a href="#about">Learn more</a></GreenButton>
        </VertDiv>
    </FlexDiv>

            <GFlexDiv>
                <HalfDiv>
                </HalfDiv>
                <GreenDiv>
                    <Subtitle id="about">About us</Subtitle>
                <Text>
                Looking for wholesale plastic? With 16 brands in over 115 locations,  we've got what you need. Whether it’s graphics and signage, transportation or industrial, we're the one-stop-shop for your plastic needs.
                    </Text>
                    <Button>Learn more</Button>
                </GreenDiv>
            </GFlexDiv>

            <FlexDiv>
            <HalfDiv>
                    <Subtitle>Our Brands</Subtitle>
                <Text>
                Our team stretches from coast to coast to ensure that all of our customers are treated with personalized care. Our expert team provides the most diverse product offering on the market, so we’re confident that we have what you need when you need it.   
                    </Text>
                    <SmFlexDiv>
                      <GreenButton>Our brands</GreenButton>
                      <GreenButton>Acquisitions</GreenButton>
                    </SmFlexDiv>
                </HalfDiv>
                <HalfDiv>
                </HalfDiv>

            </FlexDiv>

            <GFlexDiv>
                <HalfDiv>
                </HalfDiv>
                <GreenDiv>
                    <Subtitle>Careers</Subtitle>
                <Text>
                See what it’s like to be a part of a winning team. Our commitment to your professional development ensures that you have a clear opportunity for growth within our company.  
                    </Text>
                    <Button>Join us</Button>
                </GreenDiv>
            </GFlexDiv>
            <VertDiv>
              <CenterDiv>
              <Subtitle>Contact us</Subtitle>
      
      <Text>Name</Text>
      <Input type="text" placeholder="Type here"></Input>
      
      
     
      <Text>Email Address</Text>
      <Input type="text" placeholder="Type here"></Input>
     
      <Text>Message</Text>
      <Textarea type="text" placeholder="Type here"></Textarea>
              </CenterDiv>
            
            </VertDiv>

            
</StyledDiv>

  )}

  
const StyledDiv = styled.div`
width: 100%;
text-align: center;
justify-content: center;

`;

const CenterDiv = styled.div`
width: 100%;
padding: 1rem;
text-align: left;
justify-content: left;
align-items: left;
`;

const HalfDiv = styled.div`
text-align: left;
width: 50%;
padding: 3rem;
justify-content: left;

`;

const Textarea = styled.textarea`
padding: 1rem;
border-radius: 25px;
border: none;
width: 25%;
height: 50px;

`;

const Input = styled.input`
padding: 1rem;
border-radius: 25px;
border: 1px solid #f1f1f1;
height: fit-content;

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

const GreenButton = styled.button`
font-size: 1rem;
border: none;
padding: .75rem;
border-radius: 25px;
background: green;
color: white;
height: fit-content;
margin-right: 1rem;

`;

const Button = styled.button`
font-size: 1rem;
border: none;
padding: .75rem;
border-radius: 25px;
background: white;
color: black;
height: fit-content;
margin-right: 1rem;

`;

const Text = styled.p`
font-size: 1.5rem;
text-align: left;
font-weight:600;
text-align: left;

`;

const ULText = styled.p`
font-size: 1rem;
  text-decoration: underline;
`;

const Title = styled.h1`
font-size: 5rem;

`;

const Subtitle = styled.h1`
font-size: 4rem;

`;

const GreenDiv = styled.div`
  
  padding: 2rem;
  text-align: left;
  justify-self: center;
  align-items: center;
  justify-content:center;
  width: 50%;
  color: white;
  height: fit-content;
  background: green;

  
`;

const FlexDiv = styled.div`
padding-top: 3rem;
padding-bottom: 3rem;
padding-LEFT: 3rem;
display: flex;
text-align: center;
justify-content:left;

`;

const SmFlexDiv = styled.div`
display: flex;
text-align: center;
justify-content:left;

`;

const GFlexDiv = styled.div`

padding: 4rem;
display: flex;
text-align: center;
justify-content:left;
background: green;

`;


const VertDiv = styled.div`
width: 100%;
padding: 1rem;
text-align: left;
justify-content: left;

`;
export default connect(Home);