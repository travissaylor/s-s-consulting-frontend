import NextLink from "next/link"
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Link,
} from "@chakra-ui/react"

const Hero = () => {
    return (
        <Container maxW={"3xl"}>
            <Stack
                as={Box}
                textAlign={"center"}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                    lineHeight={"110%"}>
                    Creative Solutions for <br />
                    <Text as={"span"} color={"teal.400"}>
                        Our Community
                    </Text>
                </Heading>
                <Text color={"gray.500"}>
                    Monetize your content by charging your most loyal readers
                    and reward them loyalty points. Give back to your loyal
                    readers by granting them access to your pre-releases and
                    sneak-peaks.
                </Text>
                <Stack
                    direction={"column"}
                    spacing={3}
                    align={"center"}
                    alignSelf={"center"}
                    position={"relative"}>
                    <NextLink href="/portfolio">
                        <Button
                            colorScheme={"teal"}
                            bg={"teal.400"}
                            rounded={"full"}
                            px={6}
                            _hover={{
                                bg: "teal.500",
                            }}>
                            View Our Work
                        </Button>
                    </NextLink>
                    <NextLink href={"/"}>
                        <Button
                            variant={"link"}
                            colorScheme={"black"}
                            size={"sm"}>
                            Learn more
                        </Button>
                    </NextLink>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Hero
