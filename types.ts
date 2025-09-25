export enum AppView {
  ACCESS = 'ACCESS',
  INTENSIVE_PORTAL = 'INTENSIVE_PORTAL',
  EAD_PORTAL = 'EAD_PORTAL',
  PUBLIC_CV = 'PUBLIC_CV',
}

export interface User {
  name: string;
  type: 'intensive' | 'ead';
}

export enum IntensiveView {
    DASHBOARD = 'dashboard',
    IA_HUB = 'ia-hub',
    PRODUCAO = 'producao',
    FORMACAO = 'formacao',
    CARREIRA = 'carreira',
    EQUIPMENT = 'equipment',
    CATALOG = 'catalog',
    COURSE_DETAIL = 'course-detail',
    ADMIN = 'admin',
    STOCK = 'stock',
    FINANCEIRO = 'financeiro',
    JOB_DETAIL = 'job-detail',
}

export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
    qualifications: string[];
    isNew?: boolean;
}

export enum FinancialSubView {
    SCHOLARSHIP = 'scholarship',
    PROJECTS = 'projects',
    STOCK = 'stock',
}

export enum StockSubView {
    GALLERY = 'gallery',
    UPLOADS = 'uploads',
    EARNINGS = 'earnings',
}

export enum AdminSubView {
    DATA = 'data',
    PAYMENTS = 'payments',
    PROJECTS = 'projects',
}

export enum EadView {
    CATALOG = 'catalog',
    COURSE_DETAIL = 'course-detail',
    TOOLS_CAREER = 'tools-career',
}

export enum IAHubSubView {
    PLAYGROUND = 'ia-playground',
    TRILHA = 'ia-trilha',
    RECURSOS = 'ia-recursos',
}

export enum LlmProvider {
    GEMINI = 'gemini',
    CLAUDE = 'claude',
    CHATGPT = 'chatgpt',
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  provider?: LlmProvider;
}

export interface Endorsement {
    id: number;
    endorserName: string;
    endorserTitle: string;
    endorserAvatar: string;
    text: string;
}

export interface ProfileData {
    name: string;
    title: string;
    avatar: string;
    bio: string;
    skills: { name: string; level: number }[];
    projects: { id: number; title: string; description: string; img: string }[];
    endorsements: Endorsement[];
}