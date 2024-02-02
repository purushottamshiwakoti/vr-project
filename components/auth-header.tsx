import Image from "next/image";

export const AuthHeader = ({
  image,
  alt,
  title,
}: {
  image: string;
  alt: string;
  title: string;
}) => {
  return (
    <>
      <div className="relative  w-[80px] h-[80px] ">
        <Image src={image} alt={alt} fill />
      </div>
      <h2 className="text-white text-2xl mb-5 font-medium tracking-normal">
        {title}
      </h2>
    </>
  );
};
