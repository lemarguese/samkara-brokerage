import { Link } from "@/locale/navigation";

export default function FAQPage () {
  return <div className="pt-20 md:pt-24">
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 bg-uber-900 text-taxi-500 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-circle-help w-4 h-4">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked <span
            className="text-taxi-600">Questions</span></h2><p className="text-lg text-gray-600">Find answers to common
          questions about TLC insurance, coverage, and our services.</p></div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            className="px-4 py-2 rounded-full text-sm font-semibold transition-colors bg-uber-900 text-taxi-500">All
          </button>
          <button
            className="px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5 bg-gray-100 text-gray-600 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-shield w-3.5 h-3.5">
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            Insurance Basics
          </button>
          <button
            className="px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5 bg-gray-100 text-gray-600 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-car w-3.5 h-3.5">
              <path
                d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
              <circle cx="7" cy="17" r="2"></circle>
              <path d="M9 17h6"></path>
              <circle cx="17" cy="17" r="2"></circle>
            </svg>
            Coverage
          </button>
          <button
            className="px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5 bg-gray-100 text-gray-600 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-dollar-sign w-3.5 h-3.5">
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            Pricing
          </button>
          <button
            className="px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5 bg-gray-100 text-gray-600 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-clock w-3.5 h-3.5">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Process
          </button>
          <button
            className="px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5 bg-gray-100 text-gray-600 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-file-text w-3.5 h-3.5">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            Broker Change
          </button>
          <button
            className="px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5 bg-gray-100 text-gray-600 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-circle-help w-3.5 h-3.5">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
            Claims
          </button>
          <button
            className="px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5 bg-gray-100 text-gray-600 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-building w-3.5 h-3.5">
              <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
              <path d="M9 22v-4h6v4"></path>
              <path d="M8 6h.01"></path>
              <path d="M16 6h.01"></path>
              <path d="M12 6h.01"></path>
              <path d="M12 10h.01"></path>
              <path d="M12 14h.01"></path>
              <path d="M16 10h.01"></path>
              <path d="M16 14h.01"></path>
              <path d="M8 10h.01"></path>
              <path d="M8 14h.01"></path>
            </svg>
            DMV &amp; TLC
          </button>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span><span
                className="font-semibold text-gray-900 pr-4">What is TLC insurance and why do I need it?</span></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-chevron-up w-5 h-5 text-gray-500 flex-shrink-0">
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>
            <div className="px-6 pb-6">
              <div className="flex gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-uber-900 text-taxi-500 rounded-lg text-sm font-bold flex-shrink-0">A</span>
                <p className="text-gray-600 leading-relaxed">TLC insurance is commercial auto insurance required by the
                  NYC Taxi &amp; Limousine Commission for all for-hire vehicles. It provides higher liability limits
                  than personal auto insurance to protect you, your passengers, and other drivers. Without valid TLC
                  insurance, you cannot legally operate as a for-hire driver in NYC.</p></div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span><span
                className="font-semibold text-gray-900 pr-4">What types of vehicles do you insure?</span></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-chevron-down w-5 h-5 text-gray-500 flex-shrink-0">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span><span
                className="font-semibold text-gray-900 pr-4">What's the difference between liability and full coverage?</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-chevron-down w-5 h-5 text-gray-500 flex-shrink-0">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span><span
                className="font-semibold text-gray-900 pr-4">What are the minimum insurance requirements for TLC drivers?</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-chevron-down w-5 h-5 text-gray-500 flex-shrink-0">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span><span
                className="font-semibold text-gray-900 pr-4">How much does TLC insurance cost?</span></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-chevron-down w-5 h-5 text-gray-500 flex-shrink-0">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span><span
                className="font-semibold text-gray-900 pr-4">Do you offer payment plans?</span></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-chevron-down w-5 h-5 text-gray-500 flex-shrink-0">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span><span
                className="font-semibold text-gray-900 pr-4">How long does it take to get insured?</span></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-chevron-down w-5 h-5 text-gray-500 flex-shrink-0">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span><span
                className="font-semibold text-gray-900 pr-4">What documents do I need to get a quote?</span></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-chevron-down w-5 h-5 text-gray-500 flex-shrink-0">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span><span
                className="font-semibold text-gray-900 pr-4">How do I switch my insurance broker?</span></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-chevron-down w-5 h-5 text-gray-500 flex-shrink-0">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span><span
                className="font-semibold text-gray-900 pr-4">Will switching brokers save me money?</span></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-chevron-down w-5 h-5 text-gray-500 flex-shrink-0">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span><span
                className="font-semibold text-gray-900 pr-4">What should I do if I'm in an accident?</span></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-chevron-down w-5 h-5 text-gray-500 flex-shrink-0">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors">
              <div className="flex items-start gap-4"><span
                className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span><span
                className="font-semibold text-gray-900 pr-4">Do you help with TLC license renewals?</span></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-chevron-down w-5 h-5 text-gray-500 flex-shrink-0">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-12 bg-gradient-to-br from-uber-900 to-gray-800 rounded-2xl p-8 text-center"><h3
          className="text-xl font-bold text-white mb-2">Still Have Questions?</h3><p className="text-gray-300 mb-6">Our
          team is here to help. Give us a call or send us a message.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="tel:+12123145555"
                                                                                          className="inline-flex items-center gap-2 bg-taxi-500 text-uber-900 px-6 py-3 rounded-xl font-bold hover:bg-taxi-400 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            (212) 314-5555</a><Link href="#contact"
                                 className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20">Send
            a Message</Link></div>
        </div>
      </div>
    </section>
  </div>
}
