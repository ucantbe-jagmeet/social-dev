import Image from "next/image";

const StoryList = () => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      <Image
        src={
          "https://images.pexels.com/photos/26741269/pexels-photo-26741269/free-photo-of-a-woman-in-leather-boots-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt=""
        width={80}
        height={80}
        className="w-20 h-20 rounded-full ring-2"
      />
      <span className="font-medium">Jagmeet Singh</span>
    </div>
  );
};

export default StoryList;
