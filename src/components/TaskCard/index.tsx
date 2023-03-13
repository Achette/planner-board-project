import { Box, Button, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

export const TaskCard = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      marginTop="1.5rem"
      paddingLeft="0.5rem"
    >
      <Box
        w="5.25rem"
        h="5.25rem"
        bg={theme.colors.week.monday}
        borderRadius="0.75rem"
        color={theme.colors.black}
        fontSize="1rem"
        fontWeight={600}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        10:30
      </Box>
      <Box
        h="5.25rem"
        w="32rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        color={theme.colors.black}
        border="1px solid #FFFFFF"
        borderLeft={`1rem solid ${theme.colors.week.monday}`}
        marginLeft="1rem"
        paddingLeft="0.75rem"
        borderRadius="1rem"
        bg="linear-gradient(112.83deg, rgba(228, 240, 248, 0.42) 0%, rgba(255, 255, 255, 0.336) 110.84%)"
        boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02"
        backdropFilter="blur(10.5px)"
      >
        <Box>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure et
            nihil maxime repellat. Impedit animi doloremque inventore aperiam,
            nulla, deserunt.
          </Text>
        </Box>
        <Box
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Button
            h="1.25rem"
            w="2.75rem"
            fontSize="0.75rem"
            fontWeight="600"
            color={theme.colors.white[100]}
            bg={theme.colors.blue}
          >
            Edit
          </Button>
          <Button
            h="1.25rem"
            w="2.75rem"
            fontSize="0.75rem"
            fontWeight="600"
            color={theme.colors.white[100]}
            bg={theme.colors.week.monday}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
