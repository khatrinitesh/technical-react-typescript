export type InputFieldProps = {
    id: string;
    name: string;
    type: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
    maxLength:number;
  }

