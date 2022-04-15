import React, { Component } from 'react';
import styled from 'styled-components';


const Display = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color:white;
box-shadow: 0px 5px 5px rgba(22, 22, 22, 0.863);
  border-radius: 5px;
  margin: 5px;
  height: 150px;
  text-align: center;
  overflow: hidden;
`

const Menu = styled.div`
display: flex;
  button{
      border:none;
      width:100%;
      height: 25px;
      background-color: black;
      color: white;

      :hover{
          cursor: pointer;
        background-color:rgb(22, 22, 22);
      }
  }
`




export class Card extends Component {

    
  render() {

      return (
          <Display>
              
              <h2>{this.props.nome}</h2>
              <h4>Preço: R$ {this.props.preco}</h4>

              <Menu>
                  <button onClick={()=>{this.props.infoCard(this.props.id)}}>Ver Detalhes</button>
                  <button onClick={()=>{this.props.addCarrinho(this.props.id)}}>Add carrinho</button>
              </Menu>
              
          </Display>
      )
  }
  }