

export default function Home(props: { description: string }) {
  return (

    <div className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex hidden md:inline-flex items-center space-x-5">
      <h2>Home page</h2>
      <p>{props?.description}</p>
    </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/home`)
  const data = await res.json()

  return { props: { description: data.description } }
}