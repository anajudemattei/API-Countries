"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";

const CountriesPage = () => {
  const [status, setStatus] = useState('Iniciando...');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const paginationOptions = [5, 10, 20, 50, 100, 200, 'Todos'];

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        setStatus('Carregando países de todas as regiões...');
        
        const regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];
        const allCountries = [];
        
        for (const region of regions) {
          const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
          
          if (response.ok) {
            const data = await response.json();
            allCountries.push(...data);
          }
        }
        
        const uniqueCountries = allCountries
          .filter((country, index, self) => 
            index === self.findIndex(c => c.cca3 === country.cca3)
          )
          .sort((a, b) => a.name.common.localeCompare(b.name.common));
        
        setCountries(uniqueCountries);
        setStatus('');
        
      } catch (error) {
        setStatus(`Erro: ${error.message}`);
        console.error('Erro completo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCountries();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = itemsPerPage === 'todos' ? countries : countries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = itemsPerPage === 'todos' ? 1 : Math.ceil(countries.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }
    
    return pageNumbers;
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-200 via-teal-200 to-sky-300">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-xl text-emerald-800 font-medium">Carregando países do mundo...</p>
          <p className="text-emerald-700 mt-2">{status}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-200 via-teal-200 to-sky-300 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
            🌍 Todos os Países do Mundo
          </h1>
          {status && (
            <p className="text-lg text-emerald-700 mb-6">
              {status}
            </p>
          )}
          
          <Link href="/sobre">
            <button className="bg-white hover:bg-emerald-100 text-emerald-700 font-medium py-2 px-6 rounded-lg transition-colors duration-200 shadow-md border border-emerald-300 mb-8">
              ← Voltar para Sobre
            </button>
          </Link>
        </div>

        {countries.length > 0 && (
          <div className="mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <h2 className="text-xl font-bold text-emerald-800">
                    {countries.length} países encontrados
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {paginationOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleItemsPerPageChange(option)}
                          className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 ${
                            itemsPerPage === option
                              ? 'bg-emerald-500 text-white'
                              : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentCountries.map((country, index) => (
            <div
              key={country.cca3 || index}
              className="bg-gradient-to-br from-cyan-100 via-sky-100 to-emerald-100 rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-emerald-200"
            >
              <div className="text-center mb-4">
                {country.flags?.png && (
                  <img 
                    src={country.flags.png} 
                    alt={`Bandeira de ${country.name.common}`}
                    className="w-48 h-32 object-cover rounded mx-auto mb-4 shadow-md border border-emerald-200"
                  />
                )}
                <h3 className="text-xl font-bold text-emerald-800 mb-4">
                  {country.name.common}
                </h3>
              </div>

              <div className="text-center">
                <Link href={`/paises/${country.cca3}`}>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 shadow-md">
                    Ver Detalhes
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {countries.length > 0 && itemsPerPage !== 'todos' && totalPages > 1 && (
          <div className="mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {currentPage > 1 && (
                    <>
                      <button
                        onClick={() => handlePageChange(1)}
                        className="px-3 py-2 rounded bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors duration-200 font-medium"
                      >
                        ««
                      </button>
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="px-3 py-2 rounded bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors duration-200 font-medium"
                      >
                        ‹
                      </button>
                    </>
                  )}

                  {getPageNumbers().map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-3 py-2 rounded font-medium transition-colors duration-200 ${
                        currentPage === pageNumber
                          ? 'bg-emerald-500 text-white'
                          : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  {currentPage < totalPages && (
                    <>
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-3 py-2 rounded bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors duration-200 font-medium"
                      >
                        ›
                      </button>
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        className="px-3 py-2 rounded bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors duration-200 font-medium"
                      >
                        »»
                      </button>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-emerald-700 font-medium">Ir para página:</span>
                  <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={currentPage}
                    onChange={(e) => {
                      const page = parseInt(e.target.value);
                      if (page >= 1 && page <= totalPages) {
                        handlePageChange(page);
                      }
                    }}
                    className="w-16 px-2 py-1 border border-emerald-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <span className="text-emerald-700">de {totalPages}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CountriesPage;