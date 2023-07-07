import type { SchemaNode, SchemaType, Property } from "./types";

export const getSchemaLabel = (fieldDom: HTMLElement) => {
  const schemaLabelNode = fieldDom.querySelector(
    '[class ^= "SchemaNode__label__"]'
  );
  return schemaLabelNode?.textContent || "root";
};

export const getSchemaName = (fieldDom: HTMLElement) => {
  const schemaNameNode = fieldDom.querySelector(
    '[class ^= "IconTextPair__iconTextPair__"]'
  );
  return schemaNameNode?.textContent || "not specified";
};

export const getSchemaType = (fieldDom: HTMLElement): SchemaType => {
  const schemaTypeNode = fieldDom.querySelector(
    '[class ^= "SchemaNode__type__"'
  );
  return (schemaTypeNode?.textContent as SchemaType) || "not specified";
};

export const getProperty = (schema: HTMLElement): Property => {
  return {
    name: getSchemaName(schema),
    type: getSchemaType(schema),
  };
};

export const getRootProperty = (schema: HTMLElement): Property => {
  return {
    name: getSchemaLabel(schema),
    type: "Object",
  };
};
