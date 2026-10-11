'use client';

import Link from "next/link";
import { useState } from "react";

export default function AddResource() {
    const [url, setUrl] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Add your submission logic or API call here
        console.log("Submitted URL:", url);
    };

    return (
       <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
            
            {/* Back Link */}
            <div className="mb-6">
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition"
                >
                    ← Back to Feed
                </Link>
            </div>

            {/* Form Card Container */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 shadow-xl">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold tracking-tight text-white mb-2">Add New Resource</h1>
                    <p className="text-sm text-slate-400">Paste your link below to share or add it to your resource collection.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Changed space-y-13 (which is invalid in Tailwind) to space-y-2 */}
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-slate-300 uppercase tracking-wider block">
                            Resource URL
                        </label>
                        <input
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://example.com"
                            required
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium py-3 rounded-xl text-sm transition shadow-lg shadow-blue-600/20 mt-2"
                    >
                        Submit Resource
                    </button>
                </form>
            </div>

        </div>
    </div>
    );
}