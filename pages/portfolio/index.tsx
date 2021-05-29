import { GetStaticProps } from "next"
import Head from "next/head"
import FrontendLayout from "../../components/layouts/frontend"
import PortfolioContainer from "../../components/PortfolioContainer"
import PortfolioHero from "../../components/PortfolioHero"
import api from "../../components/utils/api"

export interface portfolioItemPropTypes {
    projects: Array<projectTypes>
}

interface projectTypes {
    id: string
    title: string
    subtitle?: string
    description: string
    type: string
    image: string
    repoLink?: string
    infoLink?: string
}
export default function Portfolio({ projects }: portfolioItemPropTypes) {
    return (
        <FrontendLayout>
            <Head>
                <title>S &amp; S Portfolio</title>
                <meta name="S &amp; S Portfolio" content="Check out our work" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PortfolioHero />

            <PortfolioContainer projects={projects} />
        </FrontendLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await api().get("/api/projects")
    const projects = await res.data

    // Pass projects data to the page via props
    return { props: { projects } }
}

const STUB_PROJECTS: Array<projectTypes> = [
    {
        id: "1",
        title: "Coffio",
        subtitle: "Coffee Ratio Calculator",
        type: "Mobile App",
        description: "Description Here",
        image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
        id: "2",
        title: "Another Project Here",
        subtitle: "Something goes here",
        type: "Web App",
        description: "Description Here",
        image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
        id: "3",
        title: "Marketing Buddy",
        subtitle: "Some Company Digital Marketing",
        type: "Digital Marketing",
        description: "Description Here",
        image: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
]
