import { conection10 } from "./conection.js";

export async function listarFilmes() {
    const comando = `
      SELECT *
        FROM cinems
    `
  
    const [registros] = await conection10.query(comando)
    return registros;
  }
  
  
  export async function inserirFilme(novoFilme) {
    const comando = `
      INSERT INTO cinems (nm_filme,dt_filme,dt_horafilme,bt_filmebom,qtd_ingressos)
                 values (?,?, ?, ?,?);
    `
  
    const [info] = await conection10.query(comando, [novoFilme.nm_filme, novoFilme.dt_filme, novoFilme.dt_horafilme, novoFilme.bt_filmebom,novoFilme.qtd_ingressos])
    novoFilme.nm_filme, 
    novoFilme.dt_filme, 
    novoFilme.dt_horafilme, 
    novoFilme.bt_filmebom,
    novoFilme.qtd_ingressos
    return info.insertId;
  }

  export async function alterarFilme(id,novosDados) {
    const comando = `
      UPDATE cinems
         SET nm_filme= ?,
              dt_filme = ?,
                dt_horafilme = ?,
                bt_filmebom=?,
                qtd_ingressos=?
       WHERE id_cinema = ?;
    `
  
    const [info] = await conection10.query(comando, [
      novosDados.nm_filme,
      novosDados.dt_filme,
      novosDados.dt_horafilme,
      novosDados.bt_filmebom,
      novosDados.qtd_ingressos,
      id
    ])
  }   
  
  export async function removerFilme(id) {
    const comando = `
      DELETE FROM cinems
            WHERE id_cinema = ?
    `
  
    const [info] = await conection10.query(comando, [id]);
  }

  export async function consultarFilme(id) {
    const comando = `
      SELECT *
        FROM cinems
       WHERE id_cinema = ? 
    `
  
    const [registros] = await conection10.query(comando, [id])
    return registros[0];
  }
  
  export async function filtrarFilme(nome) {
    const comando = `
      SELECT *
        FROM cinems
       WHERE nm_filme like ? 
    `
  
    const [registros] = await conection10.query(comando, ['%'+nome+'%'])
    return registros;
  }