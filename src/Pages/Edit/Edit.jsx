import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [input, setInput] = useState({
    profilePhoto: "",
    name: "",
    title: "",
    postPhoto: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  // handle input change
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:5050/profile/${id}`, input);
    navigate("/");
  };

  useEffect(() => {
    axios.get(`http://localhost:5050/profile/${id}`).then((res) => {
      setInput(res.data);
    });
  }, []);

  // handle navigate
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div className="modal-blur">
        <button
          onClick={handleNavigate}
          className="hide d-flex justify-content-end"
        >
          <i class="bx bx-x"></i>
        </button>
        <div className="modal-wraper">
          <div className="modal-main">
            <div className="modal-body">
              <div className="card-header">
                <h3>Edit post</h3>
              </div>
              <hr />
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="my-3">
                    <label htmlFor="">Profile Photo</label>
                    <input
                      type="text"
                      className="form-control"
                      name="profilePhoto"
                      value={input.profilePhoto}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="my-3">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={input.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="my-3">
                    <label htmlFor="">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={input.title}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="my-3">
                    <label htmlFor="">Photo</label>
                    <input
                      type="text"
                      className="form-control"
                      name="postPhoto"
                      value={input.postPhoto}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="my-3">
                    <button type="submit" className="btn btn-primary w-100">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
