import { Helmet } from "react-helmet";

function Login() {
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

      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <img
          src="loginbg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay to darken the background */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Login Form */}
        <div className="relative z-10 bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-md w-full max-w-sm">
          <form className="space-y-4">
            <div className="text-center">
              <div className="text-3xl mt-3 font-bold text-red-600 mb-2">Welcome</div>
              {/* Line under Welcome */}
              <hr className="border-red-600 border-b-2 w-full mx-auto mb-9" />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-white "
              >
                Username*
              </label>
              <input
                type="text"
                className="form-control border-gray-300 rounded-md shadow-sm block w-full h-16 text-lg p-4"
                name="username"
                placeholder="Username"
                id="username"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password*
              </label>
              <input
                type="password"
                className="form-control border-gray-300 rounded-md shadow-sm block w-full h-16 text-lg p-4"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>
            <div>
              <input
                type="submit"
                value="Login"
                className="w-full py-4 px-4 bg-red-700 text-white text-lg rounded-md shadow-sm hover:bg-red-600 focus:ring-2 cursor-pointer"
              />
            </div>
          </form>

          <p className="mt-4 text-center">
            Not yet registered?
            <a href="/register" className="text-red-500 hover:underline"> Register </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
