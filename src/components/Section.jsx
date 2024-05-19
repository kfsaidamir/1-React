import React from "react";
import { Box, Container, Flex, Text, Button } from "@chakra-ui/react";
import { FiPocket } from "react-icons/fi";
import { LuDollarSign } from "react-icons/lu";

const Section = () => {
  return (
    <>
      <Container w={"containerxl"} h={"20vh"} bgColor={"#0E0E18"}>
        <Box
          w={"89%"}
          h={"20vh"}
          margin={"0 auto"}
          paddingTop={"10px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Flex alignItems={"center"} gap={"10px"} marginBottom={"20px"}>
              <FiPocket color={"white"} fontSize={"25px"} />
              <Text
                color={"white"}
                fontSize={"18px"}
                fontWeight={"400"}
                letterSpacing={"1px"}
              >
                Grafik dizayn qanday sohaligini tushunib olasiz;
              </Text>
            </Flex>

            <Flex alignItems={"center"} gap={"10px"} marginBottom={"20px"}>
              <FiPocket color={"white"} fontSize={"25px"} />
              <Text color={"white"} fontSize={"18px"} letterSpacing={"1px"}>
                Fotoshopda ilk ishlaringizni qila olasiz;
              </Text>
            </Flex>

            <Flex alignItems={"center"} gap={"10px"}>
              <FiPocket color={"white"} fontSize={"25px"} />
              <Text color={"white"} fontSize={"18px"} letterSpacing={"1px"}>
                Grafik dizayn orqali daromad qilish yo’llarini o’rganib olasiz.
              </Text>
            </Flex>
          </Box>

          <Box w={"25%"} padding={"5px"}>
            <Box display={"flex"}  alignItems={"center"} gap={"30px"}  justifyContent={"end"} >
              <LuDollarSign color={"#63CDF6"} fontSize={"24px"} />
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Text fontSize={"24px"} fontWeight={"300"} color={"white"}>
                  {" "}
                  <del>300.000 SO'M</del>{" "}
                </Text>
                <Text
                  textTransform={"uppercase"}
                  color={"#45CCFF"}
                  fontSize={"24px"}
                  fontWeight={"700"}
                >
                  Bepul
                </Text>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"end"}>
              <Button _hover={{bg:"#33ccff"}}  w={"55%"} color={"white"} fontSize={"16px"}  borderRadius={"30px"} padding={"10px 15px"} bgColor={"#45CCFF"} marginTop={"10px"} >
                ISHTIROK ETISH
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Section;
