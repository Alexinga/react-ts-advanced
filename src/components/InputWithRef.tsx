import { forwardRef, ComponentPropsWithRef } from "react";

type InputWithRefProps = {
  label: string;
  id: string;
  //Need to use "ComponentPropsWithRef from react to use refs"
} & ComponentPropsWithRef<"input">;

// Here we have an example of using a forwardRef from react to wrap the component to be able to use ref
// We then need 2 types in the forward ref in which it is modifying
const InputWithRef = forwardRef<HTMLInputElement, InputWithRefProps>(
  function InputWithRef({ label, id, ...props }, ref) {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} ref={ref} />
      </p>
    );
  }
);

export default InputWithRef;
