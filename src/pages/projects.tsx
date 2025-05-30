import Link from "next/link";

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
     
      <div className="projects-box-container">
        <Link href="https://audioscript.aurelian.dev" target="_blank">
          <div className="projects-box">
            <span>AudioScript</span>
            <p>AI-based automatic video and audio transcription.</p>
          </div>
        </Link>

        <Link
          href="https://github.com/marcosaurelioo/Youtube-Transcriptor"
          target="_blank"
        >
          <div className="projects-box">
            <span>Youtube transcriptor</span>
            <p>
              Python script to transcribe youtube videos based on Open-AI Whisper AI model.
            </p>
          </div>
        </Link>

        <Link href="https://moneyhub.aurelian.dev" target="_blank">
          <div className="projects-box">
            <span>MoneyHub</span>
            <p>
              A curated list of cryptocurrency coins and their market values.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
