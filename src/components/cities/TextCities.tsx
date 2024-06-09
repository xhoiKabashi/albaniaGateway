interface textType {
  text: string; //
}

export const Title = ({ text }: textType) => {
  return (
    <h2 className=" text-xl font-bold  py-6" id={text}>
      {text}
    </h2>
  );
};
export const SecondTitle = ({ text }: textType) => {
  return <h3 className=" text-base font-semibold my-3">{text}</h3>;
};
export const Paragraph = ({ text }: textType) => {
  return <p className=" mb-3">{text}</p>;
};
export const ListParagraph = ({ text }: textType) => {
  return <li>{text}</li>;
};
export const Italic = ({ text }: textType) => {
  return <i className=" italic">{text}</i>;
};
