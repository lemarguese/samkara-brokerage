"use client"

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Globe, Phone, Menu, Car } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@/locale/navigation.ts";

import Image from "next/image";
import { useLocale } from "use-intl";

const navLinks = [
  { to: "/insurance", hash: undefined, label: "Insurance" },
  { to: "/marketplace", hash: undefined, label: "Market" },
  { to: "/faq", hash: undefined, label: "FAQ" },
  { to: "/", hash: "#testimonials", label: "Testimonials" },
  { to: "/", hash: "#contact", label: "Contact" },
];

const locales = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "ru", label: "Русский" },
];

function Header () {
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-uber-900/95 backdrop-blur-sm shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div
              className="w-11 h-11 p-2 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-taxi-500/30">
              <Image src='/logo.png' alt='logo' width={96} height={96}/>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight uppercase tracking-wide">
                SAMKARA
              </span>
              <span className="text-xs font-semibold text-taxi-500 uppercase tracking-wider">
                BROKERAGE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.hash ? (
                <a
                  key={link.label}
                  href={link.hash}
                  className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.to}
                  key={link.label}
                  className="text-gray-300 hover:text-taxi-400 font-medium transition-colors text-sm"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-taxi-400 hover:bg-white/5 font-medium transition-colors text-sm"
                >
                  <Globe className="w-4 h-4 mr-1.5"/>
                  {locales.find((l) => l.code === locale)?.label}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-44 bg-uber-800 border-uber-700" align="end">
                <div className="flex flex-col gap-1">
                  {locales.map((lang) => (
                    <Link
                      key={lang.code}
                      href='/'
                      locale={lang.code}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-md text-sm transition-colors cursor-pointer",
                        locale === lang.code
                          ? "bg-taxi-500 text-uber-900 font-semibold"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {lang.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Phone CTA */}
            <a
              href="tel:+12123145555"
              className="flex items-center gap-2 bg-taxi-500 text-uber-900 px-4 py-2.5 rounded-xl font-bold hover:bg-taxi-400 transition-colors shadow-lg shadow-taxi-500/30 text-sm"
            >
              <Phone className="w-4 h-4"/>
              (212) 314-5555
            </a>
          </div>

          {/* Mobile: Phone + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+12123145555"
              className="flex items-center gap-1.5 bg-taxi-500 text-uber-900 px-3 py-2 rounded-xl font-bold hover:bg-taxi-400 transition-colors shadow-lg shadow-taxi-500/30 text-sm"
            >
              <Phone className="w-4 h-4"/>
              <span className="hidden sm:inline">(212) 314-5555</span>
            </a>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6"/>
                </Button>
              </SheetTrigger>
              <SheetContent
                showCloseButton={false}
                side="right"
                className="w-[300px] sm:w-[360px] bg-uber-900 border-uber-800 p-0"
              >
                <SheetHeader className="px-6 pt-6 pb-4 border-b border-uber-800">
                  <SheetTitle className="text-left flex items-center gap-3">
                    <div
                      className="w-10 h-10 p-1.5 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-taxi-500/30">
                      <Image src='/logo.png' alt='logo' width={96} height={96}/>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-white leading-tight uppercase tracking-wide">
                        SAMKARA
                      </span>
                      <span className="text-xs font-semibold text-taxi-500 uppercase tracking-wider">
                        BROKERAGE
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col h-[calc(100vh-180px)] overflow-y-auto">
                  {/* Nav Links */}
                  <div className="flex flex-col px-2 py-4 gap-1">
                    {navLinks.map((link) =>
                      link.hash ? (
                        <SheetClose asChild key={link.label}>
                          <a
                            href={link.hash}
                            className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-taxi-400 hover:bg-white/5 font-medium transition-colors text-base"
                          >
                            {link.label}
                          </a>
                        </SheetClose>
                      ) : (
                        <SheetClose asChild key={link.label}>
                          <Link
                            href={link.to}
                            className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-taxi-400 hover:bg-white/5 font-medium transition-colors text-base"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      )
                    )}
                  </div>

                  {/* Divider */}
                  <div className="mx-6 my-2 h-px bg-uber-800"/>

                  {/* Language Switcher */}
                  <div className="px-6 py-3">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">
                      Language
                    </span>
                    <div className="flex flex-col gap-1">
                      {locales.map((lang) => (
                        <Link
                          key={lang.code}
                          href='/'
                          locale={lang.code}
                          className={cn(
                            "w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors cursor-pointer flex items-center gap-2",
                            locale === lang.code
                              ? "bg-taxi-500 text-uber-900 font-semibold"
                              : "text-gray-300 hover:bg-white/10 hover:text-white"
                          )}
                        >
                          <Globe className="w-4 h-4"/>
                          {lang.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

              {/*  /!* Bottom CTA *!/*/}
              {/*  <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-uber-800 bg-uber-900">*/}
              {/*    <SheetClose asChild>*/}
              {/*      <a*/}
              {/*        href="tel:+12123145555"*/}
              {/*        className="flex w-full items-center justify-center gap-2 bg-taxi-500 text-uber-900 px-4 py-3 rounded-xl font-bold hover:bg-taxi-400 transition-colors shadow-lg shadow-taxi-500/30 text-base"*/}
              {/*      >*/}
              {/*        <Phone className="w-5 h-5"/>*/}
              {/*        (212) 314-5555*/}
              {/*      </a>*/}
              {/*    </SheetClose>*/}
              {/*  </div>*/}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
