import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DB_URL } from "./const";
import ProductTile from "./product/ProductTile";


function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(DB_URL +'/products.json')
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[]);
    return (
        <Box className="products">
            <Text>Product List</Text>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {products.map((product)=> (
                <ProductTile key={product.id} product={product}/>
            ))}
            </Grid>
        </Box>
    );
}

export default ProductsList;