import { ColorContext } from "@/Context/ColorContext";
import { Box, Grid, GridItem, Heading, Image, Link } from "@chakra-ui/react";
import { useContext } from "react";

const HomeProducts = ({ products }) => {
  const { colorStatus, colors } = useContext(ColorContext);

  return (
    <Box
      py={{
        base: "0rem",
        sm: "0rem",
        md: "4rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      }}
    >
      <Heading
        mb={"1rem"}
        as={"h3"}
        size="lg"
        pl={{
          base: "0rem",
          sm: "0rem",
          md: "4rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "4rem",
        }}
        py={"1.5rem"}
        textAlign={{ base: "center", sm: "center" }}
      >
        Hottest Audios
      </Heading>
      <Grid
        px={{
          base: "1.75rem",
          sm: "1.75rem",
          md: "4rem",
          lg: "5rem",
          xl: "5rem",
          "2xl": "4rem",
        }}
        templateRows={{
          base: "repeat(5, 1fr)",
          sm: "repeat(5, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
          "2xl": "repeat(2, 1fr)",
        }}
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(5, 1fr)",
          xl: "repeat(5, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
        gap={4}
        pb={"1rem"}
      >
        <GridItem rowSpan={1} colSpan={2} borderRadius={"0.8rem"}>
          <Image
            borderRadius={"0.8rem"}
            alt={"ad"}
            src={
              "https://image01.realme.net/general/20220921/1663765243490.jpg.webp"
            }
            w={"100%"}
          />
        </GridItem>
        {products &&
          products.slice(0, 8).map((item) => (
            <GridItem
              key={item.id}
              p={"1rem"}
              colSpan={1}
              bg={colorStatus ? "#2D3748" : "white"}
              borderRadius={"0.8rem"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              alignItems={"center"}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              cursor="pointer"
            >
              <Box textAlign={"center"} overflow={"hidden"}>
                <Image
                  _hover={{
                    transform: "scale(1.05)",
                    transformOrigin: "center",
                  }}
                  src={
                    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144"
                  }
                  alt={item.name}
                  w={"100%"}
                />
              </Box>
              <Box fontWeight={"bold"}>{item.title}</Box>
              <Box fontWeight={"bold"} color={"#E6462E"}>
                ₹ {item.discount_price}
              </Box>
            </GridItem>
          ))}
      </Grid>
    </Box>
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";

const HomeProducts = ({ products }) => {
  const { colors } = useContext(ColorContext);
  console.log("products: ", products);
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} px={"5rem"}>
      {products &&
        products.slice(0, 8).map((item) => (
          <Box
            key={item.id}
            borderRadius={"0.7rem"}
          >
            <Box bg={"#F6F6F6"} borderRadius={"0.7rem 0.7rem 0 0"} overflow={"hidden"}>
              <Image
                transition={"0.3s all ease-in-out"}
                _hover={{
                  transform: "scale(1.05)",
                  transformOrigin: "center",
                }}
                borderRadius={"0.7rem 0.7rem 0 0"}
                alt={item.primary_image}
                src={
                  "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144"
                }
                w={"100%"}
              />
            </Box>
            <Flex justify={"space-between"} my={"0.7rem"}>
              <Heading as={"h4"} fontSize={"1.1rem"}>
                {item.title}
              </Heading>
              <Heading as={"h4"} fontSize={"1rem"}>
                ₹{item.discount_price}
              </Heading>
            </Flex>
            <Text fontSize={"0.9rem"}>{item.description.substring(0, 30)}</Text>
            <Flex mt={"0.2rem"}>
              <Flex align={"center"}>
                {new Array(~~item.rating).fill(0).map((ele, i) => (
                  <AiFillStar color={"#38A169"} key={i} />
                ))}
              </Flex>
              <Text fontSize={"0.7rem"}>(120)</Text>
            </Flex>
            <Box mt={"0.5rem"}>
              <Button
                colorScheme="black"
                _hover={{ bg: "#013D29", color: "white" }}
                _active={{ bg: "#2F855A" }}
                borderRadius={"1rem"}
                size={"sm"}
                variant="outline"
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
    </Grid>
  );
};

export default HomeProducts;
