"use client"

import './page.css'
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "@/locale/navigation.ts";

export default function DefensiveDrivingCoursePage () {
  const [stateClicked, setStateClicked] = useState(false);

  const onClickState = () => {
    setStateClicked(true)

    setTimeout(() => {
      setStateClicked(false)
    }, 500)
  }

  return (
    <section className="ddc-page">
      <div className="ddc-hero">
        <span className="ddc-hero__tag">Online Course</span>
        <h1>Defensive Driving Course</h1>
        <p>
          A state-approved defensive driving course that helps you build
          safer habits behind the wheel. Reduce points off your driving
          record and qualify for an insurance discount — all from your phone
          or computer, at your own pace.
        </p>
        <Button className="ddc-cta" onClick={onClickState}>Choose your state</Button>
      </div>

      <div className="ddc-details">
        <h2>What you'll learn</h2>
        <ul>
          <li>Defensive driving fundamentals & collision prevention</li>
          <li>Distracted, impaired & fatigued driving awareness</li>
          <li>Managing road rage and aggressive driving situations</li>
          <li>Course review, final assessment & certificate completion</li>
        </ul>
      </div>
      <div className="ddc-states">
        <h2>Available for</h2>
        <div className="ddc-states__grid">
          <Link href='defensive-driving-course/new-york'>
            <div className={`ddc-state ${stateClicked ? ' active' : ''}`}>
              <h3>New York</h3>
              <p>Reduce up to 4 points & save 10% on insurance for 3 years.</p>
              <span className="ddc-state__price">$49</span>
            </div>
          </Link>
          <Link href='defensive-driving-course/new-jersey'>
            <div className={`ddc-state ${stateClicked ? ' active' : ''}`}>
              <h3>New Jersey</h3>
              <p>Qualify for insurance discounts and point reduction benefits.</p>
              <span className="ddc-state__price">$49</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
