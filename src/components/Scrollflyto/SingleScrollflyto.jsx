import React from 'react'
import styled, { themeGet } from 'style'

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
  margin: 200px 0;
  padding: 25px 50px;
  line-height: 25px;
  border-bottom: 1px solid #ddd;
  color: gray;
  font-size: 13px;
}
section.active {
  color: black;
}
section:last-child {
  border-bottom: none;
  margin-bottom: 400px;
}
`

export default SingleScollflyto
