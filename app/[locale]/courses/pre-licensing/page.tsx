"use client"

import './page.css'
import { courseUrls } from "@/app/[locale]/page.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "@/locale/navigation.ts";

export default function PreLicensingCoursePage() {

  const enroll = (key: 'en' | 'es') => {
    window.open(courseUrls[`pre-licensing-${key}`], '_blank');
  }

  return (
    <section className="plc-page">
      <div className="plc-hero">
        <span className="plc-hero__tag">Required for Road Test</span>
        <h1>Pre-Licensing Course (5-Hour Class)</h1>
        <p>
          New York DMV-required 5-hour course for new drivers. Complete the
          class to receive your MV-278 certificate and become eligible to
          schedule your road test — all online, at your own pace.
        </p>
        <div className="plc-hero__price">
          <span className="plc-hero__amount">$79</span>
          <span className="plc-hero__note">MV-278 certificate included</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex flex-col md:flex-row items-center gap-2'>
            <Button className='plc-cta' onClick={() => enroll('en')}>Enroll (English)</Button>
            <Button className='plc-cta' onClick={() => enroll('es')}>Enroll (Spanish)</Button>
          </div>
          <Link href='./' className='w-max'>
            <Button variant='secondary' className='w-[250px]'>Back</Button>
          </Link>
        </div>
      </div>

      <div className="plc-details">
        <h2>What you'll learn</h2>
        <ul>
          <li>Rules of the road & traffic laws</li>
          <li>Defensive driving and risk awareness</li>
          <li>Sharing the road with pedestrians and cyclists</li>
          <li>Alcohol, drugs & impaired driving prevention</li>
        </ul>
      </div>

      <div className="plc-info">
        <h2>Good to know</h2>
        <div className="plc-info__grid">
          <div className="plc-info__item">
            <h3>Who needs this</h3>
            <p>Required for all first-time NY drivers before scheduling a road test.</p>
          </div>
          <div className="plc-info__item">
            <h3>Format</h3>
            <p>5 hours total, completed online in one or multiple sessions.</p>
          </div>
          <div className="plc-info__item">
            <h3>Certificate</h3>
            <p>MV-278 issued upon completion, valid for use with the DMV.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
