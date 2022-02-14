import { connect, styled, css } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import React, { useState } from 'react';

import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({}) => {

  const [menuDisplay, setMenuDisplay] = useState('none');



      return (

        
        <div>
<nav css={css`display: flex; marginRight: 1rem; align-items:center;
        @media screen and (max-width: 860px) {
          display: none;
        }`}>
        <a css={css`margin-right: 2rem; border-bottom: white`} href="/">Home</a>
        <a css={css`margin-right: 2rem;`} href="/about">About</a>
        <a css={css`margin-right: 2rem;`} href="/brands">Brands</a>
        <a css={css`margin-right: 2rem;`} href="/career">Careers</a>
        <a css={css`margin-right: 2rem;`} href="/sustainability">Sustainability</a>
            </nav>

            <HamburgerIcon
            onClick={() => setMenuDisplay('flex')}

            css={css`display: none; 
            @media screen and (max-width: 860px) {
              display: block;
              
            }`}
          color="black"
          size="24px"
          role="button"
          tabindex="0"
          data-amp-bind-hidden="isMenuOpen"
          on="tap:AMP.setState({ isMenuOpen: true })"
        />
        <div >
              <div css={css`position: fixed; top: 0; right: 0; transition; 1s; z-index: 1; width: 100vw; height: 100vh; padding-top: .75rem; color: white; background: green; justify-content: space-evenly; display: ${menuDisplay}; flex-direction: column; align-items: center;`}>
              <div css={css`background: white; top: 0; right: 0; position: absolute; padding: .5rem;`}>
              <CloseIcon
                  onClick={() => setMenuDisplay('none')}
                  css={css`
                  }`}
                  color="green"
                  size="24px"
                  role="button"
                  tabindex="0"
                  data-amp-bind-hidden="isMenuOpen"
                  on="tap:AMP.setState({ isMenuOpen: true })"
                  />
              </div>
                <div css={css` width: 100%; border: 1px white solid; font-size: 1.5rem; justify-content: center; transition: .4s; text-align: center; :hover { background: white; color: green; width: 100%}`}>
                <a  href="/"><h1>Home</h1></a>
                </div>

                <div  css={css` width: 100%; border: 1px white solid; font-size: 1.5rem; justify-content: center; transition: .4s; text-align: center; :hover { background: white; color: green; width: 100%}`}>
                <a href="/about"><h1>About</h1></a>
                </div>

                <div  css={css` width: 100%; border: 1px white solid; font-size: 1.5rem; justify-content: center; transition: .4s; text-align: center; :hover { background: white; color: green; width: 100%}`}>
                <a href="/brands"><h1>Brands</h1></a>
                </div>

                <div  css={css` width: 100%; border: 1px white solid; font-size: 1.5rem; justify-content: center; transition: .4s; text-align: center; :hover { background: white; color: green; width: 100%}`}>
                <a href="/career"><h1>Careers</h1></a>
                </div>

                <div  css={css` width: 100%; border: 1px white solid; font-size: 1.5rem; justify-content: center; transition: .4s; text-align: center; :hover { background: white; color: green; width: 100%}`}>
                <a href="/sustainability"><h1>Sustainability</h1></a>
                </div>
              
              </div>

        </div>
        </div>
        

         
        
      
)};

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 800px) {
    display: none;
  }
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
cursor: pointer;

`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: black;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
