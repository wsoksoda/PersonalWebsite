'use client'
import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import {Box, Button, Center} from "@chakra-ui/react";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume: React.FC = () => (
        <Box bgColor={"black"} height={"100vh"}>
            <Link href={"./"}>
            <Button colorPalette={"purple"}>
                Return
            </Button>
            </Link>
            <Center pt={20}>
                <Document file="/William_Soksoda_Resume.pdf">
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
                </Document>
            </Center>
        </Box>
);

export default Resume;

