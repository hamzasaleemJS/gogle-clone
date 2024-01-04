import HeaderOpt from "./HeaderOpt";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div
      className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base 
                 lg:justify-start lg:space-x-36 lg:pl-52 border-b"
    >
      {/* Left Sectoin */}

      <div className="flex space-x-6">
        <HeaderOpt Icon={SearchIcon} title="All" selected />
        <HeaderOpt Icon={PhotographIcon} title="Images" />
        <HeaderOpt Icon={PlayIcon} title="Videos" />
        <HeaderOpt Icon={NewspaperIcon} title="News" />
        <HeaderOpt Icon={MapIcon} title="Map" />
        <HeaderOpt Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* Right Section */}
      <div className="flex space-x-4 ">
        <p className="hover:text-gray-950 cursor-pointer">Settings</p>
        <p className="hover:text-gray-950 cursor-pointer">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
