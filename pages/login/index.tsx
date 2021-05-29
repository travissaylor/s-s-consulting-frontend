import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react"
import React, { useState } from "react"
import FrontendLayout from "../../components/layouts/frontend"
import { fullLogin } from "../../components/utils/auth"

const LoginPage = () => {
    const [formInput, setFormInput] = useState({ email: "", password: "" })

    const updateFormInput = (e) => {
        e.persist()

        setFormInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const signIn = async (e) => {
        e.preventDefault()

        await fullLogin(formInput)
    }

    return (
        <FrontendLayout>
            <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}>
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"}>
                            Sign in to your account
                        </Heading>
                        <Text fontSize={"lg"} color={"gray.600"}>
                            to enjoy all of our cool{" "}
                            <Link color={"blue.400"}>features</Link> ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow={"lg"}
                        p={8}>
                        <Stack spacing={4}>
                            <form onSubmit={signIn}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formInput.email}
                                        onChange={updateFormInput}
                                    />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        name="password"
                                        value={formInput.password}
                                        onChange={updateFormInput}
                                    />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{
                                            base: "column",
                                            sm: "row",
                                        }}
                                        align={"start"}
                                        justify={"space-between"}>
                                        <Checkbox>Remember me</Checkbox>
                                        <Link color={"blue.400"}>
                                            Forgot password?
                                        </Link>
                                    </Stack>
                                    <Button
                                        type={"submit"}
                                        onClick={signIn}
                                        bg={"blue.400"}
                                        color={"white"}
                                        _hover={{
                                            bg: "blue.500",
                                        }}>
                                        Sign in
                                    </Button>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </FrontendLayout>
    )
}

export default LoginPage
