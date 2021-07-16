module.exports = function (status, error, result, msg) {
    return {
      Status: status,
      Error: error,
      Result: result,
      Message: msg,
    };
  };
  