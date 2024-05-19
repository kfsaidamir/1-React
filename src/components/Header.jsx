import { Container, Flex, Text, Image, Box } from "@chakra-ui/react";
import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
const Header = () => {
  return (
    <Box>
      <Container maxW={"container.xl"}  bgColor={"#0E0E18"}>
        <Box
        w={"90%"}
        margin={"0 auto"}
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"center"}
        >
          <Flex align={"center"} margin={"10px"} gap={"20px"}>
            <Image src="https://master-klass.vercel.app/logo.png"></Image>
            <Text color={"gray"} fontSize={"12px"}>
              3 yildan ortiq tajribaga ega <br /> grafik dizayner
            </Text>
          </Flex>
          <Box>
            <Flex alignItems={"center"}>
              <Box>
                <Text color={"#414157"} fontSize={"12px"} as={"span"}>
                  Biz bilan bog’laning:
                </Text>
                <Text color={"white"} fontSize={"14px"} fontWeight={"400"}>
                  +998 99 821 33 91
                </Text>
              </Box>
              <IoIosPhonePortrait color={"#fff"} fontSize={"24px"} />
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
