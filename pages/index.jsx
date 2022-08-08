import Head from "next/head";

import { DefaultLayout } from "../src/components/layouts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Intern with Love</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultLayout>
        <h1>Intern with Love</h1>
      </DefaultLayout>
    </>
  );
}
