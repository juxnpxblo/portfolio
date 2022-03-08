const Footer = ({ content: { ghUser } }) => {
  return (
    <footer className="mx-4 sm:mx-[10%] lg:mt-10 text-center pb-4 ">
      <p className="text-dark text-xs sm:text-sm lg:text-base">
        Made with ❤️ by{' '}
        <span className="font-bold">
          <a
            href={`https://github.com/${ghUser}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-light transition-colors"
          >
            {ghUser}
          </a>
        </span>{' '}
        • 2022
      </p>
      <p className="text-dark text-[10px] lg:text-[10px] font-light">
        design inspiration:{' '}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-light transition-colors"
        >
          https://brittanychiang.com/
        </a>
      </p>
    </footer>
  );
};

export default Footer;
