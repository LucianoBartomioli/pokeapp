import { Container, Card, Text, Grid} from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";



const FavoriteCardPokemon = ({pokemonId}) => {
    const router = useRouter()
    const onFavoriteClicked = () => {
        router.push(`/name/${pokemonId}`)

    }
console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`)
  return (
    <Grid xs={6} sm={3} md={2} key={pokemonId} onClick={onFavoriteClicked}>
        <Card isHoverable isPressable>
            <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
            alt="h"
            />
        </Card>

    </Grid>
  )
}

export default FavoriteCardPokemon
