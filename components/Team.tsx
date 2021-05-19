import {
    SimpleGrid,
    Icon,
    Text,
    Stack,
    Flex,
    useColorModeValue,
    Heading,
} from "@chakra-ui/react"
import TeamCard from "./TeamCard"

const Team = () => {
    return (
        <Flex direction="column" justify="center" align="center" py={20} px={10}>
            <Flex flexDir="column" alignItems="center" maxW={"3xl"} mb={10}>
                <Heading fontWeight={600} mb={5}>
                    Our Team
                </Heading>
                <Text color={"gray.500"}>
                    Monetize your content by charging your most loyal readers
                    and reward them loyalty points. Give back to your loyal
                    readers by granting them access to your pre-releases and
                    sneak-peaks.
                </Text>
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <TeamCard
                    name="Justin Sipe"
                    title="Chief Executive Officer"
                    description="Business Director that helps match your needs with our skills and solutions"
                    image=""
                />
                <TeamCard
                    name="Travis Saylor"
                    title="Chief Technology Officer"
                    description="Software Engineer Focused on making user experience better for everyone"
                    image=""
                />
            </SimpleGrid>
        </Flex>
    )
}

export default Team
