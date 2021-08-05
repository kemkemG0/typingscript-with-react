import React from "react";

export const game: React.CSSProperties = {
  padding: "0.5em",
  borderRadius: "1em",
  background: "lightslategray",
  margin: "150px auto",
  width: "600px",
  height: "400px",
  textAlign: "center",
  position: "relative",
};

export const gamedisplay: React.CSSProperties = {
  background: "lavender",
  position: "absolute",
  width: "90%",
  height: "50%",
  borderRadius: "1em",

  transform: "translate(-50%, -50%)",
  top: "50%",
  left: "50%",
};
export const times: React.CSSProperties = {
  position: "absolute",
  margin: "0.1rem",
  padding: "1.5rem",
};
export const textblock: React.CSSProperties = {
  letterSpacing: "5px",
  position: "absolute",
  width: "100%",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, 0%)",
  fontSize: "25px",
};

export const gameinfo: React.CSSProperties = {
  color: "white",
  position: "absolute",
  top: "10%",
  right: "10%",
};
