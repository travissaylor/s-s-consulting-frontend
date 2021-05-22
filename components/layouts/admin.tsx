import { Fragment } from "react"
import Footer from "../Footer"
import Nav from "../Nav"

const AdminLayout = ({children}) => (
    <div>
        <Nav />
        {children}
        <Footer />
    </div>
)

export default AdminLayout;