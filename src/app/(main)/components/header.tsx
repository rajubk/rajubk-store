import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-between shadow-lg px-8 py-2">
      <Link href="/home">
        <h2>RBK Store</h2>
      </Link>
      <h4>Sign In</h4>
    </div>
  );
};

export default Header;
