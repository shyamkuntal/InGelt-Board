/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Solid = ({
  property1,
  property2,
  property3,
  className,
  propertyFill = "/img/property-1-fill-property-2-system-property-3-arrow-down-s-fill.svg",
}) => {
  return (
    <img
      className={`solid ${className}`}
      alt="Property fill"
      src={
        property3 === "add-circle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-add-circle-fill.svg"
          : property3 === "add-fill"
          ? "/img/property-1-fill-property-2-system-property-3-add-fill.svg"
          : property3 === "alarm-fill"
          ? "/img/property-1-fill-property-2-system-property-3-alarm-fill.svg"
          : property3 === "alarm-warning-fill"
          ? "/img/property-1-fill-property-2-system-property-3-alarm-warning-fil.svg"
          : property3 === "alert-fill"
          ? "/img/property-1-fill-property-2-system-property-3-alert-fill.svg"
          : property3 === "apps-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-apps-2-fill.svg"
          : property3 === "apps-fill"
          ? "/img/property-1-fill-property-2-system-property-3-apps-fill.svg"
          : property3 === "arrow-down-circle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-down-circle.svg"
          : property3 === "arrow-down-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-down-fill.svg"
          : property3 === "arrow-down-s-fill"
          ? propertyFill
          : property3 === "arrow-drop-down-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-drop-down-f.svg"
          : property3 === "arrow-drop-left-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-drop-left-f.svg"
          : property3 === "arrow-drop-right-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-drop-right.svg"
          : property3 === "arrow-drop-up-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-drop-up-fil.svg"
          : property3 === "arrow-go-back-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-go-back-fil.svg"
          : property3 === "arrow-go-forward-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-go-forward.svg"
          : property3 === "arrow-left-circle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-left-circle.svg"
          : property3 === "arrow-left-down-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-left-down-f.svg"
          : property3 === "arrow-left-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-left-fill.svg"
          : property3 === "arrow-left-right-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-left-right.svg"
          : property3 === "arrow-left-s-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-left-s-fill.svg"
          : property3 === "arrow-left-up-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-left-up-fil.svg"
          : property3 === "arrow-right-circle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-right-circl.svg"
          : property3 === "arrow-right-down-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-right-down.svg"
          : property3 === "arrow-right-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-right-fill.svg"
          : property3 === "arrow-right-s-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-right-s-fil.svg"
          : property3 === "arrow-right-up-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-right-up-fi.svg"
          : property3 === "arrow-up-circle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-up-circle-f.svg"
          : property3 === "arrow-up-down-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-up-down-fil.svg"
          : property3 === "arrow-up-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-up-fill.svg"
          : property3 === "arrow-up-s-fill"
          ? "/img/property-1-fill-property-2-system-property-3-arrow-up-s-fill.svg"
          : property3 === "check-double-fill"
          ? "/img/property-1-fill-property-2-system-property-3-check-double-fill.svg"
          : property3 === "check-fill"
          ? "/img/property-1-fill-property-2-system-property-3-check-fill.svg"
          : property3 === "checkbox-blank-circle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-checkbox-blank-ci.svg"
          : property3 === "checkbox-blank-fill"
          ? "/img/property-1-fill-property-2-system-property-3-checkbox-blank-fi.svg"
          : property3 === "checkbox-circle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-checkbox-circle-f.svg"
          : property3 === "checkbox-fill"
          ? "/img/property-1-fill-property-2-system-property-3-checkbox-fill.svg"
          : property3 === "checkbox-indeterminate-fill"
          ? "/img/property-1-fill-property-2-system-property-3-checkbox-indeterm.svg"
          : property3 === "checkbox-multiple-blank-fill"
          ? "/img/property-1-fill-property-2-system-property-3-checkbox-multiple.svg"
          : property3 === "checkbox-multiple-fill"
          ? "/img/property-1-fill-property-2-system-property-3-checkbox-multiple-1.svg"
          : property3 === "close-circle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-close-circle-fill.svg"
          : property3 === "close-fill"
          ? "/img/property-1-fill-property-2-system-property-3-close-fill.svg"
          : property3 === "dashboard-fill"
          ? "/img/property-1-fill-property-2-system-property-3-dashboard-fill.svg"
          : property3 === "delete-back-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-delete-back-2-fil.svg"
          : property3 === "delete-back-fill"
          ? "/img/property-1-fill-property-2-system-property-3-delete-back-fill.svg"
          : property3 === "delete-bin-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-delete-bin-2-fill.svg"
          : property3 === "delete-bin-3-fill"
          ? "/img/property-1-fill-property-2-system-property-3-delete-bin-3-fill.svg"
          : property3 === "delete-bin-4-fill"
          ? "/img/property-1-fill-property-2-system-property-3-delete-bin-4-fill.svg"
          : property3 === "delete-bin-5-fill"
          ? "/img/property-1-fill-property-2-system-property-3-delete-bin-5-fill.svg"
          : property3 === "delete-bin-6-fill"
          ? "/img/property-1-fill-property-2-system-property-3-delete-bin-6-fill.svg"
          : property3 === "delete-bin-7-fill"
          ? "/img/property-1-fill-property-2-system-property-3-delete-bin-7-fill.svg"
          : property3 === "delete-bin-fill"
          ? "/img/property-1-fill-property-2-system-property-3-delete-bin-fill.svg"
          : property3 === "divide-fill"
          ? "/img/property-1-fill-property-2-system-property-3-divide-fill.svg"
          : property3 === "download-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-download-2-fill.svg"
          : property3 === "download-cloud-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-download-cloud-2.svg"
          : property3 === "download-cloud-fill"
          ? "/img/property-1-fill-property-2-system-property-3-download-cloud-fi.svg"
          : property3 === "download-fill"
          ? "/img/property-1-fill-property-2-system-property-3-download-fill.svg"
          : property3 === "error-warning-fill"
          ? "/img/property-1-fill-property-2-system-property-3-error-warning-fil.svg"
          : property3 === "external-link-fill"
          ? "/img/property-1-fill-property-2-system-property-3-external-link-fil.svg"
          : property3 === "eye-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-eye-2-fill.svg"
          : property3 === "eye-close-fill"
          ? "/img/property-1-fill-property-2-system-property-3-eye-close-fill.svg"
          : property3 === "eye-fill"
          ? "/img/property-1-fill-property-2-system-property-3-eye-fill.svg"
          : property3 === "eye-off-fill"
          ? "/img/property-1-fill-property-2-system-property-3-eye-off-fill.svg"
          : property3 === "filter-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-filter-2-fill.svg"
          : property3 === "filter-3-fill"
          ? "/img/property-1-fill-property-2-system-property-3-filter-3-fill.svg"
          : property3 === "filter-fill"
          ? "/img/property-1-fill-property-2-system-property-3-filter-fill.svg"
          : property3 === "filter-off-fill"
          ? "/img/property-1-fill-property-2-system-property-3-filter-off-fill.svg"
          : property3 === "find-replace-fill"
          ? "/img/property-1-fill-property-2-system-property-3-find-replace-fill.svg"
          : property3 === "forbid-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-forbid-2-fill.svg"
          : property3 === "forbid-fill"
          ? "/img/property-1-fill-property-2-system-property-3-forbid-fill.svg"
          : property3 === "function-fill"
          ? "/img/property-1-fill-property-2-system-property-3-function-fill.svg"
          : property3 === "history-fill"
          ? "/img/property-1-fill-property-2-system-property-3-history-fill.svg"
          : property3 === "indeterminate-circle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-indeterminate-cir.svg"
          : property3 === "information-fill"
          ? "/img/property-1-fill-property-2-system-property-3-information-fill.svg"
          : property3 === "list-settings-fill"
          ? "/img/property-1-fill-property-2-system-property-3-list-settings-fil.svg"
          : property3 === "loader-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-loader-2-fill.svg"
          : property3 === "loader-3-fill"
          ? "/img/property-1-fill-property-2-system-property-3-loader-3-fill.svg"
          : property3 === "loader-4-fill"
          ? "/img/property-1-fill-property-2-system-property-3-loader-4-fill.svg"
          : property3 === "loader-5-fill"
          ? "/img/property-1-fill-property-2-system-property-3-loader-5-fill.svg"
          : property3 === "loader-fill"
          ? "/img/property-1-fill-property-2-system-property-3-loader-fill.svg"
          : property3 === "lock-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-lock-2-fill.svg"
          : property3 === "lock-fill"
          ? "/img/property-1-fill-property-2-system-property-3-lock-fill.svg"
          : property3 === "lock-password-fill"
          ? "/img/property-1-fill-property-2-system-property-3-lock-password-fil.svg"
          : property3 === "lock-unlock-fill"
          ? "/img/property-1-fill-property-2-system-property-3-lock-unlock-fill.svg"
          : property3 === "login-box-fill"
          ? "/img/property-1-fill-property-2-system-property-3-login-box-fill.svg"
          : property3 === "login-circle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-login-circle-fill.svg"
          : property3 === "logout-box-fill"
          ? "/img/property-1-fill-property-2-system-property-3-logout-box-fill.svg"
          : property3 === "logout-box-r-fill"
          ? "/img/property-1-fill-property-2-system-property-3-logout-box-r-fill.svg"
          : property3 === "logout-circle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-logout-circle-fil.svg"
          : property3 === "logout-circle-r-fill"
          ? "/img/property-1-fill-property-2-system-property-3-logout-circle-r-f.svg"
          : property3 === "menu-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-menu-2-fill.svg"
          : property3 === "menu-3-fill"
          ? "/img/property-1-fill-property-2-system-property-3-menu-3-fill.svg"
          : property3 === "menu-4-fill"
          ? "/img/property-1-fill-property-2-system-property-3-menu-4-fill.svg"
          : property3 === "menu-5-fill"
          ? "/img/property-1-fill-property-2-system-property-3-menu-5-fill.svg"
          : property3 === "menu-add-fill"
          ? "/img/property-1-fill-property-2-system-property-3-menu-add-fill.svg"
          : property3 === "menu-fill"
          ? "/img/property-1-fill-property-2-system-property-3-menu-fill.svg"
          : property3 === "menu-fold-fill"
          ? "/img/property-1-fill-property-2-system-property-3-menu-fold-fill.svg"
          : property3 === "menu-unfold-fill"
          ? "/img/property-1-fill-property-2-system-property-3-menu-unfold-fill.svg"
          : property3 === "more-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-more-2-fill.svg"
          : property3 === "more-fill"
          ? "/img/property-1-fill-property-2-system-property-3-more-fill.svg"
          : property3 === "notification-badge-fill"
          ? "/img/property-1-fill-property-2-system-property-3-notification-badg.svg"
          : property3 === "question-fill"
          ? "/img/property-1-fill-property-2-system-property-3-question-fill.svg"
          : property3 === "radio-button-fill"
          ? "/img/property-1-fill-property-2-system-property-3-radio-button-fill.svg"
          : property3 === "refresh-fill"
          ? "/img/property-1-fill-property-2-system-property-3-refresh-fill.svg"
          : property3 === "search-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-search-2-fill.svg"
          : property3 === "search-eye-fill"
          ? "/img/property-1-fill-property-2-system-property-3-search-eye-fill.svg"
          : property3 === "search-fill"
          ? "/img/property-1-fill-property-2-system-property-3-search-fill.svg"
          : property3 === "settings-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-settings-2-fill.svg"
          : property3 === "settings-3-fill"
          ? "/img/property-1-fill-property-2-system-property-3-settings-3-fill.svg"
          : property3 === "settings-4-fill"
          ? "/img/property-1-fill-property-2-system-property-3-settings-4-fill.svg"
          : property3 === "settings-5-fill"
          ? "/img/property-1-fill-property-2-system-property-3-settings-5-fill.svg"
          : property3 === "settings-6-fill"
          ? "/img/property-1-fill-property-2-system-property-3-settings-6-fill.svg"
          : property3 === "settings-fill"
          ? "/img/property-1-fill-property-2-system-property-3-settings-fill.svg"
          : property3 === "share-box-fill"
          ? "/img/property-1-fill-property-2-system-property-3-share-box-fill.svg"
          : property3 === "share-circle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-share-circle-fill.svg"
          : property3 === "share-fill"
          ? "/img/property-1-fill-property-2-system-property-3-share-fill.svg"
          : property3 === "share-forward-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-share-forward-2-f.svg"
          : property3 === "share-forward-box-fill"
          ? "/img/property-1-fill-property-2-system-property-3-share-forward-box.svg"
          : property3 === "share-forward-fill"
          ? "/img/property-1-fill-property-2-system-property-3-share-forward-fil.svg"
          : property3 === "shield-check-fill"
          ? "/img/property-1-fill-property-2-system-property-3-shield-check-fill.svg"
          : property3 === "shield-cross-fill"
          ? "/img/property-1-fill-property-2-system-property-3-shield-cross-fill.svg"
          : property3 === "shield-fill"
          ? "/img/property-1-fill-property-2-system-property-3-shield-fill.svg"
          : property3 === "shield-flash-fill"
          ? "/img/property-1-fill-property-2-system-property-3-shield-flash-fill.svg"
          : property3 === "shield-keyhole-fill"
          ? "/img/property-1-fill-property-2-system-property-3-shield-keyhole-fi.svg"
          : property3 === "shield-star-fill"
          ? "/img/property-1-fill-property-2-system-property-3-shield-star-fill.svg"
          : property3 === "shield-user-fill"
          ? "/img/property-1-fill-property-2-system-property-3-shield-user-fill.svg"
          : property3 === "side-bar-fill"
          ? "/img/property-1-fill-property-2-system-property-3-side-bar-fill.svg"
          : property3 === "spam-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-spam-2-fill.svg"
          : property3 === "spam-3-fill"
          ? "/img/property-1-fill-property-2-system-property-3-spam-3-fill.svg"
          : property3 === "spam-fill"
          ? "/img/property-1-fill-property-2-system-property-3-spam-fill.svg"
          : property3 === "star-fill"
          ? "/img/property-1-fill-property-2-system-property-3-star-fill.svg"
          : property3 === "star-half-fill"
          ? "/img/property-1-fill-property-2-system-property-3-star-half-fill.svg"
          : property3 === "star-half-s-fill"
          ? "/img/property-1-fill-property-2-system-property-3-star-half-s-fill.svg"
          : property3 === "star-s-fill"
          ? "/img/property-1-fill-property-2-system-property-3-star-s-fill.svg"
          : property3 === "subtract-fill"
          ? "/img/property-1-fill-property-2-system-property-3-subtract-fill.svg"
          : property3 === "thumb-down-fill"
          ? "/img/property-1-fill-property-2-system-property-3-thumb-down-fill.svg"
          : property3 === "thumb-up-fill"
          ? "/img/property-1-fill-property-2-system-property-3-thumb-up-fill.svg"
          : property3 === "time-fill"
          ? "/img/property-1-fill-property-2-system-property-3-time-fill.svg"
          : property3 === "timer-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-timer-2-fill.svg"
          : property3 === "timer-fill"
          ? "/img/property-1-fill-property-2-system-property-3-timer-fill.svg"
          : property3 === "timer-flash-fill"
          ? "/img/property-1-fill-property-2-system-property-3-timer-flash-fill.svg"
          : property3 === "toggle-fill"
          ? "/img/property-1-fill-property-2-system-property-3-toggle-fill.svg"
          : property3 === "upload-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-upload-2-fill.svg"
          : property3 === "upload-cloud-2-fill"
          ? "/img/property-1-fill-property-2-system-property-3-upload-cloud-2-fi.svg"
          : property3 === "upload-cloud-fill"
          ? "/img/property-1-fill-property-2-system-property-3-upload-cloud-fill.svg"
          : property3 === "upload-fill"
          ? "/img/property-1-fill-property-2-system-property-3-upload-fill.svg"
          : property3 === "zoom-in-fill"
          ? "/img/property-1-fill-property-2-system-property-3-zoom-in-fill.svg"
          : property3 === "zoom-out-fill"
          ? "/img/property-1-fill-property-2-system-property-3-zoom-out-fill.svg"
          : "/img/property-1-fill-property-2-system-property-3-add-box-fill.svg"
      }
    />
  );
};

