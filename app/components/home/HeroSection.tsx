
const HeroSection = () => {
    return (
        <div className="relative h-screen min-h-[600px] w-full">
            {/* Placeholder background image with overlay */}
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop')] 
        bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-altora-navy/70"></div>
            </div>

            {/* Content */}
            <div className="relative container h-full flex flex-col justify-center">
                <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
                    Luxury Living,<br />
                    <span className="text-altora-gold">Redefined</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                    Experience unparalleled real estate excellence with Altora Global's curated collection of prestigious properties worldwide.
                </p>
                <button className="mt-8 bg-altora-gold hover:bg-altora-gold-light text-white px-8 py-3 rounded-md text-lg transition-colors duration-300 w-fit">
                    Explore Properties
                </button>
            </div>
        </div>
    );
};

export default HeroSection; 