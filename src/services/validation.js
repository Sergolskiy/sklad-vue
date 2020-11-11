export function validation(validationItems, validationOptions) {

  // console.log(validationItems);
  // console.log(validationOptions + '123');

  let validation = [];
  let isValidate = true;

  Object.keys(validationOptions).map((item) => {

    if(Object.prototype.hasOwnProperty.call(validationItems, item)){

      validationOptions[item].type.map((type) => {

        switch(true) {
          case type === 'empty':
            if(!fieldEmpty(validationItems[item])){
              validation[item] = true
              isValidate = false
            }
            break;

          case type === 'email':
            if(!fieldEmail(validationItems[item])) {
              validation[item] = true
              isValidate = false
            }
            break;

          case type === 'password':
            if(!fieldPassword(validationItems[item])) {
              validation[item] = true
              isValidate = false
            }
            break;

          case type === 'numeric':
            if(!fieldNumbers(validationItems[item])) {
              validation[item] = true
              isValidate = false
            }
            break;

          case type['minLength'] && type['minLength'].length > 0:

            if(validationItems[item].length < parseInt(type['minLength']) ){
              validation[item] = true
              isValidate = false
            }
            // if(!fieldNumbers(validationItems[item])) {
            //   validation[item] = true
            //   isValidate = false
            // }
            break;

          default:
            break;
        }

      })

    }
  })

  return {validation, isValidate};
}


export function fieldEmpty(item) {

  if (item !== '' && item !== null) {
    return true;
  } else {
    return false;
  }

}


export function fieldEmail(fieldEmail) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(fieldEmail);
}


export function fieldNumbers(field) {
  var reg = /^\d+$/;

  return reg.test(field);
}

export function fieldPassword(fieldPassword) {
  if(fieldPassword.length >= 4 ){
    return true;
  } else {
    return false;
  }
}
