import React from 'react'
import { connect, styled, css } from "frontity";
import NAP from "./images/nap.png";
import Laird from "./images/laird.png";
import Hart from "./images/hart.jpg";
import MP from "./images/mp_modern_plastics.jpg";
import RMI from "./images/rmi_plastics.jpg";
import Farco from "./images/farco_plastics.jpg";
import LVP from "./images/lehigh_valley_plastics.jpg";
import EPlastic from "./images/eplastic.jpg";
import EPP from "./images/epp.jpg";
import EMPlastics from "./images/em_plastic.jpg";
import Calsak from "./images/Calsak.jpg";
import PVC from "./images/pvc_tech.jpg";
import PP from "./images/plastic_products.jpg";
import USCutter from "./images/us_cutter_logo.jpg";
import AIA from "./images/aia_plastics.jpg";
import Port from "./images/port.png";




const Brands = () => {
    return (
        <StyledDiv>
            <StyledDiv>
                <Title>Our Brands</Title>
                <SmallText>Independently operated, empowered for greatness and expertly staffed, these are more than just the industry’s leading brands in plastics distribution – they are the NAP family.</SmallText>
                <FlexDiv>
                <a href="/laird-plastics"><Card css={css`background-image: url(${Laird}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                <a href="/calsak-plastics"><Card css={css`background-image: url(${Calsak}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                <a href="/hart-supply"><Card css={css`background-image: url(${Hart}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                <a href="/modern-plastics"><Card css={css`background-image: url(${MP}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                
                <a href="/rmi-plastics"><Card css={css`background-image: url(${RMI}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                <a href="/farco-plastics"><Card css={css`background-image: url(${Farco}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                <a href="/lehigh-valley-plastics"><Card css={css`background-image: url(${LVP}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                <a href="/epp"><Card css={css`background-image: url(${EPP}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
               
                <a href="/pvc-tech"><Card css={css`background-image: url(${PVC}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                <a href="/plastic-products"><Card css={css`background-image: url(${PP}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                <a href="/uscutter"><Card css={css`background-image: url(${USCutter}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                <a href="/eplastics"><Card css={css`background-image: url(${EPlastic}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
               
                <a href="/aia-plastics"><Card css={css`background-image: url(${AIA}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                    <a href="/em-plastic"><Card css={css`background-image: url(${EMPlastics}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                    <a href="/port-plastics"><Card css={css`background-image: url(${Port}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                    <a href="/"><Card css={css`background-image: url(${NAP}); background-repeat: no-repeat; background-size: contain; background-position: center;`}><ULText>View Brand</ULText></Card></a>
                </FlexDiv>
            </StyledDiv>
        <StyledDiv>
            <StyledDiv id="acquisitions">
            <Title>Acquisition Testimonials</Title>
            </StyledDiv>
            <AcquisitionFlexDiv>
                <StyledDiv>
                    <GreenDiv>
                    <BigText>"Joining the NAP family is the best thing that could have happened to LVP."</BigText>
                    <SmallText>Gretchen Mohen, CEO, LeHigh Valley Plastics</SmallText>
                    </GreenDiv>
                    <a href="/testimonials"><SmallUText>Read Full Testimonial Here</SmallUText></a>
                </StyledDiv>
                <StyledDiv>
                <GreenDiv>
                    <BigText>"I have been enabled to run a business with freedom and in a manner that utilizes the full array of resources and market power of NAP in the plastics industry. Best decision ever!"</BigText>
                    <SmallText>Bing J. Carbone, President, Modern Plastics</SmallText>
                    </GreenDiv>
                    <a href="/testimonials"><SmallUText>Read Full Testimonial Here</SmallUText></a>
                </StyledDiv>
                    
            </AcquisitionFlexDiv>
        </StyledDiv>
        <PopupDiv>
          <SmallText>
            Testing
          </SmallText>
        </PopupDiv>
    

        </StyledDiv>
    )
}

const PopupDiv = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 1rem;
  text-align: center;
  justify-content: center;
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  color: white;
  background: black;

`;


const StyledDiv = styled.div`
  padding: 1rem;
  text-align: center;
  justify-content: center;

`;

const Card = styled.div`
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  background: white;
  border: #f0f0f0 1px solid;
  text-align: center;
  display: flex;
  justify-content: center;
  transition: .4s;
  cursor: pointer;


  @media screen and (max-width: 860px) {
    height: 100px;
    }

`;

const BigText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: black;

  @media screen and (max-width: 860px) {
    font-size: 1.25rem}

`;

const SmallUText = styled.p`
  font-size: 1rem;
  color: black;
  text-decoration: underline;
  font-weight: bold;

`;

const SmallText = styled.p`
  font-size: 1rem;
  color: black;
 

`;

const ULText = styled.p`
  font-size: 1rem;
    text-decoration: underline;
    background: green;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 0;
    height: 100%;
    color: white;
    width: 100%;
    opacity: 0%;
    transition: .4s;


`;

const Title = styled.h1`
  font-size: 3rem;

`;

const GreenDiv = styled.div`
    justify-self: center;
    text-align: center;
    color: white;
    height: fit-conent;
    background: white;
    padding: 1rem;
    border: 3px green solid;
    border-radius: 20px;
    margin-right: 2rem;
    margin-left: 2rem;
`;

const FlexDiv = styled.div`
  padding: 1rem;
  justify-content; center;
  padding-right: auto;
  padding-left: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  text-align: center;
  align-items: center;
  max-width: 100%;


  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr 1fr 1fr ;}

    @media screen and (max-width: 560px) {
      grid-template-columns: 1fr 1fr;}

`;

const AcquisitionFlexDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 860px) {
    flex-direction:}
`;



export default connect(Brands);

