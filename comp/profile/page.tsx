'use client';

import { useState } from "react";

export default function Profile() {
    const [url, setUrl] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Add your submission logic or API call here
        console.log("Profile Sidebar Submitted URL:", url);
    };

    return (
        <div className="sticky top-8 hidden w-full max-w-xs flex-col gap-6 md:flex lg:shrink-0">
            {/* Profile Card */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col items-center text-center gap-3 shadow-lg">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white text-4xl font-bold shadow-md">
                    S
                </div>
                <div>
                    <h3 className="font-semibold text-lg text-white">Saidur Rahman</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Content Creator & Developer</p>
                </div>
            </div>

            {/* URL Submission Form */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-lg">
                <h4 className="font-medium text-slate-200 mb-3 text-sm">Add Resource</h4>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input 
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://example.com" 
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium p-2.5 rounded-xl text-sm transition shadow-sm"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}