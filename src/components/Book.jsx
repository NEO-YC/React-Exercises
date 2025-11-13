// import React from 'react'

// function Book({title, author,delfunction}) {


//   return (
//      <p style={{ border: "2px solid black" }}>
//       {title}--{author}--<button onClick={()=>delfunction(title)}>Delete🗑️</button>
//     </p>
//   )
// }

// export default Book















import React from "react";

function Book({ title, author, delfunction }) {
  // צבע רקע אקראי עדין לכל ספר
  const bgColors = ["#E6F7FF", "#FFF5E6", "#E8F5E9", "#F3E5F5", "#FFF0F5"];
  const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  const bookStyle = {
    background: randomColor,
    border: "2px solid #333",
    borderRadius: "12px",
    padding: "10px 15px",
    margin: "10px 0",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#222",
  };

  const authorStyle = {
    fontStyle: "italic",
    color: "#555",
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #ff4d4d, #ff0000)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "6px 12px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };

  const handleHover = (e, enter) => {
    e.target.style.transform = enter ? "scale(1.1)" : "scale(1)";
    e.target.style.boxShadow = enter
      ? "0 4px 12px rgba(255,0,0,0.4)"
      : "0 0 0 rgba(0,0,0,0)";
  };

  return (
    <div
      style={bookStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div>
        <span style={titleStyle}>{title}</span> —{" "}
        <span style={authorStyle}>{author}</span>
      </div>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
        onClick={() => delfunction(title)}
      >
        Delete 🗑️
      </button>
    </div>
  );
}

export default Book;
