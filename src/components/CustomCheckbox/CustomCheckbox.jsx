

const CustomCheckbox = ({ checked, onChange, label }) => {
    return (
      <label
        style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
      >
        <button
          type="button"
          onChange={onChange}
          style={{ display: "none" }}
        ></button>
        <div
          onClick={onChange}
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
            padding: "4px 16px", // Додано для позиціонування тексту
          }}
        >
          {checked && <span style={{ color: "#fff" }}>✔</span>}{" "}
          {/* Відображення галочки */}
          <span
            style={{
              position: "relative",
              fontWeight: "500",
              lineHeight: "1.5",
              fontSize: "16px",
              pointerEvents: "none", // Щоб текст не перешкоджав кліку
            }}
          >
            {label}
          </span>
        </div>
      </label>
    );
};

export default CustomCheckbox;