import Head from "next/head"
import Image from "next/image"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Team from "../components/Team"

export default function Home() {
    return (
        <div>
            <Head>
                <title>S &amp; S Consulting</title>
                <meta
                    name="S &amp; S Consulting"
                    content="Creative solutions for our community"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Hero />
            <Features />
            <Team />
        </div>
    )
}
