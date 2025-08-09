import { conection9 } from "./conection.js";

export async function listarProd() {
    const comando = `
      SELECT *
        FROM merc
    `
  
    const [registros] = await conection9.query(comando)
    return registros;
  }
  
  
  export async function inserirProd(novoProd) {
    const comando = `
      INSERT INTO merc (nm_produto,vl_produto,vl_media,gt_gostadisso,bt_fazfalta)
                 values (?,?, ?,?,?);
    `
  
    const [info] = await conection9.query(comando, [novoProd.nm_musica, novoProd.ds_artista, novoProd.url_musica, novoProd.dt_lancamento,novoProd.qtd_visualizacoes,novoProd.hr_duracao,novoProd.bt_destaque,novoProd.ds_idioma])
    novoProd.nm_produto, 
    novoProd.vl_produto, 
    novoProd.vl_media, 
    novoProd.gt_gostadisso,
    novoProd.bt_fazfalta
    return info.insertId;
  }

  export async function alterarProd(id_produto,novosDados) {
    const comando = `
      UPDATE merc
         SET nm_produto= ?,
              vl_produto = ?,
                vl_media = ?,
                  gt_gostadisso = ?
       WHERE id_produto = ?;
    `
  
    const [info] = await conection9.query(comando, [
      novosDados.nm_produto,
      novosDados.vl_produto,
      novosDados.vl_media,
      novosDados.gt_gostadisso,
      id_produto
    ])
  }   
  
  export async function removerProd(id) {
      const comando = `
        DELETE FROM merc
              WHERE id_produto = ?
      `
    
      const [info] = await conection9.query(comando, [id]);
    }

    export async function consultarProd(id) {
      const comando = `
        SELECT *
          FROM merc
         WHERE id_produto = ? 
      `
    
      const [registros] = await conection9.query(comando, [id])
      return registros[0];
    }
    
    export async function filtrarProd(nome) {
      const comando = `
        SELECT *
          FROM merc
         WHERE nm_produto like ? 
      `
    
      const [registros] = await conection9.query(comando, ['%'+nome+'%'])
      return registros;
    }