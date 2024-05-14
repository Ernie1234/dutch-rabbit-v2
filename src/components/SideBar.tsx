import { Link } from "react-scroll";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Contract from "./Contract";

function SideBar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu color="white" size={40} />
      </SheetTrigger>
      <SheetContent>
        <div className="h-full max-h-max justify-center items-center flex-col flex text-lg gap-4">
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="home"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="https://poocoin.app/tokens/0x48a510a3394c2a07506d10910ebeff3e25b7a3f1"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              buy
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="https://bscscan.com/token/0x48a510A3394C2A07506d10910EBEFf3E25b7a3f1"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              BSCSCAN
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="https://dexscreener.com/bsc/0xdc98307571709e048f8c6d1ff0bb48eab054e535"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              DEXSCREENER
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="https://www.geckoterminal.com/bsc/pools/0xdc98307571709e048f8c6d1ff0bb48eab054e535"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              GECKOTERMINAL
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="https://bscscan.com/tx/0x073ad776ef0796e7767b3118f2fe70caf29c2a06ce852d0e2c24b4fef195ed76"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              LP 100% Burned
            </a>
          </SheetClose>
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="roadmap"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              Roadmap
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="tokemonic"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              tokemonic
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="https://dutch-rabbit.gitbook.io/dutch-rabbit"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              whitepaper
            </a>
          </SheetClose>
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="utilities"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              utilities
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mission"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              mission
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="disclaimer"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              Disclaimer
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Contract />
          </SheetClose>
          <SheetClose asChild>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="footer"
              className="text-black dark:text-white hover:underline capitalize decoration-2 underline-offset-4 cursor-pointer"
            >
              contact us
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SideBar;
