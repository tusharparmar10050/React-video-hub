import { Img } from '@chakra-ui/image';
import { Box, Container, Heading, Stack, Text} from '@chakra-ui/layout';
import { auto } from '@popperjs/core';
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    pos: "absolute",
    left: "40%",
    top: "45%",
    transForm: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "2",

}

const Home = () => {
    return <Box>
        <MyCarousel />
        <Container maxW={'container.lg'} minH={'100vh'} p='16'>
            <Heading textTransform={"uppercase"} py='2' w={"fit-content"} borderBottom={"2px"} m={auto}>
                Services
            </Heading>
            <Stack h='full' p={'16'} alignItems={'center'} direction={['column', 'row']}>
                <Img src={img5} h={['40', '300']} filter={"hue-rotate(-130deg)"} />
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['2', '8']} textAlign={'center'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
                    tempora deleniti quod, est eos veniam autem asperiores rem, nam
                    laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
                    at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
                    sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
                    Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
                    modi soluta ullam voluptatum unde repellat in molestias quod?
                    Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
                    velit culpa maiores.
                </Text>

            </Stack>
        </Container>
    </Box>;
};
const MyCarousel = () => (
    <Carousel authoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w='full' h={'100vh'}>
            <Img src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch The Future
            </Heading>

        </Box>

        <Box w={'full'} h={'100vh'}>
            <Img src={img2} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Future Is Gaming
            </Heading>

        </Box>

        <Box w={'full'} h={'100vh'}>
            <Img src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming On Console
            </Heading>

        </Box>

        <Box w={'full'} h={'100vh'}>
            <Img src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night View Is Cool
            </Heading>

        </Box>

    </Carousel>
)

export default Home;
