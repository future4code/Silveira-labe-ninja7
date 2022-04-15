import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';
import img from '../../img/ninja-imagem.jpg'

const Menu = styled.div`
width: 700px;
display:flex;
justify-content:center;
align-items:center;

div{
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  button{
    cursor: pointer;
    margin: 25px;
    width:300px;
    height: 45px;
    background-color: black;
    color:white;
    border:none;
    border-radius: 6px;
    font-size: 18px;
  }
}
`



const SectionMain = styled.div`
display:flex;
height: 480px;
background-color: #FF9B1F;
`

const Banner = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  display:flex;
  justify-content:center;
  align-items:center;

  h2{
    font-family: 'Permanent Marker', cursive;
    color: rgba(255,255,255,0.7);
    text-align: center;
    font-size: 40px;
    width:400px;
  }
`

export class PaginaInicial extends Component {
  render() {
    return (
      <div>
        <Header 
        mudarParaInicio={this.props.mudarParaInicio}
        mudarParaCarrinho={this.props.mudarParaCarrinho}
        pagAtual={this.props.pagAtual}
        />
        <SectionMain>
          <Menu>
            <div>
              <button onClick={this.props.mudarParaServicos}>Contrate um Ninja</button>
              <button onClick={this.props.mudarParaCadastro}>Quero ser um Ninja</button>
            </div>
          </Menu>
          <Banner>
            <h2>O talento certo no momento certo</h2>
          </Banner>        
        </SectionMain>       
          <Footer />
      </div>
    )
  }
}