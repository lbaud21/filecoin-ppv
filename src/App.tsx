import { FormEvent} from 'react'


function App() {

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file" name="fileToUpload" />  
      </form>
    </>
  )
}

export default App
