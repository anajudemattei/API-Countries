import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-200 via-teal-200 to-sky-300 p-6">
            <div className="w-full max-w-3xl rounded-xl shadow-xl bg-gradient-to-br from-cyan-100 via-sky-100 to-emerald-100 p-10 flex flex-col items-center border border-emerald-200 relative overflow-hidden">
                
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-8 left-8 w-16 h-16 bg-emerald-400 rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-12 h-12 bg-sky-400 rounded-full"></div>
                    <div className="absolute top-1/3 right-12 w-8 h-8 bg-teal-400 rounded-full"></div>
                </div>

                <div className="flex flex-col items-center w-full relative z-10">
                    <Image
                        src="/mundo.png"
                        alt="Imagem do mundo"
                        width={180}
                        height={180}
                        className="rounded-full border-4 border-emerald-400 shadow-xl mb-6 mt-6 object-cover hover:scale-105 transition-transform duration-300"
                    />

                    <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 text-center tracking-tight">
                        Sobre o Projeto
                    </h1>

                    <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg border border-white/20">
                        <h2 className="text-2xl font-bold text-emerald-700 mb-4 text-center">Sobre a API utilizada</h2>
                        <p className="text-center text-base mb-3 leading-relaxed text-emerald-800">
                            Este projeto utiliza uma API de países (<span className="font-semibold text-emerald-600">REST Countries</span>), que fornece informações detalhadas sobre todos os países do mundo, como nome, capital, população, bandeira, região, idiomas e muito mais.
                        </p>
                        <p className="text-center text-base mb-3 leading-relaxed text-emerald-800">
                            Através dessa API, é possível buscar, listar e visualizar detalhes de cada país de forma dinâmica e interativa. O objetivo é demonstrar como consumir dados externos em aplicações React/Next.js.
                        </p>
                        <p className="text-center text-base leading-relaxed text-emerald-800">
                            Explore a aplicação e veja como a integração com a API facilita o acesso a informações globais de maneira rápida e visual!
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-4 text-emerald-700">Conheça a API! ⬇️</h2>
                    <div className="flex flex-row gap-5 justify-center items-center mb-8">
                        <a href="https://restcountries.com/#rest-countries" target="_blank" rel="noopener noreferrer" title="REST Countries API" className="group">
                            <div className="bg-white/50 p-3 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                <Image src="/api.png" alt="API" width={40} height={40} className="object-contain" />
                            </div>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/">
                            <button className="bg-white hover:bg-emerald-100 text-emerald-700 font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-emerald-300">
                                ← Página Inicial
                            </button>
                        </Link>
                        <Link href="/paises">
                            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-emerald-600">
                                🌍 Ver Países →
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
