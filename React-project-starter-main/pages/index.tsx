import Banner from "@components/Banner";
import Slider from "@components/Slider";
import { Footer, Header } from "@components/common";
import Slides from "@components/Slides/Slides";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Sponser from "@components/Sponser";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <Header />
      <Banner />
      <Slides />
      <Slider />
      <Sponser />
      <Footer />
    </Layout>
  );
};

export default Home;
