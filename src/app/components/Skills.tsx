import React from 'react';
import {
    Center, Grid,
    Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Skills() {
    return (
        <div>
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
        </div>
    );
}
