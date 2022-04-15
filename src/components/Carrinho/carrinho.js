import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';


export class Carrinho extends Component {

  render() {

    let listaCarrinho = this.props.listaCarrinho.map((item)=>{
      return (
        <div>
          <p>{item.title}</p>
          <button onClick={()=>{this.props.delItem(item.id)}}>X</button>
        </div>
      )
    })

    return (
      <div>
        <Header 
        mudarParaInicio={this.props.mudarParaInicio}
        mudarParaCarrinho={this.props.mudarParaCarrinho}
        pagAtual={this.props.pagAtual}
        />
        {listaCarrinho}
        <button >Comprar Serviços</button>
        <button onClick={this.props.delAllCarrinho}>Esvaziar carrinho</button>
        <button onClick={this.props.mudarParaServicos}>Voltar para serviços</button>
        <Footer />
      </div>
    )
  }
}