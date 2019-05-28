// fetch('https://api.github.com/users/DiegoPinho')
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.log('Deu problema :/'))

/* exemplo de consumo de uma API GUITHUB*/
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



   
let promise = new Promise((resolve, reject) => {
    const tempo = 2000
    setTimeout(()=> {
        let resultado = true;
        if (resultado) {
            const data ={
                mensagem: 'Deu certo',
                aluno: {
                    nome: 'Helder',
                    status: 'aprovado'
                }
            } 
            resolve(data)
        } else {
            reject('Deu tudo errado')
        }
    }, tempo)
});



promise.then(data => {
                console.log(`resultado positivo ${data.mensagem}`)
                return data
            })
       .then(data => console.log(`resultado positivo 2 ${data.mensagem}`))
       .catch(data => console.log(`resultado negativo ${data}`))

console.log('Fim da aplicação')