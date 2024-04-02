


interface InputProps {
    title: string;
    value: string;
    placeholder: string;
    onChange: (event) => void;
}

export default function TextInput({ title, value, placeholder, onChange }: InputProps) {
    return (
        <div className="space-y-2">
            <p>{title}</p>
            <input
                className="w-full border border-purple-700 rounded h-10"
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    );
}