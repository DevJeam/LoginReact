import { Helmet } from "react-helmet";

function Interface() {
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

      <div
        style={{ background: "linear-gradient(to bottom, #2c383b, #0f0f10)" }}
        className="text-white flex  h-screen"
      >
        <div className="w-3/5 p-6 h-full m-10">
          <p className="font-semibold mt-3 text-lg">
            Exam Maker Generator with AI
          </p>
          <p className="text-5xl font-semibold mt-52">
            Create <u>fresh exam</u> <br />
            <u>questions</u> using our system!
          </p>
        </div>

        <div
          style={{ backgroundColor: "rgba(104, 101, 101, 0.4)" }}
          className="w-2/5 flex flex-col items-center h-full justify-center"
        >
          <p className="text-4xl font-bold mb-9 text-center">Get Started</p>
          <div className="flex space-x-3">
            <a
              href="{{ url_for('login') }}"
              className="w-60 h-14 bg-white text-black flex items-center justify-center rounded-2xl"
            >
              Sign In
            </a>
            <a
              href="{{ url_for('register') }}"
              className="w-60 h-14 bg-white text-black flex items-center justify-center rounded-2xl"
            >
              Sign Up
            </a>
          </div>

          <footer className="mt-40 text-center flex items-center justify-center space-x-4">
            <img className="w-10" src="log.png" alt="Logo" />
            <div>Computer Engineering Technology</div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Interface;
