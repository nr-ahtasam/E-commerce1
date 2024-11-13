import Link from "next/link";

const Breadcrumb = ({ presentPage, homePage }) => {
  return (
    <div className="bg-[#f6f6f6] pt-6">
      <nav className=" container m-auto flex w-[100%] h-[100px]">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex text-[14px] font-medium uppercase  items-center  leading-1">
            <a
              href="#"
              className="font-light uppercase text-[14px] inline-flex items-center  text-[#474747]"
            >
              <svg
                className="w-3 h-3 me-2.5 fill-[#474747]]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              {presentPage}
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link href="/about"></Link>
              <a
                href="/"
                className="  font-light uppercase text-[14px]  text-[#ff7004] no-underline after:content[''] after:block after:w-0 after:h-[1px] after:bg-[#ff7004] after:transition-width after:duration-300 hover:after:w-full "
              >
                {homePage}
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
