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
    console.log(this.state.query)

    return (
      <div>
        <HeaderBonito>
            <div>
              <button>home</button>
            </div>

            <div>
              <input
              placeholder='Pesquisar'
              value={this.state.query}
              onChange={this.UpdateQuery}
              />

            </div>

            <div>
              <button>carrinho</button>
            </div>
          
        </HeaderBonito>
      </div>
    )
  }
}