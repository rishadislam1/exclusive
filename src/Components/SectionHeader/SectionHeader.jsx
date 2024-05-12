
const SectionHeader = ({categories, header}) => {
    return (
        <div>
            <div style={{borderLeft: "7px solid red"}}>
                <h4 style={{marginLeft: "20px", color: "red"}}>{categories}</h4>
            </div>
            <div className="mt-4 d-flex align-items-center gap-5">
                <h1>{header}</h1>

            </div>
        </div>
    );
};

export default SectionHeader;