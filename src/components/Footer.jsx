import React from 'react'

export default function Footer() {
    return (
        <footer style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: "center"
        }}>
            
            <p className="label"> rafaelsobook@gmail.com</p>
            <p className="label"><span style={{fontSize: "1.7rem"}}>&copy;</span> 2025 Rafael So</p>
            <p className="label">Steinbach MB, Canada</p>
        </footer>
    )
}
