import React from 'react'
import styled from 'styled-components'

import { media } from '../../utils/media-query.js'

import Data from '../../data/Data.json'
import Jerry from '../../images/jerry_fouts.jpg'

const ProfileContainer = styled.div`
  display: flex;
  ${media.tablet`flex-direction: column;`}
`

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 40px;
`

const Avatar = styled.img`
  width: 200px;
  ${media.phone`width: 150px;`}
  height: 200px;
  ${media.phone`height: 150px;`}
  border-radius: 50%;
`

const Name = styled.h3`
  font-size: 4.2rem;
  font-weight: 300;
`

const JobTitle = styled.h4`
  font-size: 3.2rem;
  font-weight: 100;
`

const P = styled.p`
  font-size: 1.5rem;
`


let profiles = Data.map((profile) => {
  return (
    <ProfileSection key={profile.id}>
      <Avatar src={profile.image} alt={profile.name}/>
      <Name>{profile.name}</Name>
      <JobTitle>{profile.position}</JobTitle>
      <P>{profile.bio}</P>
    </ProfileSection>
  )
});


const Profile = ( props ) => {
  return (
    <ProfileContainer>
      {profiles}
    </ProfileContainer>
  )
}

export default Profile;
