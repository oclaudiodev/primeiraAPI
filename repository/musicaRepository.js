import { conection5 } from "./conection.js";

export async function listarMsc() {
    const comando = `
      SELECT *
        FROM gramy
    `
  
    const [registros] = await conection5.query(comando)
    return registros;
  }
  
  
  export async function inserirMsc(novaMsc) {
    const comando = `
      INSERT INTO gramy (nm_musica, ds_artista, url_musica,dt_lancamento,qtd_visualizacoes,hr_duracao,bt_destaque,ds_idioma)
                 values (?,?, ?, ?,?,?,?,?);
    `
  
    const [info] = await conection5.query(comando, [novaMsc.nm_musica, novaMsc.ds_artista, novaMsc.url_musica, novaMsc.dt_lancamento,novaMsc.qtd_visualizacoes,novaMsc.hr_duracao,novaMsc.bt_destaque,novaMsc.ds_idioma])
    novaMsc.nm_musica, 
    novaMsc.ds_artista, 
    novaMsc.url_musica, 
    novaMsc.dt_lancamento,
    novaMsc.qtd_visualizacoes,
    novaMsc.hr_duracao,
    novaMsc.bt_destaque,
    novaMsc.ds_idioma
    return info.insertId;
  }

  export async function alterarMusica(idmusica,novosDados) {
    const comando = `
      UPDATE gramy
         SET nm_musica= ?,
              ds_artista = ?,
                url_musica = ?,
                  dt_lancamento = ?,
                qtd_visualizacoes = ?,
              hr_duracao = ?,
            bt_destaque = ?,
          ds_idioma = ?
       WHERE idmusica = ?;
    `
  
    const [info] = await conection5.query(comando, [
      novosDados.nm_musica,
      novosDados.ds_artista,
      novosDados.url_musica,
      novosDados.dt_lancamento,
      novosDados.qtd_visualizacoes,
      novosDados.hr_duracao,
      novosDados.bt_destaque,
      novosDados.ds_idioma,
      idmusica
    ])
  }   
  
  export async function removerMusica(id) {
      const comando = `
        DELETE FROM gramy
              WHERE idmusica = ?
      `
    
      const [info] = await conection5.query(comando, [id]);
    }