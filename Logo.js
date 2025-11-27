export function Logo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <img
        src="https://files.codingninjas.in/logo.png"
        alt="Coding Ninjas"
        style={{
          width: "144px", // same as w-36
          objectFit: "contain",
        }}
      />
    </div>
  );
}
