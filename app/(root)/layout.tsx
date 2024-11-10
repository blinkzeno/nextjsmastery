import NavBar from "@/components/NavBar"


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='font-work-sans'>
      <NavBar />
      {children}
    </main>
  )
}

export default layout