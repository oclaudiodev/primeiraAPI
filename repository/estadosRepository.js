import { conection7 } from "./conection.js";




export async function listarEstado() {
  const comando = `
    SELECT *
      FROM estados
  `

  const [registros] = await conection7.query(comando)
  return registros;
}


export async function inserirEstados(novoEstado) {
  const comando = `
    INSERT INTO estados (nm_estado,bt_locaisturisticos,nm_regiao,bt_tropical,cpt_estado)
               values (?,?,?,?,?);
  `

  const [info] = await conection7.query(comando, [novoEstado.nm_estado, novoEstado.bt_locaisturisticos,novoEstado.nm_regiao,novoEstado.bt_tropical,novoEstado.cpt_estado])
  novoEstado.nm_estado,
  novoEstado.bt_locaisturisticos,
  novoEstado.nm_regiao,
  novoEstado.bt_tropical,
  novoEstado.cpt_estado
  return info.insertId;
}

export async function alterarEst(id,novosDados) {
  const comando = `
    UPDATE estados
       SET nm_estado= ?,
            bt_locaisturisticos = ?,
              nm_regiao = ?,
                bt_tropical = ?,
                cpt_estado = ?
     WHERE id_estado = ?;
  `

  const [info] = await conection7.query(comando, [
    novosDados.nm_estado,
    novosDados.bt_locaisturisticos,
    novosDados.nm_regiao,
    novosDados.bt_tropical,
    novosDados.cpt_estado,
    id
  ])
}  

export async function removerEst(id) {
  const comando = `
    DELETE FROM estados
          WHERE id_estado = ?
  `

  const [info] = await conection7.query(comando, [id]);
}


export async function consultarEst(id) {
  const comando = `
    SELECT *
      FROM estados
     WHERE id_estado = ? 
  `

  const [registros] = await conection7.query(comando, [id])
  return registros[0];
}

export async function filtrarEst(nome) {
  const comando = `
    SELECT *
      FROM estados
     WHERE nm_estado like ? 
  `

  const [registros] = await conection7.query(comando, ['%'+nome+'%'])
  return registros;
}