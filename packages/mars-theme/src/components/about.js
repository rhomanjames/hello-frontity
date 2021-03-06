import { connect, styled, css } from "frontity";
import HomePic from "./images/homepic.png";
import AboutImg from "./images/aboutpageimg.png";
import Brands from "./images/brands.png";






const About = ({  }) => {
  return (
<StyledDiv>
    <FlexDiv>
        <VertDiv>
            <Title>Who is<br />North American Plastics?</Title>
            <Text>Family-owned since the beginning, we are part of a global plastics family including Amari Plastics brands in the UK, Vink Holdings in mainland Europe and MM Plastics in Australia and New Zealand. Learn more about what makes us the best in the industry, while promoting a family-first atmosphere. </Text>
            
        </VertDiv>
        <BannerPicDiv>
        <Image src={AboutImg}/>
        </BannerPicDiv>
    </FlexDiv>

            <GFlexDiv>
              
            <IFRAME src="https://www.youtube.com/embed/P5SiP5SPoNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></IFRAME>
                
                <GreenDiv>
                    <Subtitle id="about">Who We Are</Subtitle>
                <Text>
                We are a collection of the plastic distribution industry's top brands. With over 100 locations across North America, we are the largest organization in the plastics industry today. <br/><br/> All of our brands operate independently, excel as experts in their field and are completely customer-focused.
                    </Text>
                    <SmFlexDiv>
                    
                    </SmFlexDiv>
            
                    <IFRAME2 src="https://www.youtube.com/embed/P5SiP5SPoNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></IFRAME2>
                </GreenDiv>
            </GFlexDiv>

            <FlexDiv>
            <WhiteDiv>

                    <Subtitle>Our Culture</Subtitle>
                <Text>
                We know our people are our most valuable asset. Our decentralized and empowered business model is a perfect fit for self-motivated, entrepreneurial, and energetic team players who want to be a part of a winning team. Plus, we're family owned, so all of our locations really do feel like family.   
                    </Text>

                    <SmFlexDiv>
                      <a href="/brands"><GreenButton>View Brands</GreenButton></a>
                    
                    </SmFlexDiv>

                </WhiteDiv>
                <HalfDiv>
                <a href="/brands"><Image src={Brands}/></a>
                </HalfDiv>

            </FlexDiv>

    
    
          
            


            
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

@media screen and (max-width: 860px) {
  height: 300px;
display: none;}

`;

const IFRAME2 = styled.iframe`
border: none;
height:480px; 
display: none;
padding-top: .5rem;
padding-bottom: .5rem;
margin-left: auto;
margin-right: auto;


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
  justify-content: center;
  padding-left: 0;
  padding-right: 0;
  }

  @media screen and (max-width: 560px) {
    
    text-align: center;
    justify-content: center;
    align-items: center;}
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
export default connect(About);