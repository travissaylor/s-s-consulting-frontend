import { SimpleGrid } from "@chakra-ui/layout";
import PortfolioCard from "./PortfolioCard";

const PortfolioContainer = () => {
    return (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            <PortfolioCard title="Coffio - Coffee Ratio Calculator" type="Mobile App" image="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
            <PortfolioCard title="Another Project Here - Something goes here" type="Web App" image="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
            <PortfolioCard title="Some Company Digital Marketing" type="SEO" image="https://images.unsplash.com/photo-1590845947698-8924d7409b56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
        </SimpleGrid>
    )
}

export default PortfolioContainer;