import { Helmet } from "react-helmet";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Helmet>
        {/* Tailwind CSS CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="relative h-screen">
        {/* Background Image */}
        <img
          src="Loginbg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Signup Form */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="flex flex-col justify-center items-center bg-opacity-80 bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-sm">
            <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
              <div>
                <div className="text-2xl font-semibold text-white">Register Now!</div>
                <p className="text-gray-400 text-sm">
                  Enter your credentials to access our system
                </p>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-200"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your Username"
                  required
                  className="bg-gray-700 border-gray-600 text-white rounded-md shadow-sm block w-full p-2.5"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-200"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  required
                  className="bg-gray-700 border-gray-600 text-white rounded-md shadow-sm block w-full p-2.5"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-200"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Confirm your Password"
                  required
                  className="bg-gray-700 border-gray-600 text-white rounded-md shadow-sm block w-full p-2.5"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Sign Up"
                  className="w-full py-2 px-4 bg-red-700 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 cursor-pointer"
                />
              </div>
              <p className="mt-4 flex items-center space-x-2">
                <span className="text-sm text-white">Already have an account?</span>
                <a href="/login" className="text-red-500 hover:underline">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
