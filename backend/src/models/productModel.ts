import mongoose, { Document } from 'mongoose';

export interface Rating {
    rate: number;
    count: number;
}

interface ProductType extends Document {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

const productSchema = new mongoose.Schema<ProductType>({
    id:{
        type:String,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        rate: {
            type: Number,
            required: true
        },
        count: {
            type: Number,
            required: true
        }
    }
});

const ProductModel = mongoose.model<ProductType>('Product', productSchema);

export default ProductModel;
