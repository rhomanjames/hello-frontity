import { connect, styled, css } from "frontity";
import HomePic from "./images/homepic.png";
import Earth from "./images/earth.png";
import NAImg from "./images/NAImg.png";
import CareerImg from "./images/careerimg.png";
import Brands from "./images/brands.png";






const Sustainability = ({  }) => {
  return (
<StyledDiv>
    <FlexDiv>
        <VertDiv >
            <Title>Sustainability</Title>
            <Text>The North American Plastics family of brands is committed to creating a sustainable future.</Text>
          
        </VertDiv>
        <BannerPicDiv>
        <Image src={NAImg}/>
        </BannerPicDiv>
    </FlexDiv>

            <GFlexDiv>
              
                
                <GreenDiv>
                    <Subtitle id="about">Innovating Sustainable Solutions</Subtitle>
                <Text>
                At North American Plastics, we believe that innovation is the key to a more sustainable future, and we continue to invest in new technologies and programs to enable low- and zero-waste solutions for our industry.
                    </Text>
                    <SmFlexDiv>
                    </SmFlexDiv>
                </GreenDiv>
            </GFlexDiv>

            <FlexDiv>
            <WhiteDiv>

                    <Subtitle>We Are Committed</Subtitle>
                <Text>
                From eco-friendly products, recycling programs and solutions made from recycled materials, we consistently strive to seek innovative solutions for a sustainable future.   
                    </Text>

          

                </WhiteDiv>
                <HalfDiv>
                <Image src={Earth}/>
                </HalfDiv>

            </FlexDiv>

            <GFlexDiv>
                <GreenDiv>
                    <Subtitle>What We Offer</Subtitle>
                <Text>
                North American Plastics offers a closed loop recycling program to provide a comprehensive sustainable solution that will assist companies in achieving environmental conservation and waste reduction.

                <br/><br/> In addition to this program, our brands offer recycled grade plastics, and lightweight alternatives to traditional materials, saving massively on fuel usage and other processing emissions. The high performance plastics offered by NAP provide a longer life cycle reducing landfill waste.   
                    </Text>
                    

                </GreenDiv>
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
position: relative;

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
width: 100%;


  @media screen and (max-width: 860px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-left: auto;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 560px) {
    width: 50%;
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
border: none;s
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
cursor:pointer;

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
font-size: 5rem;

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
  align-content: center;
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
  
  }

  @media screen and (max-width: 560px) {
    padding-bottom: 3rem;
    flex-direction: column;
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
export default connect(Sustainability);