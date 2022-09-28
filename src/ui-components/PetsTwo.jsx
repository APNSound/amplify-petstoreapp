/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import PetProfile2 from "./PetProfile2";
import { Collection } from "@aws-amplify/ui-react";
export default function PetsTwo(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Pet,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "PetsTwo")}
    >
      {(item, index) => (
        <PetProfile2
          pet={item}
          height="auto"
          width="auto"
          margin="1rem 1rem 1rem 1rem"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PetProfile2>
      )}
    </Collection>
  );
}
