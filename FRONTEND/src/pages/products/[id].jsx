import Products from "@/Components/Home/Products";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ReactImageMagnify from "react-image-magnify";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Page = ({ product }) => {
  product = product[0];
  console.log("product: ", product);
  const [colorData, setColorData] = useState(product.images[0]);
  const [photo, setPhoto] = useState(colorData.image_urls[0]);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Shopkart/Products/{product?.name}</title>
        <meta name="description" content="movie app created" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box minH={"100vh"}>
        <Box m={"0.6rem auto"} mx={"2rem"} mt={"4rem"}>
          <Tooltip label="Go Back" aria-label="A tooltip">
            <Button
              onClick={() => router.back()}
              colorScheme="twitter"
              variant="outline"
              size={"sm"}
            >
              <ArrowBackIcon />
            </Button>
          </Tooltip>
        </Box>
        <Flex justify={"space-between"} mx={"5rem"} mb={"3rem"}>
          <Flex w={"48%"} justify={"center"} align={"center"} gap={4}>
            <Grid templateRows="repeat(4, 1fr)" w={"20%"} gap={3}>
              {colorData &&
                colorData.image_urls.map((item, i) => {
                  return (
                    <Box key={i}>
                      <Image
                        bg={"#E3E3E3"}
                        src={item}
                        alt={"colors"}
                        border={"1px solid"}
                        borderRadius={"0.3rem"}
                        onMouseOver={() => setPhoto(item)}
                        cursor={"pointer"}
                      />
                    </Box>
                  );
                })}
            </Grid>
            <Box
              w={"86.5%"}
              m={"auto"}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              bg={"#E3E3E3"}
            >
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Product Items",
                    isFluidWidth: true,
                    src: photo,
                  },
                  largeImage: {
                    src: photo,
                    width: 650,
                    height: 600,
                  },
                  enlargedImageContainerDimensions: {
                    width: "110%",
                    height: "110%",
                  },
                }}
              />
            </Box>
          </Flex>
          <Box w={"48%"} fontSize={"1.2rem"} fontWeight={500}>
            <Heading>{product?.name}</Heading>
            <Text w={"60%"} mt={"1rem"} fontSize={"0.9rem"}>
              {product.description}
            </Text>
            <Text my={"0.5rem"} fontWeight={"bold"}>
              {product.type}
            </Text>

            {/* Rating Section */}
            <Flex mt={"0.8rem"} gap={2}>
              <Flex align={"center"} gap={1}>
                {product.rating > 0 ? (
                  product.rating > 0 &&
                  new Array(~~product.rating)
                    .fill(0)
                    .map((ele, i) => (
                      <AiFillStar
                        fontSize={"1.3rem"}
                        color={"#38A169"}
                        key={i}
                      />
                    ))
                ) : (
                  <Text>Rating :</Text>
                )}
              </Flex>
              <Text>{product.rating}</Text>
              <Text>|</Text>
              <Text>(120 reviews)</Text>
            </Flex>

            <Flex my={"0.7rem"} gap={3} fontSize={"1.3rem"} align={"center"}>
              <Text fontSize={"1.7rem"} fontWeight={"bold"}>
                ₹ {product.discountPrice}
              </Text>
              <Text color={"#38A169"}>{product.discount}% off</Text>
              <del style={{ fontSize: "1.2rem" }}>₹ {product.price}</del>
            </Flex>
            <Text my={"1rem"} fontWeight={"500"} fontSize={"1.1rem"}>
              Choose a Color
            </Text>
            <Flex w={"65%"} gap={3}>
              {product?.images.map((item, i) => (
                <Box key={i} maxW={"22%"}>
                  <Image
                    bg={"#E3E3E3"}
                    border={"2px solid"}
                    src={item.image_urls[0]}
                    alt={item.color}
                    maxH={"150px"}
                    _hover={{ bg: "rgba(0, 128, 128, 0.3)" }}
                    _active={{ bg: "rgba(255,20,147, 0.3)" }}
                    borderRadius={"0.3rem"}
                    cursor={"pointer"}
                    onClick={() => setColorData({ ...item })}
                    w={"100%"}
                  />
                  <Text
                    textAlign={"center"}
                    fontWeight={"bold"}
                    fontSize={"1rem"}
                    w={"100%"}
                  >
                    {item.color}
                  </Text>
                </Box>
              ))}
            </Flex>

            <Flex gap={17} mt={"1.5rem"}>
              <Button colorScheme="teal" variant="solid" size="lg">
                Add To Cart
              </Button>
              <Button colorScheme="messenger" variant="outline" size="lg">
                Buy Now
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Page;

// Getting All The Products
export async function getStaticPaths() {
  let res = await fetch("https://baby-blue-clam-wear.cyclic.app/products");
  let data = await res.json();
  console.log("data: ", data);

  return {
    paths: data.map((product) => ({ params: { id: product._id.toString() } })),
    fallback: false,
  };
}

// Getting Single Product Data
export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;

  let res = await fetch(`https://baby-blue-clam-wear.cyclic.app/products/${id}`);
  let data = await res.json();

  return {
    props: {
      product: data,
    },
  };
}
