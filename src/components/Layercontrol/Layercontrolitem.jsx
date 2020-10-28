import React from 'react'
import styled, { themeGet } from 'style'

const Layercontrolitem = ({ title }) => {
  return (
    <LayercontrolitemWrapper>
      <a id={title} className="active" href="#">
        {title}
      </a>
    </LayercontrolitemWrapper>
  )
}

const LayercontrolitemWrapper = styled.p`
  text-align: center;
  margin-bottom: 0.05rem;
`

export default Layercontrolitem
