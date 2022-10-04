import { Container, SimpleGrid, Box, Center, Heading } from '@chakra-ui/react';




const ProjectTile = (props: any) => {
    return (
        <Box as='button' h={200}>
            <a href={props.link}>
                <Center bg={props.bg} h="100%">
                    {props.name}
                </Center>
            </a>
        </Box>
    )
}


const Projects = () => {
    return (
        <Container maxW="container.sm" h="100vh" color="gray.100">
            <Heading fontSize='2xl'p={15}>
                PROJECTS
            </Heading>
            <SimpleGrid p={15} columns={{sm: 1, md: 2}} spacing={10}>
                <ProjectTile bg="blue.400" name="Zenn" link="https://zennjournal.vercel.app"></ProjectTile>
                <ProjectTile bg="tomato" name="NFTrees" link="https://github.com/akshatag/nftrees"></ProjectTile>
                <ProjectTile bg="teal" name="Tetris3D" link="https://github.com/akshatag/tetris-3d"></ProjectTile>
                <ProjectTile bg="blue.400" name="Pickup" link="https://devpost.com/software/pickup-0qtovx"></ProjectTile>
            </SimpleGrid>
        </Container>
    )
}

export default Projects;