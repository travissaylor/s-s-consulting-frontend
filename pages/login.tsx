import { useEffect } from "react"
import api from "../components/utils/api"

const Login = () => {

    useEffect(() => {

        const getProjectsOnLoad = async () => {
            const projects = await getProjects();
            console.log(projects);
        }
        
        getProjectsOnLoad();
    }, [])

    const getProjects = async () => {
        return await api().get('/api/projects');
    }
    return (
        <h1>Login</h1>
    )
}

export default Login;