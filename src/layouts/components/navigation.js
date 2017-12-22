import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';
import { media } from '../../utils/media-query.js';
import Icon from './Fouts-Logo.svg';

const Header = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px 10px 20px;
  ${media.phoneXL`padding: 20px 40px 10px 20px;`}
  ${media.phone`padding: 20px 20px 10px 20px;`}

`;

const Box = styled.div`
  width: 80px;
  height: 60px;
  background-color: #D80032;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  height: 3.2rem;
  ${media.phone`height: 2.4rem;`}
  margin: 0;
`;

const Nav = styled.ul`
  display: flex;
  width: 200px;
  ${media.phone`width: 150px;`}
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  ${media.phone`font-size: 1.8rem;`}
  text-decoration: none;
  color: #2B2D42;
  font-weight: 500;
`;

const Navigation = () => (
  <Header>
    <Box>
      <Link to="/"><Logo src={Icon} alt={Icon}/></Link>
    </Box>
    <Nav>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Nav>
  </Header>
);

export default Navigation;
