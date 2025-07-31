import { listarCursos, inserirCurso } from './repository/cursoRepository.js';
import { listarTime, inserirTime } from './repository/timesRepository.js';
import { listarMsc,inserirMsc } from'./repository/musicaRepository.js';
import { listarEmp,inserirEmp } from './repository/funcionariosRepository.js';
import { listarAlunos,inserirAluno } from './repository/alunosRepository.js';
import { listarCarros,inserirCarros } from './repository/carrosRepository.js';
import { listarFilmes,inserirFilme } from './repository/cinemaRepository.js';
import { inserirEstados, listarEstado } from './repository/estadosRepository.js';
import { inserirProd, listarProd } from './repository/mercadinRepository.js';
import { inserirAnime,listarAnimes } from './repository/animesRepository.js';

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

api.get('/times_futebol', async(req,resp)=>{
    let registros = await listarTime();
    resp.send(registros);
})

api.post('/times_futebol', async (req,resp)=>{
    let novoTime= req.body;

    let id = await inserirTime(novoTime);
    resp.send({novoId:id});
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

api.get('/fun', async(req,resp)=>{
    let registros = await listarEmp();
    resp.send(registros);
})

api.post('/fun', async (req,resp)=>{
    let novaEmp= req.body;

    let id = await inserirEmp(novaEmp);
    resp.send({novoId:id});
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

api.get('/alunos', async(req,resp)=>{
    let registros = await listarAlunos();
    resp.send(registros);
})

api.post('/alunos', async (req,resp)=>{
    let novoAluno= req.body;

    let id = await inserirAluno(novoAluno);
    resp.send({novoId:id});
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

api.get('/cinems', async(req,resp)=>{
    let registros = await listarFilmes();
    resp.send(registros);
})

api.post('/cinems', async (req,resp)=>{
    let novoFilme= req.body;

    let id = await inserirFilme(novoFilme);
    resp.send({novoId:id});
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

api.get('/animes', async(req,resp)=>{
    let registros = await listarAnimes();
    resp.send(registros);
})

api.post('/animes', async (req,resp)=>{
    let novoAnime= req.body;

    let id = await inserirAnime(novoAnime);
    resp.send({novoId:id});
})



api.listen(5016, () => console.log('API subiu com sucesso!'));