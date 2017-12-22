import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'
import { media } from '../utils/media-query'
import { PageTitle } from '../utils/style-utils'

const BG = styled.div`
  background: pink;
`

const ContactPage = () => (
  <BG>
    <PageTitle>About Us</PageTitle>
    <p>Welcome to About Us</p>
    <Link to="/">Go back to the homepage</Link>
  </BG>
)

export default ContactPage
