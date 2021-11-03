import { Document, Schema, model, Model } from "mongoose";

interface CSSAttr {
    fileUrl: string;
    fileName: string;
    fileDestination: string;
}

export interface CSSFont extends Document<CSSAttr> {}

interface CSSModel extends Model<CSSFont> {
    build(attrs: CSSAttr): CSSFont;
}

const cssSchema = new Schema(
    {
        fileUrl: String,
        fileName: String,
        fileDestination: String,
    },
    {
        toJSON: {
            transform(_doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            },
        },
        timestamps: true,
    }
);

cssSchema.statics.build = (attrs: CSSAttr) => {
    return new FontCSS(attrs);
};

const FontCSS = model<CSSFont, CSSModel>("FontCSS", cssSchema);
export { FontCSS };
