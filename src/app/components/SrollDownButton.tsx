import {
    Center,
} from "@chakra-ui/react";
import {Button} from "@/components/ui/button";
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
            <Button colorPalette='purple' onClick={handleScroll}>
                {buttonText} <ArrowDownIcon ml={"1"}/>
            </Button>
        </Center>
    );
}