Solid.propTypes = {
  property1: PropTypes.oneOf(["fill"]),
  property2: PropTypes.oneOf(["system"]),
  property3: PropTypes.oneOf([
    "timer-fill",
    "list-settings-fill",
    "arrow-drop-up-fill",
    "delete-bin-7-fill",
    "loader-2-fill",
    "settings-5-fill",
    "arrow-drop-right-fill",
    "arrow-left-up-fill",
    "arrow-right-up-fill",
    "more-2-fill",
    "notification-badge-fill",
    "arrow-drop-down-fill",
    "upload-fill",
    "eye-2-fill",
    "share-forward-2-fill",
    "share-forward-box-fill",
    "side-bar-fill",
    "arrow-left-s-fill",
    "arrow-go-back-fill",
    "arrow-down-s-fill",
    "filter-off-fill",
    "delete-bin-6-fill",
    "logout-box-r-fill",
    "settings-fill",
    "menu-3-fill",
    "forbid-2-fill",
    "logout-circle-r-fill",
    "menu-fold-fill",
    "arrow-right-s-fill",
    "close-fill",
    "download-cloud-2-fill",
    "check-fill",
    "question-fill",
    "menu-5-fill",
    "loader-3-fill",
    "menu-add-fill",
    "delete-bin-2-fill",
    "loader-4-fill",
    "delete-bin-5-fill",
    "arrow-down-circle-fill",
    "alarm-warning-fill",
    "external-link-fill",
    "arrow-left-right-fill",
    "upload-2-fill",
    "share-forward-fill",
    "check-double-fill",
    "checkbox-multiple-blank-fill",
    "menu-2-fill",
    "subtract-fill",
    "arrow-right-circle-fill",
    "login-box-fill",
    "delete-bin-4-fill",
    "add-box-fill",
    "shield-check-fill",
    "settings-6-fill",
    "star-fill",
    "toggle-fill",
    "shield-keyhole-fill",
    "arrow-left-fill",
    "logout-circle-fill",
    "refresh-fill",
    "delete-back-2-fill",
    "upload-cloud-fill",
    "filter-3-fill",
    "find-replace-fill",
    "menu-unfold-fill",
    "add-circle-fill",
    "information-fill",
    "dashboard-fill",
    "thumb-up-fill",
    "forbid-fill",
    "checkbox-multiple-fill",
    "spam-2-fill",
    "filter-2-fill",
    "arrow-left-down-fill",
    "radio-button-fill",
    "lock-password-fill",
    "thumb-down-fill",
    "apps-fill",
    "delete-bin-fill",
    "checkbox-fill",
    "spam-fill",
    "arrow-up-circle-fill",
    "arrow-down-fill",
    "divide-fill",
    "loader-5-fill",
    "menu-fill",
    "upload-cloud-2-fill",
    "share-circle-fill",
    "indeterminate-circle-fill",
    "search-2-fill",
    "history-fill",
    "shield-fill",
    "loader-fill",
    "login-circle-fill",
    "checkbox-circle-fill",
    "add-fill",
    "share-fill",
    "arrow-right-down-fill",
    "checkbox-indeterminate-fill",
    "error-warning-fill",
    "lock-2-fill",
    "search-fill",
    "star-half-fill",
    "zoom-out-fill",
    "timer-flash-fill",
    "delete-back-fill",
    "close-circle-fill",
    "download-fill",
    "arrow-up-fill",
    "delete-bin-3-fill",
    "star-half-s-fill",
    "menu-4-fill",
    "zoom-in-fill",
    "settings-2-fill",
    "arrow-left-circle-fill",
    "download-cloud-fill",
    "arrow-right-fill",
    "search-eye-fill",
    "settings-3-fill",
    "lock-unlock-fill",
    "apps-2-fill",
    "download-2-fill",
    "arrow-go-forward-fill",
    "eye-off-fill",
    "arrow-up-s-fill",
    "timer-2-fill",
    "alarm-fill",
    "shield-flash-fill",
    "star-s-fill",
    "logout-box-fill",
    "shield-cross-fill",
    "arrow-up-down-fill",
    "shield-user-fill",
    "checkbox-blank-fill",
    "spam-3-fill",
    "shield-star-fill",
    "eye-close-fill",
    "filter-fill",
    "share-box-fill",
    "arrow-drop-left-fill",
    "more-fill",
    "checkbox-blank-circle-fill",
    "lock-fill",
    "settings-4-fill",
    "time-fill",
    "alert-fill",
    "eye-fill",
    "function-fill",
  ]),
  propertyFill: PropTypes.string,
};
