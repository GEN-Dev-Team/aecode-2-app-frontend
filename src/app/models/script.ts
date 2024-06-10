import { ICurrency } from './currency';
import { IPlan } from './plan';
import { IPLanguage } from './programmingLanguage';
import { ISoftware } from './software';
import { ITag } from './tags';
import { User } from './user';

export interface IScript {
  id_script: number;
  profile: User;
  software: ISoftware[];
  proglang: IPLanguage[];
  tag: ITag[];
  currency: ICurrency;
  plan: IPlan;
  script_name: string;
  script_file: string;
  script_multimedia: string[];
  script_description: string;
  script_price: number;
  script_date: Date;
}
