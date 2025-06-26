---
toc: true
---

<link rel="stylesheet" href="./styles/styles.css">

# How to choose the right chart

Most people will be able to recognise a line chart, bar chart, column chart and other very typical ways of visualising data.
These chart types have become very common and recognisable because they are effective at communicating certain kinds of insights. 
However, when you are desgning a chart, it isn't always clear which chart type is the best to use. Choosing the wrong chart type for
your data or the insights you want to communicate can make your chart less effective or even misleading.

Below are some guidelines to help you choose the right chart type for your data and the insights you want to communicate, and some guidance on how best to use these charts.
This isn't an exhaustive list of chart types, and some charts may be used for multiple purposes. However, this should give you a good starting point. And remember,
regardless of the chart type you choose, always make sure your chart is clear, engaging and fit for purpose.

<div style="border: 1px solid #f0f0f0; padding: 1rem; margin: 1rem 0; border-radius: 0.5rem;">
    <strong>What kind of insights do you want to show?</strong>
    <div class="grid grid-cols-3">
        <div>
            <strong>Change over time</strong>
            <li><a href="#line-chart">Line chart</a></li>
            <li><a href="#area-chart">Area chart</a></li>
        </div>
        <div>
            <strong>Magnitude</strong>
            <li><a href="#bar-and-column-charts">Bar and column charts</a></li>
            <li><a href="#area-chart">Area chart</a></li>
        </div>
        <div>
            <strong>Correlation</strong>
            <li><a href="#scatter-plot">Scatter plot</a></li>
            <li><a href="#bubble-plot">Bubble plot</a></li>
        </div>
        <div>
            <strong>Deviation and distribution</strong>
            <li><a href="#bee-swarm">Bee swarm</a></li>
        </div>
        <div>
            <strong>Proportion</strong>
            <li><a href="#pie-chart-warning">Pie chart (warning)</a></li>
            <li><a href="#bar-and-column-charts">Bar and column charts</a></li>
            <li><a href="#treemap">Treemap</a></li>
        </div>
        <div>
            <strong><a href = "#geospatial">Geospatial</a></strong>
            <li><a href="#choropleth-map">Choropleth map</a></li>
        </div>
    </div>
</div>

___

## Line chart

Line charts are a standard way of showing how a variable changes (typically over time), using a line to connect each data point. Line charts can show a single line for a single category or multiple lines for many categories. Typically time spans the horizontal axis and numeric values span the vertical axis.

**Tips:**
- Avoid the spaghetti chart - plotting more than 5 lines on a single chart generally makes the chart less readable.
- Do not use a dual axis to compare the change over time of 2 different numeric variables (especially at different scales). This misrepresents the data. It is usually better to make 2 separate charts rather than combine them with a dual axis.
- Consider how the range of values on the vertical axis will affect how easy (or not) it is to observe patterns. Depending on the type of variable and your purpose, it can be better not to start the vertical axis at 0.
- Consider using a final dot/arrow to draw attention to the most recent value, and use a dotted line to show a forecast or projection. Show dots on data points if you want to draw attention to the data points themselves or show missing data points.

**Examples**

<iframe src='https://flo.uri.sh/story/2988874/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:700px;margin-bottom: 2rem;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'>
</iframe>

___

## Area chart

Similar to a line chart, but the area below the line is filled in to show the volume. This chart shows the change over time of the value of one or several variables, where usually the areas for each group are stacked on top of each other. In this way you can also see the change over time for the total of all the variables, and the relative proportion of each variable.

This chart is useful to show relative proportions and the evolution of the total of all the variables, but it is not efficient in showing the change for each individual variable.

**Examples**

<iframe src='https://flo.uri.sh/visualisation/22233748/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

___

## Bar and column charts

This is the most common way to show the relationship between a numeric variable and a categorical variable. Each item in the category is a bar and the size of the bar is proportional to the numeric value. For example, for GDP for countries in the world, each bar is a country and the sizes of the bars are proportional to the value of GDP.

Items can be plotted with the category on the horizontal axis and numeric variable on the vertical axis (column chart) or with the category on the vertical axis and numeric variable on the horizontal axis (bar chart). Bars cam also be stacked to show proportions.

**Tips:**
- Use a bar chart when the category names are long or there are lots of categories, as it is easier to read the names when they are vertical.
- Bars should ALWAYS start at 0, otherwise you will distort the data.
- Try to order the bars in ascending or descending order, this makes the charts easier to read.
- Avoid the rainbow chart - do not use different colours for each item in the category. You may use different colours for each different category or highlight a single bar with a different colour. Use colour wisely.
- If there are several values for each item in the category, consider using a different chart like a bee swarm or a box/violin plot to show the distribution of values.
Do not confuse a bar chart with a histogram. A histogram has only numeric variables and is intended to show distribution.

**Examples**

<iframe src='https://flo.uri.sh/story/2990469/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:700px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'>
</iframe>

___

## Scatter plot

This chart shows the relationship between 2 numeric variables. Each data point is shown as a shape (usually a dot) with the value for the first variable on the vertical axis and the value for the second variable on the horizontal axis. The relative position of the dots shows a relationship (or lack of) between the two variables.

