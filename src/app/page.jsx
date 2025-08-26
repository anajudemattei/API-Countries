import Image from "next/image";
import Link from "next/link";
export default function Home() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-blue-600 p-6">
			<div className="w-full max-w-3xl rounded-xl shadow-lg bg-gradient-to-br from-blue-200 to-blue-500 p-10 flex flex-col items-center">
				<div className="flex flex-col items-center w-full">
												<Image
													src="/anaju.jpg"
													alt="Foto de perfil de Ana Julia Demattei"
													width={180}
													height={180}
													className="rounded-full border-4 border-blue-400 shadow-lg mb-4 mt-6 object-cover"
												/>
									<h1 className="text-4xl md:text-4xl font-bold text-center mb-4">Seja Bem-Vindo!</h1>
							<p className="text-center text-lg mb-1">Eu sou a Ana Julia Demattei, estudante do SENAI de Valinhos-SP na turma TDS1, durante essa atividade de Front-End, estou desenvolvendo um projeto utilizando tailwind e outras tecnologias, com auxilio dos instrutores Thiago Ferreira e Marcelo Carboni.</p>

                  <h1 className="text-4xl md:text-3xl font-bold text-center mb-4">Conheça mais sobre mim!</h1>
													<div className="flex flex-row gap-5 justify-center items-center my-4">
														<a href="https://github.com/anajudemattei" target="_blank" rel="noopener noreferrer" title="GitHub">
															<Image src="/github.png" alt="GitHub" width={32} height={32} className="hover:scale-110 transition-transform" />
														</a>
														<a href="https://linkedin.com/in/anajudemattei" target="_blank" rel="noopener noreferrer" title="LinkedIn">
															<Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} className="hover:scale-110 transition-transform" />
														</a>
														<a href="mailto:ana.demattei@aluno.senai.br" title="Gmail">
															<Image src="/gmail.png" alt="Gmail" width={32} height={32} className="hover:scale-110 transition-transform" />
														</a>
													</div>

																				 <Link href="/sobre">
																					 <button className="bg-blue-300 hover:bg-blue-400 text-blue-900 font-medium py-2 px-6 rounded transition-colors duration-200 shadow-md">
																						 Venha conhecer a API!
																					 </button>
																				 </Link>
				</div>
			</div>
		</main>
	);
}
