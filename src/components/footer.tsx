export default function Footer() {
  return (
    <footer
      id="footer"
      className="mb-10 mt-20 flex flex-col items-center justify-center gap-5"
    >
      <div className="flex items-center justify-center gap-5">
        <a href="https://www.instagram.com/eriksignori/">
          <img src="/footer-logos/insta.svg" alt="instagram" />
        </a>
        <a href="https://github.com/erik-sig">
          <img
            className="w-[30px]"
            src="/footer-logos/github.svg"
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/erik-signori-thalheimer-b0375b20a/">
          <img src="/footer-logos/linkedin.svg" alt="linkedin" />
        </a>
      </div>
      <p className="text-[#21243D]">Copyright ©2030 All rights reserved </p>
    </footer>
  );
}
