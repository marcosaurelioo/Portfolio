import Link from "next/link";

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>

      <div className="projects-box-container">
        <Link href="https://audioscript.aurelian.dev" target="_blank">
          <div className="projects-box">
            <span>AudioScript</span>
            <p>Automated video and audio transcription made simple.</p>
          </div>
        </Link>

        <Link href="https://github.com/marcosaurelioo/Youtube-Transcriptor" target="_blank">
          <div className="projects-box">
            <span>Youtube transcriptor</span>
            <p>Python script to transcribe youtube videos based on Whisper AI.</p>
          </div>
        </Link>

        <Link href="https://github.com/marcosaurelioo/Money-Conversion" target="_blank">
          <div className="projects-box">
            <span>Money conversion</span>
            <p>Money conversion challenge of a bank app.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
