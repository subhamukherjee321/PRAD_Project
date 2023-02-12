import Head from "next/head";
import Image from "next/image";
import { Box, Heading } from "@chakra-ui/react";
import Slider from "@/Components/Home/Slider";
import HomeProducts from "@/Components/Home/HomeProducts";
import HomeProductsHeading from "@/Components/Home/HomeProductsHeading";
import HomeProductSlider from "@/Components/Home/HomProductsSlider/HomeProductSlider";
import Discover from "@/Components/Home/Discover";
import DareToLeap from "@/Components/Home/DareToLeap";
import Footer from "@/Components/Footer";
import VideoBanner from "@/Components/Home/VideoBanner";
import PhotoBannerSlider from "@/Components/Home/PhotoBanner/PhotoBannerSlider";
import Navbar from "@/Components/Navbar/Navbar";
import ColorModeToggle from "@/Components/Home/ColorModeToggle";
import BackToTopButton from "@/Components/Home/HomProductsSlider/BackToTopButton";

export default function Home({products}) {
  console.log('products: ', products);
  return (
    <>
      <Head>
        <title>ShopKart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        
        <Navbar />
        <Slider />
        <HomeProductsHeading text={"Best Deals For You"} />
        <HomeProductSlider products={products} />
        <HomeProducts products={products} />
        <HomeProductsHeading text={"Discover"} />
        <Discover />
        <HomeProductsHeading text={"Explore More Items"} />
        <PhotoBannerSlider />
        <HomeProductsHeading text={"Dare to Leap"} />
        <DareToLeap />
        <VideoBanner />
        <BackToTopButton />
        <Footer />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  let res = await fetch("https://mock-server-movies.vercel.app/products");
  let data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}