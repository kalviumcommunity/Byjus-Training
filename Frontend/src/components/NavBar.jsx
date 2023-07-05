import { Flex,Text,Heading ,Box } from "@chakra-ui/react";

function NavBar() {
  return (
    <Flex direction="column" paddingLeft="80px">
      <Box alignItems="center">
        <Heading
          size="lg"
          marginBottom={0}
          fontSize="32px"
          fontFamily="Aclonica"
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
      </Box>
    </Flex>
  );
}

export default NavBar;
