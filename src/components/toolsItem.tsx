import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface ToolsProps {
  desc: string;
  src: string;
}

export const ToolsItem: React.FC<ToolsProps> = ({ desc, src }) => {
  return (
    <Flex
      alignItems={"center"}
      gap={"8px"}
      m={"0 10px"}
      bgColor={"rgba(255,255,255,0.3)"}
      padding={"5px 20px"}
      borderRadius={"100px"}
      color={useColorModeValue("black", "white")}
      _hover={{
        bgColor: "transparent",
        color: useColorModeValue("white", "black"),
        border: "1px solid rgba(255,255,255,0.3)",
        cursor: "pointer",
      }}
    >
      <Image
        src={src}
        h={{ base: 5, sm: 7, md: 8 }}
        w={{ base: 5, sm: 7, md: 8 }}
      />
      <Text
        fontWeight={"bold"}
        fontSize={{ md: "16px", sm: "14px", base: "12px" }}
      >
        {desc}
      </Text>
    </Flex>
  );
};
