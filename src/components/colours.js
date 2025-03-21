import {html} from "npm:htl";

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
}

export function circleElement(cirlceColor) {

    var borderColor = "0.5px solid #bbb";

    if (cirlceColor !== "#FFFFFF") {
        borderColor = "none";
    }
    
    return html.fragment`

    <style>
        .circle {
            width: 50px; 
            height: 50px; 
            border-radius: 100px; 
            border: none;
            cursor: pointer;
        }

        .circle_containter {
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
        }

        .circle_containter:hover {
            transform: translateY(+2px);
            opacity: 90%;
            cursor: pointer;
            
        }
    </style>

    <div style="display: inline-block; cursor: pointer;">

        <div class="circle_containter" onclick="navigator.clipboard.writeText('${cirlceColor}')">
            <button class="circle" style="background-color: ${cirlceColor}; border: ${borderColor}"></button>
            <code style="font-size: 0.9rem;">${cirlceColor}</code>
        </div>

    </div>
    `
}