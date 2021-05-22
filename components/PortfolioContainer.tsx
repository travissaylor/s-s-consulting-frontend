import { SimpleGrid } from "@chakra-ui/layout"
import { portfolioItemPropTypes } from "../pages/portfolio"
import PortfolioCard from "./PortfolioCard"

const PortfolioContainer = ({ projects }: portfolioItemPropTypes) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            {projects.map((project, index) => (
                <PortfolioCard
                    key={index}
                    title={project.title + project.subtitle}
                    type={project.type}
                    link={`/portfolio/${project.id}`}
                    image={project.image}
                />
            ))}
        </SimpleGrid>
    )
}

export default PortfolioContainer
