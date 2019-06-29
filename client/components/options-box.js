import React, {Component} from 'react'
import {Box, Button} from '@material-ui/core'

export default class OptionsBox extends Component {
  render() {
    return (
      <Box style={{opacity: 0.1, backgroundColor: 'red', zIndex: 2}}>
        <h1>Hey, what's up?</h1>
      </Box>
    )
  }
}
