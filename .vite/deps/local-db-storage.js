import "./chunk-DC5AMYBS.js";

// node_modules/local-db-storage/src/waitRequest.js
async function waitRequest(request, errorMessage) {
  return new Promise((resolve, reject) => {
    request.addEventListener("success", () => {
      resolve(request.result);
    });
    request.addEventListener("error", () => {
      reject(errorMessage);
    });
  });
}

// node_modules/local-db-storage/src/DbStorage.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DbStorage_instances;
var _DbStorage_name;
var _DbStorage_db;
var _DbStorage_getStore;
var _DbStorage_getOrCreateDb;
var _DbStorage_openDb;
var DbStorage = class {
  constructor({ name }) {
    _DbStorage_instances.add(this);
    _DbStorage_name.set(this, void 0);
    _DbStorage_db.set(this, void 0);
    __classPrivateFieldSet(this, _DbStorage_name, name, "f");
  }
  async getItem(key) {
    const store = await __classPrivateFieldGet(this, _DbStorage_instances, "m", _DbStorage_getStore).call(this);
    return waitRequest(store.get(key), "Failed to get item");
  }
  async setItem(key, value) {
    const store = await __classPrivateFieldGet(this, _DbStorage_instances, "m", _DbStorage_getStore).call(this);
    return waitRequest(store.put(value, key), "Failed to set item");
  }
  async removeItem(key) {
    const store = await __classPrivateFieldGet(this, _DbStorage_instances, "m", _DbStorage_getStore).call(this);
    return waitRequest(store.delete(key), "Failed to remove item");
  }
  async clear() {
    const store = await __classPrivateFieldGet(this, _DbStorage_instances, "m", _DbStorage_getStore).call(this);
    return waitRequest(store.clear(), "Failed to clear store");
  }
};
_DbStorage_name = /* @__PURE__ */ new WeakMap(), _DbStorage_db = /* @__PURE__ */ new WeakMap(), _DbStorage_instances = /* @__PURE__ */ new WeakSet(), _DbStorage_getStore = async function _DbStorage_getStore2() {
  const db = await __classPrivateFieldGet(this, _DbStorage_instances, "m", _DbStorage_getOrCreateDb).call(this);
  return db.transaction("store", "readwrite").objectStore("store");
}, _DbStorage_getOrCreateDb = async function _DbStorage_getOrCreateDb2() {
  if (__classPrivateFieldGet(this, _DbStorage_db, "f") === void 0) {
    __classPrivateFieldSet(this, _DbStorage_db, __classPrivateFieldGet(this, _DbStorage_instances, "m", _DbStorage_openDb).call(this), "f");
  }
  return __classPrivateFieldGet(this, _DbStorage_db, "f");
}, _DbStorage_openDb = async function _DbStorage_openDb2() {
  const request = indexedDB.open(__classPrivateFieldGet(this, _DbStorage_name, "f"), 1);
  request.addEventListener("upgradeneeded", () => {
    const db = request.result;
    db.createObjectStore("store");
  });
  return waitRequest(request, "Failed to open IndexedDB");
};
var DbStorage_default = DbStorage;

// node_modules/local-db-storage/index.js
var dbStorage = new DbStorage_default({ name: "node_modules/local-db-storage" });
var local_db_storage_default = dbStorage;
export {
  DbStorage_default as DbStorage,
  local_db_storage_default as default
};
//# sourceMappingURL=local-db-storage.js.map
