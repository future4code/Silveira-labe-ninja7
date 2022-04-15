import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';
import { Card } from "./card";

const ContainerServicos = styled.section`
`

const Display = styled.div`
  display: grid;
  /* wrap: wrap; */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 50px;
`


const headers = {
  headers: {
    Authorization: "85b665ca-9cb7-4839-a692-5efea90e1fa7"
  }
}

export class Servicos extends Component {
  state = {
    Servicos: [],
    valorMaximo: '',
    valorMinimo: '',
    query: '',
    valorOrdem: '',
    carrinho: []
  }

  pegarServicos = () => {
    const URL = "https://labeninjas.herokuapp.com/jobs"
    Axios.get(URL, headers)
      .then((res) => {
        this.setState({ Servicos: res.data.jobs })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidMount() {
    this.pegarServicos()
  }

  onChangeMax = (e) => {
    this.setState({ valorMaximo: e.target.value })
  }

  onChangeMin = (e) => {
    this.setState({ valorMinimo: e.target.value })
  }

  onChangeQuery = (e) => {
    this.setState({ query: e.target.value })
  }

  onChangeOrdem =(e) => {
    this.state.valorOrdem = e.target.value
    this.setState({valorOrdem: this.state.valorOrdem})
    console.log(this.state.valorOrdem)
  }

  render() {

    let mapeamentoDeTarefas = this.state.Servicos.filter((servico) => {
      if (this.state.valorMaximo != '') {
        return (servico.price <= this.state.valorMaximo)
      } else {
        return servico
      }
    }).filter((servico) => {
      return (servico.price >= this.state.valorMinimo)
    })
      .filter((servico) => {
        return servico.title.toLowerCase().includes(this.state.query.toLowerCase())
      }).sort((a,b) => {
         if (this.state.valorOrdem == "Crescente") {
           return a.price - b.price
         }
      }).sort((a,b) => {
        if (this.state.valorOrdem == "Decrescente") {
          return b.price - a.price
        }
      }).sort((a,b) => {
        if (this.state.valorOrdem == "Titulo") {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
         
          return 0;
        }
      })

      .map((servico) => {
        return (<Card
          nome={servico.title}
          descricao={servico.description}
          preco={servico.price}
          formaDePagamento={servico.paymentMethods}
          prazo={servico.dueDate}
          contratado = {servico.taken}
          id = {servico.id}
          addCarrinho = {this.props.addCarrinho}
          infoCard={this.props.infoCard}
          mudarParaDetalhes={this.props.mudarParaDetalhes}
        />)
      })

    return (
      <div>
        <Header
          mudarParaInicio={this.props.mudarParaInicio}
          mudarParaCarrinho={this.props.mudarParaCarrinho}
          pagAtual={this.props.pagAtual}
          onChange={this.onChangeQuery}
          query={this.state.query}
        />
        <ContainerServicos>
          <div>
            <input
              placeholder='Valor Max'
              type='number'
              value={this.state.valorMaximo}
              onChange={this.onChangeMax}
            />
            <input
              placeholder='Valor Min'
              type='number'
              value={this.state.valorMinimo}
              onChange={this.onChangeMin}
            />
            <select onChange={this.onChangeOrdem}>

              <option>Nenhum</option>
              <option value="Crescente">Preço crescente</option>
              <option value ="Decrescente">Valor decrescente</option>
              <option value = "Titulo">Título</option>
              <option>Prazo</option>
            </select>

          </div>
          <Display>
          {mapeamentoDeTarefas}
          </Display>
        </ContainerServicos>
        <Footer />
      </div>
    )
  }
}