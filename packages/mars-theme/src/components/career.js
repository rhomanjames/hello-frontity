import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Career = ({ state }) => {
  return (
    <>
      <StyledDiv>
      <Title>Careers</Title>
          <StyledDiv>
          <GreenDiv>
          <h2>North American Plastics is the largest distributor of 
              plastics in North America. With over 115 locations in the US and Canada, we are confident that you can 
              find a meaningful career with us.</h2>
          </GreenDiv>
          </StyledDiv>
          <StyledDiv>
              <StyledButton title="test">View Careers</StyledButton>
              <StyledButton title="test">College Recruitment</StyledButton>
              <StyledButton title="test">Acquisitions</StyledButton>

          </StyledDiv>
          <br></br>
          <br></br>
          <StyledDiv>
              <h1>Videos</h1>
            <FlexDiv>
                <StyledDiv>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/EiE-KBQoFTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p><b>Why join us?</b></p>
                </StyledDiv>
                <StyledDiv>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/qAt4TpNAZsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p><b>Grow with us!</b></p>
                </StyledDiv>
                <StyledDiv>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/P5SiP5SPoNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p><b>Find out who we are</b></p>
                </StyledDiv>
            </FlexDiv>
          </StyledDiv>

          <StyledDiv>
              <h1>Open Positions</h1>
            <FlexDiv>
                <StyledButton>Location</StyledButton>
                <StyledButton>Category</StyledButton>
                <StyledButton>Brands</StyledButton>
            </FlexDiv>
          </StyledDiv>
              <JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p>Outside Sales Rep</p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Akron, OH</p>
                      <p>Laird Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv>
    
      </StyledDiv>
    
    </>
  );
};
const StyledDiv = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  justify-content: center;

`;

const FlexDiv = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  text-align: center;
  justify-content: center;

`;

const VertDiv = styled.div`
  width: 100%;
  text-align: left;
  justify-content:left;
  align-items: left;

`;
const RightDiv = styled.div`
  text-align: right;
  padding-right: 3rem;

`;

const StyledButton = styled.button`
  padding: .75rem;
  color: black;
  background: white;
  border: 1px solid #f0f0f0;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 25px;
`;

const StyledTag = styled.button`
  padding: .5rem;
  color: white;
  height: fit-content;
  background: green;
  border: 1px solid #f0f0f0;
  font-size: .75rem;
  margin-right: 1rem;
  border-radius: 25px;
`;

const GreenDiv = styled.div`
    width: 50%;
    justify-self: center;
    text-align: center;
    color: white;
    background: green;
    padding: 1rem;
    border-radius: 20px;
    margin-right: auto;
    margin-left: auto;
`;

const Title = styled.h1`
font-size: 5rem;

`;


const JobDiv = styled.div`
    width: 50%;
    justify-self: center;
    text-align: center;
    color: black;
    background: white;
    border: 1px solid #f0f0f0;
    padding: 1rem;
    border-radius: 20px;
    margin-right: auto;
    margin-left: auto;
    transition: .4s;

    :hover { border: black 1px solid; cursor: pointer}
`;
export default connect(Career);