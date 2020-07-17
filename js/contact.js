const input = document.querySelector('#email');
const btn = document.querySelector('#btn');

//console.log(input.type);

const validateEmail = (e) => {
  e.preventDefault();
  //console.log(input.value)
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!input.value.match(regex)) {
    input.classList.add('is-invalid')
    
  } else {
    input.classList.add('is-valid')
  }
}

btn.addEventListener('click', validateEmail);
