import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import NavBar from "./NavBar";
import microphone from "../assets/Microphone.png";
import swap from "../assets/swap.png";
import downButton from "../assets/downButton.png";
import "../translation.css";
import { useEffect, useState } from "react";
import languages from "./languages";

function Translation() {
    const [inputLanguage, setInputLanguage] = useState("");
    const [outputLanguage, setOutputLanguage] = useState("");
    const [inputCode, setInputCode] = useState("");
    const [outputCode, setOutputCode] = useState("");
    const [isMicOn, setMicOn] = useState(false);
    const [isILdropdownOpen, setIsILdropdownOpen] = useState(false);
    const [isOLdropdownOpen, setIsOLdropdownOpen] = useState(false);

    const toggleILdropdown = () => {
        setIsILdropdownOpen(!isILdropdownOpen);
    };

    const toggleOLdropdown = () => {
        setIsOLdropdownOpen(!isOLdropdownOpen);
    };

    useEffect(() => {
        setInputLanguage(localStorage.getItem("selectedInputLanguage"));
        setOutputLanguage(localStorage.getItem("selectedOutputLanguage"));
        setInputCode(localStorage.getItem("selectedInputCode"));
        setOutputCode(localStorage.getItem("selectedOutputCode"));
    }, []);

    const swapLanguages = () => {
        setInputLanguage(outputLanguage);
        setOutputLanguage(inputLanguage);
        setInputCode(outputCode);
        setOutputCode(inputCode);
    };

    const micTrigger = () => {
        setMicOn(!isMicOn);
    };


    const handleInputLanguageSelect = (languageCode, languageName) => {
        setInputLanguage(languageName);
        setInputCode(languageCode);
        toggleILdropdown();
    };

    const  handleOutputLanguageSelect = (languageCode, languageName) => {
        setOutputLanguage(languageName);
        setOutputCode(languageCode);
        toggleOLdropdown();
    }

    useEffect(() => {
        localStorage.setItem("selectedInputLanguage", inputLanguage);
        localStorage.setItem("selectedOutputLanguage", outputLanguage);
    }, [inputLanguage, outputLanguage]);

    useEffect(() => {
        localStorage.setItem("selectedInputCode", inputCode);
        localStorage.setItem("selectedOutputCode", outputCode);
    }, [inputCode, outputCode]);

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
                        backgroundColor={isMicOn ? "#C85252" : "white"}
                        h="60px"
                        w="60px"
                        margin="12px"
                        _hover={{
                            cursor: "pointer",
                        }}
                        onClick={micTrigger}
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
                            position="relative"
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
                                onClick={toggleILdropdown}
                            />
                            {isILdropdownOpen && (
                                <Box
                                    position="absolute"
                                    top="100%"
                                    left="50%"
                                    width="fit-content"
                                    maxHeight="200px"
                                    overflowY="auto"
                                    background="white"
                                    border="1px solid gray"
                                    borderRadius="2px"
                                    marginTop={2}
                                    padding={2}
                                    zIndex={1}
                                >
                                    {languages.map((language) => (
                                        <Box
                                            key={language.code}
                                            cursor="pointer"
                                            padding={2}
                                            _hover={{ background: "gray.200" }}
                                            onClick={() =>
                                                handleInputLanguageSelect(
                                                    language.code, language.name
                                                )
                                            }
                                        >
                                            {language.name}
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </Flex>
                        <textarea className="textArea"></textarea>
                    </Flex>
                    <Flex
                        onClick={swapLanguages}
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
                            position="relative"
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
                                onClick={toggleOLdropdown}
                            />
                            {isOLdropdownOpen && (
                                <Box
                                    position="absolute"
                                    top="100%"
                                    left="50%"
                                    width="fit-content"
                                    maxHeight="200px"
                                    overflowY="auto"
                                    background="white"
                                    border="1px solid gray"
                                    borderRadius="2px"
                                    marginTop={2}
                                    padding={2}
                                    zIndex={1}
                                >
                                    {languages.map((language) => (
                                        <Box
                                            key={language.code}
                                            cursor="pointer"
                                            padding={2}
                                            _hover={{ background: "gray.200" }}
                                            onClick={() =>
                                                handleOutputLanguageSelect(
                                                    language.code, language.name
                                                )
                                            }
                                        >
                                            {language.name}
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </Flex>
                        <textarea className="textArea"></textarea>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default Translation;
