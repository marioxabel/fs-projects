import Card from "../Components/Cards/Card";
import { FaFlagCheckered } from "react-icons/fa6";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function AllCards() {
    
    return (
        <div>
            <h2>Cards</h2>
            <p className="info">Card</p>
            <Card 
                icon={<AiOutlineCloudUpload />} 
                title="Easy Deployment"    
                text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. 
                    Et magna sit morbi lobortis."
                iconColor="#e5e7eb"
                backgroundColor="#e5e7eb"
            />
            <p className="info">Card - hover</p>
            <Card 
                // Content props
                icon={<FaFlagCheckered />}
                title="End of the line!"    
                text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. 
                    Et magna sit morbi lobortis."
                // Styling props
                hover
                iconColor= "#618264"
                iconBackgroundColor="#B0D9B1"
                backgroundColor="#D0E7D2"
                titleColor="#618264"
                textColor="#79AC78"
            />
        </div>
    )
}

// icon, 
// icon_color, 
// icon_backgroundColor,
// title,
// text,
// backgroundColor,
// titleColor,
// textColor,
// className,
// hover,