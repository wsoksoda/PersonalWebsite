'use client'
import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {Box, Button, Center, ChakraProvider} from "@chakra-ui/react";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const Resume: React.FC = () => (
    <ChakraProvider>
        <Box bgColor={"black"} height={"100vh"}>
            <Link href={"./"}>
            <Button>
                Return
            </Button>
            </Link>
            <Center pt={20}>
                <Document file="/William_Soksoda_Resume.pdf">
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
                </Document>
            </Center>
        </Box>
    </ChakraProvider>
);

export default Resume;

