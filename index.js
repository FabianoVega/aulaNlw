let participantes = [{
    nome: "Michael Myer",
    email: "Michael@gmail.com",
    dataDeInscricao: new Date(2024, 2, 31, 10, 31),
    dataCheckIN: new Date(2024, 3, 1, 10, 31)
  },
  {
    nome: "Milton Jorge",
    email: "Jorge@gmail.com",
    dataDeInscricao: new Date(2024, 1, 10, 5, 51),
    dataCheckIN: new Date(2024, 1, 1, 15, 31)
  },
  {
    nome: "Maria Silva",
    email: "maria@gmail.com",
    dataDeInscricao: new Date(2024, 2, 5, 14, 20),
    dataCheckIN: new Date(2024, 3, 5, 14, 20)
  },
  {
    nome: "João Carlos",
    email: "joao@gmail.com",
    dataDeInscricao: new Date(2024, 2, 20, 8, 45),
    dataCheckIN: new Date(2024, 2, 20, 8, 45)
  },
  {
    nome: "Ana Paula",
    email: "ana@gmail.com",
    dataDeInscricao: new Date(2024, 2, 2, 11, 10),
    dataCheckIN: new Date(2024, 3, 2, 11, 10)
  },
  {
    nome: "Pedro Oliveira",
    email: "pedro@gmail.com",
    dataDeInscricao: new Date(2024, 1, 15, 17, 30),
    dataCheckIN: null
  },
  {
    nome: "Carla Santos",
    email: "carla@gmail.com",
    dataDeInscricao: new Date(2024, 2, 7, 9, 15),
    dataCheckIN: new Date(2024, 3, 7, 9, 15)
  },
  {
    nome: "Ricardo Souza",
    email: "ricardo@gmail.com",
    dataDeInscricao: new Date(2024, 1, 25, 13, 50),
    dataCheckIN: new Date(2024, 2, 25, 13, 50)
  },
  {
    nome: "Fernanda Lima",
    email: "fernanda@gmail.com",
    dataDeInscricao: new Date(2024, 2, 3, 16, 40),
    dataCheckIN: new Date(2024, 3, 3, 16, 40)
  },
  {
    nome: "Lucas Almeida",
    email: "lucas@gmail.com",
    dataDeInscricao: new Date(2024, 1, 12, 6, 25),
    dataCheckIN: new Date(2024, 2, 12, 6, 25)
  }
];




const criarParticipante = (participante) =>{
  const dataDeInscricao= dayjs(Date.now()).to(participante.dataDeInscricao)
  
  
  let dataCheckIN= dayjs(Date.now()).to(participante.dataCheckIN)

  if (participante.dataCheckIN == null){
    dataCheckIN = `
    <button onclick = fazerCheckIn(event)
      data-email = "${participante.email}">
      Fazer Check-In
    </button>
    `
  }
  
  return `
    <tr>
      <td >
        <strong>${participante.nome}</strong>
        <br>
        <small>${participante.email}</small>
      </td>
      <td>
        ${dataDeInscricao}
      </td>
      <td>
        ${dataCheckIN}
     </td>
    </tr>
  `
}




const atualizarLista = (participante) =>{
  output =""

  for (let participante of participantes ){
    output = output + criarParticipante(participante)
  }

  document
  .querySelector('tbody') 
  .innerHTML =output
}

atualizarLista(participantes)

const adicionarParticipante = (event) =>{
  event.preventDefault()

  const formData = new FormData(event.target)

  const participante = {
    nome:formData.get("nome"),
    email:formData.get("email"),
    dataDeInscricao:new Date(),
    dataCheckIN: null  }

  const participanteExiste = participantes.find(
    (p) =>p.email == participante.email)

    if(participanteExiste){
      alert('Email ja cadastrado!')
      return
    }

  participantes = [participante, ...participantes]

  atualizarLista(participantes)
  event.target.querySelector('[name ="nome"]').value = ""
  event.target.querySelector('[name = "email"]').value = ""
  
}


const fazerCheckIn = (event) =>{
  
  const mensagemDeAlerta= "Tem certeza que deseja fazer o check-in?"

  if(confirm(mensagemDeAlerta) == false){
    return
  }


  //encontrar o participante de acordo com email
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })

  participante.dataCheckIN = new Date()

  atualizarLista(participantes)

}