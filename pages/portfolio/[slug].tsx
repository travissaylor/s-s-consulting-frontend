import { Heading } from "@chakra-ui/layout"
import Head from "next/head"
import { useRouter } from 'next/router'
import PortfolioContainer from "../../components/PortfolioContainer"
import PortfolioHero from "../../components/PortfolioHero"

export default function PortfolioItem() {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div>
            <Head>
                <title>S &amp; S Portfolio</title>
                <meta
                    name="S &amp; S Portfolio"
                    content="Check out our work"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Heading>ID: {slug}</Heading>
            <PortfolioHero />

            <PortfolioContainer />
        </div>
    )
}