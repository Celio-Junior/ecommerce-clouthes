import { FashionModel } from "@/src/components/User/Fashion-model";

import { FormRegister } from "@/src/components/User/Form/FormRegister";

export default function LoginPage() {
  return (
    <>
      <FashionModel src="/images/model-female-login2.jpg">
        &quot;As melhores roupas que você precisa, independentemente do
        estilo&quot;
      </FashionModel>

      <div className="w-full">
        <div className="p-6 mt-30 w-[50%] min-w-120 m-auto rounded-2xl bg-white shadow-2xs">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold ">
              Create your account
            </h1>
            <h2 className="text-gray-500 font-semibold w-[80%] text-center mt-3">
              Compre e veste as melhores roupas conosco, faça login abaixo, pra
              juntar-se a nós com estilo!
            </h2>
          </div>

          <FormRegister />
        </div>
      </div>
    </>
  );
}
