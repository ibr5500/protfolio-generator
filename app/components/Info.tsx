import Image from "next/image";

const Info: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-center gap-6 p-10 md:px-40 md:py-10">
        <Image
          className="rounded-3xl min-w-fit h-96 hover:scale-110 duration-300"
          src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
          alt="profile image"
          width={300}
          height={150}
        />
        <div className="flex items-center">
          <p className="inline-block align-middle text-gray-300">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
