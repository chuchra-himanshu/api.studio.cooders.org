interface LibrarySchemaInterface extends Document {
  title: string;
  url: string;
  logo: string;
  slug: string;
  visibility: boolean;
}

interface ComponentPropSchemaInterface {
  propName: string;
  defaultValue: string;
  inputType: "DROPDOWN" | "TOGGLE" | "RADIO" | "TEXTFIELD";
  valuesType: string;
  visibility: boolean;
}

interface ComponentSchemaInterface extends Document {
  library: ObjectId;
  title: string;
  icon: string;
  visibility: boolean;
  props: ComponentPropSchemaInterface[];
}

interface StyleSchemaInterface extends Document {
  library: ObjectId;
  component: ObjectId;
  inputStyles: {
    title: string;
    displayType: "GROUP" | "SINGLE";
    items: {
      itemTitle: string;
      propName: string;
      inputType: "DROPDOWN" | "TOGGLE" | "RADIO" | "TEXTFIELD";
      valuesType: string;
      visibility: boolean;
    }[];
    visibility: boolean;
  }[];
  cssSupport: boolean;
  tailwindSupport: boolean;
}
