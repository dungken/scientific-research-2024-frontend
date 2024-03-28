import { useEffect, useState } from "react";
import PermissionModel from "../../models/PermissionModel";

interface PermissionRowProps {
    permission: PermissionModel;
    onDelete: (id: number) => void;
    onUpdate: (id: number) => void;
}

const PermissionRow: React.FC<PermissionRowProps> = (props) => {

    const handleOnDelete = () => {
        const confirm = window.confirm("Bạn có chắc chắn xóa bản ghi này không?");
        if (confirm) {
            props.onDelete(props.permission.permissionId);
        }
    }

    const handleOnUpdate = () => {
        props.onUpdate(props.permission.permissionId);
    }

    return (
        < tr >
            <td scope="row">{props.permission.permissionId}</td>
            <td>{props.permission.name}</td>
            <td>{props.permission.slug}</td>
            <td>{props.permission.desc}</td>
            <td>{props.permission.createdAt}</td>
            <td>
                <div>
                    <button className="btn btn-success btn-sm rounded-0 text-white mx-2" type="button" data-toggle="tooltip" data-placement="top" title="Edit" onClick={handleOnUpdate}><i className="fa fa-edit"></i></button>
                    <button className="btn btn-danger btn-sm rounded-0 text-white mx-2" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={handleOnDelete}><i className="fa fa-trash"></i></button>
                </div>
            </td>
        </ tr>
    )
}

export default PermissionRow;