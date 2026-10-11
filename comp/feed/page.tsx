import Link from "next/link";

export default function Feed() {
    return (
        <div>
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-center">
                
                {/* Main Feed Column */}
                <main className="flex w-full min-w-0 max-w-2xl flex-col gap-4">
                    <article className="w-full rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-lg transition hover:border-slate-700">
                        {/* Author Header */}
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                                S
                            </div>
                            <div>
                                <h3 className="font-medium text-slate-200">Saidur Rahman</h3>
                                <p className="text-lg text-slate-400">Why you can't sleep well?</p>
                            </div>
                        </div>

                        {/* Post Content */}
                        <div className="space-y-3">
                            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                                Struggling to sleep well? You are not alone. Frequent nighttime waking or difficulty falling asleep often stems from daily habits and environmental factors. High stress levels and anxiety keep your mind racing, while blue light exposure from phones and screens late at night suppresses melatonin, your body’s natural sleep hormone.
                                Irregular sleep schedules, late-night caffeine or heavy meals, and an uncomfortable bedroom setup—such as excessive noise, heat, or light—also disrupt your body's natural circadian rhythm. By creating a soothing bedtime routine, limiting screen time before bed, and keeping your bedroom cool and dark, you can restore restful, rejuvenating sleep.
                            </p>
                        </div>
                    </article>
                    
                </main>

            </div>
        </div>
    )
}