import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { BackgroundImage } from "../components";
import { loginUserData } from "../types";
import { FormLoginSchema } from "../validation/FormSchemaValidation";
import { ApiPlanner } from "./api/api";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginUserData>({ resolver: yupResolver(FormLoginSchema) });

  const onFormSubmit = React.useCallback( async(data: loginUserData) => {
    const isAuth = await ApiPlanner.getAllUser(data);
    console.log(isAuth);
  }, []);

/*   React.useEffect(() => {
    onFormSubmit({})
  }, [onFormSubmit]) */
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
          Please, login to access Weekly Planner
        </Text>
        <Box w="30rem">
          <FormControl>
            <Flex flexDirection="column">
              <Flex w="100%" alignItems="center" justifyContent="space-between">
                <FormLabel>e-mail</FormLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="enter your email"
                  {...register("email")}
                  borderRadius="3.125rem"
                  w="23.75rem"
                  borderColor={errors.email?.message ? "red.500" : "current"}
                />
              </Flex>
              <Text
                color="red.500"
                fontSize="12"
                pl="105px"
                mb="0.5rem"
                mt="0.25rem"
              >
                {errors.email?.message}
              </Text>

              <Flex w="100%" alignItems="center" justifyContent="space-between">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  placeholder="enter your password"
                  {...register("password")}
                  borderRadius="3.125rem"
                  w="23.75rem"
                  borderColor={errors.password?.message ? "red.500" : "current"}
                />
              </Flex>

              <Text
                color="red.500"
                fontSize="12"
                pl="105px"
                mb="0.5rem"
                mt="0.25rem"
              >
                {errors.password?.message}
              </Text>
            </Flex>
            <Stack
              direction="row"
              align="center"
              justifyContent="space-between"
              mt="1.5rem"
            >
              <Button
                colorScheme="purple"
                w="200px"
                borderRadius="3.125rem"
                onClick={() => handleSubmit(onFormSubmit)()}
                isLoading={isSubmitting}
              >
                Login
              </Button>

              <Link href={`/`}>
                <Button
                  colorScheme="facebook"
                  w="200px"
                  borderRadius="3.125rem"
                >
                  Back
                </Button>
              </Link>
            </Stack>
          </FormControl>
        </Box>
      </Flex>
      <Box flex={1} h="100vh">
        <BackgroundImage />
      </Box>
    </Box>
  );
}
