import Image from "next/image";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/noAvatar.png"}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Post 1 user</span>
        </div>
        <PostInfo />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={
              "https://images.pexels.com/photos/20861037/pexels-photo-20861037/free-photo-of-woman-on-pier-on-lake-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        <p>Description goes here</p>
      </div>
      <PostInteraction />
      <Comments />
    </div>
  );
};

export default Post;
