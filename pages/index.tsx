import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/post";
import utilStyles from "../styles/utils.module.scss";

export async function getStaticProps(context: any) {
  console.log(context);
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

const Home: NextPage<any> = ({
  allPostsData,
}: {
  allPostsData: { id: string; date: string; title: string }[];
}) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi 😄, I am Salim! I am a Frontend Engineer with flair for Software
          Development. Proficient in developing Frontend Applications using
          Angular, React and React Native. I enjoy building fast and efficient
          applications. I take pride in implementing features from design into
          working functionality in production 🚀
        </p>
      </section>
      <Link href="posts/first-post">Go to first post</Link>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>{" "}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
