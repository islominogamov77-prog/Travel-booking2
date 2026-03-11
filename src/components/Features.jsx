const Features = () => {
    const features = [
        {
            icon: '🌍',
            title: 'Dunyo bo‘ylab sayohat yo‘nalishlarini kashf eting',
            description: 'Barcha qit’alarda 1000 dan ortiq ajoyib sayohat yo‘nalishlarini kashf eting'
        },
        {
            icon: '💰',
            title: 'Eng yaxshi narxlar kafolatlanadi',
            description: 'Barcha sayohat paketlarida eng yaxshi takliflar va eksklyuziv chegirmalarni qo‘lga kiriting'
        },
        {
            icon: '🔒',
            title: 'Xavfsiz va Ishonchli',
            description: 'Sizning xavfsizligingiz va maxfiyligingiz bizning eng ustuvor vazifamiz. Tinim bilanoq sayohat qiling'
        },
        {
            icon: '📱',
            title: 'Oson Bron qilish',
            description: 'Shaxsiy tavsiyalar bilan sodda va tushunarli bron qilish jarayoni'
        },
        {
            icon: '🎯',
            title: 'Mutaxassislar tomonidan rejalashtirish',
            description: 'Mukammal sayohat uchun bizning sayohat mutaxassislarimizdan ekspert maslahat oling'
        },
        {
            icon: '⭐',
            title: 'Premium xizmat',
            description: 'Sizning sayohatingiz davomida yordam berish uchun 24/7 mijozlarni qo‘llab-quvvatlash'
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nima uchun bizni tanlash kerak?</h2>
                    <p className="text-xl text-gray-600">
                        Bizning keng qamrovli sayohat yechimlarimiz bilan farqni his eting
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
