import Head from 'next/head';
import { Inter } from '@next/font/google';
import Footer from '@/layout/footer';
import Plane from '@/component/Plane';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Airplane Seating Alogorithm</title>
        <meta
          name='description'
          content='Visualise Airplane seating algorithm'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 style={{ textAlign: 'center', marginTop: 60 }}>
        Airplane Seating Alogorithm
      </h1>
      <Plane />
      <Footer />
    </>
  );
}
