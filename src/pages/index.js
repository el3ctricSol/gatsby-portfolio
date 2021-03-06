import React, { Component } from 'react'
import styled from 'styled-components'
import Icons from '../components/icons.js'

import VideoBgComponent from 'react-videobg'
import Glitch from '../images/logo-glitch.mp4'

const IconsContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
`

class App extends Component {
  render() {
    const params = {
      sources: [Glitch],
      videosize: {
        w: 1920,
        h: 1080,
      },
      fitType: 'cover',
      videoProps: {
        muted: true,
        autoPlay: true,
        loop: false,
        playsInline: true,
        crossOrigin: 'anonymous',
      },
      eventHandler: {
        loadstart: e => {
          console.log('loadstart')
        },
        progress: e => {
          console.log('pregoress:', e)
        },
        canplay: e => {
          console.log('canplay', e)
          console.log('node:', e.currentTarget)
        },
      },
    }

    return (
      <div className="App">
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: '0',
          }}
        >
          <VideoBgComponent {...params} />
          <IconsContainer>
            <Icons />
          </IconsContainer>
        </div>
      </div>
    )
  }
}
export default App
