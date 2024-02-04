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
      <div className="relative  w-[100px] h-[100px]     ">
        <Image
          src={image}
          alt={alt}
          fill
          className="rounded-full object-cover zoom-in-150"
        />
      </div>
      <h2 className="text-white text-2xl mb-5 font-medium tracking-normal ">
        {title}
      </h2>
    </>
  );
};
