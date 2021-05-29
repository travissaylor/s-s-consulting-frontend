import { Fragment } from "react"
import AdminNav from "../ui/AdminNav";
import Footer from "../ui/Footer"

const AdminLayout = ({children}) => (
    <div>
        <AdminNav />
        {children}
        <Footer />
    </div>
)

export default AdminLayout;