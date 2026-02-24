import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Link } from "@/locale/navigation";

export default function Footer () {
  return <footer className="bg-uber-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2"><a href="#" className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 bg-taxi-500 rounded-xl flex items-center justify-center">
          </div>
          <div className="flex flex-col"><span className="text-lg font-bold text-white leading-tight uppercase">SAMKARA BROKERAGE</span><span
            className="text-xs font-semibold text-taxi-500 uppercase tracking-wider">TLC &amp; DMV Experts</span>
          </div>
        </a><p className="text-gray-400 mb-6 leading-relaxed">NYC's trusted insurance broker for Black Car, Car
          Service, Livery, Yellow Cab, and Ambulette drivers since 1994. One-stop shop for all your DMV and TLC
          needs.</p>
          <div className="flex gap-2 mb-6"><span
            className="bg-uber-800 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1"> Uber</span><span
            className="bg-lyft-500 text-white px-2 py-1 rounded text-xs font-bold">Lyft</span><span
            className="bg-taxi-500 text-uber-900 px-2 py-1 rounded text-xs font-bold">Taxi</span></div>
          <div className="flex gap-3"><a href="#"
                                         className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-taxi-500 hover:text-uber-900 transition-colors">
            <FacebookIcon/>
          </a><a href="#"
                 className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-taxi-500 hover:text-uber-900 transition-colors">
            <InstagramIcon/>
          </a><a href="#"
                 className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-taxi-500 hover:text-uber-900 transition-colors">
            <TwitterIcon/>
          </a><a href="#"
                 className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-taxi-500 hover:text-uber-900 transition-colors">
            <LinkedinIcon/>
          </a></div>
        </div>
        <div><h3 className="text-white font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/insurance" className="hover:text-taxi-500 transition-colors">Insurance</Link>
            </li>
            <li>
              <Link href="/dmv-tlc" className="hover:text-taxi-500 transition-colors">DMV &amp; TLC Services</Link>
            </li>
            <li>
              <Link href="/marketplace" className="hover:text-taxi-500 transition-colors">TLC Marketplace</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-taxi-500 transition-colors">FAQ</Link>
            </li>
            <li>
              <Link href="/#testimonials" className="hover:text-taxi-500 transition-colors">Testimonials</Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-taxi-500 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
        <div><h3 className="text-white font-bold mb-6">Vehicle Types</h3>
          <ul className="space-y-3">
            <li><span className="hover:text-taxi-500 transition-colors cursor-default">Black Car</span></li>
            <li><span className="hover:text-taxi-500 transition-colors cursor-default">Car Service</span></li>
            <li><span className="hover:text-taxi-500 transition-colors cursor-default">Livery</span></li>
            <li><span className="hover:text-taxi-500 transition-colors cursor-default">Yellow Cab</span></li>
            <li><span className="hover:text-taxi-500 transition-colors cursor-default">Ambulette</span></li>
          </ul>
        </div>
        <div><h3 className="text-white font-bold mb-6">Our Services</h3>
          <ul className="space-y-3">
            <li><Link href="/#contact" className="hover:text-taxi-500 transition-colors">Insurance Quotes</Link></li>
            <li><Link href="/#contact" className="hover:text-taxi-500 transition-colors">Broker Change</Link></li>
            <li><Link href="/#contact" className="hover:text-taxi-500 transition-colors">Fleet Insurance</Link></li>
            <li><Link href="/#contact" className="hover:text-taxi-500 transition-colors">Claims Support</Link></li>
            <li><Link href="/#contact" className="hover:text-taxi-500 transition-colors">DMV &amp; TLC Services</Link>
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-gray-800"><p className="text-sm text-gray-500 mb-2">Contact Us</p>
            <a href="tel:+12123145555" className="text-taxi-500 font-bold hover:text-taxi-400">(212) 314-5555</a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"><p>© 2026
          SAMKARA BROKERAGE INC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-taxi-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-taxi-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
}
