'use client';
import { useState, useEffect } from 'react';

export default function UseCasePage() {
  const [companyName, setCompanyName] = useState('');
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem('userName');
    setUserName(name);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        throw new Error('User not authenticated. Please log in.');
      }

      const response = await fetch('http://localhost:5000/usecasegenerate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ company_name: companyName }),
      });

      const data = await response.json();
      if (response.ok) {
        setResults(data);
      } else {
        setError(data.error || 'An error occurred while generating the use case.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const parseContent = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\/(.*?)\//g, '<em>$1</em>')
      .replace(/\n/g, '<br />');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
          {userName ? `Welcome, ${userName}!` : 'AI Use Case Generator'}
        </h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Enter Company Name:
          </label>
          <input
            id="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition duration-150"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Use Case'}
          </button>
        </form>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
            {error}
          </div>
        )}

        {results && (
          <div className="bg-gray-50 p-6 rounded-md shadow-md max-h-96 overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Results for <span className="text-blue-600">{results.company_name}</span>:
            </h3>
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-md shadow-sm border">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Market Analysis</h4>
                <p
                  className="text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: parseContent(results.market_analysis) }}
                />
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm border">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">AI Use Cases</h4>
                <p
                  className="text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: parseContent(results.ai_use_cases) }}
                />
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm border">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Resources</h4>
                <p
                  className="text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: parseContent(results.resources) }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
