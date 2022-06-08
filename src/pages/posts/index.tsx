import { GetStaticProps } from "next";
import Head from "next/head";
import * as Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de Março de 2022</time>
            <strong>Quaerat aliquam magnam ipsum magnam modi sed.</strong>
            <p>
              Tempora ipsum dolor adipisci tempora. Quisquam amet quisquam ipsum
              amet sed adipisci porro. Adipisci neque ut non. Est amet aliquam
              sit magnam. Amet quaerat velit porro.
            </p>
          </a>

          <a href="#">
            <time>12 de Março de 2022</time>
            <strong>Quaerat aliquam magnam ipsum magnam modi sed.</strong>
            <p>
              Tempora ipsum dolor adipisci tempora. Quisquam amet quisquam ipsum
              amet sed adipisci porro. Adipisci neque ut non. Est amet aliquam
              sit magnam. Amet quaerat velit porro.
            </p>
          </a>

          <a href="#">
            <time>12 de Março de 2022</time>
            <strong>Quaerat aliquam magnam ipsum magnam modi sed.</strong>
            <p>
              Tempora ipsum dolor adipisci tempora. Quisquam amet quisquam ipsum
              amet sed adipisci porro. Adipisci neque ut non. Est amet aliquam
              sit magnam. Amet quaerat velit porro.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getAllByType("post", {
    fetch: ["post.title", "post.content"],
    pageSize: 100,
    predicates: [Prismic.predicates.at("document.type", "post")],
  });

  return {
    props: {},
  };
};
