import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react"

import Link from 'next/link'

const Footer = () => {
    const date = new Date();
    const currrentYear = date.getFullYear();
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}>
                <Stack direction={"row"} spacing={6}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/portfolio"}>Portfolio</Link>
                    <Link href={"#"}>About Us</Link>
                    <Link href={"#"}>Contact</Link>
                </Stack>
                <Text>© {currrentYear} S&amp;S Consulting. All rights reserved</Text>
            </Container>
        </Box>
    )
}

export default Footer;
