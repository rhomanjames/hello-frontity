import { connect, styled, css } from "frontity";
import HomePic from "./images/homepic.png";
import NA from "./images/NAPic.png";






const NationalAccounts = ({  }) => {
  return (
<StyledDiv>
    <FlexDiv>
        <VertDiv>
            <Title>National Accounts</Title>
            <h2>Learn more about our world class National Accounts program </h2>
        </VertDiv>
        <BannerPicDiv>
        <Image src={NA}/>
        </BannerPicDiv>
    </FlexDiv>

            <GFlexDiv>
              
               
                
                <GreenDiv>
                    <Subtitle id="about">Welcome</Subtitle>
                <Text>
                North American Plastics is the industry’s leading organization for plastics distribution, and our world class National Accounts program is geared to streamline your company’s 
                procurement process while providing a high level of customer service and competitive market pricing.
                    </Text>
                    <SmFlexDiv>
                  
                    </SmFlexDiv>
            
                    
                </GreenDiv>
            </GFlexDiv>

            <FlexDiv>
           
            <WhiteDiv>

                    <Subtitle>Location is Key</Subtitle>
                <Text>
                With the largest local footprint of facilities in the industry today, we are located where you need your key suppliers to be in order to support today’s fast-paced business environment. Our in-house converting and fabrication capabilities can provide you with materials and the best stage to maximize your company’s productivity and working capital.   
                    </Text>

                   
                </WhiteDiv>
            </FlexDiv>

            <GFlexDiv>
                <GreenDiv>
                    <Subtitle>Top Quality</Subtitle>
                <Text>
                We are supported by the top brand name manufacturers in plastics, and bring warehousing, inventory and delivery capabilities to your doorstep.  
                    </Text>
                    <SmFlexDiv>
                    </SmFlexDiv>

                </GreenDiv>
            </GFlexDiv>
            <VertDiv>
              <CenterDiv>
              
              <Subtitle>Contact us</Subtitle>
      
      <Text>NationalAccounts@NorthAmericanPlastics.com</Text>
              </CenterDiv>
            
            </VertDiv>

            
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
height:480px; 
padding: 3rem;

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
justify-content: center;
align-items: center;
width: 100%
@media screen and (max-width: 860px) {
  width: 100%;
  text-align: left;
  justify-content: left;
  align-items: left;}
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
  text-align: left;
  justify-content: left;
  align-items: left;}
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
  width: 80%;
  
  
  `

  


const WhiteDiv = styled.div`
text-align: center;
width: 100%;
justify-content: center;

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
text-align: center;
font-weight: 600;
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
text-align: center;
width: 100%
@media screen and (max-width: 860px) {
  font-size: 2rem;
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
  margin-bottom: 2rem;
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
width: 100%;


@media screen and (max-width: 860px) {
  text-align:center;
width: 100%;}

`;
export default connect(NationalAccounts);