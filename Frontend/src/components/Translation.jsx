import { Flex, Heading, Image } from "@chakra-ui/react";
import NavBar from "./NavBar";
import microphone from "../assets/Microphone.png";
import swap from "../assets/swap.png";
import downButton from "../assets/downButton.png";
import "../translation.css";
import { useEffect, useState } from "react";

function Translation() {
    const [inputLanguage, setInputLanguage] = useState("");
    const [outputLanguage, setOutputLanguage] = useState("");

    useEffect(() => {
        setInputLanguage(localStorage.getItem("selectedInputLanguage"));
        setOutputLanguage(localStorage.getItem("selectedOutputLanguage"));
    }, []);

    return (
        <>
            <NavBar />
            <Flex
                flexDir="column"
                justifyContent="flex-start"
                h="84vh"
                w="100%"
            >
                <Flex justifyContent="center" alignItems="center" w="100%">
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="50%"
                        backgroundColor="white"
                        h="60px"
                        w="60px"
                        margin="12px"
                        _hover={{
                            cursor: "pointer",
                        }}
                    >
                        <Image h="32px" w="32px" src={microphone} />
                    </Flex>
                </Flex>
                <Flex
                    h="90%"
                    w="100%"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Flex
                        h="100%"
                        w="40%"
                        backgroundColor="azure"
                        borderRadius="8px"
                        flexDir="column"
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <Flex
                            h="60px"
                            w="100%"
                            backgroundColor="azure"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="8px"
                        >
                            <Heading color="#262626">{inputLanguage}</Heading>
                            <Image
                                h="18px"
                                w="18px"
                                margin="0px 8px"
                                src={downButton}
                                _hover={{
                                    cursor: "pointer",
                                }}
                            />
                        </Flex>
                        <textarea className="textArea"></textarea>
                    </Flex>
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="8px"
                        h="48px"
                        w="48px"
                        backgroundColor="white"
                        margin="24px"
                        _hover={{
                            cursor: "pointer",
                        }}
                    >
                        <Image h="28px" w="28px" src={swap} />
                    </Flex>
                    <Flex
                        h="100%"
                        w="40%"
                        backgroundColor="azure"
                        borderRadius="8px"
                        flexDir="column"
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <Flex
                            h="60px"
                            w="100%"
                            backgroundColor="azure"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="8px"
                        >
                            <Heading color="#262626">{outputLanguage}</Heading>
                            <Image
                                h="18px"
                                w="18px"
                                margin="0px 8px"
                                src={downButton}
                                _hover={{
                                    cursor: "pointer",
                                }}
                            />
                        </Flex>
                        <textarea className="textArea"></textarea>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default Translation;
