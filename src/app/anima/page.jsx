//import Head from 'next/head';
import './anima.css'; // Los estilos ahora están aislados bajo .anima-root
import { Inicio } from './inicio'; 

export default function AnimaPage() {
  return (
    <div className="anima-root">
      {/* <Head>
        <link href="https://fonts.googleapis.com/css?family=Manrope:400,600|Libre+Baskerville:400" rel="stylesheet" />
      </Head> */}
      <Inicio />
    </div>
  );
}