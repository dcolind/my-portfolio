import AboutMe from "../components/AboutMe"


export default function About(props: { description: string }) {
  return (
    <div className="flex items-center space-x-2 hover:text-white">
      {/* <h2>About page</h2> */}
      {/* <p>{props?.description}</p> */}
      <AboutMe />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/about`)
  const data = await res.json()

  return { props: { description: data.description } }
}