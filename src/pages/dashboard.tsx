import { Box } from "@chakra-ui/react";
import { InputTask, WeekBar } from "../components";
import Header from "../components/Header";
import { TaskCard } from "../components/TaskCard";
import { theme } from "../styles/theme";


export default function Dashboard() {

    return(
        <Box bg={theme.colors.white[50]} h="100vh">
            <Header />
            <InputTask />
            <WeekBar />
            <TaskCard />
        </Box>
    )
}

