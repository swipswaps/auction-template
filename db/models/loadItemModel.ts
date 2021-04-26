import { Document, Model, Schema, model, models } from "mongoose";
import { AllowedEbaySiteId } from "../../utils/ebay";

const schemaName = "load";

export interface ILoadItem extends Document {
	sellerName?: string;
	itemId: string;
	itemIdKnown: boolean;
	siteId: AllowedEbaySiteId;
}

export interface LoadItemModel extends Model<ILoadItem> {}

const LoadItemSchema = new Schema<ILoadItem, LoadItemModel>(
	{
		sellerName: { type: String },
		itemId: { type: String, required: true },
		itemIdKnown: { type: Boolean, required: true },
		siteId: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

export default models[schemaName] || model(schemaName, LoadItemSchema);
