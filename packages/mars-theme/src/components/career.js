import { connect, styled, css } from "frontity";
import Link from "./link";
import Nav from "./nav";
import HomePic from "./images/homepic.png";
import newcollege from "./images/new-college.png";

import Careerpic from "./images/careerpic.png";

import MobileMenu from "./menu";

const Career = ({ state }) => {
  return (
    <>
      <StyledDiv>
      <FlexDiv>
        <TopVertDiv>
            <Title>Careers</Title>
            <Text>North American Plastics is the largest distributor of 
              plastics in North America. With over 115 locations in the US and Canada, we are confident that you can 
              find a meaningful career with us.</Text>
            <a href="#jobs"><GreenButton >Open Positions</GreenButton></a>
            <a href="/college"><GreenButton >College Recruitment</GreenButton></a>
        </TopVertDiv>
        <BannerPicDiv>
        <Image src={newcollege}/>
        </BannerPicDiv>
    </FlexDiv>
          
          <br></br>
          <StyledDiv css={css`background: green; color: white;`}>
              <h1 css={css`text-align: center; color: white;`}>Company Videos</h1>
            <FlexDiv>
                <StyledDiv css={css`justify-content:center; text-align:  center; padding: .5rem`}>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/EiE-KBQoFTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h4><b>Why Join Us?</b></h4>
                </StyledDiv>
                <StyledDiv css={css`justify-content:center; text-align:  center; padding: .5rem`}>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/qAt4TpNAZsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h4><b>Grow With Us!</b></h4>
                </StyledDiv>
                <StyledDiv css={css`justify-content:center; text-align:  center; padding: .5rem`}>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/P5SiP5SPoNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h4><b>Find Out Who We Are</b></h4>
                </StyledDiv>
            </FlexDiv>
          </StyledDiv>

          <StyledDiv id="jobs" css={css`background: white;`}>
          <StyledDiv >
              <h1 css={css`text-align: center; color: black`}>Open Positions</h1>
            {/*<FlexDiv>
                <StyledButton>Location</StyledButton>
                <StyledButton>Category</StyledButton>
                <StyledButton>Brands</StyledButton>
            </FlexDiv>*/}
          </StyledDiv>

              <a href="https://www.linkedin.com/jobs/view/2858133006/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Inside Sales Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Atlanta, GA</p>
                      <p>Calsak Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              

              <a href="https://www.linkedin.com/jobs/view/2849349507/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Outside Sales Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Hingham, MA</p>
                      <p>Hart Supply</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2849348978/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Inside Sales Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Hingham, MA</p>
                      <p>Hart Supply</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2840013060/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Inside Sales Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Shelton, CT</p>
                      <p>Modern Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2859870561/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Customer Support Representative</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Dallas, TX</p>
                      <p>Laird Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2859875080/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Customer Support Representative</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Grand Rapids, MA</p>
                      <p>Laird Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2859869914/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Customer Support Representative</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Atlanta,</p>
                      <p>Laird Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2859874028/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Customer Support Representative</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Philadelphia, PA</p>
                      <p>Laird Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.indeed.com/viewjob?t=material+handler&jk=46db13e6c493b076&_ga=2.236970817.1526843702.1641234596-1917059116.1586176225" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Material Handler</b></p>
                      <StyledTag>Warehouse</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Bethlehem, PA</p>
                      <p>Lehigh Valley Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.indeed.com/viewjob?t=cnc+machinist&jk=2b0055bebb38cdf4&_ga=2.26733181.1526843702.1641234596-1917059116.1586176225" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>CNC Machinist</b></p>
                      <StyledTag>Warehouse</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Bethlehem, PA</p>
                      <p>Lehigh Valley Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

          

              <a href="https://www.linkedin.com/jobs/view/2851271056/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Inside Sales Account Manager</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Toronto, CA</p>
                      <p>EM Plastic</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.indeed.com/viewjob?t=machine+operator&jk=4a7f5e16ce691188&_ga=2.26733181.1526843702.1641234596-1917059116.1586176225" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Machine Operator</b></p>
                      <StyledTag>Warehouse</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Bethlehem, PA</p>
                      <p>Port Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2866026497/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Inside Sales Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>San Jose, CA</p>
                      <p>Port Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2866024544/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Outside Sales Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>San Jose, CA</p>
                      <p>Port Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.indeed.com/viewjob?t=warehouse+associate&jk=c41128abc30a66f0&_ga=2.90389658.1235822548.1638981929-1917059116.1586176225" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Warehouse Associate</b></p>
                      <StyledTag>Warehouse Associate</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>San Jose, CA</p>
                      <p>Port Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.indeed.com/viewjob?t=delivery+driver&jk=fe1c42e1d5bfa4e6&_ga=2.255015560.1235822548.1638981929-1917059116.1586176225" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Delivery Driver</b></p>
                      <StyledTag>Warehouse </StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Hingham, MA</p>
                      <p>Hart Supply</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2824952048/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Outside Sales Rep</b></p>
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
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2822652312/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Inside Sales Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Tuscon, AZ</p>
                      <p>Calsak Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2825684713/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Customer Support Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Chicago, IL</p>
                      <p>Laird Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>


              <a href="https://www.linkedin.com/jobs/view/2822646803/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Outside Sales Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Compton, CA</p>
                      <p>PVC Tech</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2824807666/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Inside Sales Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Clearwater, FL</p>
                      <p>Farco Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2801467204/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Inside Sales Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Seattle, WA</p>
                      <p>Port Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.indeed.com/viewjob?t=warehouse+associate&jk=fc1522387d7d898c&_ga=2.97318107.559125564.1635859197-1917059116.1586176225" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Warehouse Associate</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Atlanta, GA</p>
                      <p>Calsak Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2766133605/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Inside Sales Account Manager</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Bethlehem, PA</p>
                      <p>Lehigh Valley Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2802882124/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Inside Sales Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Atlanta, GA</p>
                      <p>Laird Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://www.linkedin.com/jobs/view/2804342071/?capColoOverride=true" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>Inside Sales Rep</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                        <p>Long Island,</p>
                      <p>Laird Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>

              <a href="https://apply.workable.com/north-american-plastics/j/75E5C10204/" target="_blank"><JobDiv>
                  <div>
                      <FlexDiv>
                          <VertDiv>
                          <p><b>North American Plastics Summer Internship</b></p>
                      <StyledTag>Sales</StyledTag>
                          </VertDiv>
                      <VertDiv>
                        <RightDiv>
                      
                      <p>North American Plastics</p>
                        </RightDiv>
                      </VertDiv>
                      </FlexDiv>
                  </div>
              </JobDiv></a>
    
      </StyledDiv>

          </StyledDiv>
    
    </>
  );
};
const StyledDiv = styled.div`
  width: 100%;
  text-align: left;
  justify-content: left;
  position: relative;
  padding-bottom: 1rem;
  padding-top: 1rem;


  @media screen and (max-width: 860px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;}

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
margin-bottom: 1rem;
margin-left: auto;
cursor: pointer;

@media screen and (max-width: 860px) {
  flex-direction: column;
  text-align: center;
  margin-left: 1rem;
  justify-content: center;}


`;

