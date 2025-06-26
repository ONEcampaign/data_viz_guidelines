---
toc: false
---

<link rel="stylesheet" href="./styles/styles.css">

# Accessibility

Accessibility is often an overlooked part of the data visualisation design process, but it's essential to ensure that everyone can access and understand the information you are presenting. When designing your visualisation, keep the following considerations in mind:

**Our colour palette**, detailed [here](./style-guide-colour), has been developed with accessibility in mind. However, you should still test the colours used in your visualisation to ensure they are accessible to users with colour vision deficiencies or other visual impairments. Use a colour blindness simulator and contrast checker to confirm your visualisation is accessible to all users. As a general rule, apply variations in shade—not just hue—to help differentiate between elements.

**Overall design**. Ensure that all text on the chart is legible and that visual elements are clearly distinguishable. Use adequate spacing so that your chart doesn't appear cluttered or too spread out.

**Chart literacy**. Remember that not all users are familiar with common data visualisation conventions. E.g While data-savvy viewers might instinctively understand that a dot represents a data point many people do not. Know your audience, and design accordingly. Always include the necessary supporting elements—such as legends, annotations, and explanatory notes—so all users can interpret the data accurately.

**Consider the viewing medium and devices**. Charts can render differently across devices. Make sure your visualisation is responsive and functions well on mobile, tablet, and desktop—or consider creating different versions for each. If your visualisation is published on the web or social media, it should always include alternative text (alt text) to assist users with visual impairments. You can read more about writing effective alt text for data visualisations [here](https://medium.com/nightingale/writing-alt-text-for-data-visualization-2a218ef43f81). A simple format to follow is:


<p style="font-size: 1.5rem;">
"<span style="color: #FF7F4C">[Chart type]</span> showing <span style="color: #FF7F4C">[data type]</span> where <span style="color: #FF7F4C">[reason for creating the chart]</span>."
</p>