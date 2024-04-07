<table width= 100%>
  <thead style="text-align: left">
    <tr>
      <th>Participante</th>
      <th>Data de inscrição</th>
      <th>Data de check-in</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Diego Santos
      </td>
      <td>
        1 mes atras
      </td>
      <td>
        1 dia atras
      </td>
    </tr>
  </tbody>
</table>


const participante ={
  nome:"Michael Myer",
  email:"Michael@gmail.com",
  dataDeInscricao:new Date (2024, 3, 1, 10, 31),
  dataCheckIN:new Date (2024, 3, 1, 10, 31)
}


const criarParticipante = (participante) =>{
  return `
    <tr>
      <td >
        <strong>${participante.nome}</strong>
        <br>
        <small>${participante.email}</small>
      </td>
      <td>
        ${participante.dataDeInscricao}
      </td>
      <td>
        ${participante.dataCheckIN}
     </td>
    </tr>
  `
}


voce é especialista em estrutura de dados no javascript

crie dez participantes na mesma lista que esta a baixo

const participantes =[{
  nome:"Michael Myer",
  email:"Michael@gmail.com",
  dataDeInscricao:new Date (2024, 3, 1, 10, 31),
  dataCheckIN:new Date (2024, 3, 1, 10, 31)},
  {
    nome:"Milton Jorge",
    email:"Jorge@gmail.com",
    dataDeInscricao:new Date (2024, 2, 10, 5, 51),
    dataCheckIN:new Date (2024, 1, 1, 15, 31)}
]

css

body{
  background-color: black;
  color: aliceblue;
}

table{
  padding: 25px;
  border: 0.7px solid coral;
  margin: 10px;
}