import React from "react";
import { Box, Container , Text } from "@chakra-ui/react";
import { CiReceipt } from "react-icons/ci";
import { Image } from "@chakra-ui/react";

const Main = () => {
  return (
    <>
      <Container w={"100%"} bgColor={"#0E0E18"} >
        <Box w={"89%"} margin={"0 auto"} paddingTop={"10%"}>
          <Box display={"flex"} alignItems={"center"}>
            <CiReceipt color={"white"} fontSize={"30px"} />
            <Box>
              <Image src="/Rectangle 4312.png"></Image>
            </Box>
          </Box>

          <Box>
          <Text fontSize={"38px"} letterSpacing={"1px"} color={"white"} fontWeight={"300"} >ISMOIL MAHMUDJONOV</Text>
          <Text fontSize={"38px"}  color={"white"} fontWeight={"700"} >HAQIDA</Text>
        </Box>


        <Box display={"flex"} alignItems={"center"} gap={"20px"} >
          <Box w={"28%"} h={"110px"} bgColor={"white"} >
            <Text color={"#3F4266"}  fontweight={"  500"} >Grafik dizayn sohasida 120 <br /> dan oshiq muvaffaqiyatli <br /> loyihalar.</Text>
          </Box>
          <Box w={"28%"} h={"110px"} bgColor={"white"} ></Box>
          <Box w={"28%"} h={"110px"} bgColor={"white"} ></Box>

        </Box>


        </Box>

     
       
      </Container>
    </>
  );
};

export default Main;
