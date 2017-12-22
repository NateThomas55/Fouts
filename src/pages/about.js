import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { media } from '../utils/media-query'
import PageTitle  from '../layouts/components/PageTitle.js'

import Profile from '../layouts/components/Profile.js'


const Wrapper = styled.div`
  border: 1px solid pink;
  height: 100%;
`

const AboutPage = () => (
  <Wrapper>
    <PageTitle title="About Us"/>
      <Profile/>
  </Wrapper>
)

export default AboutPage
