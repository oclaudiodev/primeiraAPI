import { conection } from "./conection.js";


export async function listarAnimes() {
  const comando = `
    SELECT *
      FROM animes
  `

  const [registros] = await conection.query(comando)
  return registros;
}


export async function inserirAnime(novoAnime) {
  const comando = `
    INSERT INTO animes (nome,genero,episodios,ano_lancamento,estudio,avaliacao)
               values (?, ?, ?,?,?,?);
  `

  const [info] = await conection.query(comando, [novoAnime.nome,novoAnime.genero,novoAnime.episodios,novoAnime.ano_lancamento,novoAnime.estudio,novoAnime.avaliacao])
    novoAnime.nome,
    novoAnime.genero,
    novoAnime.episodios,
    novoAnime.ano_lancamento,
    novoAnime.estudio,
    novoAnime.avaliacao
  return info.insertId;
}

export async function alterarAnime(id,novosDados) {
  const comando = `
    UPDATE animes
       SET nome= ?,
            genero = ?,
              episodios = ?,
                ano_lancamento = ?,
              estudio = ?,
            avaliacao = ?
     WHERE id = ?;
  `

  const [info] = await conection.query(comando, [
    novosDados.nome,
    novosDados.genero,
    novosDados.episodios,
    novosDados.ano_lancamento,
    novosDados.estudio,
    novosDados.avaliacao,
    id
  ])
}   

export async function removerAnime(id) {
  const comando = `
    DELETE FROM animes
          WHERE id = ?
  `

  const [info] = await conection.query(comando, [id]);
}

export async function consultarAnime(id) {
  const comando = `
    SELECT *
      FROM animes
     WHERE id = ? 
  `

  const [registros] = await conection.query(comando, [id])
  return registros[0];
}

export async function filtrarAnime(nome) {
  const comando = `
    SELECT *
      FROM animes
     WHERE nome like ? 
  `

  const [registros] = await conection.query(comando, ['%'+nome+'%'])
  return registros;
}