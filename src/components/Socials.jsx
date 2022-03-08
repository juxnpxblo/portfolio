const Socials = ({ list }) => {
  return (
    <div className="invisible sm:visible fixed bottom-0 left-[3%] z-10 flex flex-col w-min items-center gap-2">
      {list.map(({ link, Icon }) => {
        return (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            key={link}
            className="hover:-translate-y-1 transition-transform duration-300"
          >
            <Icon size={38} />
          </a>
        );
      })}
      <div className="bg-dark w-px h-[100px]"></div>
    </div>
  );
};

export default Socials;
