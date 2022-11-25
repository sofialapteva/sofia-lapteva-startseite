import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { sofia, igor, grisa, vitya, irina, vera, nick } from "../public/img";
import React from "react";
import Confetti from "react-confetti";
export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Sofia Lapteva Startseite</title>
        <meta name="description" content="Sofia Lapteva Startseite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Confetti
        width={typeof screen !== "undefined" ? screen.width : 1536}
        height={typeof screen !== "undefined" ? screen.height : 1300}
      />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Herzlich willkommen bei <em>Sofia Lapteva Startseite!</em>
        </h1>

        <div className={styles.grid}>
          <em className={styles.card}>
            <div>
              <Image src={sofia} alt="" width={150} />
            </div>
            <article>
              <h2>Ich, Sofia </h2>
              <p>
                <strong>Mein Beruf:</strong> Programmiererin
              </p>
              <p>
                <strong>Meine Hobbys:</strong> Schlecht singen
              </p>
              <p>
                <strong>Meine Lieblingsmusik:</strong> Alles was man schlecht
                singen kann
              </p>
              <p>
                <strong>Meine Lieblingsessen:</strong> Alles, was man beim
                Singen schlecht kochen kann
              </p>
            </article>
          </em>

          <em className={styles.card}>
            <div>
              <Image src={vitya} alt="" width={150} />
            </div>
            <article>
              <h2>Mein Mann, Viktor </h2>
              <p>
                <strong>Mein Beruf: </strong> Wächter der Träume
              </p>
              <p>
                <strong>Meine Hobbys: </strong> Sodatest und Wurstverkostung
              </p>
              <p>
                <strong>Meine Lieblingsmusik: </strong> Jede Musik in MP3
              </p>
              <p>
                <strong>Meine Lieblingsessen:</strong> Das, den meine Frau kocht
                (bearbeitet)
              </p>
            </article>
          </em>

          <em className={styles.card}>
            <div>
              <Image src={irina} alt="" width={150} />
            </div>
            <article>
              <h2>Meine Mutter, Irina </h2>
              <p>
                <strong>Mein Beruf: </strong>
                Frag, wie es mir geht
              </p>
              <p>
                <strong>Meine Hobbys: </strong>
                Frag, wie es mir geht (Es ist gut, wenn Ihre Arbeit Ihr Hobby
                ist!)
              </p>
              <p>
                <strong>Meine Lieblingsmusik: </strong>
                Geräusche eines Familienessens
              </p>
              <p>
                <strong>Meine Lieblingsessen: </strong>
                Hering unter einem Pelzmantel
              </p>
            </article>
          </em>

          <em className={styles.card}>
            <div>
              <Image src={vera} alt="" width={150} />
            </div>
            <article>
              <h2>Viktors Mutter, Vera </h2>
              <p>
                <strong>Mein Beruf: </strong>
                suchen Sie nach Rechtschreibfehlern in Victors Texten
              </p>
              <p>
                <strong>Meine Hobbys: </strong>Mutter sein
              </p>
              <p>
                <strong>Meine Kinder: </strong> 4 Stücken
              </p>
              <p>
                <strong>Meine Lieblingfarbe: </strong>
                die Farbe der Kinderüberraschung
              </p>
            </article>
          </em>

          <em className={styles.card}>
            <div>
              <Image src={nick} alt="" width={150} />
            </div>
            <article>
              <h2>Mein Bruder, Nikita </h2>
              <p>
                <strong>Mein Beruf: </strong>
                Lama streichlen
              </p>
              <p>
                <strong>Meine Hobbys: </strong>
                zum hundertsten Mal einen Computer reparieren
              </p>
              <p>
                <strong>Meine Lieblingsmusik: </strong>
                die Worte &aposIch stimme zu&apos von seiner Freundin
              </p>
              <p>
                <strong>Meine Lieblingfarbe: </strong>
                die Farbe des friedlichen Himmels darüber
              </p>
            </article>
          </em>
          <em className={styles.card}>
            <div>
              <Image src={igor} alt="" width={150} />
            </div>
            <article>
              <h2>Viktors Bruder, Igor </h2>
              <p>
                <strong>Mein Beruf: </strong>
                Sänger im Karaoke
              </p>
              <p>
                <strong>Meine Hobbys: </strong>
                Memes sammlen
              </p>
              <p>
                <strong>Meine Lieblingsfilm: </strong>
                Fantasie, besonders Fernsehnachrichten
              </p>
              <p>
                <strong>Meine Lieblingsessen: </strong>
                Spaghetti mindestens 1 m lang
              </p>
            </article>
          </em>
          <em className={styles.card}>
            <div>
              <Image src={grisa} alt="" width={150} />
            </div>
            <article>
              <h2>Unsere Katze, Grissa </h2>
              <p>
                <strong>Mein Beruf: </strong>
                nachts springen
              </p>
              <p>
                <strong>Meine Hobbys: </strong>
                Wunderschön sein
              </p>
              <p>
                <strong>Meine Lieblingsmusik: </strong>
                Ihr Miau
              </p>
              <p>
                <strong>Meine Lieblingsessen: </strong>
                Wattestäbchen und Hintern Gurken
              </p>
            </article>
          </em>
        </div>
      </main>

      <footer className={styles.footer}>
        <em></em>
      </footer>
    </div>
  );
}