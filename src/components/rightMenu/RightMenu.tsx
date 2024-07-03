import React from "react";
import FriendRequestList from "./FriendRequestList";
import Birthdays from "./Birthdays";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequestList />
      <Birthdays />
    </div>
  );
};

export default RightMenu;
