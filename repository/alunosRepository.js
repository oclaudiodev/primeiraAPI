import { conection2 } from "./conection.js";


export async function listarAlunos() {
  const comando = `
    SELECT *
      FROM alunos
  `

  const [registros] = await conection2.query(comando)
  return registros;
}


export async function inserirAluno(novoAluno) {
  const comando = `
    INSERT INTO alunos (nome,matricula,curso,email)
               values (?,?,?,?);
  `

  const [info] = await conection2.query(comando, [novoAluno.nome,novoAluno.matricula,novoAluno.curso,novoAluno.email])
    novoAluno.nome,
    novoAluno.matricula,
    novoAluno.curso,
    novoAluno.email
  return info.insertId;
}