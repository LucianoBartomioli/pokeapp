import { Container, Text } from "@nextui-org/react";
import React from "react";


const NoFavorites = () => {
  return (
    <Container
    css={{
        display:"flex",
        flexDirection:"column",
        height: "calc(100hv - 100px)"
    }
    }
    >
        <Text h1>No hay Favoritos</Text>
    </Container>
  )
}

export default NoFavorites
