import { VStack, HStack, Text, Heading, Container, Image, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Social = (props) => {
    return ( 
        <Box w={6} h={6}>
            <a href={props.link}>
                <Image
                    boxSize="100%"
                    objectFit="cover"
                    src={props.src}
                ></Image>
            </a>
        </Box>
    )
}


const Intro = () => {
    return (
        <Container maxW="container.sm" h="100vh" color="gray.100">
            <VStack
                w="full"
                h="full"
                p={15}
                spacing={0}
                paddingTop="50%"
                alignItems="flex-start"
            >   
                <motion.div
                    animate={{
                        opacity: [0, 1]
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 1.25
                    }}
                >
                    <Heading fontSize='2xl'>
                        AKSHAT AGRAWAL
                    </Heading>
                    <Text py={4} fontSize='xl'>
                        Exploring new ideas across a broad range of interests from Web3 to Enterprise SaaS to Climate. Most recently I was a product manager at Skyflow, a startup building an API for data privacy. Prior to that, I held product and engineering roles at Google. Reach out at one of the links below to chat!
                    </Text>
                </motion.div>
                <motion.div
                    animate={{ 
                    x: [-100, 0],
                    opacity: [0, 1] 
                    }}
                    transition={{
                    delay: 1.5,
                    x: { type: "spring", stiffness: 1 },
                    default: { duration: 0.3 },
                    }}
                >
                    <HStack
                        w="full"
                        py={4}
                        spacing={5}
                    >
                        <Social src="/linkedin.png" link="https://www.linkedin.com/in/akshatag"></Social>
                        <Social src="/twitter.png" link="https://www.twitter.com/akshatag77"></Social>
                        <Social src="/github.png" link="https://www.github.com/akshatag"></Social>
                        <Social src="/cv.png" link="cv.png"></Social>
                    </HStack>
                </motion.div>
            </VStack>
        </Container>
    )
}

export default Intro;