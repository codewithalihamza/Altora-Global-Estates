
const MediaLogo = ({ name }: { name: string }) => (
    <div className="flex items-center justify-center p-4">
        <div className="h-12 flex items-center justify-center text-altora-gray-dark/50 font-serif text-xl">
            {name}
        </div>
    </div>
);

const FeaturedInSection = () => {
    return (
        <div className="bg-white py-12 border-y border-altora-gray/20">
            <div className="container">
                <h3 className="text-center text-altora-gray-dark text-sm uppercase tracking-wider mb-8">
                    As Featured In
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <MediaLogo name="Forbes" />
                    <MediaLogo name="Bloomberg" />
                    <MediaLogo name="Financial Times" />
                    <MediaLogo name="Wall Street Journal" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedInSection; 