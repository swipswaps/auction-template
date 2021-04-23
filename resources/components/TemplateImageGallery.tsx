import React from "react";
import { EbayItem } from "../../utils/ebay";

const TemplateImageGallery = ({ item }: { item: EbayItem }) => {
	const images = item?.PictureURL;

	const createIdFromIndex = (index: number) => `image-${index + 1}`;

	const getDescriptiveTextFromIndex = (index: number) =>
		`${item?.Title} #${index + 1}`;

	return (
		<>
			<div className="gallery">
				<div>
					{images.map((src, i) => {
						return (
							<div
								key={i}
								id={createIdFromIndex(i)}
								className="pic-container"
							/>
						);
					})}
					{images.map((src, i) => {
						return (
							<a
								key={i}
								className="item big-picture"
								href={`#${createIdFromIndex(i)}`}
							>
								<img
									src={src}
									alt={getDescriptiveTextFromIndex(i)}
									title={getDescriptiveTextFromIndex(i)}
								/>
							</a>
						);
					})}
				</div>
				<div className="row justify-content-center align-items-center">
					{images.map((src, i) => {
						return (
							<div
								className="col-6 col-md-4 col-lg-3 template-grid-item "
								style={{
									backgroundImage: `url("${src}")`,
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
								key={i}
							>
								<a href={`#${createIdFromIndex(i)}`}>
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
				.template-grid-item {
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.template-grid-item a,
				.template-grid-item div {
					object-fit: cover;
					width: 75px;
					min-height: 75px;
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
