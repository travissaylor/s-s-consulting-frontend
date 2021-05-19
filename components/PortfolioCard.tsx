import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
} from "@chakra-ui/react"
import Link from "next/link"

const IMAGE =
    "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"

interface PortfolioCardPropTypes {
    image: string
    title: string
    type: string
}

const PortfolioCard = ({ image, title, type }: PortfolioCardPropTypes) => {
    return (
        <Center py={12}>
            <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}>
                <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                        transition: "all .3s ease",
                        content: '""',
                        w: "full",
                        h: "full",
                        pos: "absolute",
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${image})`,
                        filter: "blur(15px)",
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: "blur(20px)",
                        },
                    }}>
                    <Image
                        rounded={"lg"}
                        height={230}
                        width={282}
                        objectFit={"cover"}
                        src={image}
                    />
                </Box>
                <Stack pt={10} align={"center"}>
                    <Text
                        color={"gray.500"}
                        fontSize={"sm"}
                        textTransform={"uppercase"}>
                        {type}
                    </Text>
                    <Heading
                        textAlign={"center"}
                        fontSize={"2xl"}
                        fontFamily={"body"}
                        fontWeight={500}>
                        {title}
                    </Heading>
                </Stack>
                <Stack pt={10} align={"center"}>
                    <Link href="/">
                        <Button
                            colorScheme={"teal"}
                            bg={"teal.400"}
                            rounded={"full"}
                            px={6}
                            _hover={{
                                bg: "teal.500",
                            }}>
                            View Project
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Center>
    )
}

export default PortfolioCard