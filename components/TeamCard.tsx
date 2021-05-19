import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
} from "@chakra-ui/react"

interface TeamCardProps {
    image: string
    name: string
    title: string
    description: string
}

const TeamCard = ({ image, name, title, description }: TeamCardProps) => {
    return (
        <Center py={6}>
            <Box
                maxW={"320px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}>
                <Avatar
                    size={"xl"}
                    src={image}
                    alt={"Avatar Alt"}
                    mb={4}
                    pos={"relative"}
                />
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                    {name}
                </Heading>
                <Text fontWeight={600} color={"teal.400"} mb={4}>
                    {title}
                </Text>
                <Text
                    textAlign={"center"}
                    color={useColorModeValue("gray.700", "gray.400")}
                    px={3}>
                    {description}
                </Text>
            </Box>
        </Center>
    )
}

export default TeamCard
