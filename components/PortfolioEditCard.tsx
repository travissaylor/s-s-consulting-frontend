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

export interface PortfolioEditCardPropTypes {
    image: string
    title: string
    type: string
    editLink: string
    onDelete: () => void
}

const PortfolioEditCard = ({
    image,
    title,
    type,
    editLink,
    onDelete,
}: PortfolioEditCardPropTypes) => {
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
                <Stack mt={8} direction={"row"} spacing={4}>
                    <Link href={editLink}>
                        <Button
                            flex={1}
                            fontSize={"sm"}
                            rounded={"full"}
                            _focus={{
                                bg: "gray.200",
                            }}>
                            Edit
                        </Button>
                    </Link>
                    <Button
                        onClick={onDelete}
                        flex={1}
                        fontSize={"sm"}
                        rounded={"full"}
                        bg={"teal.400"}
                        color={"white"}
                        boxShadow={
                            "0px 1px 25px -5px rgb(56 178 172 / 48%), 0 10px 10px -5px rgb(56 178 172 / 43%)"
                        }
                        _hover={{
                            bg: "teal.500",
                        }}
                        _focus={{
                            bg: "teal.500",
                        }}>
                        Delete
                    </Button>
                </Stack>
            </Box>
        </Center>
    )
}

export default PortfolioEditCard
