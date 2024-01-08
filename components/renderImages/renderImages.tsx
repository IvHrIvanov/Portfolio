import Image, { StaticImageData } from "next/image";
interface Props {
  arrayOfImages: StaticImageData[];
  width: number;
  height: number;
  imageStyling: string;
}
const RenderImages: React.FC<Props> = (props) => {
  const { arrayOfImages, height, imageStyling, width } = props;

  return (
    <>
      {arrayOfImages.map((img, index) => {
        return (
          <>
            <li key={index}>
              <Image
                src={img.src}
                alt={`${index + 1}`}
                width={width}
                height={height}
                className={imageStyling}
              />
            </li>
          </>
        );
      })}
    </>
  );
};
export default RenderImages;
