
const AwardBadge = ({ title, year }: { title: string; year: string }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="w-16 h-16 mb-4 text-altora-gold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z" />
            </svg>
        </div>
        <h3 className="text-lg font-semibold text-altora-navy text-center">{title}</h3>
        <p className="text-altora-gray-dark">{year}</p>
    </div>
);

const AwardsSection = () => {
    return (
        <div className="bg-altora-gray py-16">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-serif text-center text-altora-navy mb-12">
                    Award-Winning Excellence
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AwardBadge
                        title="Best Luxury Real Estate Agency"
                        year="2023"
                    />
                    <AwardBadge
                        title="Excellence in Customer Service"
                        year="2023"
                    />
                    <AwardBadge
                        title="International Property Awards"
                        year="2022"
                    />
                </div>
            </div>
        </div>
    );
};

export default AwardsSection; 