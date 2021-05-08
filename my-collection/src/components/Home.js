import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import Movies from './Movies'

export default function Home() {
    return (
        <Container>
            <Header/>
            <Movies/>
        </Container>
    )
}

const Container = styled.div`
    background-color: rgb(22,22,29);
`
