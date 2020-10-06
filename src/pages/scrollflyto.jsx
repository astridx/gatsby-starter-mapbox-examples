import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import Map from 'components/Map'
import Scrollflyto from '../components/Scrollflyto/Scrollflyto'
import scrollflyto from '../constants/scrollflyto'
import { Flex } from 'components/Grid'
import styled from 'style'

const MapPage = () => {
  const [scrollPosition, setSrollPosition] = useState(0)
  const handleScroll = () => {
    var activeName = scrollflyto[0].title
    for (var i = 0; i < scrollflyto.length; i++) {
      console.log(scrollflyto[i].title)
      if (isElementOnScreen(scrollflyto[i].title)) {
        setActiveChapter(scrollflyto[i].title, i)
        break
      }
    }

    function setActiveChapter(chapterName, i) {
      if (chapterName === activeName) return

      map.flyTo(scrollflyto[i])

      document.getElementById(chapterName).setAttribute('class', 'active')
      document.getElementById(activeName).setAttribute('class', '')

      activeName = chapterName
    }

    function isElementOnScreen(id) {
      var element = document.getElementById(id)
      var bounds = element.getBoundingClientRect()
      return bounds.top < window.innerHeight && bounds.bottom > 0
    }
    const position = window.pageYOffset
    setSrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Layout title="Map with Sidebar">
      <Wrapper>
        <Map />
        <Scrollflyto />
      </Wrapper>
    </Layout>
  )
}

// this wrapper needs to be 100% to force map and sidebar to fill the full space
const Wrapper = styled(Flex)`
  height: 100%;
`

export default MapPage
