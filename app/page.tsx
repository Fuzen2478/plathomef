"use client";
import Header from "./_component/Header";
import { useState } from "react";
import SideBar from "./_component/SideBar";

export default function Home() {
  const [sideFold, setSideFold] = useState(true);
  return (
    <main className="flex min-h-screen flex-col">
      <SideBar isFold={sideFold} setFold={setSideFold} />
      <div className="app-body flex flex-col">
        <Header /> 1
      </div>
    </main>
  );
}
