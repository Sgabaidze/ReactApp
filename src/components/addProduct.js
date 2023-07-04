import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Box, Container, CssBaseline, MuiThemeProvider, createTheme } from '@material-ui/core'
import env from '../env.json'

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
    
    useEffect(() => {
        axios.get(`${env.URL}`)
    })

  return (
    <>
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth='md'>
                <Box p={2}>
                    <div style={{display : "flex", justifyContent : "center", flexDirection: "column", background: "gray"}}>
                        <Link to='/' state={{fontSize: 30, textAlign : "center"}}>
                            Home
                        </Link>
                        <div style={{
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            sdfsfsdf
                        </div>
                    </div>
                </Box>
            </Container>    

        </MuiThemeProvider>
    </>
  )
}

export default AddProduct