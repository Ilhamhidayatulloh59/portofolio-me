import { Flex } from "@chakra-ui/react"
import { SosialBtn } from "./sosialBtn"
import { FaDiscord, FaInstagram, FaGithub } from "react-icons/fa6";

export const Contact = () => {
    return (
        <Flex gap={"10px"} flexWrap={"wrap"}>
            <SosialBtn 
                desc="Github" 
                Icon={FaGithub} 
                delay={0.5} 
            />
            <SosialBtn 
                desc="Discord" 
                Icon={FaDiscord} 
                color="teal" 
                delay={0.25}
            />
            <SosialBtn 
                desc="Instagram" 
                Icon={FaInstagram} 
                color="pink"
            />
        </Flex>
    )
}