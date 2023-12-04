interface IProps {
    url: string;
    lable: string;
  }
  const Avatar = (props: IProps) => {
    const { url, lable } = props;
    return (
      <>
        <div className="flex flex-row gap-2">
            <img src={url} className="w-12 rounded-full"/>
            <p className="text-sm">{lable}</p>
        </div>
      </>
    );
  };
  export default Avatar;