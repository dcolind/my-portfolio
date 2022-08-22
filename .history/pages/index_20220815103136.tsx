

export default function Home(props: { description: string }) {
  return (

    
      <div className="">
      <h2>Home page</h2>
      <p>{props?.description}</p>
    </div>
    
   
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/home`)
  const data = await res.json()

  return { props: { description: data.description } }
}