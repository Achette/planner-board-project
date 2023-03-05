import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
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
        <Text marginBottom="3rem" textAlign="center">
          Please, register to access Weekly Planner
        </Text>
        <Box w="30rem">
          <Form />
        </Box>
      </Flex>
      <Box flex={1} h="100vh">
        <BackgroundImage />
      </Box>
    </Box>
  );
}
