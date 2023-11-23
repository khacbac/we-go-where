// store.ts
import { createContext, useContext } from "react";
import { observable, action, makeObservable } from "mobx";

class Todo {
  @observable title = "Mua banh mi";

  constructor() {
    makeObservable(this);
  }

  @action // chỉ có action mới có thể modify observable state
  changeTitle = () => {
    this.title = "Da mua banh my";
  };

  // changeTitle có thể viết lại như sau
  //  @action.bound
  //  changeTitle() {
  //    this.title = 'Da mua banh my'
  //  }
}

export const rootStore = {
  todoStore: new Todo(),
};

export type TRootStore = typeof rootStore;
const RootStoreContext = createContext<null | TRootStore>(null);

// Tạo ra provider để cung cấp store cho toàn bộ app
// dung trong file index.tsx
export const StoreProvider = RootStoreContext.Provider;

/** tra lai store, chi dung o function component */
export function useStore() {
  /** store này sẽ chứa toàn bộ data */
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
