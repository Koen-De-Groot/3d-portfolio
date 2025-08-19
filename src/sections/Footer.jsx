import MagicButton from "../components/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full px-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          Ready to take <span>your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:koendegroot84@gmail.com">
          <MagicButton title="Let's get in touch" position="right" />
        </a>
        <p className="md:text-base text-sm text-gray-500 md:font-normal mt-20">
          Copyright © 2025 Koen De Groot
        </p>
      </div>
    </footer>
  );
};

export default Footer;
