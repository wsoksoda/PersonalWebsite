import {Button, Center, Grid, Text} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function Socials() {
    return (
        <div>
            <Center pt={"20vh"}>
                <Text color={"white"} fontSize={"6xl"}>
                    Socials
                </Text>
            </Center>
            <Center>
                <Grid templateColumns="repeat(2, 1fr)" gap={6} m={6}>
                    <Link href={"https://www.linkedin.com/in/william-soksoda/"} target="_blank">
                        <Image
                            src="/linkedIn.png"
                            alt="LinkedIn"
                            width={100}
                            height={100}
                        />
                    </Link>
                    <Link href={"https://github.com/wsoksoda"} target="_blank">
                        <Image src="/github.png" alt="Github" width={100} height={100}/>
                    </Link>
                </Grid>
            </Center>
            <Center m={6}>
                <Link href={"/resume"}>
                    <Button colorPalette='gray' variant='surface'>
                        View My Resume
                    </Button>
                </Link>
            </Center>
            <Center m={6}>
                <Link href={"https://github.com/wsoksoda/PersonalWebsite"} target="_blank">
                    <Button colorPalette='gray' variant='surface'>
                        Check out the source code for this project
                    </Button>
                </Link>
            </Center>
        </div>
    )
}