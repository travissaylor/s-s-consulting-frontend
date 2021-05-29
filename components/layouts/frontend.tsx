import { Fragment } from "react"
import Footer from "../ui/Footer"
import FrontendNav from "../ui/FrontendNav"

const FrontendLayout = ({children}) => (
    <div>
        <FrontendNav />
        {children}
        <Footer />
    </div>
)

export default FrontendLayout;