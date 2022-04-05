function telephoneCheck(str) {
    let filter = /^(\+?1\s?)?((?:\((?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
      
      if(str.match(filter)){
          return true;
      } else {
          return false
      }
  }
  
  console.log(telephoneCheck("1 (555) 555-5555"));