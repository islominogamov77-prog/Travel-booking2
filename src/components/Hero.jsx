import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative h-screen bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
                }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
                        Sayohat Chiptalari
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200">
                        Hohlagan joyingizni toping va yangi sarguzashtlarga tayyorlaning!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#destinations"
                            className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-lg"
                        >
                            Yo‘nalishlarni ko‘rish
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
