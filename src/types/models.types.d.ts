interface LibrarySchemaInterface extends Document {
  title: string;
  url: string;
  logo: string;
  slug: string;
}

interface ComponentPropSchemaInterface {
  propName: string;
  defaultValue: string;
  inputType: "DROPDOWN" | "TOGGLE" | "RADIO" | "TEXTFIELD";
  valuesType: string;
  visibility: boolean;
}

interface ComponentSchemaInterface extends Document {
  title: string;
  icon: string;
  visibility: boolean;
  props: ComponentPropSchemaInterface[];
}
