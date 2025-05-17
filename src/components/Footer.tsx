import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Mengimpor ikon dari Lucide

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="flex space-x-6">
                        <a href="#" className="text-white hover:text-gray-400">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; 2025 Kelompok 2. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
