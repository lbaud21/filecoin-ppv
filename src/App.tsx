import { useForm } from "react-hook-form";
// @ts-ignore
import { Web3Storage } from "web3.storage";

type FormValues = {
  fileToUpload: FileList;
};

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhiOUYxQWI5NTk3RDM5MDVCNzU0NzYzQkExNmY4MjNhNTA4YTQwNDciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODU4MjQ0NDIwMzMsIm5hbWUiOiJIQUNLRlMifQ.TM9YgaxtPCoFt4oQcD73_e0FtPol8dnrbRc9Zuo2dLw";

const client = new Web3Storage({ token: API_KEY });

function App() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data.fileToUpload[0]);
    const rootCid = await client.put([data.fileToUpload[0]]);
    const info = await client.status(rootCid);
    console.log({ rootCid, info });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="fileToUpload">File to upload to Filecoin</label>
          <input type="file" {...register("fileToUpload")} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
