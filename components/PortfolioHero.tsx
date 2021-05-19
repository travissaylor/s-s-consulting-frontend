import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react"

const PortfolioHero = () => {
    return (
        <Stack mb={10} direction={{ base: "column", md: "row" }}>
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={6} w={"full"} maxW={"lg"}>
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                        <Text
                            as={"span"}
                            position={"relative"}
                            _after={{
                                content: "''",
                                width: "full",
                                height: useBreakpointValue({
                                    base: "20%",
                                    md: "30%",
                                }),
                                position: "absolute",
                                bottom: 1,
                                left: 0,
                                bg: "teal.400",
                                zIndex: -1,
                            }}>
                            S &amp; S Consulting
                        </Text>
                        <br />{" "}
                        <Text color={"teal.400"} as={"span"}>
                            Portfolio
                        </Text>{" "}
                    </Heading>
                    <Text
                        fontSize={{ base: "md", lg: "lg" }}
                        color={"gray.500"}>
                        Here are some of our recent projects. We have a round
                        porfolio consisting of web and mobile application
                        development as well as marketing strategies to help your
                        business
                    </Text>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={"Login Image"}
                    objectFit={"cover"}
                    src={
                        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    }
                />
            </Flex>
        </Stack>
    )
}

export default PortfolioHero
