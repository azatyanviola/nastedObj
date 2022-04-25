


const person = {

    name: 'Hayk',

    age : 27,

    adress: {
       country: 'Armenia',
       city: 'Yerevan',
       fullAdress: {
           street: 'Baghramyan',
           home: 53
       }
    },

    passportInfo:{
       passport: 'AF059871',
       ID: '007541559'
    },

    preference: 'football'

 }  

 
 
 // const getKey = (object, keys) => keys.split('.').reduce((obj, k) => obj[k] , object);

 //****the second method** */

 const getKey = function(obj, string) {
    const input = string.split('.');
    const newObj = obj[input[0]];
       if(typeof(input)=== 'undefined'){
          return undefined;
       }else if (input[1]) {
      input.splice(0, 1);
      let newString = input.join('.');
      return getKey(newObj, newString);
    }
    return newObj;
  }


  console.log ( getKey(person, 'adress.fullAdress.street')); 
  console.log ( getKey(person, 'adress.fullAdress'));
  console.log ( getKey(person, 'name'));
  console.log ( getKey(person, 'name.city'));

 
