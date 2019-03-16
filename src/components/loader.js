import React from "react";
import i18n from "../i18n/i18n";

const Loader = ({ t }) => {
  return <h2>{t("Loading")}...</h2>;
};

export default i18n(Loader);
