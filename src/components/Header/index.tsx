import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ApiPlanner } from "../../pages/api/api";
import { theme } from "../../styles/theme";
import { getFullDate, getHour } from "../../utils/date";

export default function Header() {
  const [time, setTime] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");
  const [weather, setWeather] = React.useState({
    city: "",
    country: "",
    description: "",
    climate: "",
  });

  const [lat, setLat] = React.useState<number>(0);
  const [lon, setLon] = React.useState<number>(0);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });

    setDate(getFullDate());
    ApiPlanner.getWeather(lat, lon).then((res) => {
      setWeather({
        ...weather,
        city: res.name,
        country: res.sys.country,
        climate: res.weather[0].main,
        description: res.weather[0].description,
      });
    });
    setInterval(() => {
      setTime(getHour());
    }, 1000);
  }, [setTime, setDate, weather, lat, lon, setLat, setLon]);

  return (
    <Stack
      h="8.125rem"
      w="100%"
      bg={theme.colors.white[100]}
      display="flex"
      justifyContent="center"
      boxShadow="0px 4px 24px rgba(168, 168, 168, 0.25)"
    >
      <HStack justifyContent="space-between">
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
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          color={theme.colors.gray[100]}
        >
          <Text fontWeight={700} fontSize="2rem">
            {time}
          </Text>
          <Text fontSize="1.25rem">{date}</Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          color={theme.colors.gray[100]}
        >
          <Text fontWeight={400} fontSize="1em">
            {weather.city} - {weather.country}
          </Text>
          <Text fontSize="1.5rem" fontWeight="700">
            {weather.climate}
          </Text>
          <Text fontSize="0.75rem">{weather.description}</Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          color={theme.colors.gray[100]}
        >
          <Text fontWeight={700} fontSize="2rem">
            {`<<<`}
          </Text>
          <Text fontSize="1.25rem">LOGOUT</Text>
        </Box>
      </HStack>
    </Stack>
  );
}
