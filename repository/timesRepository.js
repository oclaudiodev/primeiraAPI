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
    novoTime.estado
    novoTime.pais
    novoTime.ano_fundacao
    novoTime.estadio
    novoTime.capacidade_estadio
    novoTime.tecnico
    novoTime.liga
  return info.insertId;
}