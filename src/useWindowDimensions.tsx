/**
 * @author Ilmari Karonen <https://stackoverflow.com/users/411022/ilmari-karonen>
 * @copyright 2018 Ilmari Karonen
 * @license CC BY-SA 3.0
 * @see {@link https://stackoverflow.com/a/6865024/1248177|How to get the size of a number in .net?}
 */

import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
