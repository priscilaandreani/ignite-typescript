import { HtmlHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface InputParams extends HtmlHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
}
