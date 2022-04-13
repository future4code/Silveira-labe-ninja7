import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';
import { Card} from "./card";


const headers = {
  headers: {
    Authorization: "85b665ca-9cb7-4839-a692-5efea90e1fa7"
  }
}

export class Servicos extends Component {
  state = {
    Servicos: [],
    valorMaximo: 0,
    valorMinimo: 0,
    


  }
  pegarServicos = () => {
   const URL = "https://labeninjas.herokuapp.com/jobs"
   Axios.get(URL, headers)
   .then((res)=>{
     this.setState({Servicos:res.data.jobs})
     console.log(this.state.Servicos)
   })

   .catch((err)=>{
    console.log(err)
   })
  }
   componentDidMount (){
     this.pegarServicos()
   }

   onChangeMax = (e) => {
     this.setState({valorMaximo: e.target.value})
   }

   onChangeMin = (e) => {
    this.setState({valorMinimo: e.target.value})
  }
  render() {
     
    let mapeamentoDeTarefas = this.state.Servicos.filter((servico)=>{
      return (servico.price >= this.state.valorMinimo) && (servico.price <= this.state.valorMaximo)
    })
    .map((servico) => {
     return(<Card
       nome= {servico.title}
       descricao = {servico.description}
       preco ={servico.price}
       formaDePagamento = {servico.paymentMethods}
       prazo = {servico.dueDate}
     />)
    })
    
    return (
      <div>
        <Header />
        <div>
          <input 
           placeholder='Valor Max'
           type = 'number'
           value = {this.state.valorMaximo}
           onChange = {this.onChangeMax}
          />
          <input 
           placeholder='Valor Min'
           type = 'number'
           value = {this.state.valorMinimo}
           onChange = {this.onChangeMin}
          />
          <select>
            <option> Valor 1</option>
            <option>Valor 2</option>
            <option>Valor 3</option>
            
          </select>

        </div>
        {mapeamentoDeTarefas}
        <Footer />
      </div>
    )
  }
}