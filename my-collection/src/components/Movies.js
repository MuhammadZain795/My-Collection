import React from 'react'
import styled from 'styled-components'

export default function Movies() {
    return (
    <Container>
        <TagDiv>
            <Tag>Movies</Tag>
            <Button>Add Movie</Button>
        </TagDiv>
      <Content>
          <Wrap>
              <img src="/images/details-bg.png"/>
          </Wrap>
          <Wrap>
              <img src="/images/details-bg.png"/>
          </Wrap>
          <Wrap>
              <img src="/images/details-bg.png"/>
          </Wrap>
          <Wrap>
              <img src="/images/details-bg.png"/>
          </Wrap>
          <Wrap>
              <img src="/images/details-bg.png"/>
          </Wrap>
          
      </Content>
      <TagDiv>
            <Tag>Web Series</Tag>
            <Button>Add Web Series</Button>
        </TagDiv>
      <Content>
          <Wrap>
              <img src="/images/details-bg.png"/>
          </Wrap>
          <Wrap>
              <img src="/images/details-bg.png"/>
          </Wrap>
          <Wrap>
              <img src="/images/details-bg.png"/>
          </Wrap>
          <Wrap>
              <img src="/images/details-bg.png"/>
          </Wrap>
          <Wrap>
              <img src="/images/details-bg.png"/>
          </Wrap>
      </Content>
    </Container>
    )
}

const Container = styled.div`
    margin: 10px;
`
const TagDiv = styled.div`
    height: 4vw;
    min-height:7vh;
    background:#404040;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    margin-bottom: 20px;
    margin-top: 20px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    &:hover{
        background-color: rgb(40,44,53);
        color: #000;
        border-color: transparent;
    }
`

const Tag = styled.div`
    color:#fcfcfc;
    font-size:4vh;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    cursor: pointer;
`
const Button = styled.div`
    position:absolute;
    right:0;
    margin-right:20px;
    background-color:transparent;
    color: white;
    cursor: pointer;
    font-size: 3vh;
    &:hover{
        color: black;
    }
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`