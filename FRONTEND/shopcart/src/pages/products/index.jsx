import SliderCard from "@/Components/Home/HomProductsSlider/SliderCard";
import Navbar from "@/Components/Navbar/Navbar";
import Search from "@/Components/Navbar/Search";
import Filters from "@/Components/ProductPage/Filters";
import SortBy from "@/Components/ProductPage/SortBy";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  border,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useContext } from "react";
import { ColorContext } from "@/Context/ColorContext";
import { useRouter } from "next/router";

const products = ({ products }) => {
  const { colorStatus, colors } = useContext(ColorContext);
  const router = useRouter();

  const handleRoutes = (id) => {
    console.log("id: ", id);
    router.push(`/products/${id}`);
  };

  return (
    <>
      <Head>
        <title>ShopKart/products</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex mx={"5rem"} justify={"space-between"}>
        {/* Filters */}
        <Filters />

        <Heading mt={"0.5rem"} size={"lg"}>
          All Products
        </Heading>

        {/* Sorting  */}
        <SortBy />
      </Flex>

      <Grid
        my={"1.5rem"}
        px={"5rem"}
        templateColumns="repeat(4, 1fr)"
        gap={"2rem 0.5rem"}
      >
        {products &&
          products.map((item) => (
            <Box onClick={() => handleRoutes(item._id)}>
              <SliderCard key={item.id} item={item} />
            </Box>
          ))}
      </Grid>
    </>
  );
};

export default products;

export async function getStaticProps() {
  let res = await fetch("https://shopkart-backend.cyclic.app/products");
  let data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}
