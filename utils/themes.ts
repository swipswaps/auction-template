import { getApplicationBaseUrl } from "./misc";

const bootswatchThemes = [
	"cerulean",
	"cosmo",
	"cyborg",
	"darkly",
	"flatly",
	"journal",
	"litera",
	"lumen",
	"lux",
	"materia",
	"minty",
	"pulse",
	"sandstone",
	"simplex",
	"sketchy",
	"slate",
	"solar",
	"spacelab",
	"superhero",
	"united",
	"yeti",
] as const;

export type BootswatchTheme = typeof bootswatchThemes[number];

const getAssetUrl = () => `${getApplicationBaseUrl()}/at/assets`;

export const getThemeCssUrl = (theme: BootswatchTheme | "bootstrap") =>
	`${getAssetUrl()}/${theme}.css`;

export const getThemePreviewUrl = (theme: BootswatchTheme) =>
	`${getAssetUrl()}/${theme}.png`;

type ThemeInfo = {
	name: BootswatchTheme;
	previewUrl: string;
};

export const themes: Array<ThemeInfo> = bootswatchThemes.map((theme) => {
	return { name: theme, previewUrl: getThemePreviewUrl(theme) };
});
