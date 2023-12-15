const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllorders = (filterParams) => {
  try {
    let orders = DB.orders;
    if (filterParams.mode) {
      return DB.orders.filter((order) =>
        order.mode.toLowerCase().includes(filterParams.mode)
      );
    }
    return orders;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneorder = (orderId) => {
  try {
    const order = DB.orders.find((order) => order.id === orderId);

    if (!order) {
      throw {
        status: 400,
        message: `Can't find order with the id '${orderId}'`,
      };
    }

    return order;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNeworder = (neworder) => {
  try {
    const isAlreadyAdded =
      DB.orders.findIndex((order) => order.name === neworder.name) > -1;

    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `order with the name '${neworder.name}' already exists`,
      };
    }

    DB.orders.push(neworder);
    saveToDatabase(DB);

    return neworder;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneorder = (orderId, changes) => {
  try {
    const isAlreadyAdded =
      DB.orders.findIndex((order) => order.name === changes.name) > -1;

    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `order with the name '${changes.name}' already exists`,
      };
    }

    const indexForUpdate = DB.orders.findIndex(
      (order) => order.id === orderId
    );

    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find order with the id '${orderId}'`,
      };
    }

    const updatedorder = {
      ...DB.orders[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };

    DB.orders[indexForUpdate] = updatedorder;
    saveToDatabase(DB);

    return updatedorder;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneorder = (orderId) => {
  try {
    const indexForDeletion = DB.orders.findIndex(
      (order) => order.id === orderId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find order with the id '${orderId}'`,
      };
    }
    DB.orders.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllorders,
  getOneorder,
  createNeworder,
  updateOneorder,
  deleteOneorder,
};
