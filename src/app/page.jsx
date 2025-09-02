import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-cyan-700 p-6">
            <div className="w-full max-w-3xl rounded-xl shadow-lg bg-gradient-to-br from-cyan-200 to-cyan-600 p-10 flex flex-col items-center">
                <Image
                    src="/anaju.jpg"
                    alt="Foto de perfil de Ana Julia Demattei"
                    width={180}
                    height={180}
                    className="rounded-full border-4 border-cyan-400 shadow-lg mb-6 object-cover"
                />

                <h1 className="text-4xl font-bold text-center mb-4 text-white">Ana Julia Demattei</h1>

                <p className="text-lg text-center text-white mb-4">
                    Turma: TDS1 | Escola: SENAI Valinhos-SP
                </p>

                <blockquote className="text-center text-lg italic text-white mb-6">
                    
                </blockquote>

                <div className="mt-8">
                    <a href="/sobre">
                        <button className="bg-cyan-300 hover:bg-cyan-400 text-cyan-900 font-medium py-2 px-6 rounded transition-colors duration-200 shadow-md">
                            Explorar Países
                        </button>
                    </a>
                </div>
            </div>
        </main>
    );
}