'use client';

import { useState, useEffect } from 'react';

export default function ExtractDPWHPage() {
    const [contractsJson, setContractsJson] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const [copied, setCopied] = useState(false);
    const [instructions, setInstructions] = useState(true);

    useEffect(() => {
        // Check if we're on the client and can access localStorage
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('dpwh_all_contracts');
            const countStr = localStorage.getItem('dpwh_extraction_count');

            if (stored) {
                setContractsJson(stored);
                setCount(parseInt(countStr || '0'));
                setInstructions(false);
            }
        }
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(contractsJson);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = contractsJson;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleDownload = () => {
        const blob = new Blob([contractsJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dpwh_new_contracts.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">DPWH Contract Data Extractor</h1>

                {instructions ? (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                        <h2 className="font-bold text-yellow-800 mb-3">
                            <i className="bi bi-exclamation-triangle mr-2"></i>
                            No Data Found in LocalStorage
                        </h2>
                        <p className="text-yellow-700 mb-4">
                            The extracted DPWH data is stored in the DPWH portal's localStorage, not here.
                        </p>
                        <ol className="list-decimal list-inside text-yellow-700 space-y-2">
                            <li>Open the DPWH portal tab: <a href="https://transparency.dpwh.gov.ph/" target="_blank" className="underline text-bz-primary">transparency.dpwh.gov.ph</a></li>
                            <li>Open DevTools (F12) → Console</li>
                            <li>Run this command to copy the data:</li>
                        </ol>
                        <pre className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 text-sm overflow-x-auto">
                            {`copy(localStorage.getItem('dpwh_all_contracts'))`}
                        </pre>
                        <p className="text-yellow-700 mt-4">
                            Then paste the JSON into a new file: <code className="bg-yellow-100 px-1">scripts/dpwh_new_contracts.json</code>
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                            <h2 className="font-bold text-green-800 mb-2">
                                <i className="bi bi-check-circle mr-2"></i>
                                Data Found: {count.toLocaleString()} Contracts
                            </h2>
                            <p className="text-green-700">
                                The extracted DPWH contracts are ready to be copied or downloaded.
                            </p>
                        </div>

                        <div className="flex gap-4 mb-6">
                            <button
                                onClick={handleCopy}
                                className="flex-1 bg-bz-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-bz-primary/90 transition-colors"
                            >
                                {copied ? (
                                    <>
                                        <i className="bi bi-check mr-2"></i> Copied!
                                    </>
                                ) : (
                                    <>
                                        <i className="bi bi-clipboard mr-2"></i> Copy JSON to Clipboard
                                    </>
                                )}
                            </button>
                            <button
                                onClick={handleDownload}
                                className="bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                            >
                                <i className="bi bi-download mr-2"></i> Download JSON
                            </button>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h3 className="font-bold text-gray-700 mb-2">Preview (first 1000 chars):</h3>
                            <pre className="bg-gray-50 p-4 rounded-lg text-xs overflow-x-auto max-h-96 overflow-y-auto">
                                {contractsJson.substring(0, 1000)}...
                            </pre>
                        </div>
                    </>
                )}

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="font-bold text-blue-800 mb-2">Next Steps:</h3>
                    <ol className="list-decimal list-inside text-blue-700 space-y-1">
                        <li>Copy the JSON data above</li>
                        <li>Save to: <code className="bg-blue-100 px-1">scripts/dpwh_new_contracts.json</code></li>
                        <li>Run: <code className="bg-blue-100 px-1">node scripts/merge-dpwh.js</code></li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
