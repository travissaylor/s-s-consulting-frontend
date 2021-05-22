import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import FrontendLayout from "../../components/layouts/frontend"
import SplitScreenHero from "../../components/ui/SplitScreenHero"
import api from "../../components/utils/api"

interface portfolioItemPropTypes {
    project: projectTypes
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

const PortfolioItem = ({ project }: portfolioItemPropTypes) => {
    return (
        <FrontendLayout>
            <Head>
                <title>S &amp; S Portfolio</title>
                <meta name="S &amp; S Portfolio" content="Check out our work" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SplitScreenHero
                coloredTitle={project.title}
                regularTitle={project.subtitle ?? ""}
                description={project.description}
                image={project.image}
                repoLink={project.repoLink}
                infoLink={project.infoLink}
            />
        </FrontendLayout>
    )
}

export default PortfolioItem

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get projects
    const res = await api().get('/api/projects');
    const projects: projectTypes[] = await res.data;

    // Get the paths we want to pre-render based on projects
    const paths = projects.map((project) => ({
        params: { pid: project.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    // params contains the project `id`.
    // If the route is like /projects/1, then params.id is 1

    const res = await api().get(`api/projects/${params?.pid}`)
    const project = res.data

    // Pass post data to the page via props
    return { props: { project } }
}

const STUB_PROJECTS = [
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
