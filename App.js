
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Picker, Switch, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexo: 0,
      nome: '',
      idade: '',
      genero: [
        { key: 0, sexy: 'Masculino' },
        { key: 1, sexy: 'Feminino' }
      ],
      limite: 100,
      ocupacao: false
    };


    this.enviarDados = this.enviarDados.bind(this);
  }

  enviarDados() {

    if(this.state.nome === '' || this.state.idade === ''){
      alert('Preencha todos os dados corretamente!')
      return;
    }

    alert(
    'Conta Aberta com sucesso!! \n\n' +
    'Nome: ' + this.state.nome + '\n\n' +
    'Idade: ' + this.state.idade + '\n\n' +
    'Sexo: ' + this.state.genero[this.state.sexo].sexy + ' \n' +
    'Limite Conta: ' + this.state.limite.toFixed(2) +' R$' + '\n' +
    'Conta Estudante: ' + ((this.state.ocupacao)? 'Ativo' : 'Inativo')
    );
  }

  render() {

    let sexoGenero = this.state.genero.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexy} />
    })

    return (
      <View style={styles.container}>

        <Text style={styles.headbank}>Native Bank</Text>
        <View style={styles.form}>
          <Text style={{ fontSize: 20, fontStyle: 'italic', padding: 5 }}>Nome:</Text>

          <TextInput underlineColorAndroid='transparent'
            style={styles.inputbox}
            placeholder='Digite o seu nome...'
            onChangeText={(texto) => this.setState({ nome: texto })}

          />



          <View style={styles.waySexy}>
            <Text style={{ fontSize: 20 }}>Sexo:</Text>
            <Picker
              selectedValue={this.state.sexo}
              style={styles.sexoGenero}
              onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}
            >
              {sexoGenero}

            </Picker>
          </View>




          <Text style={{ fontSize: 20, paddingTop: 20 }}>Sua idade:</Text>
          <TextInput keyboardType='numeric'
            style={styles.inputbox}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({ idade: texto })}


          ></TextInput>




          <Text style={{ paddingTop: 20, fontSize: 20, fontStyle:'italic' }}>Defina seu Limite Inicial:</Text>
          <View>
            <Slider
              minimumValue={100}
              maximumValue={5000}
              style={{ paddingTop: 10, paddingBottom: 15 }}
              onValueChange={(valorSelecionado) => this.setState({ limite: valorSelecionado })}
              value={this.state.limite}
              minimumTrackTintColor='#ff3300'
            />
          </View>
          <Text style={styles.value}>Limite: {this.state.limite.toFixed(0) + ',00'}</Text>



          <View style={styles.study}>
            <Text style={styles.studyName}>Estudante:</Text>
            <Switch
            style={{paddingTop:15, paddingTop:15}}
            trackColor="#00c300"
            value={this.state.ocupacao}
            onValueChange={(valorEstudante) => this.setState({ocupacao: valorEstudante})}
            />
          </View>
      
        <TouchableOpacity style={styles.btn} onPress={this.enviarDados}>
          <Text style={styles.btnTexto}>Abrir Conta!</Text>
        </TouchableOpacity>
      

        </View>
      </View>
    );
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#00bfff'
  },
  headbank: {
    fontSize: 25,
    textAlign: 'center',
    borderWidth: 4,
    borderRadius: 8,
    fontWeight: 'bold',
    color: 'purple',
    backgroundColor: 'cyan',
    paddingVertical: 8,
    marginBottom: 15,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 110
  },
  inputbox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 15,
  },
  form: {
    flexDirection: 'column',
    margin: 10
  },
  sexoGenero: {
    flex: 1,
    fontSize:20
  },
  areSexo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  waySexy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  areaSlider: {
    flex: 1
  },
  value: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 30,
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: -5,
    width: 250,
    alignItems: 'center',
    marginLeft: 80,
    color: '#ff3300',
    fontWeight:'bold'
  },
  study:{
    paddingTop:15,
    flexDirection:'row',
    alignItems:'center'
  },
  studyName:{
    paddingRight:10,
    fontSize:20,
    color:'#000000',
    fontWeight:'bold'
  },
  btn:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 150,
    margin: 20
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
})




