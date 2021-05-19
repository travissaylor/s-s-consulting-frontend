import { ReactElement } from "react"
import {
    SimpleGrid,
    Icon,
    Text,
    Stack,
    Flex,
    useColorModeValue,
    Heading,
} from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"

interface FeatureProps {
    title: string
    text: string
    icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={10}
                h={10}
                align={"center"}
                justify={"center"}
                color={"white"}
                rounded={"full"}
                bg={"teal.300"}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={"grey.5*00"}>{text}</Text>
        </Stack>
    )
}

const Features = () => {
    return (
        <Flex
            direction="column"
            justify="center"
            align="center"
            py={20} px={10}
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}>
            <Flex flexDir="column" alignItems="center" maxW={"3xl"} mb={10}>
                <Heading fontWeight={600} mb={5}>What We Offer</Heading>
                <Text color={"gray.500"}>
                    Monetize your content by charging your most loyal readers
                    and reward them loyalty points. Give back to your loyal
                    readers by granting them access to your pre-releases and
                    sneak-peaks.
                </Text>
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={CheckIcon} w={5} h={5} />}
                    title={"Brand Website"}
                    text={
                        "We will build and design a beautiful, fast, and responsive website that represents your brand uniquely."
                    }
                />
                <Feature
                    icon={<Icon as={CheckIcon} w={5} h={5} />}
                    title={"Web Application"}
                    text={
                        "We can solve all of your functionality needs with an efficent, scalable, and customizable application."
                    }
                />
                <Feature
                    icon={<Icon as={CheckIcon} w={5} h={5} />}
                    title={"Mobile Application"}
                    text={
                        "We build cross-platform applications that will solitify your presence in the mobile market. We build solutions for both iOS, Android, or Both!"
                    }
                />
            </SimpleGrid>
        </Flex>
    )
}

export default Features
