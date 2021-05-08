import React from 'react'
import Header from './Header'
import styled from 'styled-components'

export default function Home() {
    return (
        <Container>
            <Header/>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    background-color: rgb(22,22,29);
`
