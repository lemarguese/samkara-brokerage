"use client"

import { GlobeIcon, LogInIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Link, usePathname, useRouter } from "@/locale/navigation";

export default function Header () {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (locale: string) => () => {
    router.replace(pathname, { locale });
  }

  return <nav className="fixed top-0 left-0 right-0 z-50 bg-uber-900/95 backdrop-blur-sm shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 md:h-20">
        <Link href="/"
              className="flex items-center gap-3">
          <div
            className="w-11 h-11 bg-taxi-500 rounded-xl flex items-center justify-center shadow-lg shadow-taxi-500/30">
          </div>
          <div className="flex flex-col"><span
            className="text-lg font-bold text-white leading-tight uppercase">SAMKARA</span><span
            className="text-xs font-semibold text-taxi-500 uppercase tracking-wider">BROKERAGE</span></div>
        </Link>
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/insurance"
                className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">Insurance</Link>
          <Link href="/marketplace"
                className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">Market</Link>
          <Link href="/dmv-tlc"
                className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">DMV/TLC</Link>
          <Link href="/faq"
                className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">FAQ</Link>
          <Link href="/#testimonials"
                className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">Testimonials</Link>
          <Link href="/#contact"
                className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">Contact</Link>
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="flex items-center gap-1 text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm">
                  <GlobeIcon className='w-4 h-4'/>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-40 px-0 py-1' align="start">
                <div className='flex flex-col gap-1'>
                  <Button onClick={changeLocale('en')}
                          className='hover:bg-taxi-500/10 text-tPCASSaxi-600 bg-white rounded-none transition-colors text-sm'>English</Button>
                  <Button onClick={changeLocale('es')}
                    className='hover:bg-taxi-500/10 text-taxi-600 bg-white rounded-none transition-colors text-sm'>Español</Button>
                  <Button onClick={changeLocale('ch')}
                    className='hover:bg-taxi-500/10 text-taxi-600 bg-white rounded-none transition-colors text-sm'>中文</Button>
                  <Button onClick={changeLocale('ru')}
                    className='hover:bg-taxi-500/10 text-taxi-600 bg-white rounded-none transition-colors text-sm'>Русский</Button>
                  <Button onClick={changeLocale('en')}
                    className='hover:bg-taxi-500/10 text-taxi-600 bg-white rounded-none transition-colors text-sm'>O'zbek</Button>
                </div>
                {/*<button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors text-sm text-gray-700">O'zbek*/}
                {/*<PopoverHeader>*/}
                {/*  <PopoverTitle>Dimensions</PopoverTitle>*/}
                {/*  <PopoverDescription>*/}
                {/*    Set the dimensions for the layer.*/}
                {/*  </PopoverDescription>*/}
                {/*</PopoverHeader>*/}
              </PopoverContent>
            </Popover>
          </div>
          <a href="tel:+12123145555"
             className="flex items-center gap-2 bg-taxi-500 text-uber-900 px-4 py-2 rounded-xl font-bold hover:bg-taxi-400 transition-colors shadow-lg shadow-taxi-500/30 text-sm">
            <PhoneIcon className='w-4 h-4'/>
            (212) 314-5555</a>
          <Button
            className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20 text-sm">
            <LogInIcon className='w-4 h-4'/>
            Sign In
          </Button>
        </div>
        <button className="lg:hidden p-2 text-white" aria-label="Toggle menu">

        </button>
      </div>
    </div>
  </nav>
}
