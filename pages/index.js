import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import Card from "../components/card";
import coffeeStoresData from "../data/coffee-store.json";

export const getStaticProps = async () => {
  console.log("hiii");
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
};

export default function Home({ coffeeStores }) {
  // console.log(coffeeStores);
  const handleOnClick = () => {
    console.log("heell");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnClick} />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={300}
            alt="hiiii"
          />
        </div>
        {coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto Stores</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    imgUrl={coffeeStore.imgUrl}
                    href={`/coffee-store/${coffeeStore.id}`}
                    className={styles.card}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
