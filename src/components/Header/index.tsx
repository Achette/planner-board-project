import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

export default function Header() {
  return (
    <Stack
      h="8.125rem"
      bg={theme.colors.white}
      display="flex"
      justifyContent="center"
      >
      <Box
        h="4rem"
        w="25rem"
        bg={theme.colors.black}
        borderRadius="0  0.875rem 0.875rem 0"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingLeft="1.5rem"
      >
        <Heading fontSize="1.375rem">Weekly Planner</Heading>
        <Text fontSize=".75rem" fontWeight="300">
          Use this planner to organize your daily issues.
        </Text>
      </Box>
    </Stack>
  );
}
