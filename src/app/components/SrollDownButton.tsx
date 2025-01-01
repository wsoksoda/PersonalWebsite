import {
    Button,
    Center,
} from "@chakra-ui/react";
import {ArrowDownIcon} from "@chakra-ui/icons";

interface props {
    buttonText: string;
    handleScroll: () => void
}

export default function ScrollDownButton(props: props) {
    let buttonText = props.buttonText
    let handleScroll = props.handleScroll
    return (
        <Center pt={6}>
            <Button colorPalette='gray' variant='surface' onClick={handleScroll}>
                {buttonText} <ArrowDownIcon ml={"1"}/>
            </Button>
        </Center>
    );
}