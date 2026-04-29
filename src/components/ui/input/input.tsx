import { FC } from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IProps> = ({ placeholder, ...props }) => {
  return (
    <>
      <input type="text" placeholder={placeholder} {...props} />
    </>
  );
};