**Tips:**
- Avoid over-plotting - when there are many dots overlapping it is difficult to see whether there is a relationship between the variables or not. Try change the opacity and sizes of the dots to increase readability
- You can colour dots to show an additional numeric variable or a categorical variable, or to highlight certain data points (with some text annotation)
- Be weary of using logarithmic scales. They may be useful to make sense of data that covers a wide scale from very big to very small values (e.g. GDP), but this may lead the viewer to misinterpret the chart. Be sure to note and explain the use of logarithmic scales.

<iframe src='https://flo.uri.sh/story/2990670/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:700px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

___

## Bubble plot

Similar to a scatter plot, but with a third variable added, shown through the size of the dots. The third variable can be numeric or categorical. Similar to scatter plots, you can use colour to show an additional variable. The most famous [bubble chart was used by Hans Rosling](https://www.youtube.com/watch?v=jbkSRLYSojo) to show the state of human development in the world - showing life expectancy (vertical axis), GDP per capita (horizontal axis), population size (dot size) and continent (dot colour).

**Tips:**
- Be mindful that the values of the first two variables (on the vertical and horizontal axis) are much easier to interpret than the third variable. Make sure to consider which variable to place on which visual element.
- Do show a legend or description for bubble sizes, otherwise the viewer will not be able to interpret the sizes or what the sizes mean.

**Examples**
<iframe src='https://flo.uri.sh/visualisation/22235866/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

___

## Bee swarm

This chart is useful to show the distribution of a single numeric variable. It is similar to a scatter plot, however instead of 2 numeric variables, 1 variable is numeric and the other is categorical. Each item in the category is a dot, and the numeric value is the position of the dot along an axis. The categorical variable can be split into subcategories each with its own beeswarm, shown side by side (if the categorical variable is on the horizontal axis) or on top of each other (if the categorical variable is on the vertical axis). Similar to scatter and bubble charts, colour and size can be used to show additional variables. _See also connected dot plots, histograms, box plots, violin charts, and ridge-line charts._

**Examples**

<iframe src='https://flo.uri.sh/story/2990754/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:700px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

___

## Pie chart (WARNING)

This is a circle (pie) split into sections (slices), where the size of each section represents the proportion of an item. While these charts are used often, they have some significant disadvantages and often there are better alternatives, so they are often avoided by professionals in the field. This is because angles of slices are very hard to differentiate, so a viewer may easily misinterpret the data. Read more on pie charts [here](https://www.data-to-viz.com/caveat/pie.html). It is slightly better to use doughnut charts where the angles are easier to interpret. <strong>It is even better to use a <a href="#bar-and-column-charts">bar or column chart</a></strong>, because viewers can perceive differences in length more easily than differences in angle and area. Just because the data may be part-to-whole does not mean you have to use a pie chart.

___

## Treemap

A tree map is composed of nested rectangles used to show the proportions of items to a whole and how a hierarchy is organized. For example a tree map may show the world’s population. Each rectangle represents a continent and the size of the rectangle is the population size. Each rectangle may be composed of smaller rectangles each for a country in the continent (the second order in the hierarchy). Avoid using more than 3 levels in the hierarchy as the chart will be difficult to interpret Generally these kinds of charts are greatly enhanced by interactivity.

**Examples**

<iframe src='https://flo.uri.sh/story/2990898/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:800px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

___

## Geospatial

Maps are a very powerful tool to visualise geographic data. However, outside of geospatial applications, maps can be problematic to visualise data. That includes, for example, using choropleth maps and cartograms.

Spatial distortion is unavoidable with maps (because we are visualising a sphere on a 2-dimensional rectangular page). Depending on the map projection type you choose there may be more or less distortion making some regions appear more or less prominent. **We use [“natural earth”](https://en.wikipedia.org/wiki/Natural_Earth_projection) projection which balances limiting distortion while maintaining an aesthetically pleasing shape.**

Maps will also hide regions with small areas or small populations while overemphasising the importance of large areas and areas with large populations. Maps will overemphasise political borders, drawing attention away from the actual data you are trying to show. Maps also rely on a viewer's familiarity with geographical positions and can increase the risk of misinterpretation.

Before designing a map for your visualisation, make sure to consider other charts that may better represent the data.

## Choropleth map

This map shows geographic areas coloured in relation to a numeric variable Colours scales may be a single colour of different shades, where the darker the colour the greater the value of the variable, or diverging (using 2 colours) e.g. reg blue scale, where small values are coloured more blue and large values are more red, and a midpoint is white. Be sure to include a colour legend and enough explanations and annotations for the viewer to understand the chart. Normalise the data. You cannot compare raw values among different regions, consider normalising the values based on population or some other variable to make values comparable.

_See also hex maps and cartograms._

**Examples**

<div class="flourish-embed" data-src="story/2990940?808445"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/story/2990940/thumbnail" width="100%" alt="visualization" /></noscript></div>

___

## Non-standard chart types

Sometimes non standard data visualizations can be just as effective at communicating insights as standard charts. In fact, many are more engaging because of their irregularity and novelty.

Here are some examples:


[Napoleon’s Russian campaign](https://datavizblog.com/2013/05/26/dataviz-history-charles-minards-flow-map-of-napoleons-russian-campaign-of-1812-part-5/)<br>
[Population rings](https://pmcruz.com/dendrochronology/) by Pedro Cruz<br>
[Patchwork Kingdoms](https://giga.global/patchwork-kingdoms/) by Nadieh Bremer<br>
Ed Hawkins’ [Climate Stripes](https://www.reading.ac.uk/planet/climate-resources/climate-stripes)
