import React from "react";
import FriendRequestList from "./FriendRequestList";
import Birthdays from "./Birthdays";
import Ads from "./Ads";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequestList />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
