import React from "react";

import { Unity, useUnityContext } from "react-unity-webgl";

const Router2 = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "react-hosting/Build/html-hosting.loader.js",
    dataUrl: "react-hosting/Build/html-hosting.data",
    frameworkUrl: "react-hosting/Build/html-hosting.framework.js",
    codeUrl: "react-hosting/Build/html-hosting.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
};

export default Router2;
