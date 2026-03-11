const Testimonials = () => {
    const testimonials = [
        {
            name: 'Aziz Sobirov',
            location: 'Tashkent',
            image: '👩‍💼',
            rating: 5,
            text: 'TravelTour sayohatlarimizni oson va maroqli qiladigan platforma. Tavsiya qilaman!'
        },
        {
            name: 'Asad Azimov',
            location: 'Bukhara',
            image: '👨‍💼',
            rating: 5,
            text: 'Arzon narxlar, a’lo xizmat va esda qolarli manzillar – TravelTour bilan har safar yangi kashfiyot.'
        },
        {
            name: 'Ibrohim Rustamov',
            location: 'Xorazm',
            image: '👩‍🦱',
            rating: 5,
            text: 'Har bir safarimiz mukammal o‘tdi! TravelTour orqali sayohat qilish oson va maroqli bo‘ldi.'
        },
        {
            name: 'Husan Saidov',
            location: 'Samarkand',
            image: '👨‍🦲',
            rating: 5,
            text: 'Professional jamoa, qulay narxlar va ajoyib yonalishlar. TravelTour sayohatlarimni rejalashtirishda birinchi tanlovim.'
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Bizning sayohatchilarimiz nima deydi</h2>
                    <p className="text-xl text-gray-600">
                        Biz bilan dunyoni kashf etgan minglab baxtli mijozlarga qo‘shiling
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-start mb-4">
                                <div className="text-4xl mr-4">{testimonial.image}</div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">⭐</span>
                                ))}
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
