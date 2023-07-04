import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import externalLinkIcon from "../assets/ExternalLink.png"
import NavBar from "./NavBar";

function Home() {
  return (
    <>
      <Box width="100%" height="100%" overflow="hidden">
       
          {" "}
          <Flex
            direction="row"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
           <NavBar/>
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
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Text fontFamily="Aldrich">Register</Text>
              </Link>
            </Flex>
          </Flex>
          <Box
            display="flex"
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
              Break language barriers effortlessly. Connect with ease through
              our translating app.
            </Text>
            <Box>
              <Link
                className="custom-link"
                to="/register"
              >
                <Button
                  w="200px"
                  h="52px"
                  fontSize="20px"
                  fontWeight="bold"
                  border="none"
                >
                  Get Started
                  <span>
                    <Image src={externalLinkIcon} ml="10px" w="21px" h="21px" />
                  </span>
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>

    </>
  );
}

export default Home;
