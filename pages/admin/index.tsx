import { Button } from "@chakra-ui/button"
import { Flex, Heading, Text } from "@chakra-ui/layout"
import { useBreakpointValue } from "@chakra-ui/media-query"
import { useEffect, useState } from "react"
import AdminLayout from "../../components/layouts/admin"
import PortfolioCard from "../../components/PortfolioCard"
import PortfolioEditCard from "../../components/PortfolioEditCard"
import api from "../../components/utils/api"
import {
    fullLogout,
    logOut,
    requireAuthentication,
} from "../../components/utils/auth"

const Admin = ({ initialprojects }) => {
    const [projects, setProjects] = useState(initialprojects)

    const deleteProject = async (projectId: number) => {
        try {
            const res = await api().delete(`/api/projects/${projectId}`)
            setProjects((prevState) =>
                prevState.filter((project) => project.id !== projectId)
            )
        } catch (error) {
            console.error("Project could not be deleted")
        }
    }

    return (
        <AdminLayout>
            <Flex direction="column" justifyContent="center" align="center">
                <Heading
                    m={10}
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    color={"teal.400"}>
                    Projects
                </Heading>
                {projects &&
                    projects.map((project, index) => (
                        <PortfolioEditCard
                            key={index}
                            title={project.title}
                            image={project.image}
                            editLink={`/portfolio/${project.id}`}
                            onDelete={() => deleteProject(project.id)}
                        />
                    ))}
            </Flex>
        </AdminLayout>
    )
}

export default Admin

export const getServerSideProps = requireAuthentication(async () => {
    const res = await api().get("/api/projects")
    const projects = await res.data

    // Pass projects data to the page via props
    return { props: { initialprojects: projects } }
})
