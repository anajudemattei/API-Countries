import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-200 via-teal-200 to-sky-300 p-6">
      <div className="w-full max-w-4xl rounded-xl shadow-xl bg-gradient-to-br from-cyan-100 via-sky-100 to-emerald-100 p-12 flex flex-col items-center relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-sky-400 rounded-full"></div>
          <div className="absolute top-1/2 right-20 w-12 h-12 bg-teal-400 rounded-full"></div>
          <div className="absolute bottom-1/3 left-16 w-8 h-8 bg-cyan-400 rounded-full"></div>
        </div>

        <div className="flex flex-col items-center w-full relative z-10">
          
          <div className="mb-8">
            <Image
              src="/mundo.png"
              alt="Imagem do mundo"
              width={100}
              height={100}
              className="rounded-full border-4 border-emerald-400 shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-4 tracking-tight">
              Countries API
            </h1>
            <p className="text-xl text-emerald-700 font-medium mb-6">
              Explore países de todo o mundo
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-md border border-white/20">
            <div className="flex flex-col items-center justify-center gap-6">
              <Image
                src="/anaju.jpg"
                alt="Minha foto"
                width={150}
                height={150}
                className="rounded-full border-3 border-emerald-400 shadow-xl object-cover"
              />
              <div className="text-center space-y-2">
                <p className="text-emerald-800 font-semibold text-lg">Desenvolvido por</p>
                <p className="text-emerald-700 font-bold text-2xl">Ana Julia Demattei</p>
                <p className="text-emerald-600 font-medium text-base">Turma: 2TDS1</p>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <a 
                  href="https://github.com/anajudemattei" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Image
                    src="/github.png"
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>

                <a 
                  href="https://instagram.com/anajudemattei" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Image
                    src="/instagram.png"
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
                
                <a 
                  href="https://linkedin.com/in/ana-julia-demattei" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
                
                <a 
                  href="mailto:anaju.demattei@gmail.com" 
                  title="Gmail"
                >
                  <Image
                    src="/gmail.png"
                    alt="Gmail"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
              </div>

              <div className="bg-emerald-100/50 rounded-lg p-4 border border-emerald-200">
                <p className="text-emerald-800 text-center italic text-sm leading-relaxed">
                  "A vida é feita de escolhas. E cada escolha é uma renúncia. Isso é inevitável." - Pequeno 
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Link href="/sobre">
              <button className="group bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-emerald-600">
                <span className="flex items-center gap-2">
                  <span>📖 Sobre o Projeto</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </Link>
            
            <Link href="/paises">
              <button className="group bg-white hover:bg-emerald-50 text-emerald-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-emerald-300">
                <span className="flex items-center gap-2">
                  <span>🌍 Ver Países</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}