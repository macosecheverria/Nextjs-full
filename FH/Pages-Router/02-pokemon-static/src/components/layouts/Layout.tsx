import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  children: JSX.Element;
  title?: string;
};

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Marcos Echeverria" />
        <meta
          name="descripcion"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemo, pokedex`} />
      </Head>
        <Navbar/>
      <main className="px-o py-5"
      >{children}</main>
    </>
  );
};
