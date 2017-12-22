import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';
import styled from 'styled-components';
import 'typeface-raleway';

import Navigation from './components/Navigation';

const OuterWrapper = styled.div`
  background: ${props => props.gradient ? 'linear-gradient(to right, #2C3E50, #4CA1AF);' : 'white'};
  width: 100vw;
  height: 100vh;
`;

const TemplateBody = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding-top: 0;
  height: calc(100% - 90px);
`;

const TemplateWrapper = ({ children }) => (
  <OuterWrapper gradient>
    <Helmet
      title="Fouts Tax Service"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'tax, anderson, 46011' },
      ]}
    />
    <Navigation />
    <TemplateBody>
      {children()}
    </TemplateBody>
  </OuterWrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
