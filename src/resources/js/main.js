window.onload = function(){
  var form = document.getElementById('signup-form');
  var password = form.password;
  var confirm_password = form.confirm_password;
  var invalidClassName = 'invalid';
  var inputs = document.querySelectorAll(".entry-box");

  function matchPasswords(){
    if(password.value === confirm_password.value)
      confirm_password.setCustomValidity('');
    else
      confirm_password.setCustomValidity('Passwords do not match.');
  }

  function validatePasswords(){
    var minimum_length = 6;
    var errors = [];
    var pass = password.value;
    password.setCustomValidity('');
    //Check length of pass
    if(pass.length < minimum_length){
      errors.push('Too short');
    }
    //Check pass contains number
    if(!pass.match(/[0-9]/)){
      errors.push('Number required');
    }
    //Check pass contains only alphanumerics
    if(pass.match(/\W/)){
      errors.push('Only alphanumeric chars allowed');
    }
    //Check pass contains a lower case letter
    if(!pass.match(/[a-z]+/)){
      errors.push('Lower case letter required');
    }
    //Check pass contains an upper case letter
    if(!pass.match(/[A-Z]+/)){
      errors.push('Upper case letter required');
    }
    //Check both passwords match
    if(!errors.length){
      matchPasswords();
    }else{
      password.setCustomValidity(errors);
    }
  }

  inputs.forEach(function (input) {
    // Add a css class on submit when the input is invalid.
    input.addEventListener('invalid', function () {
      input.classList.add(invalidClassName);
    });

    // Remove the class when the input becomes valid.
    // 'input' will fire each time the user types
    input.addEventListener('input', function () {
      if (input.validity.valid) {
        input.classList.remove(invalidClassName);
      }
    });

  });

  confirm_password.onchange = validatePasswords;
  password.onchange = validatePasswords;

};
