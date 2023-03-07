import { Box } from "@chakra-ui/react";
import { WeekBar } from "../components";
import Header from "../components/Header";
import { theme } from "../styles/theme";


export default function Dashboard() {

    return(
        <Box bg={theme.colors.white[50]} h="100vh">
            <Header />
            <WeekBar />
        </Box>
    )
}

