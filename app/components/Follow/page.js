import Section from "../Section/page";
import FollowCard from "./FollowCard";
const Follow = () => {
  return (
    <div id="about">
      <Section
        sectionHeadding="Follow Us Instagram"
        sectionParagraph="Torem ipsum dolor sit amet, consectetur adipisicing elitsed do"
        sectionSubParagraph="eiusmo tempor incididunt ut labore"
      />
      <div className=" container flex flex-wrap gap-6 m-auto mb-[100px] w-[100%]">
        <FollowCard />
      </div>
    </div>
  );
};

export default Follow;
