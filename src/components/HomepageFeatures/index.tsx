import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface ISectionProps {
  title: string,
  children: React.ReactNode,
  slug: string
}

const Section = (props: ISectionProps) => {
  return (
    <div>
      <h2 id={props.slug} className={styles["s-title"]}>
        <a href={"#" + props.title}>{props.title}</a>
      </h2>
      <div className={styles["s-body"]}>{props.children}</div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <Section slug="about" title='About me'>
            <p>
              I am Thiha Swan Htet. A passionate and extremely talented software engineer
              from Myanmar (currently studying in Singapore!).
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}
