export enum ContentSectionType
{
	Text,
	TextImage,
	ImageText,
	Image,
	Carousel,
	Video
}

export interface ProjectContent {
	sectionType:ContentSectionType;
	title:string;
	markdown:string;
	image:string;
	youtubeLink:string;
}
