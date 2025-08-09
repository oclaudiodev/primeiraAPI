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