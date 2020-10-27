import React from 'react'
import Layercontrolintem from './Layercontrolitem'
import styled from 'style'

const Layercontrol = props => {
  return (
    <LayercontrolContainer>
      <LayercontrolWrapper>
        {props.Layercontrol.map((item, index) => (
          <Layercontrolitem key={index} title={item.title} text={item.text} />
        ))}
      </LayercontrolWrapper>
    </LayercontrolContainer>
  )
}

const LayercontrolContainer = styled.nav`
  max-height: 400px;
`

const LayercontrolWrapper = styled.div`
  font-family: sans-serif;
  background-color: #fafafa;
`

export default Layercontrol
