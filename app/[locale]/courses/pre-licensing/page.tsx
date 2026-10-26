"use client"

import './page.css'
import { Button } from "@/components/ui/button.tsx";
import { Link } from "@/locale/navigation.ts";
import { courseUrls } from "@/lib/home.tsx";
import { useTranslations } from "next-intl";

export default function PreLicensingCoursePage () {

  const t = useTranslations('Courses.pre-licensing-course')

  const enroll = (key: 'en' | 'es') => {
    window.open(courseUrls[`pre-licensing-${key}`], '_blank');
  }

  return (
    <section className="plc-page">
      <div className="plc-hero">
        <span className="plc-hero__tag">{t('chip')}</span>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <div className="plc-hero__price">
          <span className="plc-hero__amount">$79</span>
          <span className="plc-hero__note">{t('advantage')}</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex flex-col md:flex-row items-center gap-2'>
            <Button className='plc-cta' onClick={() => enroll('en')}>Enroll (English)</Button>
            <Button className='plc-cta' onClick={() => enroll('es')}>Enroll (Spanish)</Button>
          </div>
          <Link href='./' className='w-max'>
            <Button variant='secondary' className='w-[250px]'>{t('action')}</Button>
          </Link>
        </div>
      </div>

      <div className="plc-details">
        <h2>{t('learning.title')}</h2>
        <ul>
          <li>{t('learning.list.0')}</li>
          <li>{t('learning.list.1')}</li>
          <li>{t('learning.list.2')}</li>
          <li>{t('learning.list.3')}</li>
        </ul>
      </div>

      <div className="plc-info">
        <h2>{t('good_to_know.title')}</h2>
        <div className="plc-info__grid">
          <div className="plc-info__item">
            <h3>{t('good_to_know.audience.title')}</h3>
            <p>{t('good_to_know.audience.description')}</p>
          </div>
          <div className="plc-info__item">
            <h3>{t('good_to_know.format.title')}</h3>
            <p>{t('good_to_know.format.description')}</p>
          </div>
          <div className="plc-info__item">
            <h3>{t('good_to_know.certificate.title')}</h3>
            <p>{t('good_to_know.certificate.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
