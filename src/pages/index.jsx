import React from 'react'

import Layout from 'components/Layout'
import { Container } from 'components/Grid'
import Map from 'components/Map'
import styled from 'style'
import { siteMetadata } from '../../gatsby-config'

const Section = styled.section`
  h3 {
    margin-bottom: 0.25rem;
  }

  &:not(:first-child) {
    margin-top: 3rem;
  }
`

const IndexPage = () => (
  <Layout>
    <Container my="2rem">
      <h1>{siteMetadata.title}</h1>

      <p>
        The menu items in the navigation can be changed in the file
        `gatsby-starter-mapbox-examples/src/components/Layout/Header.jsx`.
      </p>

      <Section>
        <h3>Example: a fixed size map:</h3>
        <Map width="400px" height="200px" />
      </Section>

      <Section>
        <h3>
          Example: a fluid map that fills the container and different styles:
        </h3>
        <Map
          height="200px"
          styles={['streets-v11', 'satellite-v9', 'dark-v9', 'light-v9']}
        />
      </Section>
      <hr />
      <p>Please see all other examples using the navigation.</p>
    </Container>
  </Layout>
)

export default IndexPage
