import { useForm, type SubmitHandler } from "react-hook-form";
import axios from "axios";

type NewsletterForm = {
  email: string;
};

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterForm>();

  const onSubmit: SubmitHandler<NewsletterForm> = async data => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/newsletter",
        data
      );
      alert(res.data.message || "Subscribed successfully!");
      reset();
    } catch (err: unknown) {
      console.error(err);
      alert("Subscription failed. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col sm:flex-row gap-4 w-full max-w-xl justify-center"
    >
      <input
        type="email"
        placeholder="Enter your email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Enter a valid email",
          },
        })}
        className="px-4 py-2 rounded w-full text-gray-900 border focus:outline-none"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <button className="btn btn-warning font-semibold text-white w-full sm:w-auto">
        Subscribe
      </button>
    </form>
  );
};

export default Newsletter;
