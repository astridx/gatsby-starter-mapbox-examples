import React from 'react'
import styled from 'style'

const Findelevation = props => {
  return (
    <FindelevationContainer>
      <div>
        Elevation:{' '}
        <span id="findelevationfield">Bitte auf die Karte klicken.</span>
      </div>
    </FindelevationContainer>
  )
}

const FindelevationContainer = styled.section`
  position: absolute;
  background-color: #fff;
  z-index: 1;
`

export default Findelevation
