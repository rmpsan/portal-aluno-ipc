import React from 'react';
import DashboardCard from '../../components/DashboardCard';
import ProgressCircle from '../../components/ProgressCircle';
import ContentRow from '../ead/components/ContentRow';
import { IntensiveView } from '../../types';

const recommendedCourses = [
    { id: 1, title: 'Trilha Completa de IA Audiovisual', instructor: 'Equipe de Inovação IPC', img: 'https://picsum.photos/seed/ai-main/400/250', progress: 0 },
    { id: 9, title: 'Workshop: Produção Rápida para Clientes', instructor: 'Supervisores de Mercado', img: 'https://picsum.photos/seed/workshop-prod/400/250', progress: 0 },
    { id: 6, title: 'Técnicas de Roteiro para Cinema', instructor: 'Dr. Lúcia Borges (USP)', img: 'https://picsum.photos/seed/intro-roteiro/400/250', progress: 100 },
    { id: 14, title: 'A História que Inspira: Raphael Martinez', instructor: 'Documentário', img: 'https://picsum.photos/seed/mentoria-raphael/400/250', progress: 0 },
];

interface DashboardViewProps {
    setActiveView: (view: IntensiveView) => void;
    onSelectCourse: (course: { title: string, instructor: string }) => void;
}


const DashboardView: React.FC<DashboardViewProps> = ({ setActiveView, onSelectCourse }) => {
    const formationProgress = 35; 
    
    return (
        <div className="space-y-8 animate-[fadeInUp_0.5s_ease-out]">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Dashboard</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Status Financeiro */}
                <DashboardCard title="Status Financeiro (Mês Atual)" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>}>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Bolsa Integral:</span>
                            <span className="font-bold text-gray-800">R$ 1.412,00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Ganhos em Projetos:</span>
                            <span className="font-bold text-gray-800">R$ 350,00</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-gray-600">Ganhos com Stock Footage:</span>
                            <span className="font-bold text-gray-800">R$ 85,50</span>
                        </div>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-gray-900">Total no Mês:</span>
                            <span className="text-xl font-extrabold text-teal-600">R$ 1.847,50</span>
                        </div>
                    </div>
                     <button 
                        onClick={() => setActiveView(IntensiveView.FINANCEIRO)}
                        className="w-full mt-4 bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition-colors text-sm"
                    >
                        Ver Extrato Detalhado
                    </button>
                </DashboardCard>

                {/* Suporte Básico */}
                <DashboardCard title="Suporte Integral" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0c-.454-.303-.977-.454-1.5-.454V5.454c0-.523.151-1.046.454-1.5a2.704 2.704 0 013 0 2.704 2.704 0 003 0 2.704 2.704 0 013 0 2.704 2.704 0 003 0c.303.454.454.977.454 1.5v10.092z" /></svg>}>
                    <p className="text-gray-600">Alimentação completa garantida durante toda a formação.</p>
                    <div className="mt-4 flex items-center gap-2">
                         <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Ativo</span>
                        <p className="text-sm text-gray-500">Café, Almoço e Jantar inclusos.</p>
                    </div>
                </DashboardCard>

                 {/* Próximo Projeto */}
                <DashboardCard title="Próximo Projeto Real" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}>
                     <p className="text-gray-600">Campanha de Lançamento - <span className="font-bold text-gray-800">Cliente TechCorp</span>.</p>
                     <div className="mt-4 flex items-center gap-2">
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Prazo: 12 dias</span>
                        <p className="text-sm text-gray-500">Entrega urgente.</p>
                    </div>
                </DashboardCard>
            </div>
            
            {/* Progresso na Formação */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Progresso na Formação (1.200 horas)</h3>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <ProgressCircle percentage={formationProgress} />
                    <div className="flex-1 space-y-4">
                        <div className="w-full bg-gray-200 rounded-full h-4 relative">
                            <div className="bg-cyan-500 h-4 rounded-full" style={{ width: '100%' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">400h - Fundamentos (Concluído)</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4 relative">
                            <div className="bg-teal-500 h-4 rounded-full" style={{ width: '25%' }}></div>
                             <div className="absolute inset-y-0 left-2 flex items-center text-xs font-medium text-gray-700">600h - Especialização (Em Andamento)</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4 relative">
                             <div className="absolute inset-y-0 left-2 flex items-center text-xs font-medium text-gray-500">200h - Produção Profissional</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* EAD Catalog Integration */}
            <div className="bg-gray-900 -mx-6 md:-mx-10 p-6 md:p-10 rounded-lg shadow-inner-top">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">Recomendado para Você</h2>
                    <button 
                        onClick={() => setActiveView(IntensiveView.CATALOG)}
                        className="text-teal-400 font-semibold hover:text-white transition-colors"
                    >
                        Ver Catálogo Completo &rarr;
                    </button>
                </div>
                <ContentRow title="" items={recommendedCourses} onSelectCourse={onSelectCourse} />
            </div>
        </div>
    );
};

export default DashboardView;
