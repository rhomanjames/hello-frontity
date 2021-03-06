import React from 'react'
import { connect, styled } from "frontity";


const Sales = () => {
    return (
        <StyledDiv>
            <Title>National Accounts</Title>
            <FlexDiv>
                <HalfDiv>
                    <Text>Contact us today at NationalAccounts@NorthAmericanPlastics.com</Text>
                
                </HalfDiv>
                <VertDiv>
                    <h1>Welcome</h1>
                <Text>
                  
                    </Text>
                </VertDiv>
            </FlexDiv>
            <FlexDiv>
                <GreenDiv>
                    <h1>Location. Location. Location.</h1>
                <Text>
                With the largest local footprint of facilities in the industry today, we are located where you need your key suppliers to be in order to support today’s fast-paced business environment. Our in-house converting and fabrication capabilities can provide you with materials and the best stage to maximize your company’s productivity and working capital.
                    </Text>
                
                </GreenDiv>
            </FlexDiv>
            <FlexDiv>
                <HalfDiv>
                    
                
                </HalfDiv>
                <VertDiv>
                <h1>Top Quality</h1>
                <Text>
                We are supported by the top brand name manufacturers in plastics, and bring warehousing, inventory and delivery capabilities to your doorstep.
                    </Text>
                </VertDiv>
            </FlexDiv>
            <FlexDiv>
                <GreenDiv>
                <h1>Sustainable</h1>
                <Text>
                North American Plastics also offers a recycling program to provide a comprehensive sustainable solution that will assist your company in achieving their goals for environmental conservation and waste reduction.
                    </Text>
                </GreenDiv>
            </FlexDiv>
                
                <BigText>
                   <ULText href="mailto:NationalAccounts@NorthAmericanPlastics.com">Contact us</ULText> today!
                    </BigText>
            
            </StyledDiv>
    )}

    const StyledDiv = styled.div`
    width: 100%;
    text-align: center;
    justify-content: center;
    
    `;
    
    const CenterDiv = styled.div`

    text-align: left;
    justify-content: left;
    align-items: left;
    `;
    
    const HalfDiv = styled.div`
    text-align: left;
    width: 50%;
    padding: 3rem;
    justify-content: left;
    
    @media screen and (max-width: 860px) {
      width: 25%;}
    
      @media screen and (max-width: 560px) {
        display: none;}
    
    `;
    
    const WhiteDiv = styled.div`
    text-align: left;
    width: 50%;
    padding: 3rem;
    justify-content: left;
    
    @media screen and (max-width: 560px) {
      width: 100%;
      padding: 1rem
    
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
    
    @media screen and (max-width: 860px) {
      font-size: 1rem;}
    
    `;
    
    
    const ULText = styled.p`
    font-size: 1rem;
      text-decoration: underline;
    `;
    
    const Title = styled.h1`
    font-size: 5rem;
    
    @media screen and (max-width: 860px) {
      font-size: 3rem;}
    
      @media screen and (max-width: 560px) {
        font-size: 3rem;}
    `;
    
    const Subtitle = styled.h1`
    font-size: 4rem;
    @media screen and (max-width: 560px) {
      font-size: 2.5rem;}
    
    `;
    
    const GreenDiv = styled.div`
      
      padding: 2rem;
      text-align: left;
      justify-self: center;
      align-items: center;
      justify-content:center;
      width: 75%;
      color: white;
      height: fit-content;
      background: green;
    
      @media screen and (max-width: 560px) {
        width: 100%;
        padding: 10px;
    
      
    `;
    
    const FlexDiv = styled.div`
    padding-bottom: 3rem;
    padding-LEFT: 3rem;
    display: flex;
    text-align: center;
    justify-content:left;
    
    @media screen and (max-width: 860px) {
      padding-left: .5rem;}
    
    `;

    const MyDiv = styled.div`
    padding-bottom: 3rem;
    padding-LEFT: 3rem;
    display: flex;
    text-align: center;
    justify-content:left;
    
    @media screen and (max-width: 860px) {
      padding-left: .5rem;}
    
    `;

    const Div = styled.div`
    padding-bottom: 3rem;
    display: flex;
    text-align: center;
    justify-content:left;
    
    @media screen and (max-width: 860px) {
      padding-left: .5rem;}
    
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
    @media screen and (max-width: 860px) {
      padding: 1rem;}
    `;
    
    
    const VertDiv = styled.div`
    padding: 1rem;
    text-align: left;
    justify-content: left;
    
    `;
    export default connect(Sales);