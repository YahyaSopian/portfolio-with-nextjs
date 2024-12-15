import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between h-8 w-2/3">
      <Link href="/" className="text-lg font-semibold">
        Yahya's Portfolio
      </Link>
      <div className="nav-menu flex justify-center items-center gap-9">
        <Link href="#projects" className="text-sm hover:underline hover:font-bold">
          Projects
        </Link>
        <Link href="#experience" className="text-sm hover:underline hover:font-bold">
          Experience
        </Link>
        <Link href="#contact" className="text-sm hover:underline hover:font-bold">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
