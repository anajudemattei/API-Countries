import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-200 via-teal-200 to-sky-300 p-6">
            <div className="w-full max-w-3xl rounded-xl shadow-lg bg-gradient-to-br from-cyan-100 via-sky-100 to-emerald-100 p-10 flex flex-col items-center">
                <div className="flex flex-col items-center w-full">
                                                <Image
                                                    src="/mundo.png"
                                                    alt="Imagem do mundo"
                                                    width={180}
                                                    height={180}
                                                    className="rounded-full border-4 border-emerald-400 shadow-lg mb-4 mt-6 object-cover"
                                                />

                                <h2 className="text-2xl font-bold text-emerald-700 mb-2 text-center">Sobre a API utilizada</h2>
                                <p className="text-center text-base mb-2">
                                    Este projeto utiliza uma API de países (<span className="font-semibold">REST Countries</span>), que fornece informações detalhadas sobre todos os países do mundo, como nome, capital, população, bandeira, região, idiomas e muito mais.
                                </p>
                                <p className="text-center text-base mb-2">
                                    Através dessa API, é possível buscar, listar e visualizar detalhes de cada país de forma dinâmica e interativa. O objetivo é demonstrar como consumir dados externos em aplicações React/Next.js, além de praticar o uso de componentes, hooks e estilização com Tailwind CSS.
                                </p>
                                <p className="text-center text-base">
                                    Explore a aplicação e veja como a integração com a API facilita o acesso a informações globais de maneira rápida e visual!
                                </p>
                            

                  <h1 className="text-4xl md:text-2xl font-bold text-center mb-4 text-cyan-700">Conheça a API!</h1>
                                                    <div className="flex flex-row gap-5 justify-center items-center my-4">
                                                        <a href="https://restcountries.com/#rest-countries" target="_blank" rel="noopener noreferrer" title="API">
                                                            <Image src="/api.png" alt="API" width={40} height={40} className="hover:scale-110 transition-transform" />
                                                        </a>
                                                    </div>

                    <div className="flex flex-row gap-4 justify-center items-center mt-6">
                        <Link href="/">
                            <button className="bg-white hover:bg-emerald-100 text-emerald-700 font-medium py-2 px-6 rounded transition-colors duration-200 shadow-md border border-emerald-300">
                                Voltar para a página inicial
                            </button>
                        </Link>
                        <Link href="/app/pacientes">
                            <button className="bg-cyan-300 hover:bg-sky-400 text-cyan-900 font-medium py-2 px-6 rounded transition-colors duration-200 shadow-md">
                                Continuar vendo o projeto
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
