import {
    Center,
    Text,
} from "@chakra-ui/react";

export default function Title() {

    return (
        <Center pt={"20vh"}>
            <Text color={"white"} fontSize={"6xl"}>
                Hello I'm{" "}
                <Text as="span" color={"purple.600"}>
                    William{" "}
                </Text>
                Backend Web Developer
            </Text>
        </Center>
    );
}
