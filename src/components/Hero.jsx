import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { CiClock1 } from "react-icons/ci";
import { HiOutlineLightningBolt } from "react-icons/hi";

const Hero = () => {
  const white = "white";
  const weight = "750";
  return (
    <Box
      position={"relative"}
      w={"100%"}
      h={"70vh"}
      bgImage={"url(public/bgck.png)"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
    >
      <Container w={"89%"} margin={"0 auto"} >
        <Box
          w={"35%"}
          h={"60vh"}
          position={"absolute"}
          bottom={"1%"}
          fontSize={"24px"}
        >
          <Flex justifyContent={"space-between"}>
            <Text
              bgColor={"#c9c1bf"}
              color={"#03030B"}
              borderRadius={"2px"}
              padding={"2px 5px"}
            >
              20-21-22-IYUN
            </Text>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Flex alignItems={"center"} gap={"10px"}>
                <Text color={"#5B6375"}>20:00</Text>
                <CiClock1 color={"#5B6375"} />
              </Flex>
              <Text
                backgroundColor={"#EF3833"}
                fontSize={"12px"}
                color={"#FFFFFF"}
                padding={"3px 10px"}
                borderRadius={"12px"}
              >
                ONLINE
              </Text>
            </Box>
          </Flex>

          <Box>
            <Text
              fontSize={"75px"}
              color={"#FFFFFF"}
              fontWeight={"800"}
              lineHeight={"80px"}
              marginTop={"30px"}
            >
              Grafik Dizayn
            </Text>
            <Text
              textTransform={"uppercase"}
              color={"white"}
              fontSize={"40px"}
              letterSpacing={"6px"}
              fontWeight={"200"}
            >
              Sohasiga Kirish
            </Text>
          </Box>

          <Flex alignItems={"center"} gap={"20px"} marginTop={"10px"}>
            <HiOutlineLightningBolt color={"#EF3833"} />
            <Box>
              <Text fontSize={"24px"} color={white}>
                Ismoil Mahmudjonovdan
              </Text>
              <Text fontSize={"24px"} color={white} fontWeight={weight}>
                Bepul Master-Klass
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box position={"relative"} w={"100%"} height={"70vh"}>
          <Text
            position={"absolute"}
            bottom={"0"}
            color={"#63CDF6"}
            fontSize={"22px"}
            fontWeight={"700"}
          >
            3 kunlik Master-Klassda siz:
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
