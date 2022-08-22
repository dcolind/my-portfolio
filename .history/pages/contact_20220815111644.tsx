

export default function Contact(props: { description: string }) {
    return (
      <div className="">
        <h2>Contact Page</h2>
        <p>{props?.description}</p>
        
      </div>
    )
  }
  
  export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/contact`)
    const data = await res.json()
  
    return { props: { description: data.description } }
  }