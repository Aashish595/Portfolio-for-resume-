export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PORTFOLIO
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">© {new Date().getFullYear()} Gurudas Maurya. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-1">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
