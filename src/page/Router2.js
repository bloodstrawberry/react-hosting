import React from "react";

import { Unity, useUnityContext } from "react-unity-webgl";

const Router2 = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "react-hosting/build/html-hosting.loader.js",
    dataUrl: "react-hosting/build/html-hosting.data",
    frameworkUrl: "react-hosting/build/html-hosting.framework.js",
    codeUrl: "react-hosting/build/html-hosting.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
};

export default Router2;
