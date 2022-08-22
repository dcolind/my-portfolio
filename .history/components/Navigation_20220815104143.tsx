import React, { useState, useEffect } from "react"
import Link from 'next/link';
import { myFetch } from "../src/myFetch";

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
        <div className="space-x-5">
      {navigationProps.map(item => <NavigationItem {...item} />)}
    </div>
    </div>
   
    </div>
  )
}

Navigation.getSsrData = fetchNavigationData

const NavigationItem = (props) => (
  <Link href={props.href}>
    <a style={{ margin: "0 1rem" }}>{props.children}</a>
  </Link>
)
