import { Container, Text } from "@nextui-org/react";
import Head from "next/head";
import Navbar from "../ui/Navbar";


const Layout = ({ title, children }) => {
  return (
    <>
  
      <Head>
        <title>{title || 'Pokemonapp'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> <Navbar/> <main style= {{padding:"0px 20px", minHeight:"84vh" }}> {children} </main> 

      <footer>
        <Container
        fluid
        justify="flex-end" css={{margintop:"20px", height:"35px", display:"flex", widht:"100%", bgColor:"$gray100" }}
        >     
            <Text color={'white'} h4> Derechos reservados &copy;</Text>
        </Container>

      </footer>
    </>
  );
};

export default Layout;
