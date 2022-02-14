import { connect, styled, css } from "frontity";
import HomePic from "./images/homepic.png";
import NAImg from "./images/NAImg.png";
import TestimonialPic from "./images/testimonials.png";
import Careers from "./images/careers.jpg";
import college from "./images/college.png";
import CareerImg from "./images/careerimg.png";
import Brands from "./images/brands.png";






const Testimonials = ({  }) => {
  return (
<StyledDiv>
    <FlexDiv>
        <VertDiv>
            <Title>Join Our Family of Brands</Title>
            <Text>Read about what leaders in the plastics industry think about our acquisition process. </Text>
           
        </VertDiv>
        <BannerPicDiv>
        <Image src={TestimonialPic}/>
        </BannerPicDiv>
    </FlexDiv>

            <GFlexDiv>
              
               
                
                <GreenDiv>
                
                    <Text><em>Bing J. Carbone, President, Modern Plastics</em></Text>
                <Text>
                For 61-years prior to our acquisition by North American Plastics (NAP), we were a family business, with myself as the third generation President. Modern Plastics was a successful company, but at the same time had both financial and other growth limiting factors with our business.

<br /> <br /> Enter a new era in 2006 within the North American Plastics family of companies, where not only were we allowed to preserve the “brand” and name of the company, but we were highly encouraged to run the business as we see fit with a great deal of autonomy and decision making capability at the local profit center level. The size and power of NAP allowed us to expand into a much larger and modernized structure building, purchase large equipment needed for growth, add inventory, increase personnel, and enter new markets. This set the stage for amazing growth that would never have been possible had we remained a family business.

<br /> <br /> I can attest that after nearly 15-years since our acquisition, this was the single best decision ever made for the employees of Modern Plastics, myself included. Deciding to sell your company is a major decision fraught with emotion, however everything that we were told prior to the sale of Modern Plastics by NAP, was absolutely factual. I have been enabled to run a business with freedom and in a manner that utilizes the full array of resources and market power of NAP in the plastics industry. Best decision ever!
                    </Text>
                    
            
                   
                </GreenDiv>

            </GFlexDiv>
            

            <FlexDiv>
            <WhiteDiv>
                   
                    <Text><em>Gretechen Mohen, CEO, Lehigh Valley Plastics</em></Text>
                <Text>
                Prior to our being acquired by NAP in March of 2018, Lehigh Valley Plastics (a precision machine shop of highly engineered plastics) was a profitable small business owned and run by management. Over the years we received solicitations of interest but we enjoyed our autonomy and were committed to being our best for our customers and employees. That said, we watched as our industry changed and suppliers went vertical and competitors were bought by PE firms. We knew when the right strategic buyer approached us that we should join them.

                <br /><br />From my first interaction with an NAP executive and through all of the subsequent due diligence discussions, I felt that we were picked by the perfect buyer. Everyone we interacted with was smart, seasoned and respectful. When I stood before our employees and addressed our customers to communicate that we were to be acquired, and that this was the best thing for the business and them, I knew/hoped I was right. I said we would be joining a large company measured by their holdings of similar businesses(lots of experience and leadership), with financial pockets to enable investment in the business, and a business model committed to brand equity and autonomy.

                <br /><br />NAP turned out to be everything we hoped for and more. NAP executives have tremendous experience to learn from and they are a true joy to work with. NAP's commitment to suppliers is the best in the industry for managing and leveraging these relationships. Even during the year we were acquired we made capital investments in the business and were completely supported by NAP in doing so. The NAP business model is set up to do exactly what they say; help a business grow strategically and provide guidance as requested or needed, but allow the brand to continue to function as it knows best for its customers and employees.

                <br /><br />Joining the NAP family is the best thing that could have happened to LVP.
                    </Text>
                    
            
                   
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
  justify-content: center;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
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
  margin-left: auto;
    margin-right: auto;
  @media screen and (max-width: 8px) {
    width: 50%;
    
  }
  `

  


const WhiteDiv = styled.div`
text-align: left;
justify-content: left;
padding: 1rem;

@media screen and (max-width: 860px) {
  flex-direction: column;
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
padding-LEFT: 2rem;
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
export default connect(Testimonials);