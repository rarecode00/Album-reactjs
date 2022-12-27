import React, { useEffect, useState } from "react";
import AlbumItem from "./AlbumItem";

const Albums = () => {
  const [album, setalbum] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/albums");
      const parsedData = await data.json();
      setalbum(parsedData);
    }
    fetchData();
  }, []);

 const deleteAlbum = (id) =>{
    let newAlbum = album.filter((item)=>{
         return item.id != id;
     })
     setalbum(newAlbum)
 }

  return (
    <div className="container text-center">
      <button
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add an Album
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-2 my-2 d-flex justify-content-center">
        {album.map((item) => {
          // console.log(item);
          return (
            <AlbumItem deleteAlbum = {deleteAlbum} title={item.title} userId={item.userId} id={item.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
