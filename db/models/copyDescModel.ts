import { Document, Model, Schema, model, models } from "mongoose";
import { AllowedEbaySiteId, EbayItem } from "../../utils/ebay";
import { BootswatchTheme } from "../../utils/themes";

const schemaName = "copy";

export interface ICopyDesc extends Document {
	sellerName: string;
	itemId: string;
	siteId: AllowedEbaySiteId;
	item: EbayItem;
	theme: BootswatchTheme;
}

export interface CopyDescModel extends Model<ICopyDesc> {}

const CopyDescSchema = new Schema<ICopyDesc, CopyDescModel>(
	{
		sellerName: { type: String, required: true },
		itemId: { type: String, required: true },
		siteId: { type: String, required: true },
		item: { type: Object, required: true },
		theme: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

export default models[schemaName] || model(schemaName, CopyDescSchema);
