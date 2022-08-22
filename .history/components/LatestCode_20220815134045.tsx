
import React, { useEffect, useState } from "react";
import Link from "next/link";

function LatestCode() {
    const [repos, setRepos] = useState([]);

    useEffect(async () => {
      // let latestRepos = await getLatestRepos(userData);
      // console.log("latestRepos", latestRepos);
      setRepos(repositories);
    }, []);
  return (
    <div>
        
    </div>
  )
}

export default LatestCode