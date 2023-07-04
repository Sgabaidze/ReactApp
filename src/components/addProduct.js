import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Box, MuiThemeProvider, createTheme } from '@material-ui/core'

const theme  = createTheme({
    props: {
        MuiTextField: {
            variant: "outlined",
            margin: "dense"
        },

        MuiFormControl:{
            variant: "outline",
            margin: "dense"
        }
    }
})

const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [count, setCount] = useState(0)
    const [prodimg, setProdimg] = useState()
    
    
  return (
    <>
        <MuiThemeProvider theme={theme}>

        </MuiThemeProvider>
    </>
  )
}

export default AddProduct