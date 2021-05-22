import { Button } from "@chakra-ui/button"
import { useEffect, useState } from "react"
import AdminLayout from "../../components/layouts/admin"
import PortfolioCard from "../../components/PortfolioCard"
import PortfolioEditCard from "../../components/PortfolioEditCard"
import api from "../../components/utils/api"
import { logOut } from "../../components/utils/auth"
import withAuth from "../../components/withAuth"

const Admin = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const getProjects = async () => {
            const res = await api().get('/api/projects');
            setProjects(await res.data);
        }
        getProjects();
    }, [])

    const deleteProject = async (projectId: number) => {
        try {
            const res = await api().delete(`/api/projects/${projectId}`);
            setProjects((prevState) => prevState.filter((project) => project.id !== projectId));
        } catch(error) {
            console.error('Project could not be deleted');
        }

    }

    const fullLogout = async () => {
        try {
            const res = await api().post('/logout');
            logOut();
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <AdminLayout>
            <h1>Admin Dashboard</h1>
            <Button onClick={fullLogout}>Logout</Button>
            {projects && projects.map((project, index) => (
                <PortfolioEditCard key={index} title={project.title} image={project.image} editLink={`/portfolio/${project.id}`} onDelete={() => deleteProject(project.id)} />
            ))}
        </AdminLayout>
    )
}

export default withAuth(Admin)
