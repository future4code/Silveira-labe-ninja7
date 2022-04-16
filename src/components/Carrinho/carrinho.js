import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';
import { Item } from './item';

const Menu = styled.div`
display:flex;
flex-direction: column;
margin-top:10px;
`


const CarrinhoDisplay = styled.section`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
height: 500px;
background-color: #FF9B1F;
h2{
  text-align:center;
  margin-bottom: 50px;
}
`

const Display = styled.div`
width: 50%;
`

const Mbutton = styled.button`
  margin-top:2px;
  height: 40px;
  width: 100%;
  border:none;
  border-radius: 4px;
  background-color: black;
  color: white;
  font-size: 18px;
  :hover{
    cursor: pointer;
    background-color:rgb(22, 22, 22);
  }
`

export class Carrinho extends Component {


  render() {

    let listaCarrinho;
      if(this.props.listaCarrinho.length === 0){
        listaCarrinho = <h2>Carrinho Vazio</h2>
      }else{
         listaCarrinho = this.props.listaCarrinho.map((item) => { 
          return (
            <Item 
              titulo={item.title}
              preco={item.price}
              id={item.id}
              delItem={this.props.delItem}
            />
          )
        })
      }

    return (
      <div>
        <Header
          mudarParaInicio={this.props.mudarParaInicio}
          mudarParaCarrinho={this.props.mudarParaCarrinho}
          pagAtual={this.props.pagAtual}
        />
        <CarrinhoDisplay>
          <Display>
          {listaCarrinho}
          <Menu>
            <Mbutton >Comprar Serviços</Mbutton>
            <Mbutton onClick={this.props.delAllCarrinho}>Esvaziar carrinho</Mbutton>
            <Mbutton onClick={this.props.mudarParaServicos}>Voltar para serviços</Mbutton>
          </Menu>
          </Display>
        </CarrinhoDisplay>
        <Footer />
      </div>
    )
  }
}