const FlexDiv = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
 

  @media screen and (max-width: 860px) {
    text-align: center;
    flex-direction: column}

`;


const Image = styled.img`
  width: 100%;
  margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
    top: 0;
    right: 0;
  @media screen and (max-width: 860px) {
    width: 100%;   
  }
  `

const BannerPicDiv = styled.div`
height: 100%;


  @media screen and (max-width: 860px) {
    display: none;
  }
`;


const Text = styled.p`
font-size: 1rem;
text-align: left;


@media screen and (max-width: 860px) {
  font-size: 1.5rem;
text-align:center}

@media screen and (max-width: 560px) {
  font-size: 1.5rem;
text-align:center}

`;

const VertDiv = styled.div`

  text-align: left;
  justify-content:center;
  align-items: center;
  padding: 2rem;


  @media screen and (max-width: 860px) {
   
    text-align: center;
    padding: .5rem;
  justify-content:center;
  align-items: center;}

`;

const TopVertDiv = styled.div`

padding-bottom: 1rem;
text-align: left;
justify-content: left;
width: 50%;


  @media screen and (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: .5rem;
  justify-content:center;
  align-items: center;}

`;
const RightDiv = styled.div`
  text-align: right;
  padding-right: 3rem;

  @media screen and (max-width: 860px) {
    text-align: center;
    padding-right: 0}

`;

const StyledButton = styled.button`
  padding: .75rem;
  color: black;
  background: white;
  border: 1px solid #f0f0f0;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
  border-radius: 25px;
  width: fit-content;
`;

const StyledTag = styled.button`
  padding: .5rem;
  color: white;
  height: fit-content;
  background: green;
  border: 1px solid #f0f0f0;
  font-size: .75rem;
  
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
color: black;

`;


const JobDiv = styled.div`
    width: fit-content;
    justify-self: center;
    text-align: center;
    color: black;
    background: white;
    border: 1px solid green;
    padding: 1rem;
    border-radius: 20px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 2rem;
    transition: .4s;

    :hover { border: black 1px solid; cursor: pointer}

    @media screen and (max-width: 860px) {
      flex-direction: column}
`;
export default connect(Career);