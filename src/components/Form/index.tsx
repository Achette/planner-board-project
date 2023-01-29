import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { userData } from "../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormRegisterSchema } from "../../validation/FormSchemaValidation";
import { ApiPlanner } from "../../pages/api/api";
import { useRouter } from "next/router";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<userData>({ resolver: yupResolver(FormRegisterSchema) });

  const toast = useToast();
  const router = useRouter()

  const onFormSubmit: SubmitHandler<userData> = async (data) => {
    try {
      await ApiPlanner.create(data);
      toast({
        title: "Saved!.",
        description: "Successfully registered user!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      router.push("/")
    } catch (e) {
      toast({
        title: "Error!",
        status: "error",
        description: "Unable to register user.",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };

  return (
    <Flex w="30rem">
      <FormControl>
        <Flex flexDirection="column">
          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <FormLabel>full name</FormLabel>
            <Input
              type="text"
              id="fullname"
              placeholder="your full name here"
              {...register("fullname")}
              borderRadius="3.125rem"
              w="23.75rem"
              borderColor={errors.fullname?.message ? "red.500" : "current"}
            />
          </Flex>
          <Text
            color="red.500"
            fontSize="12"
            pl="105px"
            mb="0.5rem"
            mt="0.25rem"
          >
            {errors.fullname?.message}
          </Text>

          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <FormLabel>e-mail</FormLabel>
            <Input
              type="email"
              id="email"
              placeholder="enter your best email"
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
            <FormLabel>Country</FormLabel>
            <Input
              type="text"
              id="country"
              placeholder="your country"
              {...register("country")}
              borderRadius="3.125rem"
              w="23.75rem"
              borderColor={errors.country?.message ? "red.500" : "current"}
            />
          </Flex>

          <Text
            color="red.500"
            fontSize="12"
            pl="105px"
            mb="0.5rem"
            mt="0.25rem"
          >
            {errors.country?.message}
          </Text>

          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <FormLabel>Profession</FormLabel>
            <Input
              type="text"
              id="profession"
              placeholder="enter your profession"
              {...register("profession")}
              borderRadius="3.125rem"
              w="23.75rem"
              borderColor={errors.country?.message ? "red.500" : "current"}
            />
          </Flex>

          <Text
            color="red.500"
            fontSize="12"
            pl="105px"
            mb="0.5rem"
            mt="0.25rem"
          >
            {errors.profession?.message}
          </Text>

          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              id="password"
              placeholder="enter a password"
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

          <Flex w="100%" alignItems="center" justifyContent="center">
            <Checkbox mt="1rem" {...register("terms")}>
              <Text fontSize="medium">I agree with the privacy terms</Text>
            </Checkbox>
          </Flex>

          <Text
            color="red.500"
            fontSize="12"
            pl="120px"
            mb="0.5rem"
            mt="0.25rem"
          >
            {errors.terms?.message}
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
            Register
          </Button>

          <Link href={`/`}>
            <Button colorScheme="facebook" w="200px" borderRadius="3.125rem">
              Back
            </Button>
          </Link>
        </Stack>
      </FormControl>
    </Flex>
  );
}
