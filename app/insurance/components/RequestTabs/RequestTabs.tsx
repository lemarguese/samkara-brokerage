import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuoteTab from "../QuoteTab/QuoteTab";
import BrokerChangeTab from "@/app/insurance/components/BrokerChangeTab/BrokerChangeTab";
import FleetTab from "@/app/insurance/components/FleetTab/FleetTab";
import ClaimsTab from "@/app/insurance/components/ClaimsTab/ClaimsTab";
import FullCoverageTab from "@/app/insurance/components/FullCoverageTab/FullCoverageTab";
import { FileTextIcon, RefreshCwIcon, ShieldIcon, TriangleAlertIcon, UsersIcon } from "lucide-react";

// focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative h-[calc(100%-1px)] flex-1 justify-center rounded-md border border-transparent text-sm font-medium whitespace-nowrap transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent data-[state=active]:bg-background dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 after:absolute after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100 flex px-4 py-4 gap-2 items-center data-[state=active]:text-lyft-500 after:bg-lyft-500 bg-lyft-500/10

export default function RequestTabs () {
  return <Tabs defaultValue="quote" className="w-full">
    <TabsList variant='line' className='w-full'>
      <TabsTrigger value="quote"
                   className='flex px-4 py-4 gap-2 rounded-none items-center group-data-[variant=line]/tabs-list:data-[state=active]:bg-taxi-500/10 data-[state=active]:text-taxi-500 after:bg-taxi-500'>
        <FileTextIcon className='w-4 h-4'/>
        Get Quote
      </TabsTrigger>
      <TabsTrigger value="bor"
                   className='flex px-4 py-4 gap-2 rounded-none items-center group-data-[variant=line]/tabs-list:data-[state=active]:bg-lyft-500/10 data-[state=active]:text-lyft-500 after:bg-lyft-500'>
        <RefreshCwIcon className='w-4 h-4'/>
        Broker Change</TabsTrigger>
      <TabsTrigger value="fleet"
                   className='flex px-4 py-4 gap-2 rounded-none items-center group-data-[variant=line]/tabs-list:data-[state=active]:bg-uber-900 data-[state=active]:text-white after:bg-uber-900'>
        <UsersIcon className='w-4 h-4' />
        Fleet </TabsTrigger>
      <TabsTrigger value="claims"
                   className='flex px-4 py-4 gap-2 rounded-none items-center group-data-[variant=line]/tabs-list:data-[state=active]:bg-orange-500/10 data-[state=active]:text-orange-500 after:bg-orange-500'>
        <TriangleAlertIcon className='w-4 h-4' />
        Claims
      </TabsTrigger>
      <TabsTrigger value="coverage"
                   className='flex px-4 py-4 gap-2 rounded-none items-center group-data-[variant=line]/tabs-list:data-[state=active]:bg-green-500/10 data-[state=active]:text-green-500 after:bg-green-500'>
        <ShieldIcon className='w-4 h-4'/>
        Full Coverage</TabsTrigger>
    </TabsList>
    <TabsContent value="quote">
      <div className="p-6 sm:p-8">
        <QuoteTab/>
      </div>
    </TabsContent>
    <TabsContent value="bor">
      <div className="p-6 sm:p-8">
        <BrokerChangeTab/>
      </div>
    </TabsContent>
    <TabsContent value="fleet">
      <div className="p-6 sm:p-8">
        <FleetTab/>
      </div>
    </TabsContent>
    <TabsContent value='claims'>
      <div className="p-6 sm:p-8">
        <ClaimsTab/>
      </div>
    </TabsContent>
    <TabsContent value='coverage'>
      <div className="p-6 sm:p-8">
        <FullCoverageTab/>
      </div>
    </TabsContent>
  </Tabs>
}
