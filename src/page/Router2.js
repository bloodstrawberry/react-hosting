import React from "react";

import { Unity, useUnityContext } from "react-unity-webgl";

const Router2 = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/html-hosting.loader.js",
    dataUrl: "build/html-hosting.data",
    frameworkUrl: "build/html-hosting.framework.js",
    codeUrl: "build/html-hosting.wasm",
  });

  return <Unity unityProvider={unityProvider} style={{width:"750px", height:"500px"}}/>;
};

export default Router2;
