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
                        src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/nextjs-icon.svg"
                        desc="Next js"
                    />
                    <ToolsItem 
                        src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/tailwindcss-icon.svg"
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