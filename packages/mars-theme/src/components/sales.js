import React from 'react'
import { connect, styled } from "frontity";


const Sales = () => {
    return (
        <StyledDiv>
            <Title>National Accounts</Title>
            <FlexDiv>
                <HalfDiv>
                    
                
                </HalfDiv>
                <HalfDiv>
                    <h1>Welcome</h1>
                <Text>
                    Welcome to North American Plastics National Accounts. North American Plastics is the industry’s leading organization for plastics distribution, and our world class National Accounts program is geared to streamline your company’s 
                procurement process while providing a high level of customer service and competitive market pricing.
                    </Text>
                </HalfDiv>
            </FlexDiv>
            <FlexDiv>
                <HalfDiv>
                    <h1>Location. Location. Location.</h1>
                <Text>
                With the largest local footprint of facilities in the industry today, we are located where you need your key suppliers to be in order to support today’s fast-paced business environment. Our in-house converting and fabrication capabilities can provide you with materials and the best stage to maximize your company’s productivity and working capital.
                    </Text>
                
                </HalfDiv>
                <HalfDiv>
                
                </HalfDiv>
            </FlexDiv>
            <FlexDiv>
                <HalfDiv>
                    
                
                </HalfDiv>
                <HalfDiv>
                <h1>Top Quality</h1>
                <Text>
                We are supported by the top brand name manufacturers in plastics, and bring warehousing, inventory and delivery capabilities to your doorstep.
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
    font-size: 1.5rem;
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
    export default connect(Sales);