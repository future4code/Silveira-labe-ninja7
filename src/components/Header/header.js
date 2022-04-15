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

  button{
    color:white;
    background-color: transparent;
    border:none;

    i{
      font-size: 32px;
      margin-right: 20px;
    }
  }
`

const Logo = styled.h1`
  color: white;
  margin-left: 10px;
`

const ContainerLogo = styled.div`
display:flex;
align-items: center;
margin-left:10px;

i{
  font-size: 32px;
  color: white;
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
            <ContainerLogo>
            <i class="fa-solid fa-user-ninja"/>
            <Logo
              onClick={this.props.mudarParaInicio}
              >Labeninjas</Logo>
            </ContainerLogo>

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
              ><i class="fa-solid fa-cart-shopping"/></button>
            </div>
          
        </HeaderBonito>
          )
          default: return (

            <HeaderBonito>
            <ContainerLogo>
            <i class="fa-solid fa-user-ninja"></i>
            <Logo
              onClick={this.props.mudarParaInicio}
              >Labeninjas</Logo>
            </ContainerLogo>

            <div>
            <button
              onClick={this.props.mudarParaCarrinho}
              ><i class="fa-solid fa-cart-shopping"/></button>
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