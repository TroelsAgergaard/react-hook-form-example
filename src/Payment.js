import { useContext } from "react";
import { formContext } from "./FormProvider";

const Payment = () => {
  let { formdata } = useContext(formContext);

  return (
    <>
      <input
        readOnly
        type="text"
        placeholder={formdata.fornavn}
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
        readOnly
        type="text"
        placeholder={formdata.efternavn}
        className="mt-2
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
"
      />
    </>
  );
};
export default Payment;
