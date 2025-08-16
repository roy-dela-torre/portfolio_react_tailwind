import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-800 text-white border-t border-gray-700">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-20">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
            <Image
              src="/portfolio/profile.png"
              alt="Roy De La Torre"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-300">
            © 2025. All rights reserved by{" "}
            <a 
              href="https://chuseikokoro.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition-colors"
            >
              Chusie Kokoro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
