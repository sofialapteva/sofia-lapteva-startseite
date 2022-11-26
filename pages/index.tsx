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
                <strong>Mein Lieblingsessen:</strong> Alles, was man beim Singen
                schlecht kochen kann
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
                <strong>Sein Beruf: </strong> Wächter der Träume
              </p>
              <p>
                <strong>Seine Hobbys: </strong> Sodatest und Wurstverkostung
              </p>
              <p>
                <strong>Seine Lieblingsmusik: </strong> Jede Musik in MP3
              </p>
              <p>
                <strong>Sein Lieblingsessen:</strong> Das, den meine Frau kocht
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
                <strong>ihr Beruf: </strong>
                Frag, wie es mir geht
              </p>
              <p>
                <strong>ihre Hobbys: </strong>
                Frag, wie es mir geht (Es ist gut, wenn ihre Arbeit ihr Hobby
                ist!)
              </p>
              <p>
                <strong>ihre Lieblingsmusik: </strong>
                Geräusche eines Familienessens
              </p>
              <p>
                <strong>ihr Lieblingsessen: </strong>
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
                <strong>ihr Beruf: </strong>
                suchen Sie nach Rechtschreibfehlern in Victors Texten
              </p>
              <p>
                <strong>ihre Hobbys: </strong>Mutter sein
              </p>
              <p>
                <strong>ihre Kinder: </strong> 4 Stücken
              </p>
              <p>
                <strong>ihre Lieblingfarbe: </strong>
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
                <strong>Sein Beruf: </strong>
                Lama streichlen
              </p>
              <p>
                <strong>Seine Hobbys: </strong>
                zum hundertsten Mal einen Computer reparieren
              </p>
              <p>
                <strong>Seine Lieblingsmusik: </strong>
                die Worte &quot;Ich stimme zu&quot; von seiner Freundin
              </p>
              <p>
                <strong>Seine Lieblingfarbe: </strong>
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
                <strong>Sein Beruf: </strong>
                Sänger im Karaoke
              </p>
              <p>
                <strong>Seine Hobbys: </strong>
                Memes sammlen
              </p>
              <p>
                <strong>Sein Lieblingsfilm: </strong>
                Fantasie, besonders Fernsehnachrichten
              </p>
              <p>
                <strong>Sein Lieblingsessen: </strong>
                Spaghetti mindestens 1 m lang
              </p>
            </article>
          </em>
          <em className={styles.card}>
            <div>
              <Image src={grisa} alt="" width={150} />
            </div>
            <article>
              <h2> Katze, Grissa </h2>
              <p>
                <strong>ihr Beruf: </strong>
                nachts springen
              </p>
              <p>
                <strong>ihre Hobbys: </strong>
                Wunderschön sein
              </p>
              <p>
                <strong>ihre Lieblingsmusik: </strong>
                ihr Miau
              </p>
              <p>
                <strong>ihr Lieblingsessen: </strong>
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
