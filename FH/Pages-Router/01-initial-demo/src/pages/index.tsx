import Link from "next/link";
import { NextPageWithLayout } from "./_app";
import { MainLayout } from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <h1 className={"title"}>Home Page</h1>
      <h1>
        Ir a <Link href="/about">About</Link>
      </h1>
    </>
  );
};

HomePage.getLayout = function (page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default HomePage;
