import React, { useState, useEffect } from "react"
import Link from 'next/link';
import { myFetch } from "../src/myFetch";
import { useT}

interface NavigationItem {
  children: String;
  href: String;
}

interface Props {
  items?: NavigationItem[]
}

type SSRComponent = React.FC<Props> & { getSsrData: (e: string) => Promise<any> }

const fetchNavigationData = () => myFetch("http://localhost:3000/api/navigation")

export const Navigation: SSRComponent = () => {
  const [navigationProps, setNavigationProps] = useState([])

  useEffect(
    () => {
      fetchNavigationData().then(data => {
        setNavigationProps(data)
      })
    },
    []
  )

  return (
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="flex  md:flex-row justify-between items-center">
        <div className="">
      {navigationProps.map(item => <NavigationItem {...item} />)}
    </div>
    </div>
    <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
    </div>
  )
}

Navigation.getSsrData = fetchNavigationData

const NavigationItem = (props) => (
  <Link href={props.href}>
    <a style={{ margin: "0 1rem" }}>{props.children}</a>
  </Link>
)
