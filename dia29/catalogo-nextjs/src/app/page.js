import Image from "next/image";
import Contador from "@/components/Contador";

export default function Home() {

  // com'ponenete servidor
const user=process.env.DB_USER
const pass=process.env.DB_PASS
// contenete cliente 
const next_public =process.env.NEXT_PUBLIC_USER

// servidor backend
const BACKEND_API=process.env.NEXT_PUBLIB_BACKEND_API


  return (
 <div className="items-centar justify-center h-full flex flex-col">
<p className="mb-4">
 <b>user:</b>  {DB_USER} <br/>
 <b>pass:</b> {DB_PASS} <br/>
 <b>next public user:</b> {next_public} <br/>
 <b>backend api: </b>{NEXT_PUBLIB_BACKEND_API} <br/>
</p>

<Contador/>
        <h1>Soy Home</h1>
        
  </div>
  );
}
