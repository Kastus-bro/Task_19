function myFunc(obj){
    for (let key in obj){
      if (obj.hasOwnProperty(key)){
        console.log(obj)
      }
    }
  }
  const myObj = {
    name: 'Vanya',
    surname: 'Ivanov',
    age: '33'
  }
  myFunc(myObj)