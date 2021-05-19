import Head from "next/head"
import PortfolioContainer from "../components/PortfolioContainer"
import PortfolioHero from "../components/PortfolioHero"

export default function Portfolio() {
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

            <PortfolioHero />

            <PortfolioContainer />
        </div>
    )
}
