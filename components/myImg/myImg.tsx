import Image from "next/image";
import MyPicture from "../../assets/MyPicture.png";
export default function MyImg() {
  return (
    <div className="w-44 h-44 rounded-full overflow-hidden relative items-start justify-start border-8 border-gray-50 z-10">
      <Image
        src={MyPicture.src}
        alt="My photo"
        className="object-contain z-10 -rotate-[30deg] scale-125 rotate rounded-full"
        fill={true}
      />
    </div>
  );
}
