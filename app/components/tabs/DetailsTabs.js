// const DetailsTabs = () => {
//   return <div>naim</div>;
// };

// export default DetailsTabs;
import { useState } from "react";

const DetailsTabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  const tabs = [
    {
      id: 1,
      title: "Profile",
      content: (
        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
          <p className="text-[16px] font-normal font-serif not-italic">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            <br />
            <br />
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum. Typi non habent claritatem insitam; est
            usus legentis in iis qui facit eorum claritatem. Investigationes
            demonstraverunt lectores legere me lius quod ii legunt saepius.
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram, anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo
            typi, qui nunc nobis videntur parum clari, fiant sollemnes in
            futurum.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Settings",
      content: (
        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
          <p className="text-[16px] font-normal font-serif not-italic">
            we denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the moment, so
            blinded by desire, that they cannot foresee the pain and trouble
            that are bound to ensue; and equal blame belongs to those who fail
            in their duty through weakness of will, which is the same as saying
            through shrinking from toil and pain. These cases are perfectly
            simple and easy to distinguish. In a free hour, when our power of
            choice is untrammelled and when nothing prevents our being able to
            do what we like best, every pleasure is to be welcomed and every
            pain avoided. But in certain circumstances and owing to the claims
            of duty or the obligations of business it will frequently occur that
            pleasures have to be repudiated and annoyances accepted. The wise
            man therefore always holds in these matters to this principle of
            selection: he rejects pleasures to secure other greater pleasures,
            or else he endures pains to avoid worse pains
            <br />
            <br />I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Shipping Policy",
      content: (
        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
          <p className="text-[16px] font-normal font-serif not-italic">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            <br />
            <br />
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum. Typi non habent claritatem insitam; est
            usus legentis in iis qui facit eorum claritatem. Investigationes
            demonstraverunt lectores legere me lius quod ii legunt saepius.
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram, anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo
            typi, qui nunc nobis videntur parum clari, fiant sollemnes in
            futurum.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Description",
      content: (
        <div className={openTab === 4 ? "block" : "hidden"} id="link4">
          <p className="text-[16px] font-normal font-serif not-italic">
            we denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the moment, so
            blinded by desire, that they cannot foresee the pain and trouble
            that are bound to ensue; and equal blame belongs to those who fail
            in their duty through weakness of will, which is the same as saying
            through shrinking from toil and pain. These cases are perfectly
            simple and easy to distinguish. In a free hour, when our power of
            choice is untrammelled and when nothing prevents our being able to
            do what we like best, every pleasure is to be welcomed and every
            pain avoided. But in certain circumstances and owing to the claims
            of duty or the obligations of business it will frequently occur that
            pleasures have to be repudiated and annoyances accepted. The wise
            man therefore always holds in these matters to this principle of
            selection: he rejects pleasures to secure other greater pleasures,
            or else he endures pains to avoid worse pains
            <br />
            <br />I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "Reviews",
      content: (
        <div className={openTab === 5 ? "block" : "hidden"} id="link5">
          <p className="text-[16px] font-normal font-serif not-italic">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            <br />
            <br />
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum. Typi non habent claritatem insitam; est
            usus legentis in iis qui facit eorum claritatem. Investigationes
            demonstraverunt lectores legere me lius quod ii legunt saepius.
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram, anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima. Eodem modo
            typi, qui nunc nobis videntur parum clari, fiant sollemnes in
            futurum.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="ml-auto w-[80%]">
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row align-middle"
              role="tablist"
            >
              {tabs.map((tab) => {
                const { id, title } = tab;
                return (
                  <li
                    key={id}
                    className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                  >
                    <a
                      className={`text-xs font-bold uppercase px-5 leading-normal ${
                        openTab === id ? "text-orange-500" : "text-black "
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(id);
                      }}
                      data-toggle="tab"
                      href={`#link${id}`}
                      role="tablist"
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="relative border-[1px] flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  {tabs.map((tab) => {
                    const { id, content } = tab;

                    return <div key={id}>{content}</div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsTabs;
