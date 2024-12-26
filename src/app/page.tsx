"use client";

import {
    ChakraProvider,
    Center,
    Text,
    Box,
    Button,
    Grid, GridItem, VStack
} from "@chakra-ui/react";

import {ArrowDownIcon} from "@chakra-ui/icons";

import Link from "next/link";
import Image from "next/image";
import {useRef} from "react";

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
        <ChakraProvider>
            <VStack bgColor={"black"}>
                <Box height={"100vh"}>
                    <Center pt={"20vh"}>
                        <Text color={"white"} fontSize={"6xl"}>
                            Hello I'm{" "}
                            <Text as="span" color={"blue"}>
                                William{" "}
                            </Text>
                            Backend Web Developer
                        </Text>
                    </Center>
                    <Center mt={10}>
                        <Text color={"white"} fontSize={"4xl"}>
                            Skills
                        </Text>
                    </Center>
                    <Center>
                        <Grid templateColumns="repeat(5, 1fr)" gap={6} m={6}>
                            <Image
                                src="/keycloak.png"
                                alt="Keycloak"
                                width={100}
                                height={100}
                            />
                            <Image src="/kotlin.png" alt="Kotlin" width={100} height={100}/>
                            <Image
                                src="/kubernetes.png"
                                alt="Kubernetes"
                                width={100}
                                height={100}
                            />
                            <Image src="/react.png" alt="React" width={100} height={100}/>
                            <Image src="/spring.png" alt="Spring" width={100} height={100}/>
                        </Grid>
                    </Center>

                    <Center>
                        <Button onClick={handleScrollToWork}>
                            View my Projects <ArrowDownIcon ml={"1"}/>
                        </Button>
                    </Center>
                </Box>
                <Box height={"100%"} ref={scrollToWork}>
                    <Center pt={"20vh"}>
                        <Text color={"white"} fontSize={"6xl"}>
                            Projects
                        </Text>
                    </Center>
                    <Grid templateColumns='repeat(2,1fr)' templateRows='repeat(2, 1fr)' gap={20} mb={20} mx={20}
                          pt={20}>
                        <GridItem colSpan={1}>
                            <Text fontSize='4xl' color='white' mb={10}>
                                Lego Website
                            </Text>
                            <Link href={"https://github.com/wsoksoda/Lego"}>
                                <Button>
                                    Repository
                                </Button>
                            </Link>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Text color='white'>
                                A Full Stack project complete with a Spring Boot, Kotlin Backend and a NextJS frontend.
                                This project takes a csv of every existing lego set produced and allows you to navigate
                                through a
                                pageable
                                website displaying all of them. Learn more about a specific set through the info button
                                or
                                search
                                for your favorite
                                set.
                            </Text>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Text color='white'>
                                A Full Stack project complete with a Spring Boot, Kotlin Backend and a NextJS frontend.
                                This project allows you to create, edit, and view workouts. Personalize your plan to
                                what
                                you
                                see fit and ignore the need to remember or create workouts at the gym.
                            </Text>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Text fontSize='4xl' color='white' mb={10}>
                                Workout Website
                            </Text>
                            <Link href={"https://github.com/wsoksoda/Workout"}>
                                <Button>
                                    Repository
                                </Button>
                            </Link>
                        </GridItem>
                    </Grid>
                    <Center pt={6}>
                        <Button onClick={handleScrollToSocials}>
                            Socials <ArrowDownIcon ml={"1"}/>
                        </Button>
                    </Center>
                </Box>
                <Box height={'100vh'}/>
                <Box height={"100vh"} ref={scrollToSocials}>
                    <Center pt={"20vh"}>
                        <Text color={"white"} fontSize={"6xl"}>
                            Socials
                        </Text>
                    </Center>
                    <Center>
                        <Grid templateColumns="repeat(2, 1fr)" gap={6} m={6}>
                            <Link href={"https://www.linkedin.com/in/william-soksoda/"}>
                                <Image
                                    src="/linkedIn.png"
                                    alt="LinkedIn"
                                    width={100}
                                    height={100}
                                />
                            </Link>
                            <Link href={"https://github.com/wsoksoda"}>
                                <Image src="/github.png" alt="Github" width={100} height={100}/>
                            </Link>
                        </Grid>
                    </Center>
                    <Center m={6}>
                        <Link href={"/resume"}>
                            <Button>
                                View My Resume
                            </Button>
                        </Link>
                    </Center>
                    <Center m={6}>
                        <Link href={"https://github.com/wsoksoda/PersonalWebsite"}>
                            <Button>
                                Check out the source code for this project
                            </Button>
                        </Link>
                    </Center>

                </Box>
            </VStack>

        </ChakraProvider>
    );
}
