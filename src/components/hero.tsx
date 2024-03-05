import { Flex, Image, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react"
import Animasi from "./animation"
import { TypeAnimation } from "./type"
import { Contact } from "./contact"

export const Hero = () => {
    return (
        <Flex
            padding={{ xl:'70px', md: '60px', sm: '50px', base: '40px' }}
            color={"white"}
            flexDirection={{ xl: "row", md: "column", sm: "column", base: "column" }}
            gap={{ md: "30px", sm: "20px", base: "20px" }}
        >
            <Flex 
                flex={1} 
                flexDirection={"column"} 
                justifyContent={"center"}
                gap={"20px"}
                color={useColorModeValue("white", "black")}
            >
                <Animasi direction="left">
                    <Flex>
                        <Text 
                            fontSize={{ md: "36px", sm: "30px", base: "24px"}}
                            fontWeight={"bold"}
                            color={useColorModeValue("green.200", "green.100")}
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'green.500',
                                zIndex: -1,
                            }}
                        >
                            <TypeAnimation
                                sequence={["Hi, I'm Lorem Ipsum", "Hi, I'm Web Developer"]} 
                                delay={3000} />
                        </Text>
                        <Image src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" w={"6"} h={"6"} />
                    </Flex>
                </Animasi>
                <Animasi direction="left" delay={0.25}>
                    <Text 
                        fontSize={{ md: "32px", sm: "26px", base: "20px"}}
                        fontWeight={"bold"}
                    >
                        I'm a Full Stack Web Developer, WordPress Development & UI/UX Design
                    </Text>
                </Animasi>
                <Animasi direction="left" delay={0.5}>
                    <Text>
                        i'm from indonesia and i've been start working as a freelancer 1 years ago. <br /> Right now i'm looking forward to collaborate with you!
                    </Text>
                </Animasi>
                <Contact />
            </Flex>
            <Flex
                flex={1}
            >
                <Animasi direction="right">
                    <Image 
                        src="https://burst.shopifycdn.com/photos/bearded-young-man.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                        alt="man"
                        filter="grayscale(100%)"
                        borderEndEndRadius={{ md: "200px", sm: "140px", base: "100px"}}
                    />
                </Animasi>
            </Flex>
        </Flex>
    )
}