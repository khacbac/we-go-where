import React, { RefObject, createRef } from "react";
import { AppLoadingModalRef } from "./AppLoadingModal";

class ModalManager {
  private loadingRef: RefObject<AppLoadingModalRef>;

  constructor() {
    this.loadingRef = createRef<AppLoadingModalRef>();
  }

  public showLoading = () => {
    this.getLoadingRef().current?.show();
  };

  public hideLoading = () => {
    this.getLoadingRef().current?.hide();
  };

  public getLoadingRef = () => this.loadingRef;
}

export const modalManager = new ModalManager();
