/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Container, HStack, Input, Text } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import "focus-visible/dist/focus-visible"
import { DebounceInput } from "react-debounce-input"
import { Event, set_val } from "/utils/state"
import NextHead from "next/head"



export function Debounceinput_3fd713e73ea57e2d2b530a06dd6d4657 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_c1fe93b939c866e1de40fb642568d5e0 = useCallback((_e0) => addEvents([Event("state.state.set_question", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_c1fe93b939c866e1de40fb642568d5e0} placeholder={`Haz una pregunta`} sx={{"borderWidth": "1px", "padding": "1em", "boxShadow": "rgba(0,0,0, 0.15)"}} type={`text`} value={state__state.question}/>
  )
}

export function Button_831625b281919f74e858bf5fa2cba439 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_f4ecaeca7ac4803e870637fe18cb1eea = useCallback((_e) => addEvents([Event("state.state.answer", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_f4ecaeca7ac4803e870637fe18cb1eea} sx={{"bg": "#82A0D8", "boxShadow": "rgba(0,0,0, 0.15)"}}>
  {`Preguntar`}
</Button>
  )
}

export function Box_8e7bed8a68d63cc0b7467105f61d32d8 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Box>
  {state__state.chat_history.map((messages, index_70d1acab74b51b3610c45d212f648b01) => (
  <Box key={index_70d1acab74b51b3610c45d212f648b01} sx={{"marginY": "1em"}}>
  <Box sx={{"textAlign": "right"}}>
  <Text sx={{"padding": "1em", "borderRadius": "5px", "marginY": "0.5em", "boxShadow": "rgba(0,0,0, 0.15)", "maxWidth": "30em", "display": "inline_block", "bg": "#8DDFCB", "marginLeft": "20%"}}>
  {messages.at(0)}
</Text>
</Box>
  <Box sx={{"textAlign": "left"}}>
  <Text sx={{"padding": "1em", "borderRadius": "5px", "marginY": "0.5em", "boxShadow": "rgba(0,0,0, 0.15)", "maxWidth": "30em", "display": "inline_block", "bg": "#EDB7ED", "marginRight": "20%"}}>
  {messages.at(1)}
</Text>
</Box>
</Box>
))}
</Box>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container>
  <Box_8e7bed8a68d63cc0b7467105f61d32d8/>
  <HStack>
  <Debounceinput_3fd713e73ea57e2d2b530a06dd6d4657/>
  <Button_831625b281919f74e858bf5fa2cba439/>
</HStack>
</Container>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
