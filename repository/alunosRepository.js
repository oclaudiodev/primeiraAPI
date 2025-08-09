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

export async function alterarAluno(id_aluno,novosDados) {
  const comando = `
    UPDATE alunos
       SET nome= ?,
            matricula = ?,
              curso = ?,
                email = ?
     WHERE id_aluno = ?;
  `

  const [info] = await conection2.query(comando, [
    novosDados.nome,
    novosDados.matricula,
    novosDados.curso,
    novosDados.email,
    id_aluno
  ])
}   

export async function removerAluno(id) {
    const comando = `
      DELETE FROM alunos
            WHERE id_aluno = ?
    `
  
    const [info] = await conection2.query(comando, [id]);
  }