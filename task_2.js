function myFunc (str,obj){
    return console.log(obj[str] !== undefined)
  }
  
  const str = 'doc'
  const myObj = {
    'doc': 1,
    isTrue: true,
    567: null
  }
  myFunc('cod',myObj)