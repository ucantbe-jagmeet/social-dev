import React from "react";
import Birthdays from "./Birthdays";
import Ads from "./Ads";
import FriendRequests from "./FriendRequests";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
