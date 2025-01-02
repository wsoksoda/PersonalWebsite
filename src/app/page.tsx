"use client";

import {
    Box,
    VStack,
} from "@chakra-ui/react";

import {useRef} from "react";
import Title from "@/app/components/Title";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Socials from "@/app/components/Socials";
import ScrollDownButton from "@/app/components/SrollDownButton";

export default function Home() {
    const scrollToWork = useRef(null)
    const scrollToSocials = useRef(null)

    const handleScrollToWork = () => {
        // @ts-ignore
        scrollToWork.current.scrollIntoView({behavior: 'smooth'})
    }

    const handleScrollToSocials = () => {
        // @ts-ignore
        scrollToSocials.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <VStack bgColor={"black"}>
            <Box height={"100vh"}>
                <Title/>
                <Skills/>
                <ScrollDownButton buttonText={"View my Projects"} handleScroll={handleScrollToWork}/>
            </Box>
            <Box height={"100%"} ref={scrollToWork}>
                <Projects/>
                <ScrollDownButton buttonText={"Socials"} handleScroll={handleScrollToSocials}/>
            </Box>
            <Box height={'100vh'}/>
            <Box height={"100vh"} ref={scrollToSocials}>
                <Socials/>
            </Box>
        </VStack>
    );
}
