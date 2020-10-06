import React from 'react'
import styled from 'styled-components'

const SingleScollflyto = ({ title, text }) => {
  return (
    <SingleScollflytoWrapper>
      <section id={title}>
        <h3>{title}</h3>
        <p>{text}</p>
      </section>
    </SingleScollflytoWrapper>
  )
}

const SingleScollflytoWrapper = styled.section`

  padding: 25px 50px;
  line-height: 25px;
  border-bottom: 1px solid #ddd;
  opacity: 0.25;
  font-size: 13px;
}
section.active {
  opacity: 1;
}
section:last-child {
  border-bottom: none;
  margin-bottom: 200px;
}
`

export default SingleScollflyto
