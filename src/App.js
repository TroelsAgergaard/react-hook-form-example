import { render } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fornavn: yup
      .string()
      .required("Venligst udfyld fornavn")
      .matches(/^[aA-zZÀ-ÿ -]+$/, "Fornavn må kun indeholde bogstaver")
      .min(2, "Fornavn skal mindst indeholde to bogstaver"),
    efternavn: yup
      .string()
      .required("Venligst udfyld efternavn")
      .matches(/^[aA-zZÀ-ÿ -]+$/, "Efternavn må kun indeholde bogstaver")
      .min(2, "Efternavn skal mindst indeholde to bogstaver"),
    email: yup
      .string()
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Venligst brug formatet: navn@eksempel.dk"
      )
      .required("Venligst udfyld din email adresse"),
    bekraeftemail: yup
      .string()
      .oneOf(
        [yup.ref("email")],
        "Venligst kontroler at de to indtastede email adresser er ens"
      )
      .required("Venligst bekræft din email adresse"),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // emailRef.current = watch("email", "");

  const handleData = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="App mt-10 w-1/3 mx-auto">
        <form
          onSubmit={handleSubmit(handleData)}
          className="flex justify-center flex-col items-center"
        >
          {errors.fornavn && <p className="mt-3">{errors.fornavn?.message}</p>}
          <input
            {...register("fornavn")}
            type="text"
            placeholder="Fornavn"
            className="mt-2
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
"
          />
          {errors.efternavn && (
            <p className="mt-3">{errors.efternavn.message}</p>
          )}
          <input
            {...register("efternavn")}
            type="text"
            placeholder="Efternavn"
            className="mt-2
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
"
          />
          {errors.email && <p className="mt-3">{errors.email.message}</p>}
          <input
            {...register("email")}
            type="text"
            placeholder="Email"
            className="mt-2
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
"
          />
          {errors.bekraeftemail && (
            <p className="mt-3">{errors.bekraeftemail.message}</p>
          )}
          <input
            {...register("bekraeftemail")}
            type="text"
            placeholder="Bekræft email"
            className="mt-2
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
"
          />
          <input
            type="password"
            placeholder="Kodeord"
            className="mt-2
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
"
          />
          <input
            type="submit"
            value="Opret bruger konto"
            className="bg-green-500 rounded-md mt-10 cursor-pointer pt-1 pb-1 pl-10 pr-10 text-white"
          />
        </form>
      </div>
    </>
  );
}

export default App;
