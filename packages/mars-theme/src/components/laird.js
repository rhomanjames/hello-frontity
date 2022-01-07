import React from 'react'
import { connect, styled } from "frontity";


const Laird = () => {
    return (
        <StyledDiv>
        <FlexDiv>
            <VertDiv>
                <Title>Laird Plastics </Title>
                <h2>One Source - The Right Way </h2>
            </VertDiv>
        </FlexDiv>
    
                <GFlexDiv>
                    <HalfDiv>
                    </HalfDiv>
                    <GreenDiv>
                        <Subtitle>About us</Subtitle>
                    <Text>
                    Laird Plastics has been in the business of successfully distributing plastic sheets, rods, and films for over 70 years. With 49 locations throughout the United States and Canada, Laird Plastics offers a large network of service centers and inventories with an extensive product range
                        </Text>
                    </GreenDiv>
                </GFlexDiv>
    
                <FlexDiv>
                <HalfDiv>
                        <Subtitle>Locations</Subtitle>
                    <Text>
                    We have over 49 Laird Plastics locations. Find a location near you!  
                        </Text>
                        <FlexDiv>
                          <GreenButton>View Locations</GreenButton>
                        </FlexDiv>
                    </HalfDiv>
                    <HalfDiv>
                    </HalfDiv>
    
                </FlexDiv>
    
                <GFlexDiv>
                    <HalfDiv>
                    </HalfDiv>
                    <GreenDiv>
                        <Subtitle>Careers</Subtitle>
                    <Text>
                    See what it’s like to be a part of a winning team. Our commitment to your professional development ensures that you have a clear opportunity for growth within our company.  
                        </Text>
                        <Button>Join us</Button>
                    </GreenDiv>
                </GFlexDiv>

                <FlexDiv>
                <HalfDiv>
                        <Subtitle>Let's Connect</Subtitle>
                    <Text>
                    Want to learn more? Connect with us on LinkedIn!  
                        </Text>
                        <FlexDiv>
                          <GreenButton>Connect on Linkedin</GreenButton>
                        </FlexDiv>
                    </HalfDiv>
                    <HalfDiv>
                    </HalfDiv>
                </FlexDiv>
    
                
    </StyledDiv>
    )}
  
  
    const StyledDiv = styled.div`
    width: 100%;
    text-align: center;
    justify-content: center;
    
    `;
    
    const CenterDiv = styled.div`
    width: 100%;
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
    
    `;
    
    const ULText = styled.p`
    font-size: 1rem;
      text-decoration: underline;
    `;
    
    const Title = styled.h1`
    font-size: 5rem;
    
    `;
    
    const Subtitle = styled.h1`
    font-size: 4rem;
    
    `;
    
    const GreenDiv = styled.div`
      
      padding: 2rem;
      text-align: left;
      justify-self: center;
      align-items: center;
      justify-content:center;
      width: 50%;
      color: white;
      height: fit-content;
      background: green;
    
      
    `;
    
    const FlexDiv = styled.div`
    padding-bottom: 3rem;
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
    
    `;
    
    
    const VertDiv = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: left;
    justify-content: left;
    
    `;
    export default connect(Laird);