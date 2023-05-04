import { createSlice } from "@reduxjs/toolkit";

import eletronicosThumb from 'assets/categorias/thumbnail/eletronicos.png';
import automotivoThumb from 'assets/categorias/thumbnail/automotivo.png';
import escritorioThumb from 'assets/categorias/thumbnail/escritorio.png';
import jogosThumb from 'assets/categorias/thumbnail/jogos.png';
import somThumb from 'assets/categorias/thumbnail/som.png';

import eletronicosHeader from 'assets/categorias/header/eletronicos.png';
import automotivoHeader from 'assets/categorias/header/automotivo.png';
import escritorioHeader from 'assets/categorias/header/escritorio.png';
import jogosHeader from 'assets/categorias/header/jogos.png';
import somHeader from 'assets/categorias/header/som.png';

const initialState = [{
    nome: 'Eletrônicos',
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: 'eletronicos',
    descricao: 'Eletronicos é aqui'
  }, 
    {
      nome: 'Automotivo',
      thumbnail: automotivoThumb,
      header: automotivoHeader,
      id: 'automotivo',
      descricao: 'automotivo é aqui'
    },
    {
      nome: 'Jogos',
      thumbnail: jogosThumb,
      header: jogosHeader,
      id: 'jogos',
      descricao: 'Jogos é aqui'
    },
    {
      nome: 'Escritório',
      thumbnail: escritorioThumb,
      header: escritorioHeader,
      id: 'escritorio',
      descricao: 'Escritório é aqui'
    },
    {
      nome: 'Som',
      thumbnail: somThumb,
      header: somHeader,
      id: 'som',
      descricao: 'Som é aqui'
    }
  ]

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState
});

export default categoriasSlice.reducer;