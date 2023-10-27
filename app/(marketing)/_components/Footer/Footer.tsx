import React from "react";
import { TbCopyright } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-1 border-t border-messo-100 p-5 text-center text-sm text-messo-900 opacity-80 lg:text-base">
      <TbCopyright size={20} /> Copyright! All rights reserved.
    </footer>
  );
}
