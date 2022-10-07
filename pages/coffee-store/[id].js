import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import coffeeStoresData from "../../data/coffee-store.json";
import styles from "../../styles/coffee-store.module.css";

const CoffeeStore = ({ coffeeStore }) => {
  const router = useRouter();
  const { id } = router.query;

  const handleClick = () => {
    console.log("up vote");
  };
  return (
    <div className={styles.layout}>
      <Head>
        <title>{coffeeStore.name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a> Back to home</a>
            </Link>
          </div>
          <div className={styles.name}>
            <h1>{coffeeStore.name}</h1>
          </div>

          <Image
            src={coffeeStore.imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={coffeeStore.name}
          />
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="" width="24" height="24" alt="icon" />
            <p className={styles.text}>{coffeeStore.address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="" width="24" height="24" alt="icon" />
            <p className={styles.text}>{coffeeStore.neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="" width="24" height="24" alt="icon" />
            <p className={styles.text}>1</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleClick}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};
export const getStaticProps = async ({ params }) => {
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id;
      }),
    },
  };
};

export const getStaticPaths = async () => {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export default CoffeeStore;
