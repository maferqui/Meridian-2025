//import Head from 'next/head';
import './anima.css'; // Los estilos ahora están aislados bajo .sobre-nosotros-root
import { Nosotros } from './nosotros'; 

export default function AnimaPage() {
  return (
    <div className="anima-root">
      <Nosotros />
    </div>
  );
}