import React from "react";

const AlbumItem = (props) => {
  const {title , userId , id} = props;

//   console.log("Hello")
  return (
    <div className="card col-md-3 mx-2 my-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          UserId : {userId}
        </p>
        <p className="card-text">
          Id : {id}
        </p>
        <button className="btn btn-dark mx-2" onClick={()=>{props.deleteAlbum(id)}}>Delete</button>
        <button className="btn btn-dark">Update</button>
      </div>
    </div>
  );
};

export default AlbumItem;
