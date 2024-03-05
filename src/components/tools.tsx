import { Flex, Text, useColorModeValue } from "@chakra-ui/react"
import Marquee from "react-fast-marquee";
import { ToolsItem } from "./toolsItem";

export const Tools = () => {
    return (
        <Flex 
            direction={"column"} 
            alignItems={"center"}
            padding={{ 
                xl:'0px 70px 70px', 
                md: '0px 60px 60px', 
                sm: '0px 50px 50px', 
                base: '0px 40px 40px' 
            }}
            gap={"20px"}
        >
            <Text 
                color={useColorModeValue("white", "black")}
                fontSize={{ md: "24px", sm: "24px", base: "20px"}}
                fontWeight={"bold"}
            >Tools And Skills</Text>
            <Flex 
                w={"100%"}
            >
                <Marquee pauseOnHover={true}>
                    <ToolsItem 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                        desc="Node js"
                    />
                    <ToolsItem 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        desc="Javascript"
                    />
                    <ToolsItem 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                        desc="Typescript"
                    />
                    <ToolsItem 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                        desc="React js"
                    />
                    <ToolsItem 
                        src="https://camo.githubusercontent.com/b05ddbfbaa85c1b814c44a6853f95899cf7f7a0f68ed9d4de9ab8e8b60f5608a/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6e6578746a732d322e737667"
                        desc="Next js"
                    />
                    <ToolsItem 
                        src="https://camo.githubusercontent.com/0568e2de313626b2bd9b96f326941b012d45e9a4db1a23aa78bd8036207e57f8/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667"
                        desc="Tailwind CSS"
                    />
                    <ToolsItem 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                        desc="My SQL"
                    />
                    <ToolsItem 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        desc="HTML5"
                    />
                    <ToolsItem 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        desc="CSS"
                    />
                </Marquee>
            </Flex>
        </Flex>
    )
}