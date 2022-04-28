import React, {useState} from "react";


export default function Form(){
    const [formData, setFormData] = useState(
        {
            all: true,
            isCharm: false,
            isConjuration: false,
            isTransfiguration: false,
            isSpell: false,
            isJinx: false,
            isCurse: false,
            other: false
        }
    )
    
    //Handle Change function can fit various types of input
    function handleChange(event) {
        const {name, value, type, checked} = event.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
            
        })
    }

    // console.log(formData)

    return (
        <form className="checkboxForm">

            <input 
                type="checkbox" 
                id="all" 
                checked={formData.all}
                onChange={handleChange}
                name="all"
                className="checkBoxln1"
            />
            <label htmlFor="all">All</label>
            <br />

            <input 
                type="checkbox" 
                id="charm" 
                checked={formData.isCharm}
                onChange={handleChange}
                name="isCharm"
                className="checkBoxln1"
            />
            <label htmlFor="charm">Charm</label>
            <br />

            <input 
                type="checkbox" 
                id="conjuration" 
                checked={formData.isConjuration}
                onChange={handleChange}
                name="isConjuration"
                className="checkBoxln1"
            />
            <label htmlFor="conjuration">Conjuration</label>
            <br />

            <input 
                type="checkbox" 
                id="transfiguration" 
                checked={formData.isTransfiguration}
                onChange={handleChange}
                name="isTransfiguration"
                className="checkBoxln2"
            />
            <label htmlFor="transfiguration">Transfiguration</label>
            <br />

            <input 
                type="checkbox" 
                id="spell" 
                checked={formData.isSpell}
                onChange={handleChange}
                name="isSpell"
                className="checkBoxln2"
            />
            <label htmlFor="spell">Spell</label>
            <br />

            <input 
                type="checkbox" 
                id="jinx" 
                checked={formData.isJinx}
                onChange={handleChange}
                name="isJinx"
                className="checkBoxln3"
            />
            <label htmlFor="jinx">Jinx</label>
            <br />

            <input 
                type="checkbox" 
                id="curse" 
                checked={formData.isCurse}
                onChange={handleChange}
                name="isCurse"
                className="checkBoxln3"
            />
            <label htmlFor="curse">Curse</label>
            <br />

            <input 
                type="checkbox" 
                id="other" 
                checked={formData.other}
                onChange={handleChange}
                name="other"
                className="checkBoxln3"
            />
            <label htmlFor="other">Other</label>
            <br />

        </form>
    )
}
