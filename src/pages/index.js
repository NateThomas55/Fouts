import React from 'react';

import styled from 'styled-components';
import { media } from '../utils/media-query';
import '../layouts/index.css';

const IndexWrapper = styled.div`
  ${'' /* border: 1px solid blue; */}
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

const MainLogo = styled.svg`
  width: 90%;
`

const Tagline = styled.p`
  margin: 0;
  font-size: 3.2rem;
  ${media.phone`font-size: 2rem;`}
  color: #73FBD3;
  font-weight: 300;
`;

const IndexPage = () => (
  <IndexWrapper>
    <MainLogo id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 279.1 99.8">
      <path className="st0" d="M254.8,15.6c0,3.1,2,5.2,4.8,6.9V8.6C256.7,10,254.8,12.6,254.8,15.6z"
      />
      <path className="st0" d="M274.2,42.7c0-3.2-1.8-5.3-4.5-7.1v14.3C272.4,48.6,274.2,46.1,274.2,42.7z"
      />
      <path className="st0" d="M79.7,7.2c-11.5,0-20.9,9.3-20.9,21.6c0,12.7,9.4,22.3,20.9,22.3s20.8-9.6,20.8-22.3	C100.5,16.5,91.2,7.2,79.7,7.2z"
      />
      {/* parts of the s*/}
      <path className="st7" d="M250,45l-4.5,6c0,0,5,5.5,14.1,7.1v-7.6C253.9,48.8,250,45,250,45z"
      />
      <path className="st7" d="M275.5,12.2l3.6-6.6c0,0-3.9-4-11.4-5.3V8C272.4,9.4,275.5,12.2,275.5,12.2z"
      />
      <path className="st7" d="M254.8,15.6c0-3,1.9-5.6,4.8-7V0.7c-7.7,1.9-12.8,7.9-12.8,15.1c0,8.3,6.3,12,12.8,15v-8.3	C256.8,20.8,254.8,18.7,254.8,15.6z"
      />
      {/* tax service with both navy blue blocks area*/}
      <text transform="translate(47.667 93.457)" className="st2 st3 st4">TAX SERVICE</text>
      <rect y="80.2" className="st5" width="42.7" height="7"
      />
      <rect x="235.3" y="80" className="st6" width="42.7" height="7" />
      <path className="st7" d="M76.2,0c-16.3,0-29,12.6-29,28.8c0,16.6,12.7,29.6,29,29.6s29-13,29-29.6C105.2,12.6,92.5,0,76.2,0z M76.2,51.1c-11.5,0-20.9-9.6-20.9-22.3c0-12.3,9.4-21.6,20.9-21.6S97,16.5,97,28.8C97,41.5,87.7,51.1,76.2,51.1z"
      />
      <path className="st7" d="M160.5,37.3c0,8.8-5.7,13.8-14.4,13.8c-8.6,0-14.2-5-14.2-13.7V1h-7.9v36.5c0,12.6,9,21,22.2,21 c13.2,0,22.2-8.4,22.2-21V1h-7.9V37.3z"
      />
      <polygon className="st7" points="183.7,7.8 203,7.8 203,57.4 210.9,57.4 210.9,7.8 230.3,7.8 230.3,1 183.7,1"
      />
      {/* part of s */}
      <path className="st7" d="M270.7,42.7c0,3.4-1.8,5.9-4.5,7.2v7.9c7.9-1.9,12.5-8.1,12.5-15.3c0-8.6-6.1-12.5-12.5-15.4v8.6 C268.9,37.4,270.7,39.6,270.7,42.7z"
      />
      {/* The F in Fouts */}
      <rect x="13.7" y="26.4" className="st1" width="15.4" height="6.9" />
      <rect x="13.7" y="1" className="st1" width="18.8" height="6.9" />
      <rect x="1.3" y="1" className="st7" width="7.9" height="56.5" />
    </MainLogo>
    <Tagline>Year round tax service</Tagline>
  </IndexWrapper>
);

export default IndexPage;
