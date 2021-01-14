import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="bg-gray-800 text-white flex flex-col h-screen">
      <main className="flex justify-center items-center w-full h-full mb-8">
        {/* -- Left side -- */}
        <div className="flex flex-col bg-blue-600 w-1/2 h-full justify-center items-center">
          <div className="m-5 self-start ml-40 flex">
            <svg
              className="w-8 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="font-bold text-xl">Follow your interests.</p>
          </div>
          <div className="m-5 self-start ml-40 flex">
            <svg
              className="w-8 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <p className="font-bold text-xl">
              Hear what people are talking about.
            </p>
          </div>
          <div className="m-5 self-start ml-40 flex">
            <svg
              className="w-8 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <p className="font-bold text-xl">Join the conversation.</p>
          </div>
        </div>
        {/* -- Right Side -- */}
        <div className="flex flex-col justify-center items-center w-1/2 h-full">
          <svg
            viewBox="328 355 335 276"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 mb-5 self-start ml-28"
          >
            <path
              d="
                M 630, 425
                A 195, 195 0 0 1 331, 600
                A 142, 142 0 0 0 428, 570
                A  70,  70 0 0 1 370, 523
                A  70,  70 0 0 0 401, 521
                A  70,  70 0 0 1 344, 455
                A  70,  70 0 0 0 372, 460
                A  70,  70 0 0 1 354, 370
                A 195, 195 0 0 0 495, 442
                A  67,  67 0 0 1 611, 380
                A 117, 117 0 0 0 654, 363
                A  65,  65 0 0 1 623, 401
                A 117, 117 0 0 0 662, 390
                A  65,  65 0 0 1 630, 425
                Z"
              style={{ fill: "#ffffff" }}
            />
          </svg>
          <p className="text-3xl font-bold self-start ml-28">
            See what's happening in <br /> the world right now
          </p>
          <p className="mt-14 mb-1 font-bold self-start ml-28">
            Join Twitter today.
          </p>
          <Link
            to="/signup"
            className="border rounded-3xl h-10 font-bold text-center text-lg pt-1 mt-5 bg-blue-500 border-blue-500 w-2/3"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="border rounded-3xl h-10 font-bold text-center text-lg pt-1 mt-5 border-blue-500 text-blue-500 w-2/3"
          >
            Log in
          </Link>
        </div>
      </main>
      <div className="flex justify-center items-center flex-wrap w-full">
        <p className="m-2 text-sm">About</p>
        <p className="m-2 text-sm">Help Center</p>
        <p className="m-2 text-sm">Terms of Service</p>
        <p className="m-2 text-sm">Privacy Policy</p>
        <p className="m-2 text-sm">Cookie Policy</p>
        <p className="m-2 text-sm">Ads info</p>
        <p className="m-2 text-sm">Blog</p>
        <p className="m-2 text-sm">Status</p>
        <p className="m-2 text-sm">Careers</p>
        <p className="m-2 text-sm">Brand Resources</p>
        <p className="m-2 text-sm">Advertising</p>
        <p className="m-2 text-sm">Marketing</p>
        <p className="m-2 text-sm">Twitter for Business</p>
        <p className="m-2 text-sm">Developers</p>
        <p className="m-2 text-sm">Directory</p>
        <p className="m-2 text-sm">Settings</p>
        <p className="m-2 text-sm">© 2021, Twitter, Inc</p>
      </div>
    </div>
  );
}
