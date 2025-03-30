"use client";
import React from 'react';

import {
    Box,
    VStack,
} from "@chakra-ui/react";

import Title from "@/app/components/Title";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Socials from "@/app/components/Socials";

export default function Home() {

    return (
        <VStack bgColor={"black"}>
            <Box height={"calc#=(100%)"}>
                <Title/>
                <Skills/>
                <Projects/>
                <Socials/>
            </Box>
        </VStack>
    );
}
