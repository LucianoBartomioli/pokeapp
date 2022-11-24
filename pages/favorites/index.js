import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout';
import {FavoritePokemons} from '../../components/pokemon/FavoritePokemons';
import { NoFavorites} from '../../components/pokemon/NoFavorites';
import { localFavorites } from '../../utils';





const FavoritosPage = () => {



    const [favoritePokemons, setFavoritePokemons] = useState([])


    useEffect(() => {
      setFavoritePokemons(localFavorites.pokemons())
    }, [])
    

    console.log("favoritePokemons",favoritePokemons);
    return (
         <Layout title="Favoritos">
         {
            favoritePokemons.length === 0 ? 
            (
            <NoFavorites/>
            ) : <FavoritePokemons 
                pokemons={favoritePokemons}
            />
         }
         </Layout> 
         
         );
}
 
export default FavoritosPage;
