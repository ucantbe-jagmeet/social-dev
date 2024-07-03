import Link from "next/link";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import Ad from "../rightMenu/Ads";

const menuData = [
  {
    id: 1,
    imgSrc: "/posts.png",
    text: "My Posts",
  },
  {
    id: 2,
    imgSrc: "/activity.png",
    text: "Activities",
  },
  {
    id: 3,
    imgSrc: "/market.png",
    text: "Market Place",
  },
  {
    id: 4,
    imgSrc: "/events.png",
    text: "Events",
  },
  {
    id: 5,
    imgSrc: "/albums.png",
    text: "Albums",
  },
  {
    id: 6,
    imgSrc: "/videos.png",
    text: "Videos",
  },
  {
    id: 7,
    imgSrc: "/news.png",
    text: "News",
  },
  {
    id: 8,
    imgSrc: "/courses.png",
    text: "Courses",
  },
  {
    id: 9,
    imgSrc: "/lists.png",
    text: "Lists",
  },
  {
    id: 10,
    imgSrc: "/settings.png",
    text: "Settings",
  },
];

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type !== "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        {menuData.map((item) => {
          return (
            <div key={item.id}>
              <Link
                href="/"
                className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
              >
                <Image src={item.imgSrc} alt="" width={20} height={20} />
                <span>{item.text}</span>
              </Link>
              <hr className="border-t-1 border-gray-50 w-36 self-center" />
            </div>
          );
        })}
      </div>
      <Ad size="sm" />
    </div>
  );
};

export default LeftMenu;
