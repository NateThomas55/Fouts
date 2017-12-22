import styled from 'styled-components';
import { media } from './media-query';

export const PageTitle = styled.h1`
  ${'' /* writing-mode: vertical-lr;
  text-orientation: upright; */}
  padding-top: 40px;
  text-transform: uppercase;
  font-size: 4rem;
  ${media.tablet`font-size: 3.2rem;`}
  ${media.phone`font-size: 3.2rem;`}
  font-weight: 500;
`;
