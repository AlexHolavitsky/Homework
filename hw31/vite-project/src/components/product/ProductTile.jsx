import {Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, IconButton} from "@chakra-ui/react";
import {StarIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function ProductTile ({product}){
    const{cart, setCart}= useContext(CartContext);

    function handleBuy() {

        const newProduct = {
            id:product.id,
            title: product.title,
            price: product.price,
            qty: 1,
        };
        const productInCartIndex = cart.products.findIndex(
            (cartProduct)=> cartProduct.id === product.id
        );

        console.log('productInCartIndex', productInCartIndex);

        if (productInCartIndex >= 0){
            cart.products[productInCartIndex].qty += 1;
            setCart({
                ...cart,
                products:[...cart.products],  
                totalQty: cart.totalQty + 1,
                total: cart.total + product.price,
            });
        }else{
            setCart({
                ...cart,
                products:[...cart.products, newProduct],    
                total: cart.total + product.price,
            });
        };   
    }

    return(
        <Card maxW='sm'>
            <CardBody>
                <Link to={`/product/${product.id}`}>
                <Image
                src={product.images[0]}
                alt={product.title}
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                {product.title && (
                    <Heading size='md'>{product.title}</Heading>
                )}
                <Text>{product.description}</Text>
                <Text color='teal.600' fontSize='2xl'>
                    ${product.price}
                </Text>
                </Stack>
                </Link>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='teal' onClick={handleBuy}>
                    Buy now
                </Button>
                <IconButton
                    variant='solid'
                    colorScheme='teal'
                    aria-label='Call Sage'
                    fontSize='20px'
                    icon={<StarIcon />}
                />
                
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
}

export default ProductTile;
