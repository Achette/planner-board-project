import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { BackgroundImage, Form } from "../components";


export default function Register() {
  return (
    <Box display="flex">
      <Head>
        <title>Weekly Planner</title>
      </Head>
      <Flex
        flex={1}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        h="100vh"
      >
        <Heading fontWeight="100" fontSize="4rem" textAlign="center" top={0}>
          Welcome,
        </Heading>
        <Text marginBottom="10rem" textAlign="center">
          Please, register to access Weekly Planner
        </Text>
        <Box w="30rem">
        <Form />
          <Stack direction="row" align="center" justifyContent="space-between" mt="5rem">
            <Link href={`/register`}>
              <Button colorScheme="purple" w="200px" borderRadius="3.125rem">
                Register
              </Button>
            </Link>

            <Link href={`/`}>
              <Button colorScheme="facebook" w="200px" borderRadius="3.125rem">
                Back
              </Button>
            </Link>
          </Stack>
        </Box>
      </Flex>
      <Box flex={1} h="100vh">
        <BackgroundImage />
      </Box>
    </Box>
  );
}