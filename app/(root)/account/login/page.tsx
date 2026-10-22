import { FashionModel } from "@/src/components/User/Fashion-model";
import { FormLogin } from "@/src/components/User/Form/FormLogin";

export default function LoginPage() {
  return (
    <>
      <FashionModel src="/images/model-female-login.jpg">
        &quot;As melhores roupas que você precisa, independentemente do
        estilo&quot;
      </FashionModel>

      <div className="w-full">
        <div className="p-6 mt-30 w-[50%] m-auto rounded-2xl bg-white">
          <div className="flex flex-col items-center">
            <h1 className="text-(--beige-color) text-3xl md:text-4xl font-bold ">
              Welcome Northline
            </h1>
            <h2 className="text-gray-500 font-semibold w-[80%] text-center mt-3">
              Compre e veste as melhores roupas conosco, faça login abaixo, pra
              juntar-se a nós com estilo!
            </h2>
          </div>

          <FormLogin />
        </div>
      </div>
    </>
  );
}
