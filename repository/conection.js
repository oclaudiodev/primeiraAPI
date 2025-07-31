import mysql from 'mysql2/promise'

const conection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '59222502',
  database: 'animess'
})

const conection2 = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '59222502',
  database: 'lalunos'
})

const conection3 = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '59222502',
  database: 'carros'
})

const conection4 = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '59222502',
  database: 'curso_aluno'
})

const conection5 = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '59222502',
  database: 'musicadas'
})

const conection6 = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '59222502',
  database: 'fun'
})

const conection7 = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '59222502',
  database: 'stat'
})

const conection8 = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '59222502',
  database: 'times'
})

const conection9 = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '59222502',
  database: 'mercadin'
})

const conection10 = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '59222502',
  database: 'cinema'
})



console.log('Conexão com BD realizada!')
export { conection ,conection2,conection3, conection4,conection5,conection6,conection7,conection8,conection9,conection10}
