import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";
// Polymorphic Component - A "Container" that can be turned into any element of your choice. Ex: into a "Button" component
// We are using "T" as a placeholder but we can extend it to be an ElementType as this is being passed in
type ContainerProps<T extends ElementType> = {
  //   as: ElementType;
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;
// Turning this function to receive generic types
export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}
