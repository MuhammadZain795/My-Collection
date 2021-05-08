import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <Nav>
            <Name>
                Zain's Collection
            </Name>
            <Items>
                <Image
                    src="/images/user.JPG"/>
            </Items>
        </Nav>
    )
}

const Nav = styled.div`
    height: 5vw;
    min-height:7vh;
    background:rgb(40,44,53);
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`
const Name = styled.div`
    color:#fcfcfc;
    font-size:4vh;
    cursor: pointer;
`
const Items = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left:10vw;
    position: absolute;
    right:0;
    padding-right: 5vw;
`
const Image = styled.img`
    width: 3vw;
    min-width: 5vh;
    height: 3vw;
    min-height: 5vh;
    border-radius: 50%;
    cursor: pointer;
`