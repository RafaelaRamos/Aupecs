import React from 'react';
import {View,Text, ScrollView,Modal,StyleSheet,TouchableOpacity,FlatList} from 'react-native';  
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../service/api';
import  ButtonExcluir from './ButtonExcluir'
import {
  ItemList,
  ViewLista,
  TextListI,
  TextListII
  
  
  }  from './style'
import {
  Picker,
  ModalAtividade 


} from '../telas/style';


  const  ListaItens = ({ data,url }) => (


      
   < ViewLista style={styles.listItem} >
   <ItemList>
        
      <TextListI >Nivel: {data.nivel}  </TextListI>
      <TextListI >Letra: {data.letra} </TextListI>
      <TextListI >Data: {data.dataHora}</TextListI>

    </ItemList>
      <ButtonExcluir url={url} id={data.id}/>
</ViewLista>
  );


 class Configura extends React.Component{  
 
 

    constructor(props){
      
      super(props);
    
      this.state = {
        refresh:true,
        menuData: [],
        url:'/nivel',
        show:false,
        
       
             
       
  }

}




  state = {letra: '',}
   modificarLetra = (letra) => {
      this.setState({ letra: letra })
   } 
   state = {nivel: '',}
   modificarNivel = (nivel) => {
      this.setState({ nivel: nivel })
   } 
    
    

    componentDidMount() {
     
      this.getAtividades()
     
    
     }



   
    async getAtividades() {  
     
      try{

        idAluno =this.props.navigation.state.params.id
        const response = await api.get('/atividade',{params:{id:idAluno}} );
  
        this.setState({ 
          menuData: response.data,
        
          refresh:false
        
        });
      
      Console.log(reponse.data)}
        catch{
          
        this.setState({ 
           refresh:false
        
        });}


        }


    
    cancelar(){
      this.setState({show:false})
      
    }
      
    
  

  onRefresh() {
      this.setState({ refresh: true }, function() { this.getAtividades() });
   }
 
    
    render(){  
      
      const idteste=this.props.navigation.state.params.id
     
       
       
        return(  


      
            <View style={{flex:1, backgroundColor: '#f3f3f3'}}>

                    <FlatList
                         data= {this.state.menuData}
                          renderItem={({ item }) => (
                            <ListaItens
                             
                            data={item}
                             url={this.state.url}
                             
                              />
                              
                            )}
                            onRefresh={() => this.onRefresh()}
                            refreshing={this.state.refresh}
                          />



              
              
              
            

                <Modal transparent ={true} visible ={this.state.show} >
                    
          

          <ModalAtividade   > 
          < ScrollView>  
          <Text> Selecione o nivel </Text>
                
                   
          <Picker 
          selectedValue ={this.state.nivel} onValueChange ={this.modificarNivel}>
          <Picker.Item label = "1" value = "1" />
          <Picker.Item label = "2" value = "2" />
          <Picker.Item label = "3" value = "3" />

        </Picker>

        </ScrollView> 
        <ScrollView> 
       
          <Text>Selecione a letra </Text>
           <Picker 
          selectedValue ={this.state.letra} onValueChange ={this.modificarLetra}>
          <Picker.Item label = "A" value = "A" />
          <Picker.Item label = "B" value = "B" />
          <Picker.Item label = "C" value = "C" />

        </Picker>

        </ScrollView> 
      
       <TouchableOpacity style={styles.botao} onPress={() => { this.salvarAtividade()}}>
  
  <Text  style={styles.botaoText}> Enviar</Text>

</TouchableOpacity>
<TouchableOpacity style={styles.botao} onPress={() => { this.cancelar()}}>
  
  <Text  style={styles.botaoText}> Cancelar</Text>

</TouchableOpacity>
                </ModalAtividade >
              

                </Modal>
               

        <ActionButton buttonColor="#1E90FF">
        

        
          <ActionButton.Item buttonColor='#00BFFF' borderColor ='#f3f3f3' borderBottomWidth ='0.2' title="informações do aluno" onPress={() => this.props.navigation.navigate('Informações',{idteste})}>
            <Icon name="info" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#00BFFF' borderColor ='#f3f3f3' borderBottomWidth ='0.2' title="Adicionar atividade" onPress={() => { this.setState({show:true})}}>
            <Icon name="plus-square" style={styles.actionButtonIcon} />
          </ActionButton.Item>
         
        </ActionButton>



                </View>
        )  
    }  

    async salvarAtividade(){
   
       

      id =this.props.navigation.state.params.id
      
        try {
          const atividade = {
            letra:this.state.letra,
            nivel:this.state.nivel,
            idAluno:id}

            const response = await api.post('/atividade',atividade)
       
        
            this.setState({show:false})}
  
          
        
        catch (_err) {
          this.setState({show:false})

          console.log("erro!")
        }
      }
    
    
}  
const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },

    viewNivel:{
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#3CB371',
        fontSize: 16,
        fontWeight: 'bold',
       


    },

    viewLetra:{
        fontSize: 16,
        fontWeight: 'bold',
        borderTopWidth: 1,
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,

        borderColor: '#3CB371',
    },
   
    
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',

    },
    botao: {
        width: 150,
        height: 42,
        backgroundColor: '#1E90FF',
        marginTop:10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'



    },
      
      
    listItem: {
      
      borderTopWidth: 1,
      borderEndWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#1E90FF',
    },
      
      textTitle:{
        textAlign: "center",
        height: 25, 
        width: 25,
       

    },
    select:
    {fontSize: 16,
        fontWeight: 'bold',
        borderTopWidth: 1,
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#3CB371',},
  });

  export default Configura;