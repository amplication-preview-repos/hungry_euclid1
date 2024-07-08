import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="phone" source="phone" />
        <TextInput label="name" source="name" />
        <TextInput label="email" source="email" type="email" />
      </SimpleForm>
    </Create>
  );
};
