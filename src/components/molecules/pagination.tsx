"use client";

import classNames from "classnames";
import React from "react";
import Icon from "../atoms/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  workLength: number;
  currentWork: number;
};

const Pagination = ({ className, workLength, currentWork }: Props) => {
  const pathname = usePathname();
  return (
    <div
      className={classNames(
        className,
        "absolute content-center w-full h-[70px] bottom-0 left-1/2 -translate-x-1/2 grid-cols-12 grid gap-4 container mx-auto z-10"
      )}
    >
      <div className="col-span-3"></div>
      <div className="col-span-9 h-full flex justify-center items-center gap-8">
        {currentWork > 1 ? (
          <Link href={String(currentWork - 1)}>
            <Icon name="left" size={25} />
          </Link>
        ) : (
          <button disabled className="disabled:opacity-50 cursor-not-allowed">
            <Icon name="left" size={25} />
          </button>
        )}
        <ul className="flex gap-4">
          {Array.from({ length: workLength }, (_, index) => index + 1).map(
            (work) => {
              const route = `/work/${work}`;
              return (
                <li
                  className="relative w-8 aspect-square flex items-center justify-center"
                  key={work}
                >
                  <Link href={route} className="group font-medium">
                    <span
                      className={classNames(
                        "block w-full h-full rotate-45 absolute left-0 top-0 transition-colors duration-300",
                        pathname === route && "bg-primary"
                      )}
                    ></span>
                    <span
                      className={classNames(
                        "relative text-secondary z-40 transition-colors duration-300",
                        pathname !== route &&
                          "text-white group-hover:text-primary"
                      )}
                    >
                      {work}
                    </span>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
        {currentWork < workLength ? (
          <Link href={String(currentWork + 1)}>
            <Icon name="right" size={25} />
          </Link>
        ) : (
          <button disabled className="disabled:opacity-50 cursor-not-allowed">
            <Icon name="right" size={25} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
