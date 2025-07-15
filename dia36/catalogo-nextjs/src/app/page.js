import Image from "next/image";
import Contador from "@/components/Contador";

export default function Home() {
  return (
 <div className="items-centar justify-center h-full flex flex-col">
        <Contador/>
       < h1>Soy Home</h1>
        
  </div>
  );
}
