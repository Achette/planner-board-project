import { Box, HStack } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

export const WeekBar = () => {
  return (
    <HStack color={theme.colors.black} padding="0 0.5rem">
      <Box
        bg={theme.colors.white[100]}
        border={`0.5px solid ${theme.colors.gray[50]}`}
        w="6rem"
        h="2rem"
        borderRadius="0.5rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Time
      </Box>
      <Box
        bg={theme.colors.week.monday}
        w="16rem"
        h="2rem"
        borderRadius="0.5rem 0.5rem 0 0"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        paddingLeft="0.5rem"
        cursor="pointer"
      >
        Monday
      </Box>
      <Box
        bg={theme.colors.week.tuesday}
        w="16rem"
        h="2rem"
        borderRadius="0.5rem 0.5rem 0 0"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        paddingLeft="0.5rem"
        cursor="pointer"
      >
        Tuesday
      </Box>
      <Box
        bg={theme.colors.week.wednesday}
        w="16rem"
        h="2rem"
        borderRadius="0.5rem 0.5rem 0 0"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        paddingLeft="0.5rem"
        cursor="pointer"
      >
        Wednesday
      </Box>
      <Box
        bg={theme.colors.week.thursday}
        w="16rem"
        h="2rem"
        borderRadius="0.5rem 0.5rem 0 0"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        paddingLeft="0.5rem"
        cursor="pointer"
      >
        Thursday
      </Box>
      <Box
        bg={theme.colors.week.friday}
        w="16rem"
        h="2rem"
        borderRadius="0.5rem 0.5rem 0 0"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        paddingLeft="0.5rem"
        cursor="pointer"
      >
        Friday
      </Box>
      <Box
        bg={theme.colors.week.saturday}
        w="16rem"
        h="2rem"
        borderRadius="0.5rem 0.5rem 0 0"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        paddingLeft="0.5rem"
        cursor="pointer"
      >
        Saturday
      </Box>
      <Box
        bg={theme.colors.week.sunday}
        w="16rem"
        h="2rem"
        borderRadius="0.5rem 0.5rem 0 0"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        paddingLeft="0.5rem"
        cursor="pointer"
      >
        Sunday
      </Box>
    </HStack>
  );
};
