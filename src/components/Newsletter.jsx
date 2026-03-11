import { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Yangiliklardan xabardor bo‘ling</h2>
                    <p className="text-xl mb-8 text-cyan-100">
                        Maxsus takliflar va sayohat maslahatlari uchun bizning yangiliklarimizga obuna bo‘ling
                    </p>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-4 py-3 rounded-lg text-gray-100 focus:outline-none focus:ring-2 border-2 border-yellow-400 rounded p-2 focus:ring-blue-900"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                        >
                            Obuna bo'ling
                        </button>
                    </form>

                    {submitted && (
                        <p className="mt-4 text-yellow-300 font-semibold">
                            ✓ Rahmat obuna uchun!
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
