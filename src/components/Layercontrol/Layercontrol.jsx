import React from 'react'
import Layercontrolitem from './Layercontrolitem'
import styled from 'style'

const Layercontrol = props => {
  return (
    <div>
      {props.layercontrol.map((item, index) => (
        <LayercontrolContainer key={index} id={item.uniqueid}>
          {item.layer.map((l, index) => (
            <Layercontrolitem key={index} title={l.id} />
          ))}
        </LayercontrolContainer>
      ))}
    </div>
  )
}

const LayercontrolContainer = styled.nav`
  background: #fff;
  position: absolute;
  z-index: 1;
  bottom: 10px;
  right: 10px;
  border-radius: 3px;
  width: 120px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-family: 'Open Sans', sans-serif;

  a {
    font-size: 13px;
    color: #404040;
    display: block;
    margin: 0;
    padding: 0;
    padding: 10px;
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    text-align: center;
  }

  a:last-child {
    border: none;
  }

  a:hover {
    background-color: #f8f8f8;
    color: #404040;
  }

  a.active {
    background-color: #3887be;
    color: #ffffff;
  }

  a.active:hover {
    background: #3074a4;
  }
`

export default Layercontrol
