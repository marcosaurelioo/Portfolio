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
        Engineering Enthusiast, I am Software Engineer at
        <Link href="https://www.stone.com.br" target="_blank">
          <strong> @Stone</strong>.
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
        I derive pleasure from the process of creating applications that are not
        only aesthetically pleasing but also highly functional. My passion lies
        in the seamless integration of design and functionality, resulting in
        applications that are both visually stunning and user-friendly.
      </p>

      <p>marcosaureliolelo@outlook.com</p>
    </section>
  );
}
