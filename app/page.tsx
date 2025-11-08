'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gradient">Intelliwave</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition">À Propos</a>
              <a href="#process" className="text-gray-700 hover:text-primary-600 transition">Notre Processus</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#services" className="block py-2 text-gray-700 hover:text-primary-600">Services</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-primary-600">À Propos</a>
              <a href="#process" className="block py-2 text-gray-700 hover:text-primary-600">Notre Processus</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-primary-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Intelliwave</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Automatisation AI & Chatbots Intelligents
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transformez votre entreprise avec des solutions d'automatisation n8n et des chatbots sur mesure propulsés par l'intelligence artificielle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Démarrer Votre Projet
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-primary-600"
              >
                Découvrir nos Services
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-gradient mb-2">100+</div>
              <div className="text-gray-600">Chatbots Déployés</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-600">Clients Satisfaits</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-gray-600">Support Disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600">Des solutions sur mesure pour automatiser et optimiser votre entreprise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Chatbots sur Mesure</h3>
              <p className="text-gray-600 mb-4">
                Création de chatbots intelligents personnalisés pour améliorer votre service client, automatiser les réponses et augmenter l'engagement.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  IA conversationnelle avancée
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Multi-plateformes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Apprentissage continu
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-8 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Automatisation n8n</h3>
              <p className="text-gray-600 mb-4">
                Automatisez vos workflows et processus métier avec n8n pour gagner du temps et réduire les erreurs manuelles.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Intégration multi-outils
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Workflows complexes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Monitoring en temps réel
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="p-8 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Consulting IA</h3>
              <p className="text-gray-600 mb-4">
                Accompagnement stratégique pour identifier et implémenter les meilleures solutions d'IA pour votre entreprise.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Audit de processus
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Stratégie personnalisée
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Formation équipe
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="p-8 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Intégration API</h3>
              <p className="text-gray-600 mb-4">
                Connectez tous vos outils et systèmes pour une expérience fluide et une synchronisation parfaite des données.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  APIs REST & GraphQL
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Webhooks personnalisés
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Sécurité maximale
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="p-8 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Tableaux de bord personnalisés et rapports détaillés pour suivre les performances de vos automatisations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Métriques en temps réel
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Rapports automatisés
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Insights actionnables
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="p-8 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Support & Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Support technique 24/7 et maintenance continue pour assurer le bon fonctionnement de vos solutions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Support 24/7
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Mises à jour régulières
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Résolution rapide
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Pourquoi Choisir Intelliwave ?</h2>
              <p className="text-xl text-gray-600 mb-6">
                Nous sommes spécialisés dans la création de solutions d'automatisation intelligentes qui transforment réellement votre façon de travailler.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expertise n8n</h3>
                    <p className="text-gray-600">Maîtrise complète de la plateforme n8n pour des automatisations robustes et évolutives.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Solutions Personnalisées</h3>
                    <p className="text-gray-600">Chaque projet est unique. Nous créons des solutions adaptées à vos besoins spécifiques.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ROI Rapide</h3>
                    <p className="text-gray-600">Nos solutions génèrent des économies de temps et d'argent dès les premières semaines.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                    <span className="font-semibold">Temps de réponse</span>
                    <span className="text-primary-600 font-bold">-70%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                    <span className="font-semibold">Productivité</span>
                    <span className="text-primary-600 font-bold">+150%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                    <span className="font-semibold">Coûts opérationnels</span>
                    <span className="text-primary-600 font-bold">-60%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                    <span className="font-semibold">Satisfaction client</span>
                    <span className="text-primary-600 font-bold">+90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre Processus</h2>
            <p className="text-xl text-gray-600">Une méthodologie éprouvée pour garantir votre succès</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Analyse</h3>
              <p className="text-gray-600">
                Nous analysons en profondeur vos processus et identifions les opportunités d'automatisation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Conception</h3>
              <p className="text-gray-600">
                Création d'une solution sur mesure adaptée à vos besoins et objectifs spécifiques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Développement</h3>
              <p className="text-gray-600">
                Mise en place de votre solution avec tests rigoureux et optimisations continues.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <p className="text-gray-600">
                Accompagnement continu, maintenance et optimisations pour maximiser les résultats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600">Des résultats concrets qui parlent d'eux-mêmes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Intelliwave a transformé notre service client. Notre chatbot répond à 80% des demandes automatiquement, permettant à notre équipe de se concentrer sur les cas complexes."
              </p>
              <div className="font-bold">Sophie Martin</div>
              <div className="text-gray-500 text-sm">Directrice Marketing, TechCorp</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "L'automatisation n8n mise en place nous fait gagner 20 heures par semaine. Un investissement qui s'est rentabilisé en moins de 2 mois."
              </p>
              <div className="font-bold">Jean Dupont</div>
              <div className="text-gray-500 text-sm">CEO, StartupInnovante</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Équipe professionnelle et réactive. Ils ont compris nos besoins et livré une solution qui dépasse nos attentes. Je recommande vivement!"
              </p>
              <div className="font-bold">Marie Leclerc</div>
              <div className="text-gray-500 text-sm">COO, E-Commerce Plus</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Automatiser Votre Entreprise ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discutons de votre projet et découvrez comment Intelliwave peut transformer votre activité avec l'IA et l'automatisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:contact@intelliwave.ai"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@intelliwave.ai
            </a>
            <a
              href="tel:+33123456789"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition border-2 border-white inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +33 1 23 45 67 89
            </a>
          </div>
          <div className="text-sm opacity-75">
            Consultation gratuite · Réponse sous 24h · Sans engagement
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">Intelliwave</h3>
              <p className="text-gray-400">
                Votre partenaire en automatisation AI et chatbots intelligents.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">Chatbots sur Mesure</a></li>
                <li><a href="#services" className="hover:text-white transition">Automatisation n8n</a></li>
                <li><a href="#services" className="hover:text-white transition">Consulting IA</a></li>
                <li><a href="#services" className="hover:text-white transition">Intégration API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">À Propos</a></li>
                <li><a href="#process" className="hover:text-white transition">Notre Processus</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@intelliwave.ai</li>
                <li>+33 1 23 45 67 89</li>
                <li>Paris, France</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Intelliwave. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
