import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';

const JobPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    width: 400px;
  }
  select {
    width: 410px;
  }
`

export class Cadastro extends Component {
  state = {
    pagAtual: 'Cadastro',
    inputTitle: "",
    inputDescription: "",
    inputPrice: "",
    inputPayment: [],
    inputDate: ""
  }

onChangeTitle = (e) => {
    this.setState({ inputTitle: e.target.value });
};

onChangeDescription = (e) => {
  this.setState({ inputDescription: e.target.value });
};

onChangePrice = (e) => {
  this.setState({ inputPrice: e.target.value });
};

onChangePayment = (e) => {
  let value = Array.from(e.target.selectedOptions, option => option.value)
  this.setState({ inputPayment: value })
};

onChangeDate = (e) => {
  this.setState({ inputDate: e.target.value });
};

createJob = () => {
  const headers = {
    headers: {
        Authorization: "85b665ca-9cb7-4839-a692-5efea90e1fa7"
    }
  }
    const body = {
        title: this.state.inputTitle,
        description: this.state.inputDescription,
        price: Number(this.state.inputPrice),
        paymentMethods: this.state.inputPayment,
        dueDate: this.state.inputDate
    }
    axios
    .post("https://labeninjas.herokuapp.com/jobs", body, headers)
    .then((res) => {
        alert(`O job foi enviado com sucesso!`)
        this.setState({inputTitle: "", inputDescription: "", inputPrice: "", inputPayment: "", inputDate: ""})
    })
        .catch((err) => {
        alert(err.response.data.message)
    })
}

  render() {
    return (
      <div>
      <Header />
      <JobPage>
      <h2> PÁGINA PARA ADICIONAR NOVOS JOBS </h2>
            <input placeholder="Title" type="text" value={this.state.inputTitle} onChange={this.onChangeTitle} />
            <input placeholder="Descrição" type="text" value={this.state.inputDescription} onChange={this.onChangeDescription} />
            <input placeholder="Preço" type="number" value={this.state.inputPrice} onChange={this.onChangePrice} />
            <select value={this.state.inputPayment} onChange={this.onChangePayment} multiple>
                    <option>Cartão de Débito</option>
                    <option>Cartão de Crédito</option>
                    <option>PayPal</option>
                    <option>Boleto</option>
                    <option>Pix</option>
            </select>
            <input placeholder="Data de Expiração" type="date" value={this.state.inputDate} onChange={this.onChangeDate} />
            <button onClick={this.createJob}> Enviar Job </button>
      </JobPage>
      <Footer />
      </div>
    )
  }
}