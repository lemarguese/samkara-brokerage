"use client"

import './page.css'
import { Link } from "@/locale/navigation.ts";
import { courseUrls } from "@/app/[locale]/page.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function DefensiveDrivingCourseNewJerseyPage() {

  const enroll = (key: 'en' | 'es') => {
    window.open(courseUrls[`new-jersey-ddc-${key}`], '_blank');
  }

  return (
    <div className="ddc-nj-page">
      <section className="ddc-nj-hero">
        <span className="ddc-nj-hero__tag">New Jersey · Most Popular</span>
        <h1>Defensive Driving Course (NJ)</h1>
        <p>
          New Jersey DMV-approved 6-hour Defensive Driving Course. Reduce up to
          4 points from your driving record and qualify for a 10% insurance
          discount for three years.
        </p>
        <div className="ddc-nj-hero__price">
          <span className="ddc-nj-hero__amount">$49</span>
          <span className="ddc-nj-hero__note">Certificate available within 24 hours</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex flex-col md:flex-row items-center gap-2'>
            <Button className="ddc-nj-cta" onClick={() => enroll('en')}>Enroll (English)</Button>
            <Button className="ddc-nj-cta" onClick={() => enroll('es')}>Enroll (Spanish)</Button>
          </div>
          <Link href='./' className='w-max'>
            <Button variant='secondary' className='w-[250px]'>Back</Button>
          </Link>
        </div>
      </section>

      <section className="ddc-nj-details">
        <h2>What you'll learn</h2>
        <ul>
          <li>Defensive driving fundamentals & collision prevention</li>
          <li>Distracted, impaired & fatigued driving awareness</li>
          <li>Managing road rage and aggressive driving situations</li>
          <li>Course review, final assessment & certificate completion</li>
        </ul>
      </section>
    </div>
  );
}
