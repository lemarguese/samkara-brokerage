"use client"

import Link from 'next/link';
import './page.css';
import { useTranslations } from "next-intl";

export default function CoursesPage () {
  const t = useTranslations('Courses.main');

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <span className="courses-hero__eyebrow">{t('chip')}</span>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </section>

      <section className="courses-split">
        <Link href="courses/defensive-driving-course" className="course-panel course-panel--ddc">
          <div className="course-panel__content">
            <span className="course-panel__tag">{t('ddc.tag')}</span>
            <h2>{t('ddc.title')}</h2>
            <p>{t('ddc.description')}</p>
            <span className="course-panel__link">{t('learnMore')}</span>
          </div>
        </Link>

        <Link href="courses/pre-licensing" className="course-panel course-panel--plc">
          <div className="course-panel__content">
            <span className="course-panel__tag">{t('plc.tag')}</span>
            <h2>{t('plc.title')}</h2>
            <p>{t('plc.description')}</p>
            <span className="course-panel__link">{t('learnMore')}</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
