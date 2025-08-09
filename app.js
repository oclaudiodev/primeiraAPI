import { listarCursos, inserirCurso, removerCurso,alterarCurso, consultarCursos,filtrarPorNome } from './repository/cursoRepository.js';
import { listarTime, inserirTime, removerTime,alterarTime,filtrarTime,consultarTime } from './repository/timesRepository.js';
import { listarMsc,inserirMsc, removerMusica, alterarMusica, filtrarMusica, consultarMusica } from'./repository/musicaRepository.js';
import { listarEmp,inserirEmp, alterarEmp, removerEmp, consultarEmp, filtrarEmp } from './repository/funcionariosRepository.js';
import { listarAlunos,inserirAluno, alterarAluno, removerAluno, filtrarAluno,consultarAluno } from './repository/alunosRepository.js';
import { listarCarros,inserirCarros, removerCarro, alterarCarro, consultarCarro, filtrarCarro } from './repository/carrosRepository.js';
import { listarFilmes,inserirFilme, removerFilme, alterarFilme, consultarFilme, filtrarFilme } from './repository/cinemaRepository.js';
import { alterarEst, filtrarEst, inserirEstados, listarEstado, removerEst,consultarEst} from './repository/estadosRepository.js';
import { inserirProd, listarProd, removerProd,alterarProd, consultarProd, filtrarProd } from './repository/mercadinRepository.js';
import { filtrarAnime, inserirAnime,listarAnimes,alterarAnime,consultarAnime,removerAnime } from './repository/animesRepository.js';

import express from 'express'

const api = express();
api.use(express.json()); 

api.get('/curso', async(req,resp)=>{
    let registros = await listarCursos();
    resp.send(registros);
})

api.post('/curso', async (req,resp)=>{
    let novoCurso= req.body;

    let id = await inserirCurso(novoCurso);
    resp.send({novoId:id});
})

api.put('/curso/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;
    
    await alterarCurso(id,novosDados);
    resp.send();
  })

api.delete('/curso/:id', async (req, resp) => {
    let id = Number(req.params.id);
  
    await removerCurso(id);
    resp.send();
})

api.get('/curso/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarPorNome(nome);
    resp.send(registros);
  })
  
  
  api.get('/curso/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await consultarCursos(id);
    resp.send(registros);
  })
  

api.get('/times_futebol', async(req,resp)=>{
    let registros = await listarTime();
    resp.send(registros);
})

api.post('/times_futebol', async (req,resp)=>{
    let novoTime= req.body;

    let id = await inserirTime(novoTime);
    resp.send({novoId:id});
})

api.put('/times_futebol/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;
    
    await alterarTime(id,novosDados);
    resp.send();
  })

api.delete('/times_futebol/:id', async (req, resp) => {
    let id = Number(req.params.id);
  
    await removerTime(id);
    resp.send();
})

api.get('/times_futebol/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarTime(nome);
    resp.send(registros);
  })
  
  
  api.get('/times_futebol/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await consultarTime(id);
    resp.send(registros);
  })
  

api.get('/gramy', async(req,resp)=>{
    let registros = await listarMsc();
    resp.send(registros);
})

api.post('/gramy', async (req,resp)=>{
    let novaMsc= req.body;

    let id = await inserirMsc(novaMsc);
    resp.send({novoId:id});
})


api.put('/gramy/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;
    
    await alterarMusica(id,novosDados);
    resp.send();
  })

api.delete('/gramy/:id', async (req, resp) => {
    let id = Number(req.params.id);
  
    await removerMusica(id);
    resp.send();
})

api.get('/gramy/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarMusica(nome);
    resp.send(registros);
  })
  
  
  api.get('/gramy/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await consultarMusica(id);
    resp.send(registros);
  })

api.get('/fun', async(req,resp)=>{
    let registros = await listarEmp();
    resp.send(registros);
})

api.post('/fun', async (req,resp)=>{
    let novaEmp= req.body;

    let id = await inserirEmp(novaEmp);
    resp.send({novoId:id});
})

api.put('/fun/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;
    
    await alterarEmp(id,novosDados);
    resp.send();
  })

api.delete('/fun/:id', async (req, resp) => {
    let id = Number(req.params.id);
  
    await removerEmp(id);
    resp.send();
})

api.get('/fun/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarEmp(nome);
    resp.send(registros);
  })
  
  
  api.get('/fun/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await consultarEmp(id);
    resp.send(registros);
  })

