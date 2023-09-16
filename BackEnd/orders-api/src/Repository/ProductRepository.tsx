const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllproducts = (filterParams) => {
  try {
    let products = DB.products;
    if (filterParams.mode) {
      return DB.products.filter((product) =>
        product.mode.toLowerCase().includes(filterParams.mode)
      );
    }
    return products;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneproduct = (productId) => {
  try {
    const product = DB.products.find((product) => product.id === productId);

    if (!product) {
      throw {
        status: 400,
        message: `Can't find product with the id '${productId}'`,
      };
    }

    return product;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewproduct = (newproduct) => {
  try {
    const isAlreadyAdded =
      DB.products.findIndex((product) => product.name === newproduct.name) > -1;

    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `product with the name '${newproduct.name}' already exists`,
      };
    }

    DB.products.push(newproduct);
    saveToDatabase(DB);

    return newproduct;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneproduct = (productId, changes) => {
  try {
    const isAlreadyAdded =
      DB.products.findIndex((product) => product.name === changes.name) > -1;

    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `product with the name '${changes.name}' already exists`,
      };
    }

    const indexForUpdate = DB.products.findIndex(
      (product) => product.id === productId
    );

    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find product with the id '${productId}'`,
      };
    }

    const updatedproduct = {
      ...DB.products[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };

    DB.products[indexForUpdate] = updatedproduct;
    saveToDatabase(DB);

    return updatedproduct;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneproduct = (productId) => {
  try {
    const indexForDeletion = DB.products.findIndex(
      (product) => product.id === productId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find product with the id '${productId}'`,
      };
    }
    DB.products.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllproducts,
  getOneproduct,
  createNewproduct,
  updateOneproduct,
  deleteOneproduct,
};
