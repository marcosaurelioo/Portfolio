import NextImage from "next/image";
import Link from "next/link";

import LinkedinSvg from "@/assets/linkedin.svg";
import MyselfImage from "@/assets/myself.png";
import GitHubSvg from "@/assets/github.svg";
import ResumeSvg from "@/assets/resume.svg";

export default function Home() {
  return (
    <section>
      <h1>Marcos Aurélio</h1>

      <p>
        Software Engineer at
        <Link href="https://www.localline.co" target="_blank">
          <strong> @Localline</strong>.
        </Link>
      </p>

      <div className="image-links-box">
        <NextImage
          style={{ height: 100, width: 100 }}
          src={MyselfImage}
          alt="myself-image"
          draggable="false"
        />

        <div className="links">
          <Link href="https://github.com/marcosaurelioo" target="_blank">
            <div className="image-link-wrapper">
              <NextImage src={GitHubSvg} draggable="false" alt="" />
              <span>Github</span>
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/marcos-aurelio-goncalves"
            target="_blank"
          >
            <div className="image-link-wrapper">
              <NextImage src={LinkedinSvg} draggable="false" alt="" />
              <span>Linkedin</span>
            </div>
          </Link>

          <Link href="/resume.pdf" download target="_blank">
            <div className="image-link-wrapper">
              <NextImage src={ResumeSvg} draggable="false" alt="" />
              <span>Resume</span>
            </div>
          </Link>
        </div>
      </div>
      <p>
        Over the course of my career, I have been actively
        engaged in contributing to a variety of projects, showcasing my
        proficiency in developing solutions for both compact applications and
        expansive enterprise systems.
      </p>

      <p>Skills: JavaScript • TypeScript • Python • Django • React • Figma</p>

      <p>contact-me: marcosaureliolelo@outlook.com</p>
    </section>
  );
}
