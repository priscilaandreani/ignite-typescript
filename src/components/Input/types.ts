import { HtmlHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
}
