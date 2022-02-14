import React from 'react'
import { connect, styled } from "frontity";


const About = () => {
    return (
        <StyledDiv>
    <FlexDiv>
        <VertDiv>
            <Title>Who is<br />North American Plastics?</Title>
            <h2>Learn more about what makes us the best in the industry, while fostering a family-first atmosphere. </h2>
        </VertDiv>
    </FlexDiv>

            <GFlexDiv>
                <HalfDiv>
                </HalfDiv>
                <GreenDiv>
                    <Subtitle>Who we are</Subtitle>
                <Text>
                We are a collection of the plastic ditribution industry's top brands. With over 100 locations across North America, we are the largest organization in the plastics industry today. <br/><br/> All of our brands operate indepently, excel as experts in their field and are completely customer-focused.
                    </Text>
                </GreenDiv>
            </GFlexDiv>

            <FlexDiv>
            <VertDiv>
                    <Subtitle>Our Culture</Subtitle>
                <Text>
                We know our people are our most valuable asset. Our decentralized and empowered business model is a perfect fit for self-motivated, entrepreneurial, and energetic team players who want to be a part of a winning team. Plus, we're family owned, so all of our locations really do feel like family.   
                    </Text>
                    <Div>
                      <GreenButton>Our brands</GreenButton>
                      <GreenButton>Acquisitions</GreenButton>
                    </Div>
                </VertDiv>
                <HalfDiv>
                </HalfDiv>

            </FlexDiv>

            <GFlexDiv>
                <HalfDiv>
                </HalfDiv>
                <GreenDiv>
                    <Subtitle>Sustainability</Subtitle>
                <Text>
                North American Plastics offers a closed loop recycling program to provide a comprehensive sustainable solution that will assist your company in achieving environmental conservation and waste reduction.

                <br/><br/> In addition to this program, our brands offer recycled grade plastics, and lightweight alternatives to traditional materials, saving massively on fuel usage and other processing emissions. The high performance plastics offered by NAP provide a longer life cycle reducing landfill waste. 
                    </Text>

                </GreenDiv>
            </GFlexDiv>
            <VertDiv>
              <CenterDiv>
              <Subtitle>Contact us</Subtitle>
      
      <Text>For acquisitions, contact <a href="mailto:jaskew@NorthAmericanPlastics.com">Jason Askew</a>. For careers, contact <a href="mailto: avenezia@plasticsfamilyamericas.com">Amy Venezia</a></Text>
      
              </CenterDiv>
            
            </VertDiv>

            
</StyledDiv>

    )}

    
    const StyledDiv = styled.div`
    width: 100%;
    text-align: center;
    justify-content: center;
    
    `;
    
    const CenterDiv = styled.div`
    padding: 1rem;
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
    
      @media screen and (max-width: 860px) {
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
    export default connect(About);