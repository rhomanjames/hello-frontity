import { connect, styled, css } from "frontity";

const HartSupply = ({  }) => {
  return (
<StyledDiv>
    <FlexDiv>
        <VertDiv>
            <Title>Hart Supply</Title>
        </VertDiv>
    </FlexDiv>

            <GFlexDiv>
              
                
                <GreenDiv>
                    <Subtitle id="about">About us</Subtitle>
                <Text>
                Hart Supply is a distributor offering a wide range of products to the sign, glass, construction, waterproofing, graphic, and marine industries. We specialize in cut to size and routing services. Our experienced sales staff and fleet of trucks provides excellent service and prompt delivery throughout New England and eastern New York State.
                    </Text>
                    <SmFlexDiv>
                      <a href="https://www.hartsupply.com/"><Button> Visit Website</Button></a>
                    </SmFlexDiv>
                </GreenDiv>
            </GFlexDiv>
            
            <FlexDiv>
            <WhiteDiv>

                    <Subtitle>Let's connect</Subtitle>
                <Text>
                Connect with us on LinkedIn   
                    </Text>

                    <SmFlexDiv>
                      <a href="https://www.linkedin.com/company/hart-supply-co-inc/"><GreenButton>Connect</GreenButton></a>
                     
                    </SmFlexDiv>

                </WhiteDiv>

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
  width: 50%;
  
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
background: #083264;
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
  background: #083264;

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
background: #083264;
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
export default connect(HartSupply);