import { useForm } from "react-hook-form";
// @ts-ignore
import { Web3Storage } from "web3.storage";

type FormValues = {
  fileToUpload: FileList;
};

const getAccessToken = () => {
  return process.env.WEB3_STORAGE_API_KEY;
};

const client = new Web3Storage({ token: getAccessToken() });

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
