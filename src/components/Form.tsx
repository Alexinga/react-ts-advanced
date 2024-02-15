import {
  useRef,
  forwardRef,
  type ComponentPropsWithRef,
  type FormEvent,
  useImperativeHandle,
} from "react";

export type FormHandleProps = {
  clear: () => void;
};

type FormProps = ComponentPropsWithRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandleProps, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const formRef = useRef<HTMLFormElement>(null);
  useImperativeHandle(ref, () => {
    return {
      clear() {
        formRef.current?.reset();
      },
    };
  });
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    formRef.current?.reset();
  }
  return (
    <form onSubmit={handleSubmit} ref={formRef} {...otherProps}>
      {children}
    </form>
  );
});

export default Form;
