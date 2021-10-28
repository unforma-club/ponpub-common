import { Document, Schema, model, Model } from "mongoose";

interface TypefaceAttr {
    fileName: string;
    fileSize: number;
    fileType: string;
    fileUrl: string;
    fileDestination: string;
}

interface TypefaceDoc extends Document<TypefaceAttr> {}

interface TypefaceModel extends Model<TypefaceDoc> {
    build(attrs: TypefaceAttr): TypefaceDoc;
}

const typefaceSchema = new Schema(
    {
        fileName: String,
        fileSize: Number,
        fileType: String,
        fileUrl: String,
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

typefaceSchema.statics.build = (attrs: TypefaceAttr) => {
    return new Typeface(attrs);
};

const Typeface = model<TypefaceDoc, TypefaceModel>("Typeface", typefaceSchema);
export { Typeface };
