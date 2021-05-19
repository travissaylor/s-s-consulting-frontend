import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/dist/next-server/lib/router/router"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    )
}

export default MyApp
