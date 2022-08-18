import Head from "next/head";
import { FunctionComponent } from "react";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from "../../styles/utils.module.scss";

interface PostProps {
  data: { id: string; title: string; date: string; contentHtml: string };
}

export const getStaticProps = async ({
  params,
}: {
  params: { post: string };
}) => {
  const data = await getPostData(params.post);
  return {
    props: {
      data,
    },
  };
};

const Post: FunctionComponent<PostProps> = ({ data }) => {
  const { title, date, contentHtml } = data;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export default Post;
