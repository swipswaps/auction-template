import React from "react";
import { EbayItem } from "../../utils/ebay";

const TemplateImageGallery = ({ item }: { item: EbayItem }) => {
	const imgWidth = "75px";
	const gridGap = "1em";
	const images = item?.PictureURL;

	return (
		<>
			<div className="gallery">
				<div className="big-picture-container">
					{images.map((_, i) => {
						return (
							<div key={i} id={`item-${i + 1}`} className="pic-container"></div>
						);
					})}
					{images.map((image, i) => {
						return (
							<a key={i} className="item big-picture" href={`#item-${i + 1}`}>
								<img
									src={image}
									alt={`${item?.Title} #${i + 1}:`}
									title={`${item?.Title} #${i + 1}:`}
								/>
							</a>
						);
					})}
				</div>
				<div className="template-grid">
					{images.map((image, i) => {
						return (
							<div
								className="template-grid-item"
								style={{
									backgroundImage: `url("${image}")`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
								key={i}
							>
								<a href={`#item-${i + 1}`}>
									<div />
								</a>
							</div>
						);
					})}
				</div>
			</div>
			<style jsx>{`
				.gallery {
					position: relative;
				}
				.template-grid {
					display: grid;
					grid-template-columns: auto auto auto auto;
					grid-gap: ${gridGap};
					justify-content: center;
				}
				.template-grid-item {
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.template-grid-item a,
				.template-grid-item div {
					object-fit: cover;
					width: ${imgWidth};
					min-height: ${imgWidth};
				}
				.gallery .pic-container {
					display: none !important;
				}
				.gallery
					.pic-container:nth-of-type(1):target
					~ .big-picture:nth-of-type(1),
				.gallery
					.pic-container:nth-of-type(2):target
					~ .big-picture:nth-of-type(2),
				.gallery
					.pic-container:nth-of-type(3):target
					~ .big-picture:nth-of-type(3),
				.gallery
					.pic-container:nth-of-type(4):target
					~ .big-picture:nth-of-type(4),
				.gallery
					.pic-container:nth-of-type(5):target
					~ .big-picture:nth-of-type(5),
				.gallery
					.pic-container:nth-of-type(6):target
					~ .big-picture:nth-of-type(6),
				.gallery
					.pic-container:nth-of-type(7):target
					~ .big-picture:nth-of-type(7),
				.gallery
					.pic-container:nth-of-type(8):target
					~ .big-picture:nth-of-type(8),
				.gallery
					.pic-container:nth-of-type(9):target
					~ .big-picture:nth-of-type(9),
				.gallery
					.pic-container:nth-of-type(10):target
					~ .big-picture:nth-of-type(10),
				.gallery
					.pic-container:nth-of-type(11):target
					~ .big-picture:nth-of-type(11),
				.gallery
					.pic-container:nth-of-type(12):target
					~ .big-picture:nth-of-type(12) {
					pointer-events: auto;
					-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
					filter: alpha(opacity=100);
					-moz-opacity: 1;
					-khtml-opacity: 1;
					opacity: 1;
				}
				.gallery .pic-container:target ~ .big-picture {
					pointer-events: none;
					-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
					filter: alpha(opacity=0);
					-moz-opacity: 0;
					-khtml-opacity: 0;
					opacity: 0;
					-webkit-animation: none;
					-o-animation: none;
					animation: none;
					z-index: 2;
				}
				.gallery .big-picture:first-of-type {
					position: relative;
					pointer-events: auto;
					-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
					filter: alpha(opacity=100);
					-moz-opacity: 1;
					-khtml-opacity: 1;
					opacity: 1;
					z-index: 2;
				}
				.big-picture img {
					object-fit: scale-down;
					height: 100%;
					max-height: 300px;
					width: 100%;
					padding: 0 0 1em 0;
				}
				.big-picture {
					position: absolute;
					display: block;
					top: 0;
					left: 0;
					width: 100%;
					text-align: center;
					-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
					filter: alpha(opacity=0);
					-moz-opacity: 0;
					-khtml-opacity: 0;
					opacity: 0;
					transition: opacity 0.5s;
					margin: 0;
				}
			`}</style>
		</>
	);
};

export default TemplateImageGallery;
