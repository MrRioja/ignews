import Head from "next/head";
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
