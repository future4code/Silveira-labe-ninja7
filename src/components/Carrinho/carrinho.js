import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';


export class Carrinho extends Component {
  render() {
    return (
      <div>
        <Header 
        mudarParaInicio={this.props.mudarParaInicio}
        mudarParaCarrinho={this.props.mudarParaCarrinho}
        pagAtual={this.props.pagAtual}
        />
        <h1>Carrinho</h1>
        <Footer />
      </div>
    )
  }
}