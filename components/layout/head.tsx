import Head from "next/head";
import { endpoint } from "../../pages/_app";

type Props = {
  title: string | any;
  desc: string | any;
  canonical: string | any;
};

export function CustomHead({ title, desc, canonical }: Props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta
        name="description"
        content={desc ? desc : "NDC hamda Abba hamkorligidagi website"}
      />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={endpoint} />
      <link rel="alternate" hrefLang="ru" href={endpoint} />
      <link rel="alternate" hrefLang="en" href={`${endpoint}/en`} />
      <link rel="alternate" hrefLang="uz" href={`${endpoint}/uz`} />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
}
