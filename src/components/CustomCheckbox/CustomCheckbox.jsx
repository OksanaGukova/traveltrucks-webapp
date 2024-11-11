

const CustomCheckbox = ({ checked, onChange, label, icon  }) => {
  return (
    <label style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
      <button
        type="button"
        onChange={onChange}
        style={{ display: "none" }}
      ></button>
      <div
        style={{
          width: "112px",
          height: "96px",
          border: checked ? "1px solid #d84343" : "1px solid #dadde1",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          backgroundColor: "#fff",
          textAlign: "center",
          position: "relative",
          flexDirection: "column",
          padding: "4px 16px", 
        }}
        onClick={onChange}
      >
        <svg
          style={{
            width: "32px",
            height: "32px",
            marginBottom: "4px",
          }}
        >
          <use href={icon} />
        </svg>
   
        <span
          style={{
            position: "relative",
            fontWeight: "500",
            lineHeight: "1.5",
            fontSize: "16px",
            pointerEvents: "none", 
          }}
        >
          {label}
        </span>
      </div>
    </label>
  );
};

export default CustomCheckbox;
