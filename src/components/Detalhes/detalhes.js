import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';

const convertDate = (date) => {
    const day = date.substring(8, 10)
    const month = date.substring(5, 7)
    const year = date.substring(0, 4)
    return `${day}/${month}/${year}`
}

const ContainerDetails = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #FF9B1F;
height: 500px;
`

const Menu = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
margin-top: 10px;
button {
    border: none;
    background-color: black;
    color:white;
    margin-top: 1px;
    width: 150px;
    height: 30px;
    width: 100%;
}
`

const CardDescricao = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 6px;
width: 50%;
overflow: hidden;
p {
    margin-top: 20px;
}
h1 {
    margin-top: 20px;
}
li {
    margin-top: 10px;
    align-items: flex-start;
}
`

export class Detalhes extends Component {

    render() {
        const listPayment = this.props.pagamento.map((payment) => {
            return (
                <li>
                    {payment}
                </li>
            )
        })

        return (
            <div>
                <Header
                    mudarParaInicio={this.props.mudarParaInicio}
                    mudarParaCarrinho={this.props.mudarParaCarrinho}
                    pagAtual={this.props.pagAtual}
                />
                <ContainerDetails>
                    <CardDescricao>
                        <h1> {this.props.titulo} </h1>
                        <p> Preço: R${this.props.preco} </p>
                        <p> Prazo: {convertDate(this.props.data)} </p>
                        <p> Descrição: {this.props.descricao} </p>
                        <p> Métodos de Pagamento: </p> {listPayment}
                        <Menu>
                        <button onClick={this.props.mudarParaServicos}>Voltar para Lista</button>
                        <button onClick={() => this.props.addCarrinho(this.props.id)}>Adicionar ao carrinho</button>
                        </Menu>
                    </CardDescricao>
                </ContainerDetails>
                <Footer />
            </div>

        );
    }
}