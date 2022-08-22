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
    <div className="flex justify-between p-5 max-w-7xl mx-auto hidden md:inline-flex items-center space-x-5">
      {navigationProps.map(item => <NavigationItem {...item} />)}
    </div>
  )
}

Navigation.getSsrData = fetchNavigationData

const NavigationItem = (props) => (
  <Link href={props.href}>
    <a style={{ margin: "0 1rem" }}>{props.children}</a>
  </Link>
)
