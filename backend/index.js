const express = require('express');
const { v4: uuidv4, validate } = require('uuid');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação no Back-end
 * POST: Criar uma informação no Back-end
 * PUT/PATCH: Alterar uma informação no Back-end
 * DELETE: Deletar uma informação no Back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Filtros
 * Route Params: Identificadores
 * Request Body: Conteúdo da requisição p/ criação ou edição (JSON)
 */

 /**
  * Middleware:
  * 
  * Interceptador de requisições:
  *   - Interromper;
  *   - Alterar os dados da requisição;
  */

const pokemons = [];

function logRequests(request, response, next) {
  const { method, url } = request;

  const log = `${method} ${url}`;

  console.time(log);

  next();

  console.timeEnd(log);
}

function validateUuid(request, response, next) {
  const { id } = request.params;

  if (!validate(id)) {
    return response.status(400).json({ error: 'Id inválido.' });
  }
  
  return next();
}

app.use(logRequests);
app.use('/pokemons/:id', validateUuid);

app.get('/pokemons', (request, response) => {
  const { type } = request.query;

  const results = type ? pokemons.filter(pokemon => pokemon.type === type) : pokemons;

  return response.json(results);
});

app.post('/pokemons', (request, response) => {
  const { name, type, image } = request.body;

  const date = new Date();

  const pokemon = { id: uuidv4(), name, type, image, date };

  pokemons.push(pokemon);

  return response.json(pokemon);
});

app.put('/pokemons/:id', (request, response) => {
  const { id } = request.params;
  const { name, type, image } = request.body

  const pokemonIndex = pokemons.findIndex(pokemon => pokemon.id === id);

  if (pokemonIndex < 0) {
    return response.status(400).json({ error: 'Pokemon não encontrado.' });
  }

  const pokemon = { id, name, type, image };

  pokemons[pokemonIndex] = pokemon;

  return response.json(pokemon);
});

app.delete('/pokemons/:id', (request, response) => {
  const { id } = request.params;

  const pokemonIndex = pokemons.findIndex(pokemon => pokemon.id === id);

  if (pokemonIndex < 0) {
    return response.status(400).json({ error: 'Pokemon não encontrado.' });
  }

  pokemons.splice(pokemonIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('🚀 Back-end iniciado!')
});