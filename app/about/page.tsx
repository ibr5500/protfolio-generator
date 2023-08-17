import Image from "next/image"

const About = () => {
  return (
    <div className="m-8">
      <div className=" flex flex-col md:flex-row justify-center items-center gap-4 m-auto w-3/4">
        <Image
          className="rounded-full"
          src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
          alt="profile image"
          width={300}
          height={300}
        />
        <div className="text-gray-300">
          <h2 className="text-2xl text-lime-200 mb-1 animate-pulse">
            Hello I&apos;m Jhon doe a software developer
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using &apos;Content here, content here&apos;, making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text, and
            a search for &apos;lorem ipsum&apos; will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
