import React from "react";
import SearchBar from "./SearchBar";

export type LayoutProps = {
  children: React.ReactNode;
};


function Layout({ children} : LayoutProps) {
  return <div>
    <SearchBar />
    {children}</div>;
}

export default Layout;
