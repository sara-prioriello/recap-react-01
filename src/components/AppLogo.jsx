import reactLogo from "../assets/react.svg"

export default function AppLogo({ size }) {
    return (
        <div className="logo">
            <img src={reactLogo} alt="ReactLogo" width={size} />
        </div>
    )
}