import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWordpress, FaShopify } from "react-icons/fa6";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen bg-gray-900 text-white pt-20">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-20">
                <div className="grid lg:grid-cols-2 items-center min-h-[80vh] gap-8">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <span className="text-lg font-medium text-blue-400">Welcome to my world</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Hi, I&apos;m <span className="text-blue-400">Roy De La Torre</span> a Developer
                            </h1>
                            <p className="text-lg text-gray-300 max-w-xl">
                                As a versatile developer, I specialize in crafting immersive WordPress and
                                Shopify solutions, delivering seamless experiences tailored to client needs and driving
                                online success.
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                            <div className="space-y-4">
                                <p className="text-sm uppercase tracking-wider text-gray-400">Find with me</p>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.facebook.com/chusiekokoro"
                                        className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaFacebook className="w-5 h-5 text-blue-400" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/kaitto1425/"
                                        className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center hover:bg-pink-600 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram className="w-5 h-5 text-pink-400" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/roy-dela-torre-6518b11b9/"
                                        className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin className="w-5 h-5 text-blue-400" />
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm uppercase tracking-wider text-gray-400">Best skill on</p>
                                <div className="flex space-x-4">
                                    <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                                        <FaWordpress className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                                        <FaShopify className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                                        <FaGithub className="w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-80 h-96 lg:w-96 lg:h-[480px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden">
                                <Image
                                    src="/portfolio/profile.png"
                                    alt="Roy De La Torre"
                                    width={400}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
