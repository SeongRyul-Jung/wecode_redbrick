const { gitService } = require("../services");
const { catchAsync } = require("../utils/error");

const getApi = (req, res) => {
    let data;
    const { SERVICE } = req.query;
    data = SERVICE;
    if (data == "yearMicroDustInfo") {
      getDust(req, res);
    } else if (data == "shuntPlace") {
      getDustShelter(req, res);
    } else {
      const error = new Error("KEY_ERROR");
      error.statusCode = 400;
      throw error;
    }
  };


module.exports={getApi}