import { cn } from "@/src/utils/function-formats";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div
        // style={{
        //   backgroundImage: "url(/images/model-female-login.jpg)",
        //   objectFit: "cover",
        //   backgroundSize: "100% 100%",
        //   backgroundRepeat: "no-repeat",
        // }}
        className={cn(
          "bg-[url(/images/model-female-login.jpg)] bg-cover bg-no-repeat w-[40%]",
          "rounded-2xl",
          "flex flex-col justify-between",
          "p-12",
        )}
      >
        <h1 className="flex items-center gap-2">
          {" "}
          <Image
            src="/icon.svg"
            alt="model-female-login"
            width={45}
            height={40}
          />{" "}
          <Link className="text-5xl font-medium" href={"/"}>
            Northline
          </Link>
        </h1>
        {/* imagem */}

        <div>
          <h2 className="text-3xl font-bold">
            &quot;As melhores roupas que você precisa, independentemente do
            estilo&quot;
          </h2>
          <h3 className="text-3xl font-semibold mt-5">Celio Junior</h3>
          <h4 className="text-xl font-medium">Development of software</h4>
        </div>
      </div>

      <div>
        <h1>Welcome Northline</h1>
        <form action="">
          <fieldset>
            <legend>
              Compre e veste as melhores roupas conosco, faça login abaixo, pra
              juntar-se a nós com estilo!
            </legend>

            <label htmlFor="">Email</label>
            <input type="email" />

            <button type="submit"> Login</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
