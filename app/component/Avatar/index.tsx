interface IProps {
    url: string;
    lable: string;
  }
  const Avatar = (props: IProps) => {
    const { url, lable } = props;
    return (
      <>
        <div className="flex flex-row  justify-start items-center text-center gap-2">
            <img src={url} className="w-8 rounded-full ml-1"/>
            <p className="text-sm">{lable}</p>
        </div>
      </>
    );
  };
  export default Avatar;