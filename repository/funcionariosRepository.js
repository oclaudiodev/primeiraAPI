import { conection6 } from "./conection.js";


export async function listarEmp() {
  const comando = `
    SELECT *
      FROM funcionarios
  `

  const [registros] = await conection6.query(comando)
  return registros;
}


export async function inserirEmp(novaEmp) {
  const comando = `
    INSERT INTO funcionarios (empresa , setor , salario_medio,colaboradores,férias)
               values ( ?,?, ? , ?, ?);
  `

  const [info] = await conection6.query(comando, [novaEmp.empresa, novaEmp.setor, novaEmp.salario_medio,novaEmp.colaboradores,novaEmp.férias])
  novaEmp.empresa,
  novaEmp.setor,
  novaEmp.salario_medio,
  novaEmp.colaboradores,
  novaEmp.férias
  return info.insertId;
}

export async function alterarEmp(id,novosDados) {
  const comando = `
    UPDATE funcionarios
       SET empresa= ?,
            setor = ?,
              salario_medio = ?,
                colaboradores = ?,
                férias = ?
     WHERE id = ?;
  `

  const [info] = await conection6.query(comando, [
    novosDados.empresa,
    novosDados.setor,
    novosDados.salario_medio,
    novosDados.colaboradores,
    novosDados.férias,
    id
  ])
}   

export async function removerEmp(id) {
    const comando = `
      DELETE FROM funcionarios
            WHERE id = ?
    `
  
    const [info] = await conection6.query(comando, [id]);
  }

  export async function consultarEmp(id) {
    const comando = `
      SELECT *
        FROM funcionarios
       WHERE id = ? 
    `
  
    const [registros] = await conection6.query(comando, [id])
    return registros[0];
  }
  
  export async function filtrarEmp(nome) {
    const comando = `
      SELECT *
        FROM funcionarios
       WHERE empresa like ? 
    `
  
    const [registros] = await conection6.query(comando, ['%'+nome+'%'])
    return registros;
  }