---
toc: false
---

<link rel="stylesheet" href="./styles/styles.css">

# Publishing Checklist

A checklist to help you publish a chart on an ONE Campaign platform.

```js

import confetti from "npm:canvas-confetti";

const total = (data_1 + data_2 + data_3
+ design_1 + design_2 + design_3
+ access_1 + access_2 + access_3 + access_4
+ publish_1 + publish_2 + publish_3 + publish_4)

function publish() {
    if (total ===0) {
    return html`<div>Start by checking the boxes below 👇 </div>`
    }else if (total < 14) {
    return html`<div>You're not ready to publish yet. ${14-total} more items to check.</div>`
  }else {
    confetti();
    return html`You're ready to publish!`
  }
}

// if (total < 14) {
//   html`You're ready to publish!`
// }
```

```js
publish()

```
<br>

**🔍 Data Accuracy**
<div class="toggleCustom">

```js
const data_1 = view(Inputs.toggle({label: htl.html`Sources cited and linked correctly`, value: true}));
const data_2 = view(Inputs.toggle({label: "Underlying data has been checked"}));
const data_3 = view(Inputs.toggle({label: "Key message matches the data"}));

```
</div>


**🎨 Design**
<div class="toggleCustom">

```js
const design_1 = view(Inputs.toggle({label: "ONE data visualisation colours, font, layout and other styling elements have been used"}));
const design_2 = view(Inputs.toggle({label: "The chart has been checked for mislabeling, misinterpretation, and other design errors"}));
const design_3 = view(Inputs.toggle({label: `The chart has been checked against our data visualisation principles`}));
```
</div>


**♿ Accessibility**
<div class="toggleCustom">

```js
const access_1 = view(Inputs.toggle({label: "Colours and elements are checked for accessibility"}));
const access_2 = view(Inputs.toggle({label: "Alt text is provided"}));
const access_3 = view(Inputs.toggle({label: `Interactivity has been tested`}));
const access_4 = view(Inputs.toggle({label: `The chart has been tested on different devices`}));
```
</div>

**👀 Publishing**
<div class="toggleCustom">

```js
const publish_1 = view(Inputs.toggle({label: "Flourish charts as saved in the correct folder on the ONE Campaign Project"}));
const publish_2 = view(Inputs.toggle({label: "Chart object name uses format: [Page]_[ChartType]_[AdditionalInfo]_[Optional `Mobile`]"}));
const publish_3 = view(Inputs.toggle({label: `The chart has been user tested with at least 2 other people`}));
const publish_4 = view(Inputs.toggle({label: `The chart has been reviewed by the data team`}));
```
</div>

