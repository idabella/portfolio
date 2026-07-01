import React from "react";
import Typewriter from "typewriter-effect";
import { useLang } from "../../i18n/LanguageContext";

function Type() {
  const { t } = useLang();

  return (
    <Typewriter
      key={t.home.typewriterStrings.join(",")}
      options={{
        strings: t.home.typewriterStrings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
