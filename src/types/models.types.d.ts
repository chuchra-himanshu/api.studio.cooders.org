interface LibrarySchemaInterface extends Document {
  title: string;
  url: string;
  logo: string;
  slug: string;
}

interface ComponentSchemaInterface extends Document {
  title: string;
  icon: string;
  visibility: boolean;
  props: {
    key: string;
    value: string;
    visibility: boolean;
  }[];
}
