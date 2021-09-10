import  styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
flex:1;

`;
export const View = styled.View `
align-items: center;
`;

export const Texto = styled.Text`
margin-top: 25px;
margin-bottom: 15px;
font-size: 25px;
color:#222;
font-weight: bold;

`;


export const BotaoView = styled.View `
align-items: center;
flex-direction: row;
justify-content: space-around;
margin-top: 15px;

`;

export const TouchableOpacity = styled.TouchableOpacity`
height:60px;
background-color: #ff0000;
justify-content: center;
align-items: center;
padding: 15px;
border-radius: 5px;
flex-direction: row;

`;
export const BotaoLimpar = styled.TouchableOpacity`
height:60px;
background-color: blue;
justify-content: center;
align-items: center;
padding: 15px;
border-radius: 5px;
flex-direction: row;


`;

export const BotaoText = styled.Text`

font-size: 19px;
color: #fff



`;



export const TextInput = styled.TextInput`
background-color: #fff;
border-Color: #dddddd;
border-width: 1px;
width: 90%; 
font-size: 20px;
padding: 10px;


`;

export  const  ResultView =styled.View `
flex:1;
justify-content:center;
align-items: center;

`;


export const ResulText  = styled.Text `
font-size: 22px;
`;