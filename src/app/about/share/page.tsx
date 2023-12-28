import Image from "next/image";
import MyEducation from "../../../../assets/MyEducation.jpeg";
export default function ShareProfile() {
  return (
    <h1>
      <div className="z-10 w-full h-full bg-red-400 relative">
        <Image
          src={MyEducation.src}
          alt="My photo"
          className="object-contain z-10 "
          fill={true}
        />
      </div>
    </h1>
  );
}
