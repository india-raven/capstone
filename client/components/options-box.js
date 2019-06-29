import React, {Component} from 'react'
import {Box, Button} from '@material-ui/core'

export default class OptionsBox extends Component {
  render() {
    return (
      <Box
        style={{opacity: 0.1, width: 50, backgroundColor: 'red', elevation: 5}}
      >
        <h1>Hey, what's up?</h1>
      </Box>
    )
  }
}
