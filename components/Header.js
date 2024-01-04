import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search/${term}`);
  };
  const avatarImg = "/hamza.jpg";
  const googleImgPage = "/google1.png";

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src={googleImgPage}
          alt="google logo"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer hover:scale-125 hover:text-gray-700 transition duration-150
        sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon
            className="mr-3 h-6 hidden sm:inline-flex text-blue-400 border-l-2 pl-4
         border-gray-300 cursor-pointer hover:text-blue-500"
          />
          <SearchIcon className="h-6 text-blue-400 hidden sm:inline-flex hover:text-blue-500" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar imgPath={avatarImg} className="ml-auto" />
      </div>

      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
