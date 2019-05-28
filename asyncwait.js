

// fetch('https://api.github.com/users/DiegoPinho')
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.log('Deu problema :/'))

/* exemplo de consumo de uma API */
 fetch('https://api.github.com/users/araujohelder')
 .then(res => res.json())
 .then(res => console.log(res))
 .catch(err => console.log('deu problema :/'));


 /* CEP */
const valorDoCep = '24110-310'

const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

fetch(url).then(response =>{ 
  return response.json();
    }).then(data =>
    {
        console.log(data)
    })


 consultarCep('2411310');
   function consultarCep(cep){
	fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(res => console.log(res))
	.catch(err => console.log(err))
}



