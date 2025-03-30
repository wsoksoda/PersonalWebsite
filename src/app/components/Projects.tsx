import React from 'react';
import {Card, Center, Grid, GridItem, Text} from "@chakra-ui/react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Projects() {
    return (
        <div>
            <Center pt={"20vh"}>
                <Text color={"white"} fontSize={"6xl"}>
                    Projects
                </Text>
            </Center>
            <Card.Root my={10} mx={20} variant='subtle'>
                <Grid templateColumns='repeat(2,1fr)' gap={20} mb={20} mx={20} pt={20}>
                    <GridItem colSpan={1}>
                        <Card.Title fontSize='4xl' mb={10} textDecoration='underline'>
                            Lego Website
                        </Card.Title>

                        <Link href={"https://github.com/wsoksoda/Lego"} target="_blank">
                            <Button colorPalette='purple'>
                                Repository
                            </Button>
                        </Link>
                    </GridItem>
                    <Card.Body>
                        <GridItem colSpan={1}>
                            <Card.Description fontSize='md'>
                                A Full Stack project complete with a Spring Boot, Kotlin Backend and a NextJS frontend.
                                This project takes a csv of every existing lego set produced and allows you to navigate
                                through a
                                pageable
                                website displaying all of them. Learn more about a specific set through the info button
                                or
                                search
                                for your favorite
                                set.
                            </Card.Description>
                        </GridItem>
                    </Card.Body>
                </Grid>
            </Card.Root>
            <Card.Root my={10} mx={20} variant='subtle'>
                <Grid templateColumns='repeat(2,1fr)' gap={20} mb={20} mx={20}
                      pt={20}>
                    <GridItem colSpan={1}>
                        <Card.Title fontSize='4xl' mb={10} textDecoration='underline'>
                            Workout Website
                        </Card.Title>
                        <Link href={"https://github.com/wsoksoda/Workout"} target="_blank">
                            <Button colorPalette='purple'>
                                Repository
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Card.Description fontSize='md'>
                            A Full Stack project complete with a Spring Boot, Kotlin Backend and a NextJS frontend.
                            This project allows you to create, edit, and view workouts. Personalize your plan to
                            what
                            you
                            see fit and ignore the need to remember or create workouts at the gym.
                        </Card.Description>
                    </GridItem>
                </Grid>
            </Card.Root>
        </div>
    );
}