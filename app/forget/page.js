import Breadcrumb from "../components/Breadcrumb/page";
import Footer from "../components/Footer/page";
import Nav from "../components/navBar/page";

const Page = () => {
  return (
    <div>
      <Nav />
      <Breadcrumb />
      <div className="w-full max-w-sm mx-auto   bg-[#F3F3F3] mt-[100px] mb-[100px] ">
        <div className="px-6 py-4  ">
          <h3 className="mt-3 text-[30px] font-normal text-center text-[#666] pb-[10px] ">
            Reset Your Password
          </h3>

          <p className="text-[#666] text-[14px] flex justify-center pb-[15px]">
            We will send you an email to reset your password.
          </p>

          <form>
            <div className="w-full mt-4">
              <input
                className="block outline-none w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#000] placeholder: bg-white border placeholder: text-[14px]"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-[14px]  text-gray-600 dark:text-gray-200 hover:text-[#666]"
              >
                Cancle
              </a>

              <button className="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-black font-normal hover:bg-[#666]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
