"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from "next/link";

const CountryDetailPage = () => {
  const params = useParams();
  const countryCode = params.id;
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        
        if (!response.ok) {
          throw new Error('País não encontrado');
        }
        
        const data = await response.json();
        const countryData = data[0];
        
        setCountry(countryData);
        
      } catch (error) {
        console.error('Erro:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (countryCode) {
      fetchCountry();
    }
  }, [countryCode]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-200 via-teal-200 to-sky-300">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-xl text-emerald-800 font-medium">Carregando informações do país...</p>
        </div>
      </main>
    );
  }

  if (error || !country) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-200 via-teal-200 to-sky-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-emerald-800 mb-4">
            ❌ {error || 'País não encontrado'}
          </h1>
          <Link href="/paises">
            <button className="bg-white hover:bg-emerald-100 text-emerald-700 font-medium py-2 px-6 rounded-lg transition-colors duration-200 shadow-md border border-emerald-300">
              ← Voltar para Países
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-200 via-teal-200 to-sky-300 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/paises">
            <button className="bg-white hover:bg-emerald-100 text-emerald-700 font-medium py-2 px-6 rounded-lg transition-colors duration-200 shadow-md border border-emerald-300 mb-6">
              ← Voltar para Países
            </button>
          </Link>
        </div>

        <div className="bg-gradient-to-br from-cyan-100 via-sky-100 to-emerald-100 rounded-xl shadow-lg p-8 border border-emerald-200">
          
          <div className="text-center mb-8">
            {country.flags?.png && (
              <img 
                src={country.flags.png} 
                alt={`Bandeira de ${country.name.common}`}
                className="w-72 h-44 object-cover rounded-lg mx-auto mb-4 shadow-lg border-2 border-emerald-200"
              />
            )}
            <h1 className="text-4xl font-bold text-emerald-800 mb-2">
              {country.name.common}
            </h1>
            <h2 className="text-xl text-emerald-600 font-medium">
              {country.name.official}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4 border-b-2 border-emerald-300 pb-2">
                📊 Detalhes do País
              </h3>
              
              <div className="bg-white/50 rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-emerald-600 font-semibold">🏛️ Capital:</span>
                </div>
                <span className="text-gray-700 text-lg">{country.capital?.[0] || 'N/A'}</span>
              </div>
              
              <div className="bg-white/50 rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-emerald-600 font-semibold">👥 População:</span>
                </div>
                <span className="text-gray-700 text-lg">{country.population?.toLocaleString() || 'N/A'} habitantes</span>
              </div>
              
              <div className="bg-white/50 rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-emerald-600 font-semibold">🌎 Região:</span>
                </div>
                <span className="text-gray-700 text-lg">{country.region || 'N/A'}</span>
              </div>
              
              <div className="bg-white/50 rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-emerald-600 font-semibold">🗺️ Sub-região:</span>
                </div>
                <span className="text-gray-700 text-lg">{country.subregion || 'N/A'}</span>
              </div>
              
              <div className="bg-white/50 rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-emerald-600 font-semibold">📏 Área:</span>
                </div>
                <span className="text-gray-700 text-lg">{country.area ? `${country.area.toLocaleString()} km²` : 'N/A'}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4 border-b-2 border-emerald-300 pb-2">
                🔍 Informações Adicionais
              </h3>
              
              <div className="bg-white/50 rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-emerald-600 font-semibold">🗣️ Idiomas:</span>
                </div>
                <span className="text-gray-700 text-lg">
                  {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
                </span>
              </div>
              
              <div className="bg-white/50 rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-emerald-600 font-semibold">💰 Moedas:</span>
                </div>
                <span className="text-gray-700 text-lg">
                  {country.currencies ? 
                    Object.values(country.currencies).map(curr => `${curr.name} (${curr.symbol})`).join(', ') 
                    : 'N/A'}
                </span>
              </div>
              
              <div className="bg-white/50 rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-emerald-600 font-semibold">🕐 Fusos Horários:</span>
                </div>
                <span className="text-gray-700 text-lg">
                  {country.timezones ? country.timezones.join(', ') : 'N/A'}
                </span>
              </div>
              
              <div className="bg-white/50 rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-emerald-600 font-semibold">🌍 Continentes:</span>
                </div>
                <span className="text-gray-700 text-lg">
                  {country.continents ? country.continents.join(', ') : 'N/A'}
                </span>
              </div>
            </div>
          </div>

          {country.borders && country.borders.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4 border-b-2 border-emerald-300 pb-2">
                🗺️ Países Vizinhos
              </h3>
              <div className="bg-white/50 rounded-lg p-4 shadow-sm">
                <div className="flex flex-wrap gap-2">
                  {country.borders.map((border, index) => (
                    <span 
                      key={index}
                      className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium border border-emerald-300"
                    >
                      {border}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CountryDetailPage;
