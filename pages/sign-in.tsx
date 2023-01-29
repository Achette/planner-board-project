import { Box, Center, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../public/logo.svg";

export default function SignIn() {
  return (
    <Center h="100vh" w="100%">
      <VStack border="1px" borderColor="gray.200" maxWidth="300px">
        <Box>
          <Image width="100" height="100" src={Logo} alt="Logotipo" />
          <Heading as="h2" size="xs" noOfLines={1}>
            Insira os dados para realizar seu cadastro
          </Heading>
          <label>Digite seu melhor E-mail</label>
          <Input />
        </Box>
      </VStack>
    </Center>
  );
}
