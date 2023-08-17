"use client"

import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  message: string;
  email: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="text-gray-300 w-2/4 mx-auto my-10 flex flex-col justify-center">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl">Contact form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col">
          <label className="text-gray-200">Name</label>
          <input
            placeholder="full name"
            className="text-gray-900 rounded-md px-3 py-1 focus:bg-green-50"
            type="text"
            {...register('name')}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-200">Email</label>
          <input
            placeholder="email"
            className="text-gray-900 rounded-md px-3 py-1 focus:bg-green-50"
            type="text"
            {...register('email')}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-200">Message</label>
          <textarea
            placeholder="your message"
            className="text-gray-900 rounded-md px-3 py-1 focus:bg-green-50"
            {...register('message')}
          />
        </div>

        <button type="submit" className="my-2 text-gray-800 bg-green-400 w-fit rounded-lg px-2 py-1 hover:bg-green-500">Send message</button>
      </form>
    </div>
  );
}

export default Contact
