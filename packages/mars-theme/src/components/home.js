import { connect, styled, css } from "frontity";
import HomePic from "./images/homepic.png";
import Careers from "./images/careers.jpg";
import college from "./images/college.png";
import CareerImg from "./images/careerimg.png";
import Brands from "./images/brands.png";






const Home = ({  }) => {
  return (
<StyledDiv>
    <FlexDiv>
        <VertDiv>
            <Title>Great People <br/>  Great Culture</Title>
            <Text>At North American Plastics, we are committed to empowering the entrepreneurial spirit. We are the #1 wholesale distributor of plastics in North America for that reason.</Text>
            <GreenButton ><a href="#about">Learn More</a></GreenButton>
        </VertDiv>
        <BannerPicDiv>
        <Image src={HomePic}/>
        </BannerPicDiv>
    </FlexDiv>

            <GFlexDiv>
              
                <IFRAME src="https://www.google.com/maps/d/u/0/embed?mid=10LYeF0MMbU0CNz3Q_fNoUDj-PZ-zpnG5&ehbc=2E312F" width="100%" border="none"></IFRAME>
                
                <GreenDiv>
                    <Subtitle id="about">About Us</Subtitle>
                <Text>
                With over 115 locations, our diverse family of brands provide customers with a wide range of products and services to help their businesses grow. 
                    </Text>
                    <SmFlexDiv>
                    <a href="/about"><Button>Learn More</Button></a>
                    </SmFlexDiv>
            
                    <IFRAME2 src="https://www.google.com/maps/d/u/0/embed?mid=10LYeF0MMbU0CNz3Q_fNoUDj-PZ-zpnG5&ehbc=2E312F" width="100%" border="none"></IFRAME2>
                </GreenDiv>
            </GFlexDiv>

            <FlexDiv>
            <WhiteDiv>

                    <Subtitle>Our Brands</Subtitle>
                <Text>
                Our team stretches from coast to coast to ensure that all of our customers are treated with personalized care. We provide the most diverse product offering on the market, so we’re confident that we have what you need when you need it.   
                    </Text>

                    <SmFlexDiv>
                    <a href="/brands"><GreenButton>View Brands</GreenButton></a>
                      
                    </SmFlexDiv>

                </WhiteDiv>
                <HalfDiv>
                <a href="/brands"><Image src={Brands}/></a>
                </HalfDiv>

            </FlexDiv>

            <GFlexDiv>
                <HalfDiv>
                  <Image css={css` display: flex; @media screen and (max-width: 860px) {
display: none;} `} src={CareerImg}/>
                </HalfDiv>
                <GreenDiv>
                    <Subtitle>Careers</Subtitle>
                <Text>
                See what it’s like to be a part of a winning team. Our commitment to your professional development ensures that you have a clear opportunity for growth within our company.  
                    </Text>
                    <SmFlexDiv>
                    <a href="/career"><Button>Join Us</Button></a>
                    </SmFlexDiv>

                </GreenDiv>
                <HalfDiv  css={css` display: none; @media screen and (max-width: 860px) {
display: flex;} `}>
                  <Image src={CareerImg}/>
                </HalfDiv>
            </GFlexDiv>
          
            


            
</StyledDiv>

  )}

  
const StyledDiv = styled.div`
width: 100%;
text-align: center;
justify-content: center;

`;

const IFRAME = styled.iframe`
border: none;
border-radius: 25px;
width: 50%;
height:400px; 
padding: 2rem;
margin-right: 2.5rem;

@media screen and (max-width: 860px) {
  height: 300px;
display: none;}

`;

const IFRAME2 = styled.iframe`
border: none;
border-radius: 25px;
height:480px; 
display: none;
padding-top: .5rem;
padding-bottom: .5rem;

@media screen and (max-width: 860px) {
  height: 300px;
   display: block}

`;

const CenterDiv = styled.div`
text-align: center;
width: 100%;
justify-content: center;
align-items: center;
`;

const HalfDiv = styled.div`
text-align: left;
width: 50%;
margin-top: auto;
margin-bottom: auto;
align-items: right;
justify-content: right;
padding: 2rem;

@media screen and (max-width: 860px) {
  width: 100%;
  text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  @media screen and (max-width: 560px) {
    
    }
`;

const BannerPicDiv = styled.div`
text-align: left;
margin-top: auto;
margin-bottom: auto;
align-items: bottom;
justify-content: right;
width: 50%;


  @media screen and (max-width: 860px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-left: auto;
    margin-right: auto;
  @media screen and (max-width: 860px) {
    width: 70%;   
  }
  `

  


const WhiteDiv = styled.div`
text-align: left;
width: 50%;
justify-content: left;

@media screen and (max-width: 860px) {
  flex-direction: column;
  width: 100%;
text-align: center;
justify-content: center}

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
cursor: pointer;


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
cursor: pointer;

`;

const Text = styled.p`
font-size: 1.5rem;
text-align: left;
padding: 1rem;
padding-left: 0;

@media screen and (max-width: 860px) {
  font-size: 1.25rem;
text-align:center}

@media screen and (max-width: 560px) {
  font-size: 1rem;
text-align:center}

`;


const ULText = styled.p`
font-size: 1rem;
  text-decoration: underline;
`;

const Title = styled.h1`
font-size: 4rem;

@media screen and (max-width: 1200px) {
  font-size: 4rem;}

@media screen and (max-width: 860px) {
  font-size: 3rem;}

  @media screen and (max-width: 560px) {
    font-size: 3rem;}
`;

const Subtitle = styled.h1`
font-size: 4rem;
@media screen and (max-width: 860px) {
  font-size: 2.5rem;
text-align: center}

`;

const GreenDiv = styled.div`
  
  text-align: left;
  justify-self: center;
  align-items: center;
  justify-content:center;
  width: 100%;
  color: white;
  height: fit-content;
  background: green;

  @media screen and (max-width: 860px) {
    width: 100%;
    padding: 10px;

  
`;

const FlexDiv = styled.div`
padding-bottom: 0;
padding-LEFT: 3rem;
display: flex;
text-align: center;
justify-content:left;
background-size: cover;
position: relative;

@media screen and (max-width: 860px) {
  padding-left: .5rem;
  flex-direction: column;
  }

  @media screen and (max-width: 560px) {
    padding-bottom: 3rem;
    }
  
`;

const SmFlexDiv = styled.div`
display: flex;
text-align: center;
justify-content:left;
width: 100%;
margin-bottom: 2rem;

@media screen and (max-width: 860px) {
  justify-content: center;
  margin-bottom: .5rem;
  }

`;

const GFlexDiv = styled.div`

padding: 2rem;
display: flex;
text-align: center;
justify-content:left;
background: green;
@media screen and (max-width: 860px) {
flex-direction: column}
`;


const VertDiv = styled.div`
padding-bottom: 1rem;
text-align: left;
justify-content: left;
width: 50%;


@media screen and (max-width: 860px) {
  text-align:center;
width: 100%;}

`;
export default connect(Home);