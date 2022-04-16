import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';

const Container = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
border: solid 1px;
border-radius: 3px;
background-color:white;
width: 100%;
height: 50px;
margin-top: 5px;
h3{
    margin-left: 5px;
}
`


const Del = styled.button`
border:none;
height:100%;
width: 50px;
font-size: 18px;
color: red;
background-color: transparent;

:hover{
    background-color: red;
    color: black;
}
`

const Teste = styled.div`

`

export class Item extends Component {


  render() {

    return (
      <Container>
        <h3>{this.props.titulo}</h3>
        <p>R$ {this.props.preco}</p>
        <Del onClick={() => { this.props.delItem(this.props.id) }}><i class="fa-solid fa-trash"></i></Del>
      </Container>
    )
  }
}