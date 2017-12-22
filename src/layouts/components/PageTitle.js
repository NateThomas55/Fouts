import React from 'react';
import styled from 'styled-components'
import { media } from '../../utils/media-query.js'

//Page header text styles
const PageTitle = styled.h1`
  position: absolute;
  letter-spacing: 3px;
  top: 110px;
  left: 30px;
  text-transform: uppercase;
  font-size: 4rem;
  ${media.tablet`font-size: 3.2rem;`}
  ${media.phone`font-size: 2rem;`}
  margin-bottom: 24px;
  ${media.tablet`margin-bottom: 2rem;`}
  ${media.phone`margin-bottom: 2rem;`}

  font-weight: 500;
`

export default ({ title }) => (
  <PageTitle>
    {title}
  </PageTitle>
)
