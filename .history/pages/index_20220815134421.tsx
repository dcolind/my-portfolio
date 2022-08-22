import FavProjects from "../components/FavProjects"
import Hero from "../components/Hero"


export default function Home(props: { description: string }) {
  return (

    
      <div className="">
      {/* <h2>Home page</h2> */}
      {/* <p>{props?.description}</p> */}
      <Hero />
      <FavProjects />
      <LatestCode repos />

    </div>
    
   
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/home`)
  const data = await res.json()

  return { props: { description: data.description } }
}