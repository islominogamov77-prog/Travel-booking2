const Stats = () => {
    const stats = [
        {
            number: '50K+',
            label: 'Baxtli Sayohatchilar',
            icon: '👥'
        },
        {
            number: '1000+',
            label: 'Yo‘nalishlar',
            icon: '🌍'
        },
        {
            number: '150+',
            label: 'Mamlakatlar',
            icon: '🗺️'
        },
        {
            number: '4.9/5',
            label: 'O‘rtacha baholar',
            icon: '⭐'
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-cyan-900 to-blue-900 text-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-6xl mb-4">{stat.icon}</div>
                            <div className="text-4xl font-bold mb-2">{stat.number}</div>
                            <p className="text-xl text-blue-100">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
