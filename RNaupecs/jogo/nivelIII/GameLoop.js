

 export function randOrd(array) {
 
    var currentIndex = array.length, temporaryValue, randomIndex;
  
   
    while (0 !== currentIndex) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
     
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  
  }

  function getLetras(array){
    let alfabeto = [
           {letra:'A',disable:false },{letra:'B',disable:false },{letra:'C',disable:false },  {letra:'D',disable:false},
            {letra:'E',disable:false },{letra:'F',disable:false },{letra:'G',disable:false  }, {letra:'H',disable:false },  
           {letra:'I' },{letra:'J' }, {letra:'K' },{letra:'L',disable:false}, 
           {letra:'M',disable:false },{letra:'N',disable:false },{letra:'O',disable:false },{letra:'P',disable:false },  
            {letra:'Q',disable:false},{letra:'R',disable:false},  {letra:'S',disable:false}, {letra:'T',disable:false},  
           {letra:'U'},{letra:'V'},{letra:'W' },{letra:'X' },  
           {letra:'Y',disable:false},{letra:'Z',disable:false}, ]
           
           var arrayII= alfabeto.filter( x => { 
         return JSON.stringify(array).indexOf(JSON.stringify(x)) < 0;
         });
         
         arrayII=randOrd(arrayII)
   
   return arrayII.splice(0,9-array.length) 
   }



  
   export function getArray(palavra){
    var  array=[]
    palavra=palavra.split('')
     var i = 0;
     var arrayIII=[]
     
 for (i;i<palavra.length;i++){
      array.push({ letra:palavra[i],disable:false})
      }
     var arrayII=getLetras(array) 
     
      array=array.concat(arrayII)
   

  

      return  randOrd(array)
      
    }
   
    export function getPalavra(palavra){
      palavra=palavra.split('')
      var array=[]
      var i = 0;
      for (i;i<palavra.length;i++){
        array.push({ letra:palavra[i],cor:false,ativo:true})
        }
        return array
    }