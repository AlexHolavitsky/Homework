import {Box, Container, Text} from "@chakra-ui/react";
import ProductsList from "./ProductsList";

 function Main () {
    return (
        <Box as='main'>
        {/* <Container maxW={'container.lg'}> */}
           <Text as={'h1'} fontSize={'4xl'}> 
                React Store 
           </Text>
           <ProductsList/>
        {/*</Container> */}
        </Box>
    );
}

export default Main;