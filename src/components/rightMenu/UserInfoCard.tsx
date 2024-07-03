import Image from "next/image";
import Link from "next/link";
import UserInfoCardInteraction from "./UserInfoCardInteraction";

const UserInfoCard = async () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>

        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Temp User</span>
          <span className="text-sm">@ucantbe-jagmeet</span>
        </div>
        <p>User Description</p>

        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>Jalandhar</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>GADPS</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>Google</b>
          </span>
        </div>
        <UserInfoCardInteraction />
      </div>
    </div>
  );
};

export default UserInfoCard;