api.get('/estados', async(req,resp)=>{
    let registros = await listarEstado();
    resp.send(registros);
})

api.post('/estados', async (req,resp)=>{
    let novoEstado= req.body;

    let id = await inserirEstados(novoEstado);
    resp.send({novoId:id});
})

api.put('/estados/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;
    
    await alterarEst(id,novosDados);
    resp.send();
  })

api.delete('/estados/:id', async (req, resp) => {
    let id = Number(req.params.id);
  
    await removerEst(id);
    resp.send();
})

api.get('/estados/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarEst(nome);
    resp.send(registros);
  })
  
  
  api.get('/estados/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await consultarEst(id);
    resp.send(registros);
  })

api.get('/alunos', async(req,resp)=>{
    let registros = await listarAlunos();
    resp.send(registros);
})

api.post('/alunos', async (req,resp)=>{
    let novoAluno= req.body;

    let id = await inserirAluno(novoAluno);
    resp.send({novoId:id});
})

api.put('/alunos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;
    
    await alterarAluno(id,novosDados);
    resp.send();
  })

api.delete('/alunos/:id', async (req, resp) => {
    let id = Number(req.params.id);
  
    await removerAluno(id);
    resp.send();
})

api.get('/alunos/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarAluno(nome);
    resp.send(registros);
  })
  
  
  api.get('/alunos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await consultarAluno(id);
    resp.send(registros);
  })


api.get('/cars', async(req,resp)=>{
    let registros = await listarCarros();
    resp.send(registros);
})

api.post('/cars', async (req,resp)=>{
    let novoCarro= req.body;

    let id = await inserirCarros(novoCarro);
    resp.send({novoId:id});
})

api.put('/cars/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;
    
    await alterarCarro(id,novosDados);
    resp.send();
  })

api.delete('/cars/:id', async (req, resp) => {
    let id = Number(req.params.id);
  
    await removerCarro(id);
    resp.send();
})

api.get('/cars/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarCarro(nome);
    resp.send(registros);
  })
  
  
  api.get('/cars/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await consultarCarro(id);
    resp.send(registros);
  })


api.get('/cinems', async(req,resp)=>{
    let registros = await listarFilmes();
    resp.send(registros);
})

api.post('/cinems', async (req,resp)=>{
    let novoFilme= req.body;

    let id = await inserirFilme(novoFilme);
    resp.send({novoId:id});
})

api.put('/cinems/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;
    
    await alterarFilme(id,novosDados);
    resp.send();
  })

api.delete('/cinems/:id', async (req, resp) => {
    let id = Number(req.params.id);
  
    await removerFilme(id);
    resp.send();
})

api.get('/cinems/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarFilme(nome);
    resp.send(registros);
  })
  
  
  api.get('/cinems/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await consultarFilme(id);
    resp.send(registros);
  })

api.get('/merc', async(req,resp)=>{
    let registros = await listarProd();
    resp.send(registros);
})

api.post('/merc', async (req,resp)=>{
    let novoProd= req.body;

    let id = await inserirProd(novoProd);
    resp.send({novoId:id});
})

api.put('/merc/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;
    
    await alterarProd(id,novosDados);
    resp.send();
  })

api.delete('/merc/:id', async (req, resp) => {
    let id = Number(req.params.id);
  
    await removerProd(id);
    resp.send();
})

api.get('/merc/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarProd(nome);
    resp.send(registros);
  })
  
  
  api.get('/merc/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await consultarProd(id);
    resp.send(registros);
  })

api.get('/animes', async(req,resp)=>{
    let registros = await listarAnimes();
    resp.send(registros);
})

api.post('/animes', async (req,resp)=>{
    let novoAnime= req.body;

    let id = await inserirAnime(novoAnime);
    resp.send({novoId:id});
})
api.put('/animes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let novosDados = req.body;
    
    await alterarAnime(id,novosDados);
    resp.send();
  })

api.delete('/animes/:id', async (req, resp) => {
    let id = Number(req.params.id);
  
    await removerAnime(id);
    resp.send();
})

api.get('/animes/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarAnime(nome);
    resp.send(registros);
  })
  
  
  api.get('/animes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let registros = await consultarAnime(id);
    resp.send(registros);
  })




api.listen(5016, () => console.log('API subiu com sucesso!'));