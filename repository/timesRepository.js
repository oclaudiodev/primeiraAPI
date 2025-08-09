import { conection8 } from "./conection.js";




export async function listarTime() {
  const comando = `
    SELECT *
      FROM times_futebol
  `

  const [registros] = await conection8.query(comando)
  return registros;
}


export async function inserirTime(novoTime) {
  const comando = `
    INSERT INTO times_futebol (nome, cidade,estado,pais,ano_fundacao,estadio,capacidade_estadio,tecnico,liga)
               values (?,?,?,?,?,?,?,?,?);
  `

  const [info] = await conection8.query(comando, [novoTime.nome, novoTime.cidade,novoTime.estado,novoTime.pais,novoTime.ano_fundacao,novoTime.estadio,novoTime.capacidade_estadio,novoTime.tecnico,novoTime.liga])
    novoTime.nome,
    novoTime.cidade,
    novoTime.estado,
    novoTime.pais,
    novoTime.ano_fundacao,
    novoTime.estadio,
    novoTime.capacidade_estadio,
    novoTime.tecnico,
    novoTime.liga
  return info.insertId;
}

export async function alterarTime(id,novosDados) {
  const comando = `
    UPDATE times_futebol
       SET nome= ?,
            cidade = ?,
              estado = ?,
              pais = ?,
              ano_fundacao = ?,
              estadio = ?,
              capacidade_estadio = ?,
              tecnico=?,
              liga=?
     WHERE id = ?;
  `

  const [info] = await conection8.query(comando, [
    novosDados.nome,
    novosDados.cidade,
    novosDados.estado,
    novosDados.pais,
    novosDados.ano_fundacao,
    novosDados.estadio,
    novosDados.capacidade_estadio,
    novosDados.tecnico,
    novosDados.liga,
    id
  ])
}   

export async function removerTime(id) {
  const comando = `
    DELETE FROM times_futebol
          WHERE id = ?
  `

  const [info] = await conection8.query(comando, [id]);
}

export async function consultarTime(id) {
  const comando = `
    SELECT *
      FROM times_futebol
     WHERE id = ? 
  `

  const [registros] = await conection8.query(comando, [id])
  return registros[0];
}

export async function filtrarTime(nome) {
  const comando = `
    SELECT *
      FROM times_futebol
     WHERE nome like ? 
  `

  const [registros] = await conection8.query(comando, ['%'+nome+'%'])
  return registros;
}