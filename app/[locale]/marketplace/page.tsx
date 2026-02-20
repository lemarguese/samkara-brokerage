export default function MarketplacePage () {
  return <div className="pt-20 md:pt-24">
    <section className="bg-gradient-to-br from-uber-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-taxi-500 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="lucide lucide-store w-7 h-7 text-uber-900">
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                  <path d="M2 7h20"></path>
                  <path
                    d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path>
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">TLC Marketplace</h1></div>
            <p className="text-lg text-gray-300">Buy, sell, and connect with the NYC TLC driver community</p></div>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-2 bg-taxi-500 text-uber-900 px-6 py-3 rounded-xl font-bold hover:bg-taxi-400 transition-colors shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-plus w-5 h-5">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Post Ad
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-orange-50 border-y border-orange-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               className="lucide lucide-shield-alert w-6 h-6 text-orange-600 flex-shrink-0 mt-1">
            <path
              d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
          </svg>
          <div><h3 className="font-bold text-orange-900 mb-2">Important Notice - Marketplace Disclaimer</h3><p
            className="text-sm text-orange-800 leading-relaxed"><strong>Samkara Brokerage is not involved in any
            marketplace transactions.</strong> This TLC Marketplace is provided as a free community service platform
            where drivers and vehicle owners can post advertisements and connect with each other. Samkara Brokerage does
            not verify listings, facilitate transactions, or mediate disputes between buyers and sellers. We are not
            responsible for the accuracy, legality, or quality of any listings, products, services, or information
            posted on this marketplace. All transactions and communications are conducted directly between users at
            their own risk. Users are solely responsible for verifying the legitimacy of listings, conducting due
            diligence, and ensuring compliance with all applicable laws and regulations. By using this marketplace, you
            acknowledge and agree that Samkara Brokerage bears no liability for any losses, damages, disputes, or issues
            arising from marketplace transactions or interactions between users.</p></div>
        </div>
      </div>
    </section>
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input placeholder="Search listings..."
                       className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-taxi-500 focus:border-taxi-500 outline-none transition-colors"
                       type="text" value=""/></div>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-taxi-500 focus:border-taxi-500 outline-none transition-colors bg-white">
                <option value="all">All Categories</option>
                <option value="TLC Corporation For Sale">TLC Corporation For Sale</option>
                <option value="TLC Vehicle for Rent">TLC Vehicle for Rent</option>
                <option value="TLC Plates For Rent">TLC Plates For Rent</option>
                <option value="Looking for Driver">Looking for Driver</option>
                <option value="Shift Share">Shift Share</option>
                <option value="Parts &amp; Accessories">Parts &amp; Accessories</option>
                <option value="Other">Other</option>
              </select></div>
          </div>
          <div className="text-center py-20"><p className="text-gray-500 text-lg">No listings found. Be the first to
            post!</p></div>
        </div>
      </div>
    </section>
  </div>
}
