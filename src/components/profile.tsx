import React from "react";
import { Hubballi } from "@next/font/google";

import LinkedinIcon from "@/assets/linkedin.svg";
import GithubIcon from "@/assets/github.svg";
import ResumeIcon from "@/assets/resume.svg";

import Image from "next/image";
import Link from "next/link";

const hubballiTypography = Hubballi({ weight: "400" });

export function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header-line" />

      <div className="profile-title">
        <h1 className={hubballiTypography.className}>Marcos Aurélio</h1>
        <h3 className={hubballiTypography.className}>Software Developer</h3>
      </div>

      <article className="profile-description">
        <p className={hubballiTypography.className}>
          A Software Enthusiast, I am a Brazilian self-taught Software Engineer
          who likes to create operational and attractive applications. Involved
          with computers since I was a child, I wrote my first algorithm when I
          was 16 years old, and since then I have been working on creating
          solutions with code. The motivation behind the code I write is to
          outsource responsibilities to machines, I believe this process brings
          convenience to people.
        </p>

        <p className={hubballiTypography.className}>
          Throughout my career, I have had the opportunity to work on a variety of
          projects, from small-scale applications to large-scale enterprise
          systems. I developed experience in Nodejs, Nextjs, Reactjs, unit
          testing, test coverage, JavaScript, and TypeScript in agile
          environments. I am a team player who can work well under pressure,
          prioritize tasks and meet deadlines. I am willing to learn new
          technologies like artificial intelligence. AI has been a subject of
          great interest to me, the idea of creating a program capable of
          autonomously solving problems is almost magical.
        </p>

        <p className={hubballiTypography.className}>
          I constantly seek to add value to my work, learn new tools, stay up on
          technology news and participate in developer communities.
        </p>

        <p className={hubballiTypography.className}>Get in touch.</p>
      </article>

      <div className="profile-contact">
        <span className={hubballiTypography.className}>
          marcosaureliolelo@outlook.com
        </span>

        <div className="profile-contact-icons-box">
          <Link href="/resume.pdf" download target="_blank">
            <Image src={ResumeIcon} alt="resume-icon" />
          </Link>

          <Link href="https://github.com/marcosaurelioo" target="_blank">
            <Image src={GithubIcon} alt="github-icon" />
          </Link>

          <Link
            href="https://linkedin.com/in/marcos-aurelio-goncalves"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="linkedin-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
