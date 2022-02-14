import { connect, styled, css } from "frontity";
import HomePic from "./images/homepic.png";
import college from "./images/college.png";
import newcollege from "./images/new-college.png";
import college1 from "./images/college1.jpeg";
import college2 from "./images/college2.jpeg";
import Careers from "./images/careers.jpg";
import Interns from "./images/interns.jpg";
import CareerImg from "./images/careerimg.png";
import Brands from "./images/brands.png";






const College = ({  }) => {
  return (
<StyledDiv>
    <FlexDiv>
        <VertDiv>
            <Title>College Recruitment</Title>
            <Text>Come for an internship, stay for a career. Our resources for new graduates are curated to ensure success. </Text>
        </VertDiv>
        <BannerPicDiv>
        <Image src={college}/>
        </BannerPicDiv>
    </FlexDiv>

            <GFlexDiv>
                
            <HalfDiv>
              <Image src={college2}/>
              </HalfDiv>
                <GreenDiv>
                    <Subtitle id="about">About us</Subtitle>
                <Text>
                North American Plastics strongly believes our people are our most valuable asset. We look for high performance individuals to create solutions with high performance polymers. It is our aim to offer challenging opportunities, with unlimited growth potential and a chance to service a wide variety of markets across the country.
                    </Text>
                    
            
                   
                </GreenDiv>
               
            </GFlexDiv>

            <FlexDiv>
            <WhiteDiv>

                    <Subtitle>Paid Internship</Subtitle>
                <Text>
                North American Plastics offers a paid internship program in select offices across the United States. We strive to help hard working and driven students develop sales and leadership skills by familiarizing them with both our inside and outside sales programs. This includes speaking with prospective and existing clientele, customer visits, sales cycle education, product training and much more.   
                    </Text>

                   

                </WhiteDiv>
                <HalfDiv>
                <Image src={Interns}/>
                </HalfDiv>

            </FlexDiv>

            <GFlexDiv>
                <HalfDiv>
                  <Image src={college1}/>
                </HalfDiv>
                <GreenDiv>
                    <Subtitle>New Hire Training</Subtitle>
                <Text>
                Additionally, we offer an annual new hire training for recent college graduates every summer. This comprises one week of intensive sales training at the corporate offices in Dallas followed by a second week of product training at various manufacturing plants.  
                    </Text>

                </GreenDiv>
            </GFlexDiv>

            <FlexDiv>
            <WhiteDiv>

                    <Subtitle>Top Notch</Subtitle>
                <Text>
                We proudly collaborate and support with top-notch sales programs across the country such as; Florida State University, Utah State University, Texas State University, University of Nebraska Kearney, and California State University, Fullerton.   
                    </Text>

                    <SmFlexDiv>
                      <a href="https://apply.workable.com/north-american-plastics/j/75E5C10204/"><GreenButton>Internship Application</GreenButton></a>
                      <a href="https://apply.workable.com/north-american-plastics/j/6EE4830B6E/"><GreenButton>Sales Application</GreenButton></a>
                    </SmFlexDiv>

                </WhiteDiv>
                <IFRAME width="552" height="311" src="https://www.youtube.com/embed/G_3DfoWgZPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></IFRAME>

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
margin-right: auto;
margin-left: auto;
height:400px; 
padding: 2rem;
justify-content: center;

@media screen and (max-width: 860px) {
  width: 276px;
  height: 156px;
  }




`;

const IFRAME2 = styled.iframe`
border: none;
border-radius: 25px;
height:480px; 
display: none;
padding-top: .5rem;
padding-bottom: .5rem;


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
font-weight: 600;
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
export default connect(College);