import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface ISectionProps {
  title: string;
  children: React.ReactNode;
  slug: string;
}

const Section = (props: ISectionProps) => {
  return (
    <div>
      <h2 id={props.slug} className={styles["s-title"]}>
        <a href={"#" + props.title}>{props.title}</a>
      </h2>
      <div className={styles["s-body"]}>{props.children}</div>
    </div>
  );
};

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <Section slug="about" title="About me">
            <p>
              I am Thiha Swan Htet, a passionate and extremely talented software
              engineer from Myanmar. Currently, I am studying computer science
              in Singapore Institute of Management. My dream job is to be in
              charge of a huge software system as a software architect.
            </p>
          </Section>
          <Section slug="contacts" title="Contacts">
            <p>Email: <a href="mailto:misterjames.thiha@gmail.com">misterjames.thiha@gmail.com</a></p>
            <p>Github: <a href="https://github.com/ninnroot">ninnroot</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/thiha-swanhtet-679811214/">Thiha Swan Htet</a></p>
          </Section>
          <Section slug="what-i-do" title="What I do">
            <p>
              I am a fullstack web developer, however, my passion is in the
              backend and I am obsessed with automating things. I work with a
              variety of languages and frameworks, but my favourite is the
              Django web framework which is written in Python.
            </p>
            <p>
              Apart from web development, I also do a little bit of DevOps and
              Machine Learning.
            </p>
          </Section>
          <Section slug="tech-i-know" title="Technologies I know">
            <div className={styles["tech-container"]}>
              <div className={styles["tech-col"]}>
                <h3>Languages</h3>
                <p>
                  <ul>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Java</li>
                    <li>Bash</li>
                    <li>Go</li>
                  </ul>
                </p>
              </div>
              <div className={styles["tech-col"]}>
                <h3>Backend frameworks</h3>
                <p>
                  <ul>
                    <li>Django (Python)</li>
                    <li>Flask (Python)</li>
                    <li>FastAPI (Python)</li>
                    <li>Resteasy (Java)</li>
                    <li>ExpressJS (JavaScript)</li>
                  </ul>
                </p>
              </div>

              <div className={styles["tech-col"]}>
                <h3>Frontend technologies</h3>
                <p>
                  <ul>
                    <li>ReactJS</li>
                    <li>VueJS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind</li>
                  </ul>
                </p>
              </div>
              <div className={styles["tech-col"]}>
                <h3>Databases</h3>
                <p>
                  <ul>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>Redis</li>
                  </ul>
                </p>
              </div>
              <div className={styles["tech-col"]}>
                <h3>DevOps</h3>
                <p>
                  <ul>
                    <li>Docker</li>
                    <li>Linux</li>
                    <li>Nginx</li>
                  </ul>
                </p>
              </div>
              <div className={styles["tech-col"]}>
                <h3>Machine learning</h3>
                <p>
                  <ul>
                    <li>TensorFlow</li>
                    <li>Keras</li>
                    <li>Matplotlib</li>
                    <li>Numpy</li>
                  </ul>
                </p>
              </div>
              <div className={styles["tech-col"]}>
                <h3>Other</h3>
                <p>
                  <ul>
                    <li>Git</li>
                    <li>RESTful APIs</li>
                  </ul>
                </p>
              </div>
            </div>
            <p><em>*Only relevant skills are shown here. God knows how much "useless" stuffs I spend my time on.</em></p>
          </Section>
          <Section slug="about-this-site" title="About this site">
            <p>
              I decided to make this website using Docusaurus because I am sick of writing frontend.
              With Docusaurus, I can just write Markdown, and it takes care of the styling.
            </p>
            <p>
              The purpose of this site is to show off my programming skills and also to host design analyses 
              of my past projects (also for my ION ambassador pre-entry task :)). Since I would be writing a lot of texts mostly, convenience was the primary 
              consideration while making this site.
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}
