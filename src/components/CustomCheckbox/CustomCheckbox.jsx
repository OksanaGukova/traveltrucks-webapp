

const CustomCheckbox = ({ checked, onChange, label }) => {
    return (
        <label style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                style={{ display: 'none' }} // Сховати стандартний чекбокс
            />
            <div
                onClick={onChange}
                style={{
                    width: '20px',
                    height: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backgroundColor: checked ? '#007bff' : '#fff',
                    marginRight: '8px',
                    position: 'relative', // Додано для позиціонування тексту
                }}
            >
                {checked && <span style={{ color: '#fff' }}>✔</span>} {/* Відображення галочки */}
                <span style={{
                    position: 'absolute',
                    color: checked ? '#fff' : '#000', // Зміна кольору тексту в залежності від стану
                    fontSize: '12px',
                    pointerEvents: 'none', // Щоб текст не перешкоджав кліку
                }}>
                    {label}
                </span>
            </div>
        </label>
    );
};

export default CustomCheckbox;