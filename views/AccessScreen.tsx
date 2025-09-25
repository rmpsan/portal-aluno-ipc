
import React, { useEffect } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

interface AccessScreenProps {
  onSelectIntensive: () => void;
  onSelectEAD: () => void;
}

const AccessCard: React.FC<{
  title: string;
  description: string;
  details: string;
  onClick: () => void;
  colorClass: string;
  animationDelay: string;
}> = ({ title, description, details, onClick, colorClass, animationDelay }) => {
  const addElement = useRevealOnScroll();
  return (
    <div
      ref={addElement}
      onClick={onClick}
      className="reveal access-card p-8 rounded-lg cursor-pointer transition-all duration-300 bg-black/30 backdrop-blur-md border border-white/20 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl"
      style={{ animationDelay }}
    >
      <h2 className={`text-2xl font-bold mb-3 ${colorClass}`}>{title}</h2>
      <p className="text-gray-300">{description}</p>
      <p className="text-xs mt-4 font-semibold uppercase tracking-wider opacity-70">{details}</p>
    </div>
  );
};

const AccessScreen: React.FC<AccessScreenProps> = ({ onSelectIntensive, onSelectEAD }) => {
  const addElement = useRevealOnScroll();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-800 bg-cover bg-center" style={{ backgroundImage: `url('https://gov.institutopaulistadecinema.com.br/galeria/11.jpg')` }}>
      <div className="absolute inset-0 bg-gray-900/70"></div>
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <h1 ref={addElement} className="reveal text-3xl md:text-5xl font-extrabold leading-tight mb-4 max-w-4xl mx-auto">Instituto Paulista de Cinema</h1>
        <p ref={addElement} className="reveal text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12" style={{ animationDelay: '0.2s' }}>
          Onde o talento da periferia se torna o futuro da comunicação premium e com propósito.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AccessCard
            title="Sou Aluno (Programa Intensivo)"
            description="Acesse seu dashboard como aluno do programa remunerado de 12 meses em São Paulo."
            details="Bolsa Integral | DRT Garantido | 90% Empregabilidade"
            onClick={onSelectIntensive}
            colorClass="text-teal-400"
            animationDelay="0.4s"
          />
          <AccessCard
            title="Quero Acessar o Conteúdo (EAD)"
            description="Explore nosso acervo de aulas, palestras e workshops de todo o Brasil."
            details="Aulas | Palestras | Workshops | Acervo Digital"
            onClick={onSelectEAD}
            colorClass="text-cyan-400"
            animationDelay="0.6s"
          />
        </div>
      </div>
    </section>
  );
};

export default AccessScreen;
