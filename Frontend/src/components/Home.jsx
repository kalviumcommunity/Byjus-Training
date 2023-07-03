import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Flex p={4}>
      <Box>Home</Box>
      <Box p={4}>
        <Link to="/signIn">SignIn</Link>
      </Box>
      <Box p={4}><Link to="/signIn">SignUp</Link></Box>
    </Flex>
  );
}

export default Home;
