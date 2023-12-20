
const Title = ({ title, subTitle}) => {
    return (
        <div className="flex flex-col justify-center items-center text-center">
            {title &&             <h1 className="border-b-4 w-fit lg:px-10 text-xl lg:text-5xl font-bold border-[#ed6a5a]">{title}</h1>}
            {subTitle &&    <h1 className="border-b-4 w-fit px-10 text-xl lg:text-3xl border-[#ed6a5a]">{subTitle}</h1>}


        </div>
    );
};

export default Title;