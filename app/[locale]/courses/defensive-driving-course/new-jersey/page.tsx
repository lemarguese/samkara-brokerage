"use client"

import './page.css'
import { Link } from "@/locale/navigation.ts";
import { Button } from "@/components/ui/button.tsx";
import { courseUrls } from "@/lib/home.tsx";
import { useTranslations } from "next-intl";

export default function DefensiveDrivingCourseNewJerseyPage () {
  const t = useTranslations('Courses.defensive-driving-course.new-jersey')

  const enroll = (key: 'en' | 'es') => {
    window.open(courseUrls[`new-jersey-ddc-${key}`], '_blank');
  }

  return (
    <div className="ddc-nj-page">
      <section className="ddc-nj-hero">
        <span className="ddc-nj-hero__tag">{t('city')} · Most Popular</span>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <div className="ddc-nj-hero__price">
          <span className="ddc-nj-hero__amount">$35</span>
          <span className="ddc-nj-hero__note">{t('period')}</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex flex-col md:flex-row items-center gap-2'>
            <Button className="ddc-nj-cta" onClick={() => enroll('en')}>Enroll (English)</Button>
            <Button className="ddc-nj-cta" onClick={() => enroll('es')}>Enroll (Spanish)</Button>
          </div>
          <Link href='./' className='w-max'>
            <Button variant='secondary' className='w-[250px]'>{t('action')}</Button>
          </Link>
        </div>
      </section>

      <section className="ddc-nj-details">
        <h2>{t('learning.title')}</h2>
        <ul>
          <li>{t('learning.list.0')}</li>
          <li>{t('learning.list.1')}</li>
          <li>{t('learning.list.2')}</li>
          <li>{t('learning.list.3')}</li>
        </ul>
      </section>
    </div>
  );
}
