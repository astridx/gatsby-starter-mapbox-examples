import React from 'react'
import SingleScrollflyto from './SingleScrollflyto'
import styled from 'style'

const Scrollflyto = props => {
  return (
    <ScrollflytoContainer>
      <ScrollflytoWrapper>
        {props.scrollflyto.map((item, index) => (
          <SingleScrollflyto key={index} title={item.title} text={item.text} />
        ))}
      </ScrollflytoWrapper>
    </ScrollflytoContainer>
  )
}

const ScrollflytoContainer = styled.section`
  max-height: 400px;
`

const ScrollflytoWrapper = styled.div`
  font-family: sans-serif;
  background-color: #fafafa;
`

export default Scrollflyto
