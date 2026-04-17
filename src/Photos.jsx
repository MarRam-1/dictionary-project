import React from "react";

export default function Photos({ photos }) {
  if (photos) {
    return (
      <div className="row ">
        {photos.map(function (photo, index) {
          return (
            <div className="col-sm p-1" key={index}>
              <a
                href={photo.src.original}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid rounded "
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
