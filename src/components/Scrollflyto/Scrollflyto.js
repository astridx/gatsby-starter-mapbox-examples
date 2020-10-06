import React from 'react'
import scollflyto from '../../constants/scrollflyto'
import SingleScrollflyto from './SingleScrollflyto'
import styled from 'styled-components'

const Scrollflyto = () => {
  return (
    <ScrollflytoContainer>
      <ScrollflytoWrapper>
        {scollflyto.map((item, index) => (
          <SingleScrollflyto key={index} title={item.title} text={item.text} />
        ))}
      </ScrollflytoWrapper>
    </ScrollflytoContainer>
  )
}

const ScrollflytoContainer = styled.section`
  width: 50%;
`

const ScrollflytoWrapper = styled.div`
  font-family: sans-serif;
  overflow-y: scroll;
  background-color: #fafafa;
`

export default Scrollflyto
