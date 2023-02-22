import { ShowPage } from "../../components/ShowPage";
import Head from "next/head";

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  return {
    props: { show },
    revalidate: 60,
  };
}

export default function Show({ show }) {

  const { name, summary} = show;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={summary} />
      </Head>
      <ShowPage show={show} />
    </>
  );
}
