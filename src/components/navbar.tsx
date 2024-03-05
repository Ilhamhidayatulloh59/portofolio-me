import { Button, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import Animasi from "./animation"
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            setIsScrolled(scrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <Flex
            height={{ xl: "70px", md: "60px", sm: "50px" }}
            bgColor={
                useColorModeValue(
                    isScrolled ? "rgba(255, 255, 255, 0.36)" : "white", 
                    isScrolled ? "rgba(0, 0, 0, 0.36)" : "black"
                )
            }
            backdropFilter={isScrolled ? "blur(5px)" : "none"}
            pos="sticky"
            top="0px"
            zIndex={1}
            transition="background-color 0.3s ease, backdrop-filter 0.3s ease"
        >
            <Flex 
                flex={1}
                padding={{ xl:'20px 70px', md: '18px 60px', sm: '16px 50px', base: '14px 40px' }}
                alignItems={"center"}
                fontSize={{ xl: "24px", md: "20px", sm: "18px" }}
                fontWeight={"bold"}
            >
                <Animasi direction="left">
                    LOREMIPSUM
                </Animasi>
            </Flex>
            <Flex 
                flex={1} 
                padding={{xl:'20px 70px', md: '18px 65px', sm: '16px 25px'}}
                alignItems={"center"}
                justifyContent='end'
                gap={{base: "10px", sm: "20px", md: "30px"}}
                display={"flex"}
            >
                <Animasi direction="right">
                    <Text display={{ base: "none", sm: "inline" }} fontWeight={"bold"} >HOME</Text>
                </Animasi>
                <Animasi direction="right" delay={0.25}>
                    <Text display={{ base: "none", sm: "inline" }}>PROJECT</Text>
                </Animasi>
                <Animasi direction="right" delay={0.5}>
                    <Button bgColor={"transparent"} onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Animasi>
            </Flex>
        </Flex>
    )
}