/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PetProfile2Props } from "./PetProfile2";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PetsTwoProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PetProfile2Props;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function PetsTwo(props: PetsTwoProps): React.ReactElement;
