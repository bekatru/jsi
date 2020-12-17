const LoadData = async (route, id) => {
  try {
    const response = await fetch(`http://localhost:3001/${route + id}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const PostRequest = async (route, data) => {
  const url = "http://localhost:3001/" + route;
  try {
    const response = await fetch(url, {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const PatchRequest = async (route, id, data) => {
  const url = `http://localhost:3001/${route}?id=${id}`;
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

const DeleteRequest = async (id) => {
  const url = `http://localhost:3001/jams/delete?id=${id}`;
  try {
    const response = await fetch(url, { method: "delete" });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

exports.LoadData = LoadData;
exports.PostRequest = PostRequest;
exports.PatchRequest = PatchRequest;
exports.DeleteRequest = DeleteRequest;
