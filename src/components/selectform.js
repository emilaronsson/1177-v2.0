import { useState } from "react";

export function SelectForm() {
    const [myChoice, setMyChoice] = useState("val1")

    const handleChange = (e) => {
        setMyChoice(e.target.value)
    }
    
    const renderChoice = () => {

        return <p>Text för {myChoice}!</p>

    }

    return (
        <>
            <form className="reactform">
                <select value={myChoice} onChange={handleChange}>
                    <option value="val1">Val 1</option>
                    <option value="val2">Val 2</option>
                    <option value="val3">Val 3</option>
                </select>
            </form>
            {renderChoice()}
        </>
    )
}