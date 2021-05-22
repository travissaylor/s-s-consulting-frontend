import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react"

import NextLink from "next/link"

interface SplitScreenHeroProps {
    coloredTitle: string
    regularTitle: string
    description: string
    image: string
    repoLink?: string | null
    infoLink?: string | null
}

export default function SplitScreenHero({
    coloredTitle,
    regularTitle,
    description,
    image,
    repoLink = null,
    infoLink = null,
}: SplitScreenHeroProps) {
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
                            {coloredTitle}
                        </Text>
                        <br />{" "}
                        <Text color={"teal.400"} as={"span"}>
                            {regularTitle}
                        </Text>{" "}
                    </Heading>
                    <Text
                        fontSize={{ base: "md", lg: "lg" }}
                        color={"gray.500"}>
                        {description}
                    </Text>
                    {infoLink && repoLink && (
                        <Stack
                            direction={{ base: "column", md: "row" }}
                            spacing={4}>
                            {infoLink && (
                                <NextLink href={infoLink ?? "/"}>
                                    <Button
                                        rounded={"full"}
                                        bg={"teal.400"}
                                        color={"white"}
                                        _hover={{
                                            bg: "teal.500",
                                        }}>
                                        View Project in Action
                                    </Button>
                                </NextLink>
                            )}
                            {repoLink && (
                                <NextLink href={repoLink ?? "/"}>
                                    <Button rounded={"full"}>
                                        Checkout the Code
                                    </Button>
                                </NextLink>
                            )}
                        </Stack>
                    )}
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image alt={"Login Image"} objectFit={"cover"} src={image} />
            </Flex>
        </Stack>
    )
}
