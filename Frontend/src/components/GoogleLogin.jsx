import { Flex, Text, Image } from "@chakra-ui/react";
import googleLogo from "../assets/GoogleLogo.png";
import { useGoogleLogin } from "@react-oauth/google";



const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI

export const GoogleButton = () => {


    const handleLogin = useGoogleLogin({
        onSuccess: (res) => {
            fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
                headers: {
                    Authorization: `Bearer ${res.access_token}`,
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Failed to retrieve user details.");
                    }
                    return response.json();
                })
                .then((userData) => {
                    localStorage.setItem(
                        "userName",
                        userData ? userData.name : ""
                    );
                    localStorage.setItem(
                        "userEmail",
                        userData ? userData.email : ""
                    );
                    localStorage.setItem(
                        "userImg",
                        userData ? userData.picture : ""
                    );

                    setTimeout(() => {
                        const redirect_uri = REDIRECT_URI;
                        window.location.href = redirect_uri;
                    }, 3000)
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    });

    return (
        <Flex
            onClick={() => {
                handleLogin();
            }}
            alignItems="center"
            justifyContent="space-between"
            backgroundColor="white"
            height="44px"
            width="260px"
            borderRadius="4px"
            border="1px solid #cfcfcf"
            boxShadow="-2px 4px 6px rgba(0, 0, 0, 0.5)"
            _hover={{
                cursor: "pointer",
            }}
            _active={{
                boxShadow: "-0px 2px 6px rgba(0, 0, 0, 0.5)",
                transform: "translateY(1px) translateX(-1px)",
            }}
        >
            <Image
                marginLeft="26px"
                src={googleLogo}
                height="32px"
                width="32px"
            />
            <Text
                marginRight="28px"
                color="#4A4A4A"
                className="x-small"
                fontWeight="bold"
            >
                Continue with Google
            </Text>
        </Flex>
    );
};
