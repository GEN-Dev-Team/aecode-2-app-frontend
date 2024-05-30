export interface IScript {
  id_script: number;
  id_profile: number;
  id_software: number;
  id_proglang: number;
  id_tag: number;
  id_currency: number;
  id_plan: number;
  script_name: string;
  script_description: string;
  script_file: string;
  script_multimedia: string;
  script_price: string;
}

export interface IScriptDemo {
  id_prueba: number;
  nombre: string;
  descripcion: string;
  prueba_multimedia: string;
}
