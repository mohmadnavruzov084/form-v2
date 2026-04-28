import { Input } from "@/components/ui/input/input";
import { Controller, useFormContext } from "react-hook-form";

interface iInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const InputController = ({ name, ...props }: iInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string | undefined;
  const { onChange, value, ...rest } = props;
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => {
          return <Input onChange={onChange} value={value} {...rest} />;
        }}
      />
      {error && (
        <p style={{ color: "red", fontSize: "8px", marginTop: "4px" }}>
          {error}
        </p>
      )}
    </>
  );
};
