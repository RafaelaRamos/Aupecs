import styled from 'styled-components/native';
import ActionButton from 'react-native-action-button';
import Toast from 'react-native-tiny-toast';
import { TextInputMask } from 'react-native-masked-text'
import Icon from 'react-native-vector-icons/FontAwesome';


//Containers

export const Container = styled.View`

display: flex;
flex: 1;
justifyContent: center;
alignItems: center;
backgroundColor: #f3f3f3;
flexDirection: column;
`
        ;

export const ViewSecund = styled.View`

justifyContent: center;
alignItems: center;`
        ;

export const ViewTerc = styled.View`
marginTop: 15;
flexDirection: column;
justifyContent: space-between;
backgroundColor: #f3f3f3;

`
        ;

export const InputFormatado = styled(TextInputMask)`
fontSize: 14;
fontWeight: bold;
borderTopWidth: 1;
height: 42;
borderEndWidth: 1;
borderLeftWidth: 1;
borderRightWidth: 1;
borderBottomWidth: 1;
borderColor:  #1E90FF;
marginTop: 10;
width: 150;
padding: 10px;
backgroundColor:#f3f3f3;



`;
export const InputFormatadoUP = styled(TextInputMask)`
fontSize: 14;
borderBottomWidth:1;
borderColor:  #1E90FF;
backgroundColor:#f3f3f3;



`;

export const Exibir = styled.View`

backgroundColor:#f3f3f3;
flexDirection:column;
  paddingVertical:80;
     paddingHorizontal:15;
  

`;
export const ModalView =styled.View `

        backgroundColor:#f3f3f3;
        paddingHorizontal:5;
        flex: 1;
        flexDirection:column;

`;
export const ContainerForm = styled.View`
        display:flex;
        flex: 1;
        justifyContent: center;
        alignItems: center;
        flexDirection:column;
        backgroundColor:#1E90FF;
       


`

export const ViewQuart = styled.View`
     marginTop:10;
    width:350;
    padding:10px;
    fontSize:16;
    fontWeight:bold;
    borderTopWidth: 1;
    borderEndWidth : 1;
    borderLeftWidth: 1;
    borderRightWidth: 1;
    borderBottomWidth:1;
    borderColor: #1E90FF;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #f3f3f3;


`

export const ViewQuint = styled.View`
        width: 210;
        fontSize: 16;




`
export const ViewSext = styled.View`


flexDirection: row;
alignContent :space-between;


`;


export const ViewSet = styled.View`
width: 150;
fontSize: 16;

`;
//Inputs

export const InputLogin =
        styled.TextInput`

marginTop:10;
width:300;
padding:10px;
fontSize:14;
fontWeight:bold;
borderTopWidth: 1;
borderEndWidth : 1;
borderLeftWidth: 1;
borderRightWidth: 1;
borderBottomWidth:1;
borderColor:#1E90FF;



`;
export const ButtonIcon = styled.TouchableOpacity`

flexDirection: row;

padding:15px;


`;
export const TextConfig = styled.Text`
fontSize:14;
color:#1E90FF;
marginLeft: 10;
fontWeight:bold

;

`

export const IconButton = styled(Icon)`
fontSize:18;
`;


export const TextPerfil = styled.Text`
fontSize:14;
  
marginTop: 10;

paddingHorizontal:5;
`
export const InputCpf = styled.TextInput`
fontSize: 16;
fontWeight: bold;
borderTopWidth: 1;
height: 42;
borderEndWidth: 1;
borderLeftWidth: 1;
borderRightWidth: 1;
borderBottomWidth: 1;
borderColor:  #1E90FF;
marginTop: 10;
width: 150;
padding: 10px;
backgroundColor:#f3f3f3;





`

export const InputCadastro = styled.TextInput`

        fontSize: 14;
        fontWeight:bold;
        borderTopWidth: 1;
        height: 42;
        borderEndWidth: 1;
        borderLeftWidth: 1;
        borderRightWidth: 1;
        borderBottomWidth: 1;
        borderColor:  #1E90FF;
        marginTop: 10;
        width: 300;
        padding: 10px;
        width: 300;
        backgroundColor:#f3f3f3;



`;
export const InputSenha = styled.TextInput`

        fontSize: 14;
        fontWeight:bold;
        borderTopWidth: 1;
        height: 42;
        borderEndWidth: 1;
        borderLeftWidth: 1;
        borderRightWidth: 1;
        borderBottomWidth: 1;
        borderColor:  #1E90FF;
        marginTop: 10;
       
        padding: 10px;
       
        backgroundColor:#f3f3f3;



`;
export const InputUpdate 
= styled.TextInput`

fontSize: 14;

backgroundColor:#f3f3f3;
borderBottomWidth:1;
borderColor:#1E90FF;


`;
export const Rowview = styled.View`

backgroundColor:#f3f3f3;
borderBottomWidth:1;
borderColor:#1E90FF;
alignContent :space-between;
justifyContent:space-between;

flexDirection: column;


`

       
       
              
        
      
export const Senha = styled.TextInput`
        fontSize: 14;
        fontWeight: bold;
        borderTopWidth: 1;
        height: 42;
        borderEndWidth: 1;
        borderLeftWidth: 1;
        borderRightWidth: 1;
        borderBottomWidth: 1;
        borderColor:  #1E90FF;
        marginTop: 10;
        width: 150;
        padding: 10px;
        backgroundColor:#f3f3f3;


`;


