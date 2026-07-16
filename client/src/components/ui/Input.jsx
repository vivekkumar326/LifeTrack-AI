function Input({
    type = "text",
    name,
    value,
    onChange,
    placeholder,
}) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}

export default Input;