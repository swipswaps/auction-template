import React from "react";
import { Row, Col, Select, Image } from "antd";
import { getThemePreviewUrl, themes } from "../../utils/themes";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../actions/editorActions";
import { IStore } from "../../store";
import { gutter } from "../../utils/applicationConstants";
import { capitalizeString } from "../../utils/misc";
const { Option } = Select;

const ThemeSelector = () => {
	const dispatch = useDispatch();
	const { theme } = useSelector((state: IStore) => state.editor);

	const handleChange = (value) => {
		dispatch(setTheme(value));
	};

	return (
		<Row gutter={gutter}>
			<Col xs={24} md={12}>
				<Select
					value={theme}
					onChange={handleChange}
					style={{ width: "100%" }}
					showSearch
					optionFilterProp="children"
					filterOption={(input, option) =>
						option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
					}
				>
					{themes.map((theme, i) => (
						<Option value={theme.name} key={i}>
							{capitalizeString(theme.name)}
						</Option>
					))}
				</Select>
			</Col>
			<Col xs={24} md={12}>
				<Image src={getThemePreviewUrl(theme)} alt={theme} preview={false} />
			</Col>
		</Row>
	);
};

export default ThemeSelector;
