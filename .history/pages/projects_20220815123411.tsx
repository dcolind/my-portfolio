



export default function Projects(props: { description: string }) {
  return (
    <div className="">
      {/* <h2>About page</h2> */}
      {/* <p>{props?.description}</p> */}
      <Project />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/experience`)
  const data = await res.json()

  return { props: { description: data.description } }
}