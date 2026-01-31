const Footer = () => {
    return (
        <div className="w-full bg-black flex flex-col py-10 items-center gap-2">
            <a href="https://www.arjc.me" className="text-4xl font-mono font-extrabold hover:underline">arjc.me</a>
            <div className="flex gap-3 font-mono">
                <a href="https://www.github.com/arjc" className="underline hover:no-underline opacity-50 hover:opacity-100">gh/arjc</a>
                <span className="opacity-50"> | </span>
                <a href="https://www.github.com/arjc/interactive-orrery" className="underline hover:no-underline opacity-50 hover:opacity-100">repository</a>
            </div>

            <span className="opacity-75 text-[0.7em]">Arjun M Liji 2026. Open-source under MIT.</span>

        </div>
    )
}

export default Footer