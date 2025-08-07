type FormItemProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
  isError?: boolean;
};
const FormItem = ({ label, error, children, isError }: FormItemProps) => {
  return (
    <div className="mb-4 flex w-full flex-col gap-2.5">
      <div className="font-medium">{label}</div>
      <div className="mb-2">{children}</div>
      {isError && <div className="text-sm text-red-500">{error}</div>}
    </div>
  );
};

export default FormItem;
