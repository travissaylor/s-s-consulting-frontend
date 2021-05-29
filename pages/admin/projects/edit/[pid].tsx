import { Button } from "@chakra-ui/button"
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
} from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Container, Flex, Heading } from "@chakra-ui/layout"
import { Textarea } from "@chakra-ui/textarea"
import { Field, Form, Formik } from "formik"
import { GetServerSideProps } from "next"
import AdminLayout from "../../../../components/layouts/admin"
import api from "../../../../components/utils/api"
import { requireAuthentication } from "../../../../components/utils/auth"
import { projectTypes } from "../../../../types"

interface editProjectProps {
    project: projectTypes
}

const EditProject = ({ project }: editProjectProps) => {
    function validateText(value) {
        let error
        if (!value) {
            error = "Name is required"
        }
        return error
    }
    return (
        <AdminLayout>
            <Flex m={10}>
                <Container>
                    <Heading
                        m={10}
                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                        color={"teal.400"}>
                        {project.title}
                    </Heading>
                    <Formik
                        initialValues={project}
                        onSubmit={async (values, actions) => {
                            const formData = new FormData()
                            formData.append("title", values.title)
                            formData.append("subtitle", values.subtitle ?? null)
                            formData.append("description", values.description)
                            formData.append("type", values.type)
                            formData.append("image", values.image)

                            setTimeout(async () => {
                                const res = await api().put(
                                    `api/projects/${project.id}`,
                                    formData,
                                )
                                console.log(res)
                            }, 500)
                        }}>
                        {({ values, isSubmitting, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <Field name="title" validate={validateText}>
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={
                                                form.errors.name &&
                                                form.touched.name
                                            }>
                                            <FormLabel htmlFor="title">
                                                Title
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                id="title"
                                                placeholder="title"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.name}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="subtitle" validate={validateText}>
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={
                                                form.errors.name &&
                                                form.touched.name
                                            }>
                                            <FormLabel htmlFor="subtitle">
                                                Subtitle
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                id="subtitle"
                                                placeholder="subtitle"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.name}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="type" validate={validateText}>
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={
                                                form.errors.name &&
                                                form.touched.name
                                            }>
                                            <FormLabel htmlFor="type">
                                                Type
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                id="type"
                                                placeholder="type"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.name}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="image" validate={validateText}>
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={form.errors.name}>
                                            <FormLabel htmlFor="image">
                                                Image
                                            </FormLabel>
                                            <Input
                                                {...field}
                                                id="image"
                                                placeholder="image"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.name}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field
                                    name="description"
                                    validate={validateText}>
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={
                                                form.errors.name &&
                                                form.touched.name
                                            }>
                                            <FormLabel htmlFor="description">
                                                Description
                                            </FormLabel>
                                            <Textarea
                                                {...field}
                                                id="description"
                                                placeholder="description"
                                            />
                                            <FormErrorMessage>
                                                {form.errors.name}
                                            </FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Button
                                    mt={4}
                                    colorScheme="teal"
                                    isLoading={isSubmitting}
                                    onClick={handleSubmit}
                                    type="submit">
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </Flex>
        </AdminLayout>
    )
}

export default EditProject

export const getServerSideProps: GetServerSideProps = requireAuthentication(
    async ({ params }) => {
        const res = await api().get(`api/projects/${params?.pid}`)
        const project = res.data

        // Pass post data to the page via props
        return { props: { project } }
    }
)
