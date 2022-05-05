import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { formContext } from "./FormProvider";

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
      .required()
      .matches(/^[aA-zZÀ-ÿ -]+$/, "Efternavn må kun indeholde bogstaver")
      .min(2, "Efternavn skal mindst indeholde to bogstaver"),
    email: yup
      .string()
      .email()
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

const Signup = () => {
  const [formCompleated, setFormCompleated] = useState(false);
  const { setFormdata } = useContext(formContext);

  const handleData = () => {
    setFormCompleated(true);
    setFormdata(getValues());
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      {formCompleated && <Navigate to="payment" />}
      <form
        onSubmit={handleSubmit(handleData)}
        className="flex justify-center flex-col items-center"
      >
        {errors.fornavn && <p>{errors.fornavn?.message}</p>}
        <input
          {...register("fornavn")}
          name="fornavn"
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
        {errors.efternavn && <p>{errors.efternavn.message}</p>}
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
        {errors.email && <p>{errors.email.message}</p>}
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
        {errors.bekraeftemail && <p>{errors.bekraeftemail.message}</p>}
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
          // type="button"
          onClick={handleData}
          defaultValue="Videre"
          className="bg-green-500 rounded-md mt-10 cursor-pointer pt-1 pb-1 pl-10 pr-10 text-white"
        />
      </form>
    </>
  );
};
export default Signup;
