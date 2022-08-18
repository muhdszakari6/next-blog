import Head from "next/head";
import Script from "next/script";
import { FunctionComponent } from "react";
import Layout from "../../components/layout";
interface FirstPostProps {}

const FirstPost: FunctionComponent<FirstPostProps> = () => {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Facebook sdk loaded")}
      ></Script>
      <h1>Hello From First Post</h1>
    </Layout>
  );
};

export default FirstPost;
