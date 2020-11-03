
  








 export function randOrd(array) {
 
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  
  }

  export function  getGabarito(palavra){
    var  array=[]
     palavra=palavra.split('')
     var i = 0;
 for (i;i<palavra.length;i++){
      array.push({ key:i.toString() , letra:palavra[i],disabledDrag:true,disabledReSorted:true})
       }
      
 
       return array
 
   }
   export function  getArray(palavra){
    var  array=[]
     palavra=palavra.split('')
     var i = 0;
     
 for (i;i<palavra.length;i++){
      array.push({ key:i.toString() , letra:palavra[i],disabledDrag:false,disabledReSorted:false})
       }
 
       return  randOrd(array)
 
   }
    export function arrayEquals(a, b) {
      var cont=0;
         for(var i=0; i<a.length; i++){
         if(a[i].letra ===b[i].letra)
         cont++
         
         }
         if(cont===a.length){
         
         
         return true
         }
         
         else return false
           }
    
   