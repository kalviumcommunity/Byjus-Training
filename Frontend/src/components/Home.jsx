import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/Background-img.png";
import externalLinkIcon from "../assets/ExternalLink.png";

function Home() {
    return (
        <>
            <Box width="100%" height="100%" overflow="hidden">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    objectFit="cover"
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    zIndex={-2}
                />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    backgroundColor="black"
                    opacity={0.7}
                    zIndex={-1}
                />
                <Flex
                    direction="row"
                    alignItems="center"
                    width="100%"
                    justifyContent="space-between"
                    padding="40px 0px"
                >
                    <Flex
                        direction="column"
                        paddingLeft="80px"
                        alignItems="center"
                    >
                        <Heading
                            size="lg"
                            marginBottom={0}
                            fontSize="32px"
                            fontFamily="Alconica"
                            color="white"
                        >
                            TranslateNow
                        </Heading>
                        <Text
                            fontSize="10px"
                            marginTop={0}
                            fontWeight="light"
                            color="white"
                            fontFamily="Aldrich"
                        >
                            Breaking Barriers, Connecting People!
                        </Text>
                    </Flex>
                    <Flex
                        direction="row"
                        fontSize="18px"
                        paddingRight="80px"
                        gap="40px"
                        alignItems="center"
                    >
                        <Link
                            to="/signIn"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            <Text fontFamily="Aldrich">Log In</Text>
                        </Link>
                        <Link
                            to="/signUp"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            <Text fontFamily="Aldrich">Register</Text>
                        </Link>
                    </Flex>
                </Flex>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    pt="150px"
                >
                    <Text
                        color="white"
                        fontSize="40px"
                        maxWidth="1048px"
                        textAlign="center"
                    >
                        Break language barriers effortlessly. Connect with
                        ease through our translating app.
                    </Text>
                    <Box>
                        <Link className="custom-link" to="/signUp">
                            <Button
                                w="200px"
                                h="52px"
                                margin="32px"
                                fontSize="20px"
                                fontWeight="bold"
                                borderRadius="4px"
                                border="none"
                                _hover={{
                                    cursor: "pointer",
                                    transform:"translateY(1px) translateX(-1px)"
                                }}
                            >
                                Get Started
                                <span>
                                    <Image
                                        src={externalLinkIcon}
                                        ml="10px"
                                        w="21px"
                                        h="21px"
                                    />
                                </span>
                            </Button>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}

export default Home;
