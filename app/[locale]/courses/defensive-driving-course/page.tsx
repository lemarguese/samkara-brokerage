"use client"

import './page.css'
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "@/locale/navigation.ts";
import { useTranslations } from "next-intl";

export default function DefensiveDrivingCoursePage () {
  const [stateClicked, setStateClicked] = useState(false);
  const t = useTranslations('Courses.defensive-driving-course');

  const onClickState = () => {
    setStateClicked(true)

    setTimeout(() => {
      setStateClicked(false)
    }, 500)
  }

  return (
    <section className="ddc-page">
      <div className="ddc-hero">
        <span className="ddc-hero__tag">{t('chip')}</span>
        <h1>{t('title')}</h1>
        <p>
          {t('description')}
        </p>
        <Button className="ddc-cta" onClick={onClickState}>{t('action')}</Button>
      </div>

      <div className="ddc-details">
        <h2>{t('learning.title')}</h2>
        <ul>
          <li>{t('learning.list.0')}</li>
          <li>{t('learning.list.1')}</li>
          <li>{t('learning.list.2')}</li>
          <li>{t('learning.list.3')}</li>
        </ul>
      </div>
      <div className="ddc-states">
        <h2>{t('availability.title')}</h2>
        <div className="ddc-states__grid">
          <Link href='defensive-driving-course/new-york'>
            <div className={`ddc-state ${stateClicked ? ' active' : ''}`}>
              <h3>New York</h3>
              <p>{t('availability.ny.description')}</p>
              <span className="ddc-state__price">$35</span>
            </div>
          </Link>
          <Link href='defensive-driving-course/new-jersey'>
            <div className={`ddc-state ${stateClicked ? ' active' : ''}`}>
              <h3>New Jersey</h3>
              <p>{t('availability.nj.description')}</p>
              <span className="ddc-state__price">$35</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
