export type SchemaType =
  | "String"
  | "Boolean"
  | "Byte"
  | "Short"
  | "Double"
  | "Long"
  | "Int64"
  | "Date"
  | "Time"
  | "Datetime"
  | "Datetimenotz"
  | "Timespan"
  | "Memo"
  | "Blob"
  | "Object"
  | "not specified";

export type SchemaNode = {
  name: string;
  type: SchemaType;
  value?: string;
  leaves?: SchemaNode[];
  groups?: SchemaNode[];
};

export type Property = {
  name: string;
  type: SchemaType;
};