import { StyleSheet } from 'react-native'



export default StyleSheet.create({
  
    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        flexDirection: 'column'
},
    buttonImage: {
        resizeMode: 'contain',
        height: '60%',
        width: '60%',
    },


    viewsecund: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    test: {
        color: '#1E90FF',

        width: 300,
        height: 42,
        fontSize: 16,
        marginTop: 10,


    },
    viewterc: {

        marginTop: 15,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#f3f3f3'

    },

    logo: {
        width: 40,
        height: 40,
    },

    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#1E90FF',
        marginTop: 15,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'



    },

    bntConta: {

        width: 300,
        height: 42,
        backgroundColor: '#f3f3f3',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'

    },

    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',

    },

    input: {


        fontSize: 16,
        fontWeight: 'bold',
        height: 35,
        borderTopWidth: 1,
        height: 42,
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#1E90FF',
        marginTop: 10,
        width: 300,
        padding: 10,
    },


    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E90FF'

    },

    /**
     * estilos de cadastro
     */



    containerForm: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#1E90FF',
       

    },

    TitleLogin :{
        fontWeight: 'bold',
        fontSize: 22,
        color: '#1E90FF',
        
    

    },
   testetitle :{
   
        marginTop:10,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#1E90FF',

    },
  
    inputcpf: {


        fontSize: 16,
        fontWeight: 'bold',
        borderTopWidth: 1,
        height: 42,
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor:  '#1E90FF',
        marginTop: 10,
        width: 180,
        padding: 10,
        padding: 10,
        
    },
    viewCpf :{

        width: 210,
   
        fontSize: 16,
      
    }
,

    data:{
        flexDirection:"row-reverse",
       

    },
    inputcadS: {


        fontSize: 16,
        fontWeight: 'bold',
        borderTopWidth: 1,
        height: 42,
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor:  '#1E90FF',
        marginTop: 10,
        width: 300,
        padding: 10,
        width: 300,
        padding: 10,
        backgroundColor:'#f3f3f3'
    },

    

    viewrow: {

        flexDirection: 'row',
         alignContent :'space-between',



    },
    viewrowsenha: {

        flexDirection: 'row',
     alignContent :'space-between',



    }
    ,
    viewsenha: {

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        alignContent :'space-between',
        backgroundColor:'#f3f3f3'
        
    }
    ,

    rowteste: {

        flexDirection: 'row',
        alignContent :'space-between',
        backgroundColor:'#f3f3f3'
    }
    ,

    column: {

        flexDirection: 'column'

    }
    ,
    textcad: {
        color: '#3CB371',

        width: 300,
        height: 42,
        fontSize: 16,
        backgroundColor:'#f3f3f3'
       

    },
    inputsenha:{

        fontSize: 16,
        fontWeight: 'bold',
        borderTopWidth: 1,
        height: 42,
        borderEndWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor:  '#1E90FF',
        marginTop: 10,
        width: 150,
        padding: 10,
        backgroundColor:'#f3f3f3'
       

    },
    
    testsenhaa :{

     width: 150,
   
        fontSize: 16,
      
    }
,

    testesen:{
        width: 150,
        
        
    },

    inputLogin:{
    
        marginTop:10,
        width:300,
        padding:10,
        fontSize:16,
        fontWeight:'bold',
        borderTopWidth: 1,
        borderEndWidth : 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth:1,
        borderColor:'#1E90FF'

      

},
    labelInput: {
        color:'#3CB371' ,
      },
      formInput: {    
        borderBottomWidth: 1.5, 
        marginLeft: 20,
        borderColor: '#333',       
      },
      input: {
        borderWidth: 0
      },

containerDrew:{
    flex: 1,
    backgroundColor:'#87CEEB'
},
  containertopRowD: {
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: 'center'
  },
  TxtBottomDraw: {
    marginLeft: 10,
    color: '#E6FAFF',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  imageTopRowDraw: {
    height: 250,
    width: 250,
    marginTop:30,
    ...Platform.select({
      ios: {
        borderRadius: 80 / 2
      },
      android: {
        borderRadius: 80
      }
    })
  },
  iconDraw: {
    height: 25,
    width: 25,
    marginRight: 10
  },
  buttonDraw: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  containertopRowTextDraw: {
    flexDirection: 'column',
    marginLeft: 5
  },

  containerBottomDraw: {
    backgroundColor: '#1E90FF'
  },
  containerBottomItemDraw: {
    padding: 15,
    alignItems: 'center',
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: '#E6FAFF',
    borderBottomWidth: 1
  },


  containerCadastro:{
   
    marginTop:10,
    width:350,
    padding:10,
    fontSize:16,
    fontWeight:'bold',
    borderTopWidth: 1,
    borderEndWidth : 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth:1,
    borderColor:'#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3'
  
  }
  


});