const Section = ({
  sectionHeadding,
  sectionParagraph,
  sectionSubParagraph,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="sectionTitle font-bold text-[#212121]  text-[30px] mb-[10px]">
        {/* Our Products */}
        {sectionHeadding}
      </div>
      <div className="sectionDescription font-serif text-center mb-[20px] text-[#474747] text-[14px] px-[10px]">
        {/* Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br />
        eiusmo tempor incididunt ut labore */}
        {sectionParagraph}
        <br />
        {sectionSubParagraph}
      </div>
    </div>
  );
};

export default Section;
