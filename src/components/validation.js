
export default function Validation({username, password}) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexp_password = /^(?=.*\d).{6,10}$/m;

    const errors = {};
    
    if(!username) errors.username = "El nombre de usuario no puede estar vacío.";
    if(username.length > 35) errors.username = "El nombre de usuario no puede tener más de 35 caracteres.";
    if(!regexEmail.test(username)) errors.username = "El nombre de usuario tiene que ser un email"
    
    //console.log(regexp_password.test(password));
    //if(password.length < 6 || password.length>10) errors.password = "la contraseña tiene que tener una longitud entre 6 y 10 caracteres."
    if(!regexp_password.test(password)) errors.password = "la contraseña tiene que tener al menos un número y una longitud de 6 a 10 caracteres."

    return errors;
  }