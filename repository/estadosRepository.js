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