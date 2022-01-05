import React from 'react'
import { connect, styled } from "frontity";


const Brands = () => {
    return (
        <StyledDiv>
            <StyledDiv>
                <Title>Brands</Title>
                <FlexDiv>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </FlexDiv>
                <FlexDiv>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </FlexDiv>
                <FlexDiv>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </FlexDiv>
                <FlexDiv>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </FlexDiv>
            </StyledDiv>
        <StyledDiv>
            <StyledDiv>
            <Title>Aquisition Testimonials</Title>
            </StyledDiv>
            <FlexDiv>
                <StyledDiv>
                    <GreenDiv>
                    <BigText>"Joining the NAP family is the best thing that could have happened to LVP."</BigText>
                    <SmallText>Gretchen Mohen, CEO, LeHigh Valley Plastics</SmallText>
                    </GreenDiv>
                    <ULText>Read Full Testimonial Here</ULText>
                </StyledDiv>
                <StyledDiv>
                <GreenDiv>
                    <BigText>"I have been enabled to run a business with freedom and in a manner that utilizes the full array of resources and market power of NAP in the plastics industry. Best decision ever!"</BigText>
                    <SmallText>Bing J. Carbone, President, Modern Plastics</SmallText>
                    </GreenDiv>
                <ULText>Read Full Testimonial Here</ULText>
                </StyledDiv>
                    
            </FlexDiv>
        </StyledDiv>
    

        </StyledDiv>
    )
}

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

const BigText = styled.p`
  font-size: 2rem;
  font-weight: 600;

`;

const SmallText = styled.p`
  font-size: 1rem;

`;

const ULText = styled.p`
  font-size: 1rem;
    text-decoration: underline;
`;

const Title = styled.h1`
  font-size: 3rem;

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
  padding: 1rem;
  display: flex;
  text-align: center;
  justify-content: center;

`;



export default connect(Brands);
