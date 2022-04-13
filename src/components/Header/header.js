import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';


const HeaderBonito = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 80px;
  align-items: center;
  input{
    width: 400px;
    height: 35px;
    border-radius: 15px;
    padding-left: 10px;
    border: solid black;
  }
`



export class Header extends Component {
  state = {
    query: "",
  }

  UpdateQuery = (e) => {
    this.setState({
      query: e.target.value
    })
  };

  render() {

  let mudarPagina = () => {
      switch(this.props.pagAtual){
        case 'Servicos':
          return (
            <HeaderBonito>
            <div>
              <button
              onClick={this.props.mudarParaInicio}
              >home</button>
            </div>

            <div>
              <input
              placeholder='Pesquisar'
              value={this.props.query}
              onChange={this.props.onChange}
              />

            </div>

            <div>
              <button
              onClick={this.props.mudarParaCarrinho}
              >carrinho</button>
            </div>
          
        </HeaderBonito>
          )
          default: return (

            <HeaderBonito>
            <div>
            <button
              onClick={this.props.mudarParaInicio}
              >home</button>
            </div>

            <div>
            <button
              onClick={this.props.mudarParaCarrinho}
              >carrinho</button>
            </div>
          
        </HeaderBonito>
          )
          
      }
        
      
    }


    return (
      <div>
       {mudarPagina()}
      </div>
    )
  }
}