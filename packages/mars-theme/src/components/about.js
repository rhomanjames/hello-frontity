import React from 'react'
import { connect, styled } from "frontity";


const About = () => {
    return (
        <StyledDiv>
            <Title>Who is North American Plastics?</Title>
            <FlexDiv>
                <HalfDiv>
                    
                
                </HalfDiv>
                <HalfDiv>
                    <h1>About us</h1>
                <Text>
                The North American Plastics group, a collection of the industry’s top leading brands in plastics distribution, is comprised of 100+ locations across North America and offers the largest geographic footprint in the plastics industry today. With each of our brands operating independently, they offer a wide range of value-added services, product lines from the most trusted manufacturers in the industry, and localized customer service.
                    </Text>
                </HalfDiv>
            </FlexDiv>
            <FlexDiv>
                <HalfDiv>
                    <h1>Our Culture</h1>
                <Text>
                North American Plastics strongly believes our people are our most valuable asset. We offer exciting opportunities for those that thrive being part of a winning team. Our decentralized and empowered business model is a perfect fit for self-motivated, entrepreneurial, and energetic team players. We pride ourselves in having a “family” environment at all locations.
                    </Text>
                
                </HalfDiv>
                <HalfDiv>
                
                </HalfDiv>
            </FlexDiv>
            <FlexDiv>
                <HalfDiv>
                    
                
                </HalfDiv>
                <HalfDiv>
                <h1>Sustainable</h1>
                <Text>
                North American Plastics offers a closed loop recycling program to provide a comprehensive sustainable solution that will assist your company in achieving environmental conservation and waste reduction.

In addition to this program, our brands offer recycled grade plastics, and lightweight alternatives to traditional materials, saving massively on fuel usage and other processing emissions. The high performance plastics offered by NAP provide a longer life cycle reducing landfill waste.
                    </Text>
                </HalfDiv>
            </FlexDiv>
            <FlexDiv>
                <HalfDiv>
                <h1>Sustainable</h1>
                <Text>
                North American Plastics also offers a recycling program to provide a comprehensive sustainable solution that will assist your company in achieving their goals for environmental conservation and waste reduction.
                    </Text>
                </HalfDiv>
                <HalfDiv>
    
                </HalfDiv>
            </FlexDiv>
                
                <BigText>
                   <ULText href="mailto:NationalAccounts@NorthAmericanPlastics.com">Contact us</ULText> today!
                    </BigText>
            
            </StyledDiv>
    )}

    const StyledDiv = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: center;
    justify-content: center;
  
  `;
  
  const ULText = styled.a`
 text-decoration:underline

`;

const Title = styled.h1`
 font-size: 3rem;

`;

  const Text = styled.p`
    font-size: 1.25rem;
    text-align: left;
  
  `;
  const BigText = styled.p`
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
  
  `;

  const HalfDiv = styled.div`
    text-align: left;
    width: 50%;
    padding: 1rem;
    justify-content: left;
  
  `;

    const FlexDiv = styled.div`
    width: 100%;
    padding: 1rem;
    height: 80vh;
    display: flex;
    text-align: center;
    justify-content: center;
  
  `;
    export default connect(About);