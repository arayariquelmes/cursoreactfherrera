import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { AgregarCategoria } from './components/AgregarCategoria'
import { GifGrid } from './components/GifGrid'

function GifExpertApp(props) {
    // const agregarCategoria = ()=>{
    //     setCategorias([...categorias,'Pokemon']);
    // };
    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categorias, setCategorias] = useState(['One Punch'])
    //El key debe ser el id unico del elemento
    return (
        <>
          <h2>Gif Expert App</h2> 
          <AgregarCategoria setCategorias={setCategorias} ></AgregarCategoria>
          <hr />
          <ol>
              {
                  categorias.map((c)=>{
                      return <GifGrid
                        key={c}
                        categoria={c}></GifGrid>
                  })
              }
          </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp

