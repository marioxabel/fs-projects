import Banner from "../Components/Banners/Banner"

export default function AllBanners() {
    return (
        <div>
            <h2>Banners</h2>
            <div>
            <h3>Multi-line</h3>
            <p className="info">success - multi-line</p>
            <Banner 
                status="success" 
                title="Congratulations!" 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
            />
            
            <p className="info">warning - multi-line</p>
            <Banner 
                status="warning" 
                title="Attention" 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
            />
            
            <p className="info">error - multi-line</p>
            <Banner 
                status="error" 
                title="Error" 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
            />
            
            <p className="info">neutral - multi-line</p>
            <Banner 
                status="neutral" 
                title="Update Available!" 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
            />
            </div>
            
            <div>
            <h3>Single-line</h3>
            <p className="info">success - single-line</p>
            <Banner 
                status="success" 
                title="Congratulations!" 
            />
            
            <p className="info">warning - single-line</p>
            <Banner 
                status="warning" 
                title="Attention" 
            />
            
            <p className="info">error - single-line</p>
            <Banner 
                status="error" 
                title="Error" 
            />
            
            <p className="info">neutral - single-line</p>
            <Banner 
                status="neutral" 
                title="Update Available!" 
            />
            </div>
        </div>
    )
}