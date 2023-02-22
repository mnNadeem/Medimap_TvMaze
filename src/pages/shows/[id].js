import { ShowPage } from "../../components/ShowPage";

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

export default function Post({ show }) {
  return <ShowPage show={show} />;
}
