import { Box, Heading, Grid, GridItem, Flex } from "@chakra-ui/react";
import languages from "./languages";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const OutputLanguage = () => {
  const handleLanguageSelect = (languageName) => {
    const selectedLanguage = languages.find(
      (language) => language.name === languageName
    );

    // Store the selected language code in localStorage
    localStorage.setItem(
      "selectedOutputLanguage",
      selectedLanguage ? selectedLanguage.code : ""
    );
  };

  return (
    <Box p={4}>
      <NavBar />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        pt="100px"
      >
        <Heading
          as="h2"
          fontSize="32px"
          mb={2}
          color="white"
          fontFamily="Roboto"
        >
          Select the output language{" "}
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap="34px" pt="40px">
          {languages.map((language) => (
            <GridItem
              key={language.code}
              onClick={() => handleLanguageSelect(language.name)}
              cursor="pointer"
              mb={1}
            >
              <Link to="/translation" style={{ textDecoration: "none" }}>
                <Flex
                  w="240px"
                  h="50px"
                  bgColor="white"
                  borderRadius="10px"
                  alignItems="center"
                  justifyContent="center"
                  fontFamily="roboto"
                  color="black"
                  fontSize="24px"
                >
                  {language.name}
                </Flex>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default OutputLanguage;
