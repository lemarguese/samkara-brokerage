import { GlobeIcon, LogIn, LogInIcon, PhoneIcon } from "lucide-react";

export default function Header () {
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-uber-900/95 backdrop-blur-sm shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 md:h-20"><a href="/"
                                                                         className="flex items-center gap-3">
        <div
          className="w-11 h-11 bg-taxi-500 rounded-xl flex items-center justify-center shadow-lg shadow-taxi-500/30">
        </div>
        <div className="flex flex-col"><span
          className="text-lg font-bold text-white leading-tight uppercase">SAMKARA</span><span
          className="text-xs font-semibold text-taxi-500 uppercase tracking-wider">BROKERAGE</span></div>
      </a>
        <div className="hidden lg:flex items-center gap-4">
          <a href="/insurance"
             className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">Insurance</a><a
          href="/marketplace"
          className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">Market</a><a
          href="/dmv-tlc"
          className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">DMV/TLC</a><a
          href="/faq" className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">FAQ</a><a
          href="/#testimonials"
          className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">Testimonials</a><a
          href="/#contact"
          className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">Contact</a>
          <div className="relative">
            <button
              className="flex items-center gap-1 text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">
              <GlobeIcon className='w-4 h-4'/>
            </button>
          </div>
          <a href="tel:+12123145555"
             className="flex items-center gap-2 bg-taxi-500 text-uber-900 px-4 py-2 rounded-xl font-bold hover:bg-taxi-400 transition-colors shadow-lg shadow-taxi-500/30 text-sm">
            <PhoneIcon className='w-4 h-4'/>
            (212) 314-5555</a>
          <button
            className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20 text-sm">
            <LogInIcon className='w-4 h-4'/>
            Sign In
          </button>
        </div>
        <button className="lg:hidden p-2 text-white" aria-label="Toggle menu">

        </button>
      </div>
    </div>
  </nav>
}
