import React from "react";
import { Text, Stack, Box, Flex, Heading, Button } from "@chakra-ui/react";
import Head from "next/head";
import { BackgroundImage } from "../components";
import Link from "next/link";

export default function Home() {
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
          Please, register ou sign-in to continue
        </Text>
        <Box>
          <Stack direction="column" spacing={4} align="center">
            <Link href={`/register`}>
              <Button colorScheme="purple" w="370px" borderRadius="3.125rem">
                Register
              </Button>
            </Link>

            <Link href={`/login`}>
              <Button colorScheme="purple" w="370px" borderRadius="3.125rem">
                Login
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
