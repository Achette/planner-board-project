import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <Flex w="30rem">
      <FormControl>
        <Flex alignItems="center" flexDirection="column">
          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <FormLabel>full name</FormLabel>
            <Input
              type="text"
              id="full name"
              placeholder="your full name here"
              {...register("full name")}
              borderRadius="3.125rem"
              w="23.75rem"
              mb="1rem"
            />
          </Flex>

          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <FormLabel>e-mail</FormLabel>
            <Input
              type="email"
              id="email"
              placeholder="enter your best email"
              {...register("email")}
              borderRadius="3.125rem"
              w="23.75rem"
              mb="1rem"
            />
          </Flex>

          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <FormLabel>Country</FormLabel>
            <Input
              type="text"
              id="country"
              placeholder="your country"
              {...register("country")}
              borderRadius="3.125rem"
              w="23.75rem"
              mb="1rem"
            />
          </Flex>

          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <FormLabel>Profession</FormLabel>
            <Input
              type="text"
              id="profession"
              placeholder="enter your profession"
              {...register("profession")}
              borderRadius="3.125rem"
              w="23.75rem"
              mb="1rem"
            />
          </Flex>

          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              id="password"
              placeholder="enter a password"
              {...register("password")}
              borderRadius="3.125rem"
              w="23.75rem"
              mb="1rem"
            />
          </Flex>
        </Flex>
      </FormControl>
    </Flex>
  );
}
