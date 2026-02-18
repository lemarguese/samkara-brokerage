import {
  CarIcon,
  ClockIcon,
  FileTextIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  RefreshCwIcon, SendIcon, ShieldIcon,
  SmartphoneIcon, TriangleAlertIcon, UsersIcon
} from "lucide-react";
import RequestTabs from "@/app/insurance/components/RequestTabs/RequestTabs";

export default function InsurancePage () {
  return <section className="pt-20 md:pt-28 pb-20 md:pb-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4"><span
          className="bg-uber-900 text-taxi-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <SmartphoneIcon className='w-3 h-3'/>
          Uber</span><span
          className="bg-lyft-500 text-white px-3 py-1 rounded-full text-xs font-bold">Lyft</span><span
          className="bg-taxi-500 text-uber-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <CarIcon className='w-3 h-3'/>
          Taxi</span></div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Can We <span className="text-taxi-600">Help You</span> Today?
        </h2><p className="text-lg text-gray-600 max-w-2xl mx-auto">Select a service below and fill out the form. Our
        team will get back to you promptly.</p></div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"><h3
            className="font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-taxi-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className='w-5 h-5 text-uber-900'/>
                </div>
                <div><p className="text-sm text-gray-500">Phone</p><a href="tel:+12123145555"
                                                                      className="font-semibold text-gray-900 hover:text-taxi-600">(212)
                  314-5555</a></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-lyft-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MailIcon className='w-5 h-5 text-white'/>
                </div>
                <div><p className="text-sm text-gray-500">Email</p><a href="mailto:info@samkarabrokerage.com"
                                                                      className="font-semibold text-gray-900 hover:text-lyft-500">info@samkarabrokerage.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-uber-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className='w-5 h-5 text-taxi-500'/>
                </div>
                <div><p className="text-sm text-gray-500">Office</p><p className="font-semibold text-gray-900">4710 32nd
                  Place<br/>Long Island City, NY 11101</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClockIcon className='w-5 h-5 text-white'/>
                </div>
                <div><p className="text-sm text-gray-500">Hours</p><p className="font-semibold text-gray-900">Mon-Fri:
                  9am - 5pm<br/>Sat: Closed</p></div>
              </div>
            </div>
          </div>
          <div className="bg-uber-900 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <CarIcon className='w-5 h-5 text-taxi-500'/>
              Vehicle Types We Cover
            </h3>
            <div className="space-y-2"><a href="/black-car"
                                          className="block bg-uber-800 rounded-lg px-4 py-2 text-gray-300 hover:bg-taxi-500 hover:text-uber-900 transition-colors cursor-pointer">
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-taxi-500 rounded-full"></span>Black
                Car
              </div>
            </a><a href="/car-service"
                   className="block bg-uber-800 rounded-lg px-4 py-2 text-gray-300 hover:bg-taxi-500 hover:text-uber-900 transition-colors cursor-pointer">
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-taxi-500 rounded-full"></span>Car
                Service
              </div>
            </a><a href="/livery"
                   className="block bg-uber-800 rounded-lg px-4 py-2 text-gray-300 hover:bg-taxi-500 hover:text-uber-900 transition-colors cursor-pointer">
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-taxi-500 rounded-full"></span>Livery
              </div>
            </a><a href="/yellow-cab"
                   className="block bg-uber-800 rounded-lg px-4 py-2 text-gray-300 hover:bg-taxi-500 hover:text-uber-900 transition-colors cursor-pointer">
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-taxi-500 rounded-full"></span>Yellow
                Cab
              </div>
            </a><a href="/ambulette"
                   className="block bg-uber-800 rounded-lg px-4 py-2 text-gray-300 hover:bg-taxi-500 hover:text-uber-900 transition-colors cursor-pointer">
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-taxi-500 rounded-full"></span>Ambulette
              </div>
            </a></div>
          </div>
        </div>
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <RequestTabs />
        </div>
      </div>
    </div>
  </section>
}
