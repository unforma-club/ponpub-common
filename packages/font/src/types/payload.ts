import { BaseTypeface } from "./typeface";

export interface PayloadFont {
    id: string;
    createdAt: string;
    updatedAt: string;
    family: string;
    subFamily: string;
    typefaces: Array<BaseTypeface>;
    default: BaseTypeface;
    sampleText: {
        value: string;
    };
    stylesheet: {
        fileUrl: string;
        fileName: string;
    };
}
