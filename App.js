import React, {useState, useRef} from 'react';
import api from './src/services/api'; //api importada
import{keyboard} from 'react-native';



import { Container, Texto , View ,TextInput, TouchableOpacity, BotaoText, BotaoView,BotaoLimpar, ResultView, ResulText   } from './styles';


export default function App () {
  const[cep, setCep] = useState ('') // useState atribuido a vallue
  const inputRef = useRef(null)
  const [cepUser, setCepUser] =useState (null) //

  async function buscar() {
    if (cep == ''){
      alert('Digite um cep valido');
      setCep ('');
      return
    }
    try {  //try catch para pegar o erro e exibir o erro no console
      const response = await api.get (`/${cep}/json`); //chamada de api transformar em função assycrona para esperar uma requisição
      console.log(response.data);

      setCepUser (response.data)
      keyboard.dismiss(); // Garantir que o teclado sera fechado!
    }catch (error){
      console.log('ERROR:' + error);
    }

    

  }
  
  function limpar() {
      setCep ('')
      inputRef.current.focus();
  }
return (


<Container>

    <View> 

      <Texto>  Digite o cep desejado</Texto> 
    <TextInput
    placeholder ="Ex: 835429"
    value={cep} //pegar o que foi digitado
    onChangeText={(texto) => setCep (texto)} // recebe o texto digitado e passa para o setCep e dentro da useEstate vai ter o resultado digitatdo
    keyboardType="numeric" //Teclado somente numerico
    ref={inputRef} // referenciado
    />
    </View>

            <BotaoView>
          <TouchableOpacity
          onPress={buscar}
          >
            <BotaoText >Buscar</BotaoText >
          </TouchableOpacity>

            <BotaoLimpar >
           <BotaoText
           onPress={limpar}
           >Limpar</BotaoText >

           </BotaoLimpar >
             </BotaoView>
{cepUser &&
<ResultView>
  <ResulText > Cep: {cepUser.cep} </ResulText>
  <ResulText > Logradouro: {cepUser.logradouro} </ResulText>
  <ResulText > Bairro: {cepUser.bairro}</ResulText>
  <ResulText > Cidade: {cepUser.localidade}</ResulText>
  <ResulText > Estado: {cepUser.uf}</ResulText>
  <ResulText > IBGE: {cepUser.ibge}</ResulText>
</ResultView>

}

   

</Container>

)


}