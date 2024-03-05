"use client";
import { ILanguages } from "@/types/languages";
import Image from "next/image";

const languages: ILanguages[] = [
  {
    id: 1,
    name: "javascript",
    icon: "/icons/javascript.svg",
  },
  {
    id: 2,
    name: "python",
    icon: "/icons/python.svg",
  },
  {
    id: 3,
    name: "php",
    icon: "/icons/php.svg",
  },
  {
    id: 4,
    name: "rust",
    icon: "/icons/rust.svg",
  },
  {
    id: 5,
    name: "java",
    icon: "/icons/java.svg",
  },
  {
    id: 6,
    name: "ruby",
    icon: "/icons/ruby.svg",
  },
  {
    id: 7,
    name: "kotlin",
    icon: "/icons/kotlin.svg",
  },
  {
    id: 8,
    name: "c",
    icon: "/icons/c.svg",
  },
  {
    id: 9,
    name: "csharp",
    icon: "/icons/csharp.svg",
  },
  {
    id: 10,
    name: "cpp",
    icon: "/icons/cpp.svg",
  },
  {
    id: 11,
    name: "typescript",
    icon: "/icons/typescript.svg",
  },
  {
    id: 12,
    name: "golang",
    icon: "/icons/go.svg",
  },
  {
    id: 13,
    name: "css",
    icon: "/icons/css.svg",
  },
  {
    id: 14,
    name: "html",
    icon: "/icons/html.svg",
  },
  {
    id: 15,
    name: "swift",
    icon: "/icons/swift.svg",
  },
  {
    id: 16,
    name: "scala",
    icon: "/icons/scala.svg",
  },
  {
    id: 17,
    name: "solidity",
    icon: "/icons/solidity.svg",
  },
  {
    id: 18,
    name: "groovy",
    icon: "/icons/groovy.svg",
  },
  {
    id: 19,
    name: "shell",
    icon: "/icons/shell.svg",
  },
  {
    id: 20,
    name: "haskell",
    icon: "/icons/haskell.svg",
  },
  {
    id: 21,
    name: "dart",
    icon: "/icons/dart.svg",
  },
  {
    id: 22,
    name: "perl",
    icon: "/icons/perl.svg",
  },
];

interface SidebarProps {
  setLang: any;
}

const Sidebar: React.FC<SidebarProps> = ({ setLang }: SidebarProps) => {
  return (
    <div className="flex w-70 items-start">
      <ul className="grid grid-cols-3 border w-full border-grey rounded-md text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        {languages.map((lang) => (
          <li
            key={lang.id}
            className={`flex w-full border-b border-b-grey p-3`}
          >
            <button
              onClick={() => {
                setLang(lang.name);
              }}
              className={`flex justify-center items-center px-2 py-4 text-white rounded-lg active w-full`}
              aria-current="page"
            >
              <div className="flex w-22.5 justify-center items-center">
                <Image
                  src={lang.icon}
                  alt={lang.name}
                  width="100"
                  height="100"
                  className="flex w-42.5"
                />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
