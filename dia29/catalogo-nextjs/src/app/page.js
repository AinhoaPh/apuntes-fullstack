import Image from "next/image";

import styles from "@/style/app.module.css";

export default function Home() {
  // componente servidor
  // const user = process.env.DB_USER;
  // const pass = process.env.DB_PASS;

  // // componente cliente 
  // const next_public = process.env.NEXT_PUBLIC_USER;

  // // servidor backend
  // const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;

  return (
    <div className="items-center justify-center h-full flex flex-col">
      {/* <p className="mb-4">
        <b>user:</b> {user} <br/>
        <b>pass:</b> {pass} <br/>
        <b>next public user:</b> {next_public} <br/>
        <b>backend api:</b> {BACKEND_API} <br/>
      </p> */}

      {/* <Contador /> */}
  
      <h1 > Soy Home</h1>
    </div>
  );
}
