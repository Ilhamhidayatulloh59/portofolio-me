import { Button } from "@chakra-ui/react"
import React from "react"
import { IconType } from 'react-icons';
import Animasi from "./animation";

interface ISocialBtn {
    desc: string
    Icon: IconType
    color?: string
    delay?: number
}

export const SosialBtn:React.FC<ISocialBtn> = ({ desc, Icon, color="blue", delay=0 }) => {
    return (
        <Animasi direction="left" delay={delay}>
            <Button 
                size={{ base: "xs", sm: "sm", md: "sm"}}
                maxW={"120px"} 
                colorScheme={color}
                leftIcon={<Icon />}
            >
                {desc}
            </Button>
        </Animasi>
    )
}