import React from "react";
import Regexs from "../lib/regex";

export interface Field<T> {
  name: keyof T;
  label?: string;
  placeholder?: string;
  type:
    | "Input"
    | "Select"
    | "DatePicker"
    | "DateTimePicker"
    | "Switch"
    | "TextArea"
    | "Label"
    | "RadioButtons"
    | "Null"
    | "Divider"
    | any;
  value?: any;
  data?: any[];
  returnOnlyValue?: boolean;
  props?: any;
  colSize?: number | string;
  component?: (
    formData: T,
    defaultState: T,
    onChange: (data: any, field?: keyof T) => void,
    showValidations: boolean
  ) => React.ReactElement;
  validation?: Validation<T>;
  [key: string]: any;
}

export type CustomResult = {
  valid: boolean;
  errorMessage: string;
};

export interface Validation<T> {
  required?: boolean;
  regexType?: keyof typeof Regexs;
  errorMessage?: string;
  custom?: (values: T) => boolean | CustomResult;
}

export interface Fields<T> {
  div?: string;
  fields: ((values: T) => Field<T>[]) | Field<T>[];
}

export type DefaultState = {
  [key: string]: any;
};

export interface FormData<T> {
  data: T;
  validation: { isFormValid: boolean };
}
export interface Props<T> {
  fields: Fields<T>[];
  onFormChange?: (formData: FormData<T>) => void;
  showValidation?: boolean;
  defaultState?: T;
  parseState?: Function;
  executeChangeOnBlur?: boolean;
}

export interface FormComponent {
  label?: string;
  value?: any;
  onChange: (value: any) => any;
  name: string;
  colSize?: number;
  placeholder?: string;
  props?: any;
  validation?: any;
  showValidation?: boolean;
  usedFields?: string[];
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  error?: { content: string };
  validationForm: any;
}

interface FormClass extends React.ComponentClass<Props<any>> {}

declare const Form: FormClass;

export default Form;
