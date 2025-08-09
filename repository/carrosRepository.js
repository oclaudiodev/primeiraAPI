import { conection3 } from "./conection.js";


export async function listarCarros() {
  const comando = `
    SELECT *
      FROM cars
  `

  const [registros] = await conection3.query(comando)
  return registros;
}


export async function inserirCarros(novoCarro) {
  const comando = `
    INSERT INTO cars (ds_carro,ds_modelo,nr_ano,vl_preco,img_carro,dt_inclusao)
               values (?, ?, ?,?,?,?);
  `

  const [info] = await conection3.query(comando, [novoCarro.ds_carro,novoCarro.ds_modelo,novoCarro.nr_ano,novoCarro.vl_preco,novoCarro.img_carro,novoCarro.dt_inclusao])
    novoCarro.ds_carro,
    novoCarro.ds_modelo,
    novoCarro.nr_ano,
    novoCarro.vl_preco,
    novoCarro.img_carro,
    novoCarro.dt_inclusao
  return info.insertId;
}

export async function alterarCarro(id_carro,novosDados) {
  const comando = `
    UPDATE cars
       SET ds_carro= ?,
            ds_modelo = ?,
              nr_ano = ?,
                vl_preco = ?,
              img_carro = ?,
            dt_inclusao = ?
     WHERE id_carro = ?;
  `

  const [info] = await conection3.query(comando, [
    novosDados.ds_carro,
    novosDados.ds_modelo,
    novosDados.nr_ano,
    novosDados.vl_preco,
    novosDados.img_carro,
    novosDados.dt_inclusao,
    id_carro
  ])
}   

export async function removerCarro(id) {
    const comando = `
      DELETE FROM cars
            WHERE id_carro = ?
    `
  
    const [info] = await conection3.query(comando, [id]);
  }