import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Career = ({ state }) => {
  return (
    <>
      <StyledDiv>
          <StyledDiv>
          <h1>Careers</h1>
          <GreenDiv>
          <p>North American Plastics is the largest distributor of 
              plastics in North America. With over 115 locations in the US and Canada, we are confident that you can 
              find a meaningful career with us.</p>
          </GreenDiv>
          </StyledDiv>
          <StyledDiv>
              <StyledButton title="test">View Careers</StyledButton>
              <StyledButton title="test">College Recruitment</StyledButton>
              <StyledButton title="test">Acquisitions</StyledButton>

          </StyledDiv>

          <StyledDiv>
              <h1>Videos</h1>
            <FlexDiv>
                <StyledDiv>
                    Video 1
                </StyledDiv>
                <StyledDiv>
                    Video 2
                </StyledDiv>
                <StyledDiv>
                    Video 3
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
          <StyledDiv>
              <JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p>Outside Sales Rep</p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                      <p>Akron, OH</p>
                      <p>Laird Plastics</p>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv>
          </StyledDiv>
    
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
  padding: .3rem;
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
`;
export default connect(Career);