
const StatItem = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center px-8">
        <div className="text-4xl md:text-5xl font-serif text-altora-navy mb-2 animate-[countUp_2s_ease-out]">
            {value}
        </div>
        <div className="text-altora-gray-dark text-lg">{label}</div>
    </div>
);

const StatsSection = () => {
    return (
        <div className="bg-white py-16">
            <div className="container">
                <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                    <StatItem value="312+" label="Properties Sold" />
                    <StatItem value="$228M+" label="Total Value" />
                    <StatItem value="98%" label="Client Satisfaction" />
                </div>
            </div>
        </div>
    );
};

export default StatsSection; 