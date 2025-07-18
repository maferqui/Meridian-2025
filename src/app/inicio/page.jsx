//import Head from 'next/head';
import './anima.css'; // Los estilos ahora están aislados bajo .anima-root
import { Inicio } from './inicio'; 

export default function AnimaPage() {
  return (
    <div className="anima-root">
      <Inicio />
    </div>
  );
}