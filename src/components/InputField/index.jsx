import { InputFieldStyle } from "./style";

export default function InputField({id, placeholder='', type='text', labelText}) {
  return (
    <InputFieldStyle>
      <label htmlFor={id}>
        {labelText}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
      />
    </InputFieldStyle>
  );
}
