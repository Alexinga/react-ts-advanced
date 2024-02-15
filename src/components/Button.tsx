import { ComponentPropsWithRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithRef<"button">;
type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithRef<"a">;
export default function Button(props: ButtonProps | AnchorProps) {
  //   const { el, ...otherProps } = props;
  if (props.el === "anchor") {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
}
