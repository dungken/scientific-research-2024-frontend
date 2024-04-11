import TheoryKeywordModel from "../../models/TheoryKeywordModel";

interface TheoryKeywordRowInterface {
    theoryKeyword: TheoryKeywordModel;
    onDelete: (id: number) => void;
    onUpdate: (id: number) => void;
}

const TheoryKeywordRowAdmin: React.FC<TheoryKeywordRowInterface> = (props) => {
    const handleOnDelete = () => {
        const confirm = window.confirm("Are you sure to delete this record?");
        if (confirm) {
            props.onDelete(props.theoryKeyword.keywordId);
        }
    }

    const handleOnUpdate = () => {
        props.onUpdate(props.theoryKeyword.keywordId);
    }

    return (
        <tr>
            <td scope="row">{props.theoryKeyword.keywordId}</td>
            <td>{props.theoryKeyword.keyword}</td>
            <td>{props.theoryKeyword.createdAt}</td>
            <td><div>
                <button className="btn btn-success btn-sm rounded-0 text-white mx-2" type="button" data-toggle="tooltip" data-placement="top" title="Edit" onClick={handleOnUpdate}><i className="fa fa-edit"></i></button>
                <button className="btn btn-danger btn-sm rounded-0 text-white mx-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={handleOnDelete}><i className="fa fa-trash"></i></button>
            </div>
            </td>
        </tr>
    )
}

export default TheoryKeywordRowAdmin;