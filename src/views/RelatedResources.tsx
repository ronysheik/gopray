import React from "react";


const RelatedResources = () => {
    const linkText: string = "Awqat.net";
    const linkUrl: string = "https://awqat.net/";

    return (
        <div style={{ textAlign: 'center', paddingTop: '15px' }}>
            <p>Find Lower Mainland Masjid prayer timings below</p>
            <a 
                href={linkUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: 'none', color: '#007BFF' }}
            >
                {linkText}
            </a>
        </div>
    );
};

export default RelatedResources;