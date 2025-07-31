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