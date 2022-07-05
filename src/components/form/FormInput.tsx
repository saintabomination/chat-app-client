type Props = {
  errorMessage?: string;
  [x:string]: any;
};

const FormInput = ({ errorMessage, ...otherProps }: Props): JSX.Element => {
  return (
    <>
      <input
        {...otherProps}
        style={
          errorMessage ? {
            border: '1px solid red',
          } : {}
        }
      />
      {errorMessage ? <span>{errorMessage}</span> : null}
    </>
  );
}

export default FormInput;
