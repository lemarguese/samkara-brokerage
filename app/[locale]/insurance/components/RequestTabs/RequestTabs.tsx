import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuoteTab from "../QuoteTab/QuoteTab";
import BrokerChangeTab from "../BrokerChangeTab/BrokerChangeTab";
import FleetTab from "../FleetTab/FleetTab";
import ClaimsTab from "../ClaimsTab/ClaimsTab";
import FullCoverageTab from "../FullCoverageTab/FullCoverageTab";
import { FileTextIcon, RefreshCwIcon, ShieldIcon, TriangleAlertIcon, UsersIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function RequestTabs () {
  const t = useTranslations('Insurance');

  return <Tabs defaultValue="quote" className="w-full">
    <TabsList variant='line' className='w-full'>
      <TabsTrigger value="quote"
                   className='flex px-4 py-4 gap-2 rounded-none items-center group-data-[variant=line]/tabs-list:data-[state=active]:bg-taxi-500/10 data-[state=active]:text-taxi-500 after:bg-taxi-500'>
        <FileTextIcon className='w-4 h-4'/>
        {t('forms.quote.title')}
      </TabsTrigger>
      <TabsTrigger value="bor"
                   className='flex px-4 py-4 gap-2 rounded-none items-center group-data-[variant=line]/tabs-list:data-[state=active]:bg-lyft-500/10 data-[state=active]:text-lyft-500 after:bg-lyft-500'>
        <RefreshCwIcon className='w-4 h-4'/>
        {t('forms.cob.title')}
      </TabsTrigger>
      <TabsTrigger value="fleet"
                   className='flex px-4 py-4 gap-2 rounded-none items-center group-data-[variant=line]/tabs-list:data-[state=active]:bg-uber-900 data-[state=active]:text-white after:bg-uber-900'>
        <UsersIcon className='w-4 h-4'/>
        {t('forms.fleet.title')}
      </TabsTrigger>
      <TabsTrigger value="claims"
                   className='flex px-4 py-4 gap-2 rounded-none items-center group-data-[variant=line]/tabs-list:data-[state=active]:bg-orange-500/10 data-[state=active]:text-orange-500 after:bg-orange-500'>
        <TriangleAlertIcon className='w-4 h-4'/>
        {t('forms.claims.title')}
      </TabsTrigger>
      <TabsTrigger value="coverage"
                   className='flex px-4 py-4 gap-2 rounded-none items-center group-data-[variant=line]/tabs-list:data-[state=active]:bg-green-500/10 data-[state=active]:text-green-500 after:bg-green-500'>
        <ShieldIcon className='w-4 h-4'/>
        {t('forms.full_coverage.title')}
      </TabsTrigger>
    </TabsList>
    <TabsContent value="quote">
      <div className="p-6 sm:p-8">
        <QuoteTab />
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
