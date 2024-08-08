import {Layout} from "@/components/layouts";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type Repo = {
  name: string;
}


export const getStaticProps: GetStaticProps = async (context) => {
  console.log("Hola mundo");

  return {
    props: {
      name: "mmmm "
    }
  }
}

export default function HomePage({props}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log({props});

  return (
    <Layout title="Listado de pokemon">
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  )
  }