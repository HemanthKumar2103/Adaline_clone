import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
})

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export const metadata = {
  title: 'Adaline',
  description: 'Adaline is the end-to-end AI agent platform for world-class teams. Iterate with prompt engineering, evaluate with AI-powered testing, and monitor with comprehensive observability. Build, test, and deploy AI agents faster with LLMOps tools.',
  keywords: 'Adaline,LLM,LLMs,AI agents,AI agent,AI agents tooling,AI agent tooling,AI agent development,AI agent development tooling,AI,GenAI,Machine Learning,Evaluation,Evaluations,Evals,Monitoring,NLP,Language Models,Prompt Engineering,AI Teams Tooling,Developer Tools,Prompts,Prompt Management,Prompt Versioning,Logging,LLMOps,LLM Operations,AI Observability,AI Monitoring,AI Agent Monitoring,LLM Monitoring,AI Analytics,Agent Analytics,AI Testing,LLM Testing,AI Agent Testing,AI Evaluation Platform,LLM Evaluation,Agent Evaluation,AI Quality Assurance,Prompt Testing,Prompt Optimization,AI Development Platform,LLM Development,AI Agent Platform,AI Agent Framework,AI Agent Infrastructure,AI Agent Lifecycle,AI Agent Deployment,AI Agent Operations,AI Agent Management,AI Workflow,AI Orchestration,RAG,Retrieval Augmented Generation,Vector Database,Embeddings,AI Performance,AI Metrics,AI Dashboards,AI Traces,AI Debugging,AI Troubleshooting,AI Experimentation,AI Experiment Management,A/B Testing,Model Comparison,LLM Comparison,Model Evaluation,AI Benchmarking,AI Production,AI Production Monitoring,AI Production Tools,AI DevOps,MLOps,AI Infrastructure,AI Platform as a Service,AI SaaS,Enterprise AI,AI Tooling,AI Developer Platform,AI SDK,AI API,AI Integration,AI Collaboration,AI Team Collaboration,AI Workflow Management,AI Version Control,AI Experiment Tracking,AI Cost Management,AI Cost Optimization,Token Management,AI Security,AI Compliance,AI Governance,AI Reliability,AI Scalability,AI Performance Optimization,AI Error Tracking,AI Incident Management,AI SLO,Service Level Objectives,AI Latency,AI Throughput,AI Quality Metrics,AI Success Metrics,Conversational AI,Chatbot Development,Chatbot Testing,Chatbot Monitoring,AI Assistant,Virtual Assistant,AI Automation,Intelligent Automation,AI Workflow Automation,GPT,OpenAI,Anthropic,Claude,GPT-4,GPT-3.5,Large Language Models,Foundation Models,Transformer Models,AI Model Management,Model Versioning,Model Registry,AI Data Management,AI Dataset Management,AI Training Data,AI Test Data,AI Validation,AI Quality Control,AI Best Practices,AI Development Best Practices,AI Production Best Practices',
  author: 'Adaline Team',
  creator: 'Adaline',
  publisher: 'Adaline',
  robots: 'index, follow',
  openGraph: {
    title: 'Adaline',
    description: 'Adaline is the end-to-end AI agent platform for world-class teams. Iterate with prompt engineering, evaluate with AI-powered testing, and monitor with comprehensive observability. Build, test, and deploy AI agents faster with LLMOps tools.',
    url: 'https://www.adaline.ai',
    siteName: 'Adaline',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.adaline.ai/metadata/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adaline - AI Agent Platform for Iteration, Evaluation, and Monitoring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arshdilbagi',
    creator: '@arshdilbagi',
    title: 'Adaline',
    description: 'Adaline is the end-to-end AI agent platform for world-class teams. Iterate with prompt engineering, evaluate with AI-powered testing, and monitor with comprehensive observability. Build, test, and deploy AI agents faster with LLMOps tools.',
    images: ['https://www.adaline.ai/metadata/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/assets/Favicon/favicon-light-mode.png', media: '(prefers-color-scheme: light)' },
      { url: '/assets/Favicon/favicon-dark-mode.png', media: '(prefers-color-scheme: dark)' }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
