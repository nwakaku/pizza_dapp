import Link from "next/link";
import Head from "next/head";
import Footer from "../components/footer";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Pizza_Park.Pizza | About</title>
        <meta name="title" content="Pizza_Park.Pizza | About" />
        <meta
          name="description"
          content="Start your account now and get tipped in your favorite cryptocurrencies! ... It all started with the pizza, so get tipped the crypto way... "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Pizza_Park.pizza/" />
        <meta property="og:title" content="Pizza_Park.Pizza | About" />
        <meta
          property="og:description"
          content="Start your account now and get tipped in your favorite cryptocurrencies! ... It all started with the pizza, so get tipped the crypto way... "
        />
        <meta property="og:image" content="https://i.imgur.com/nFZLBWm.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://Pizza_Park.pizza/" />
        <meta property="twitter:title" content="Pizza_Park.Pizza | About" />
        <meta
          property="twitter:description"
          content="Start your account now and get tipped in your favorite cryptocurrencies! ... It all started with the pizza, so get tipped the crypto way... "
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/nFZLBWm.png"
        />
      </Head>
      <main className=" flex flex-col justify-between ">
        <section className="px-3 py-6 mb-6 md:px-20 lg:max-w-5xl lg:mx-auto">
          <div>
            <h1 className="text-4xl font-bold text-center px-2 py-2 leading-10 md:text-4xl md:max-w-lg mx-auto lg:max-w-4xl lg:text-6xl lg:pt-14 ">
              Unlocking value through emerging tech.
            </h1>
          </div>
        </section>
        <hr />
        <section className="mt-8 lg:max-w-4xl lg:mx-auto">
          <div className="mx-6">
            <p className="text-gray-800 dark:text-slate-300 text-lg">
              Get me pizza is built out of a personal need to allow my followers
              to support me with small amounts of crypto in a more meaningful
              way than just asking to gib money.
              <br />
              <br />
              Then I thought... Hey, maybe artists, influencers, and other
              creators could use this too.
              <br />
              <br />
              So I spent 1 month throughout the Moralis x Google Defining Defi
              Hackathon building the basic features of Pizza_Park.🍕 using Next,
              Firebase, Moralis, Wagmi, Chainlink, RainbowKit, and Tailwindcss.
              <br />
              <br />
              That said, I intend to build upon this mvp by adding more features
              that allows web3 creators and artists to unlock their true
              potential value by adding new ways to connect with their fans.
              <br />
              <br />
              LFG!
              <br />
              <br />
              <Link href="https://twitter.com/elonsdev">
                <a className="hover:text-orange-600 font-CircularMedium">
                  Elons Dev
                </a>
              </Link>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
