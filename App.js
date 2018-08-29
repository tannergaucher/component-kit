import React from 'react'
import { Library, Example } from '@compositor/kit'
import { ThemeProvider, injectGlobal } from 'styled-components'
import theme from './theme'

import Avatar from './components/Avatar'
import BackgroundImage from './components/BackgroundImage'
import Blockquote from './components/Blockquote'
import Border from './components/Border'
import Box from './components/Box'
import Button from './components/Button'
import ButtonCircle from './components/ButtonCircle'
import ButtonOutline from './components/ButtonOutline'
import Caps from './components/Caps'
import Card from './components/Card'
import Close from './components/Close'
import Column from './components/Column'
import Container from './components/Container'
import Divider from './components/Divider'
import Flex from './components/Flex'
import Row from './components/Row'

import Subhead from './components/Subhead'

injectGlobal`
  body {
    font-family: Arial;
  }
`

export default () => (
  <ThemeProvider theme={theme}>
    <Library>
      <Library.Nav />
      <Example name="Avatar">
        <Avatar
          size={32}
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
        />
      </Example>
      <Example name="BackgroundImage">
        <BackgroundImage src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
      </Example>

      <Example name="Blockquote">
        <Blockquote>
          Hello Blockquote- “The simplest scale is a single note, and sticking
          with a single note draws more attention to other parameters, such as
          rhythm and inflection.”
        </Blockquote>
      </Example>

      <Example name="Border">
        <Border py={2} top bottom>
          Hello border
        </Border>
      </Example>

      <Example name="Box">
        <Box px={3} py={4} color="white" bg="black">
          Hello Box
        </Box>
      </Example>

      <Example name="Button">
        <Button children="Hello, Button!" />
      </Example>

      <Example name="ButtonCircle">
        <ButtonCircle children="Hello, ButtonCircle!" />
      </Example>

      <Example name="ButtonOutline">
        <ButtonOutline children="Hello, ButtonOutline!" />
      </Example>

      <Example name="Caps">
        <Caps>Hello Caps</Caps>
      </Example>

      <Example name="Card">
        <Card width={256}>
          <BackgroundImage
            ratio={0.5}
            boxShadow={4}
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
          />
          <Subhead p={2}>Hello Card</Subhead>
        </Card>
      </Example>

      <Example name="Close">
        <Close />
      </Example>

      <Example name="Column">
        <Row>
          <Column bg="lime">Column</Column>
          <Column bg="fuchsia">Column</Column>
          <Column bg="lime">Column</Column>
        </Row>
      </Example>

      <Example name="Container">
        <Container bg="lime">Hello Container</Container>
      </Example>

      <Example name="Divider">
        <Divider />
      </Example>

      <Example name="Flex">
        <Flex mx={-3} flexWrap="wrap">
          <Box width={[1, 1 / 2]} p={3} color="white" bg="blue">
            Flex
          </Box>
          <Box width={[1, 1 / 2]} p={3} color="white" bg="violet">
            Box
          </Box>
        </Flex>
      </Example>

      <Example name="Subhead">
        <Subhead>Hello Subhead</Subhead>
      </Example>
    </Library>
  </ThemeProvider>
)
