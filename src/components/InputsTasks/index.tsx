import { Box, HStack, Input, Select } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

export const InputTask = () => {
  return (
    <HStack margin="2rem 1.5rem" color={`${theme.colors.black}`}>
      <Box display="flex">
        <Input
          bg={`${theme.colors.white[100]}`}
          border={`1px solid ${theme.colors.yellow}`}
          placeholder="type your task or issue"
          _placeholder={{ opacity: 0.6, color: `${theme.colors.black}` }}
        />

        <Select
          placeholder="Choose a day"
          bg={`${theme.colors.white[100]}`}
          border={`1px solid ${theme.colors.yellow}`}
          marginLeft="0.4rem"
        >
          <option value="option1">Monday</option>
          <option value="option2">Tuesday</option>
          <option value="option3">Wednesday 3</option>
          <option value="option3">Thursday</option>
          <option value="option3">Friday 3</option>
          <option value="option3">Saturday 3</option>
          <option value="option3">Sunday 3</option>
        </Select>

        <Input
          color={`${theme.colors.black}`}
          bg={`${theme.colors.white[100]}`}
          border={`1px solid ${theme.colors.yellow}`}
          marginLeft="0.4rem"
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />
      </Box>
    </HStack>
  );
};
