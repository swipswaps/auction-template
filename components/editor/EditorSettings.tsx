import React from "react";
import { Row, Col, Switch, Form, Select } from "antd";
import { gutter } from "../../utils/applicationConstants";
import Tooltip from "../misc/Tooltip";
import { eBaySiteIdMappings } from "../../utils/ebay";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";
import { setItemIdKnown, setSiteId } from "../../actions/editorActions";

const EditorSettings = () => {
	const dispatch = useDispatch();
	const { siteId, itemIdKnown } = useSelector((state: IStore) => state.editor);

	const handleItemIdKnownToggle = () => dispatch(setItemIdKnown(!itemIdKnown));

	const handleSiteIdSelect = (siteId) => dispatch(setSiteId(Number(siteId)));

	return (
		<Row gutter={gutter}>
			<Col xs={24} md={12}>
				<Form.Item
					label={
						<Tooltip tooltipText="If you don't know the eBay item id, enter your eBay seller name and search for a listing">
							Load listing by entering eBay item id
						</Tooltip>
					}
				>
					<Switch checked={itemIdKnown} onChange={handleItemIdKnownToggle} />
				</Form.Item>
			</Col>
			<Col xs={24} md={12}>
				<Form.Item
					label={
						<Tooltip tooltipText="Please select the country you are using eBay from">
							eBay country
						</Tooltip>
					}
				>
					<Select
						showSearch
						optionFilterProp="children"
						value={Number(siteId)}
						onChange={handleSiteIdSelect}
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
					>
						{eBaySiteIdMappings
							.sort((a, b) => a.siteName.localeCompare(b.siteName))
							.map((ebaySiteIdMapping) => (
								<Select.Option
									key={ebaySiteIdMapping.siteId}
									value={ebaySiteIdMapping.siteId}
								>
									{ebaySiteIdMapping.siteName}
								</Select.Option>
							))}
					</Select>
				</Form.Item>
			</Col>
		</Row>
	);
};

export default EditorSettings;
