import { useForm, type SubmitHandler } from "react-hook-form";

type FormData = {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone?: string;
};
const Reservations = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start py-4 px-4">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">
        Reserve a Table
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl bg-white shadow-md rounded-2xl p-8 flex flex-col gap-6"
      >
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            {...register("date", { required: "Please select a date" })}
            className="border rounded px-3 py-2 focus:outline-none"
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Time Slot</label>
          <input
            type="time"
            {...register("time", { required: "Please select a time" })}
            className="border rounded px-3 py-2 focus:outline-none"
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Number of Guests</label>
          <input
            type="number"
            min="1"
            max="20"
            {...register("guests", { required: "Enter number of guests" })}
            placeholder="e.g. 4"
            className="border rounded px-3 py-2 focus:outline-none"
          />
          {errors.guests && (
            <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Customer Name</label>
          <input
            type="text"
            placeholder="Your full name"
            {...register("name", { required: "Name is required" })}
            className="border rounded px-3 py-2 focus:outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            className="border rounded px-3 py-2 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            placeholder="0700 000 000"
            {...register("phone")}
            className="border rounded px-3 py-2 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="btn btn-warning w-full font-semibold text-white"
        >
          Reserve Table
        </button>
      </form>
    </div>
  );
};

export default Reservations;
