import Link from 'next/link';
import './page.css';

export default function CoursesPage () {
  return (
    <div className="courses-page">
      <section className="courses-hero">
        <span className="courses-hero__eyebrow">Online Courses</span>
        <h1>Get certified without leaving your seat</h1>
        <p>
          Whether you need a defensive driving certificate for your insurance
          discount, or you're just starting out and need your pre-licensing
          course, we've got you covered — state-approved, fully online, and
          ready same day.
        </p>
      </section>

      <section className="courses-split">
        <Link href="courses/defensive-driving-course" className="course-panel course-panel--ddc">
          <div className="course-panel__content">
            <span className="course-panel__tag">Save on Insurance</span>
            <h2>Defensive Driving Course</h2>
            <p>
              Knock points off your record and lock in an insurance discount
              for three years. Available for NY and NJ drivers.
            </p>
            <span className="course-panel__link">Learn more →</span>
          </div>
        </Link>

        <Link href="courses/pre-licensing" className="course-panel course-panel--plc">
          <div className="course-panel__content">
            <span className="course-panel__tag">Required to Get Started</span>
            <h2>Pre-Licensing Course</h2>
            <p>
              The 5-hour class every new NY driver needs before scheduling
              their road test. Get your MV-278 certificate fast.
            </p>
            <span className="course-panel__link">Learn more →</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
