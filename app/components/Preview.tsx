"use client"


const Preview = () => {

  return (
    <div className="w-full">
      <div className="flex justify-center gap-6 px-40 py-10">
        <img
          className="rounded-3xl h-96"
          src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
          alt="profile image"
        />
        <div className="flex items-center">
          <p className="inline-block align-middle text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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

export default Preview