//Texts
export const Text = styled.Text`

color: #1E90FF;

width: 300;
height: 42;
fontSize: 16;
marginTop: 10;
fontWeight: bold;



` ;

export const Title = styled.Text`
marginTop:10;
fontWeight:bold;
fontSize: 18;
color:#1E90FF;


`;
export const TextCadastro = styled.Text`
marginTop:10;
fontWeight: bold;
fontSize: 14;
color: #1E90FF;




`
export const View = styled.View`
backgroundColor:#f3f3f3;

`;




export const Error = styled.Text`
  color:#ff0000;
 
  margin-top: 10px;
`;
export const Sucesso = styled.Text

        `
  color: #008000;
  text-align: center;
  margin-top: 10px;
`;



export const TextBotton = styled.Text`
fontSize: 16;
fontWeight: bold;
color: #fff;


`;
export const BntConta = styled.TouchableOpacity`

width: 300;
height: 42;
backgroundColor: #f3f3f3;
borderRadius: 4;
alignItems: center;
justifyContent: center;


`
export const Botton = styled.TouchableOpacity`

        width: 300;
        height: 42;
        backgroundColor: #1E90FF;
        marginTop: 15;
        borderRadius: 4;
        alignItems: center;
        justifyContent: center;


`;
export const BottonSenha = styled.TouchableOpacity`

      
        height: 42;
        backgroundColor: #1E90FF;
        marginTop: 15;
        borderRadius: 4;
        alignItems: center;
        justifyContent: center;


`;



//imagem


export const Image = styled.Image`

width: 200;
height: 200;

`
        ;

export const BottonLista = styled.TouchableOpacity`
paddingHorizontal: 20;


`;

export const itemList = styled.View`
backgroundColor:#1E90FF;
marginTop: 20;
padding: 30px;

`;

export const TextList = styled.Text`
color:;#FFF;
fontSize:16;
fontWeight:'bold;


`;

export const toastError = msg => Toast.showSuccess(msg, {
        position: Toast.position.center,
        containerStyle: {
                backgroundColor: '#32CD32',
                borderRadius: 15,
        },
        textStyle: {
                color: '#fff',
        },
        imgStyle: {},
        mask: false,
        maskStyle: {},
        duration: 2000,
        animation: true,
})

export const AcButton = styled(ActionButton)`

fontSize: 20;
height: 22;
color: white;

`;


export const Lista = styled.TouchableOpacity `

paddingHorizontal: 20;


`;

export const ListItem=styled.View

`
backgroundColor:#1E90FF;
marginTop: 20;
padding: 30px;
flexDirection:row;


`;
export const TextLista = styled.Text `
color:#FFF;
fontSize:14;
fontWeight:bold;
width:280;

`;
export const ContainerLista = styled.View `
flex:1;
backgroundColor:#f3f3f3;



`;
export const ModalAtividade = styled.View `
backgroundColor:#ffff;
alignItems:center;
flexDirection:column;
marginTop:275;
paddingVertical:10;
paddingHorizontal:10;
borderRadius:10;
borderTopWidth: 1.8;
borderEndWidth: 1.8;
borderLeftWidth: 1.8;
borderRightWidth: 1.8;
borderBottomWidth:1.8;
borderColor:#1E90FF;
color:#000000;
width:300;
marginLeft:55;



`;

export const Picker = styled.Picker `

padding:10px;
margin:10px;
`;


export const ItemList =styled.View`
backgroundColor:#fff;
justifyContent:center;
paddingRight:130;
marginRight:20;

flexDirection:column;


`;
export const ViewLista =styled.View`
flexDirection:row;
backgroundColor:#fff;
marginTop: 20;
padding:20px;
marginLeft:20;
marginRight:20;


`;
export const FlatList =styled.FlatList`




`;

export const TextListI=styled.Text`
fontSize:14;
marginLeft:10;


`;
 
export const TextListII=styled.Text`
fontSize:16;
  color:#008000;
  marginLeft:10;

`;