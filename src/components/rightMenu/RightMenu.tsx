import React from "react";
import Birthdays from "./Birthdays";
import Ads from "./Ads";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <UserInfoCard />
      <FriendRequests />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
