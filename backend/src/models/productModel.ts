import mongoose, { Document } from "mongoose";

interface Specification {
    title: string;
    description: string;
}

interface Brand {
    name: string;
    logo: {
        public_id: string;
        url: string;
    };
}

interface ProductType extends Document {
    title: string;
    description: string;
    category: string;
    highlight: string;
    specification: Specification; 
    price: number;
    images: { public_id: string; url: string }[];
    brand: Brand; 
    cuttedPrice: number;
    stock: number;
    warranty: number;
    ratings: number;
    numOfReviews: number;
    user: mongoose.Schema.Types.ObjectId;
    createdAt: Date;
}

const ProductSchema = new mongoose.Schema<ProductType>({
    title: {
        type: String,
        required: [true, 'Please Enter Product Title']
    },
    description: {
        type: String,
        required: [true, 'Please Enter Product description']
    },
    category: {
        type: String,
        required: [true, 'Please Enter Product category']
    },
    highlight: {
        type: String,
        required: [true, 'Please Enter Product highlight']
    },
    specification: {
        type: {
            title: {
                type: String,
                required: [true, 'Please Enter Product Title']
            },
            description: {
                type: String,
                required: [true, 'Please Enter Product description']
            }
        },
        required: true
    },
    price: {
        type: Number,
        required: [true, 'Please Enter Product price']
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    brand: {
        type: {
            name: {
                type: String,
                required: true
            },
            logo: {
                type: {
                    public_id: {
                        type: String,
                        required: true
                    },
                    url: {
                        type: String,
                        required: true
                    }
                },
                required: true
            }
        },
        required: true
    },
    cuttedPrice: {
        type: Number,
        required: [true, 'Please Enter Product cuttedPrice']
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxlength: [4, "Stock cannot exceed limit"],
        default: 1
    },
    warranty: {
        type: Number,
        default: 1
    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<ProductType>('Product', ProductSchema);
