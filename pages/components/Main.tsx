import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { VStack, HStack, Text, Heading, Center, Container, Image, Box, Button, SimpleGrid } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'; 

const Social = (props: any) => {
    return ( 
        <Box w={5} h={5}>
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

const Project = (props: any) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
            <Box as='button' h={200} onClick={onOpen}>      
                <Center bg={props.bg} h="100%">
                    {props.name}
                </Center>
            </Box>

            <Modal size='lg' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{props.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Center w='100%' mb={3}>
                        <Image maxHeight='50vh' src={props.img}/>
                    </Center>
                    {props.desc}
                </ModalBody>

                <ModalFooter>
                    <a href={props.link}>
                        <Button mr={3}>
                            Try it
                        </Button>
                    </a>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


const ProjectTab = (props: any) => {
    return (
        <>
            <SimpleGrid p={15} columns={{sm: 1, md: 2}} spacing={10} marginBottom={200}>
                <Project 
                    bg="blue.400" 
                    name="Zenn"
                    img="Zenn.gif"
                    link="https://zennjournal.vercel.app/"
                    desc="Zenn is a meditative journaling app. As you write, each line will disappear allowing you to stay present instead of
                    focussing on what you have already written. At the end of each session, you will see everything that you wrote. Furthermore, Zenn 
                    uses LLMs to bring you the wisdom of prominent philosophers like the Buddha to assist with your thinking and writing."
                />

                <Project 
                    bg="tomato" 
                    name="NFTrees"
                    img="NFTrees.png"
                    link="https://github.com/akshatag/nftrees"
                    desc="NFTrees are an ERC-721 project. The idea was to test if NFTs could be dynamic and change over time. You start 
                    by getting an NFT of a seedling. By watering the seedling (i.e. invoking one of the contract methods) the seedling grows over time 
                    into a tree, and eventually bears fruit that you can harvest to create more trees. Feel free to deploy the contract and try it!"
                />

                <Project 
                    bg="teal" 
                    name="Tetris3D"
                    img="3DTetris.png"
                    link="https://github.com/akshatag/tetris-3d"
                    desc="Tetris but in 3D! Complete with a movable camera. I wrote this in Java and used LWJGL a long time ago and have not been 
                    able to get it compile since 2020 - but I swear it works! Please reach out ASAP if you get it to compile."
                />

                <Project 
                    bg="yellow.400" 
                    name="Pickup"
                    img="Pickup.jpeg"
                    link="https://devpost.com/software/pickup-0qtovx"
                    desc="Keep all your files safely on your local computer, but access them from anywhere 
                    using Pickup -- even if your computer is asleep! Kind of like the cloud, but cheaper and more secure."
                />
            </SimpleGrid>
        </>
    )
}

const CoachingTab = (props: any) => {
    return (
        <>
            <Text p={15}>
                I help people who are trying to break into product management, from new grads to people making a career switch. My style is to work with people over a longer period of time, from 
                finding and applying to the right PM jobs, to interview prep, to helping them in their first 6 months as a PM. If that sounds useful to you, get in touch! If you are just looking for a mock interview, 
                check out <a style={{color: 'teal'}} href="https://igotanoffer.com/">IGotAnOffer</a> or <a style={{color: 'teal'}} href="https://www.tryexponent.com/">Exponent</a>. 
            </Text>

            <Text p={15}>
                Some interview prep material I helped create and some testimonials: 
            </Text>

            <VStack
                spacing={5}
                marginBottom={500}
            >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XAJeXlY6w-c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7Hd_8nrNrZ0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HAAWCuJyatU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <Text pl={15}>
                    &quot;I came to Ash to help me break into FAANG after being in a few transition product management roles. Ash was extremely patient, 
                    knowledgeable about interviews, and suggested clear and actionable strategies after deeply listening to my thoughts and concerns. 
                    After working with Ash for a couple months, I was able to land my dream product management role at Meta.`&quot;` -- <a style={{color: 'teal'}} href="https://www.linkedin.com/in/jkoufopoulos/">Justin</a>, PM @ Meta
                </Text>
            </VStack>   
        </>
    )
}


const Main = () => {

    return (
        <Container maxW="container.sm" h="100vh" color="gray.100">
            <VStack w="full" p={15} spacing={0} paddingTop="25%" alignItems="flex-start">   
                <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 1.25 }}>
                    <Heading fontSize='2xl'>
                        AKSHAT AGRAWAL
                    </Heading>

                    <Text paddingTop={4} fontSize='xl'>
                        I&apos;m a student at Harvard Business School. Prior to HBS, I held product and engineering roles at Google and a few startups. At the moment, I&apos;m exploring next steps. I&apos;m primarily interested in climate and AI. Reach out to chat! 
                    </Text>
                </motion.div>
                
                <motion.div animate={{ x: [-100, 0], opacity: [0, 1] }} transition={{ delay: 1.5, x: { type: "spring", stiffness: 1 }, default: { duration: 0.3 } }}>
                    <HStack w="full" paddingTop={4} paddingBottom={6} spacing={5}>
                        <Social src="/linkedin.png" link="https://www.linkedin.com/in/akshatag"></Social>
                        <Social src="/twitter.png" link="https://www.twitter.com/akshatag77"></Social>
                        <Social src="/github.png" link="https://www.github.com/akshatag"></Social>
                        <Social src="/cv.png" link="resume.pdf"></Social>
                    </HStack>
                </motion.div>
            </VStack>

            <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 2.25 }}>
                <Tabs isFitted>
                    <TabList>
                        <Tab>Projects</Tab>
                        <Tab>PM Coaching</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <ProjectTab/>
                        </TabPanel>
                        <TabPanel>
                            <CoachingTab/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </motion.div>
        </Container>
    )
}

export default Main;