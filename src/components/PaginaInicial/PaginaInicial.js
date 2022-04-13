import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';

export class PaginaInicial extends Component {
  render() {
    return (
      <div>
        <Header 
        mudarParaInicio={this.props.mudarParaInicio}
        mudarParaCarrinho={this.props.mudarParaCarrinho}
        pagAtual={this.props.pagAtual}
        />
        <h1>Pagina inicial</h1>
        <button onClick={this.props.mudarParaServicos}>seviços</button>
        <button onClick={this.props.mudarParaCadastro}>cadastro</button>
        <Footer />
      </div>
    )
  }
}