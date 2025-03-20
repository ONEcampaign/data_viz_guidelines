---
toc: true
---

# How to choose the right chart

Line, bar, column charts (and others) are very common and efficient at showing certain kinds of insights. They have become standards for data visualisations. However, choosing the appropriate chart requires careful consideration and should be linked to your charts’ purpose.

You should always start with the data. Explore the data, gather insights, and formulate the arguments you want to communicate before choosing a chart type. Do not pick a chart and coerce the data to fit the chart type. Once you know the arguments, insights, and story you want to communicate, consider which chart types will do that most effectively.

Here are some standard chart types to consider:

Evolution and change over time

## Line chart

Line charts are a standard way of showing how a single or multiple numeric variables change, using a line to connect data points for each variable. Typically time spans the horizontal axis and numeric values span the vertical axis.

Avoid the spaghetti chart - plotting more than 5 lines on a single chart generally makes the chart less readable
Do not use a dual axis to compare the change over time of 2 different numeric variables (especially at different scales) as this misrepresents the data. It is usually better to make 2 separate charts rather than combine them with a dual axis.
Consider how the range of values on the vertical axis will affect how easy (or not) it is to observe patterns

<viz>

## Area chart

Similar to a line chart, but the area below the line is filled in to show the volume. This chart shows the change over time of the value of one or several variables, where usually the areas for each group are stacked on top of each other. In this way you can also see the change over time for the total of all the variables, and the relative proportion of each variable.

This chart is useful to show relative proportions and the evolution of the total of all the variables.
It is not efficient in showing the change for each individual variable

<viz>

Magnitude

## Bar and column charts

This is the most common way to show the relationship between a numeric variable and a categorical variable. Each item in the category is a bar and the size of the bar is proportional to the numeric value. For example, for GDP for countries in the world, each bar is a country and the sizes of the bars are proportional to the value of GDP.

Items can be plotted with the category on the horizontal axis and numeric variable on the vertical axis (column chart) or with the category on the vertical axis and numeric variable on the horizontal axis (bar chart). When there are lots of items in the category, use a bar chart as it increases readability. A bar chart can also show multiple numeric variables, by placing bars for each category next to each other or on top of each other.

Bars should ALWAYS start at 0, otherwise you will distort the data
Try to order the bars in ascending or descending order, this makes the charts easier to read
Avoid the rainbow chart - do not use different colours for each item in the category. You may use different colours for each different category or highlight a single bar with a different colour.
If there are several values for each item in the category, consider using a different chart like a bee swarm or a box/violin plot to show the distribution of values.
Do not confuse a bar chart with a histogram. A histogram has only numeric variables and is intended to show distribution.

<viz>


Correlation

## Scatter plot

This chart shows the relationship between 2 numeric variables. Each data point is shown as a shape (usually a dot) with the value for the first variable on the vertical axis and the value for the second variable on the horizontal axis. The relative position of the dots shows a relationship (or lack of) between the two variables.

Avoid over-plotting - when there are many dots overlapping it is difficult to see whether there is a relationship between the variables or not. Try change the opacity and sizes of the dots to increase readability
You can colour dots to show an additional numeric variable or a categorical variable, or to highlight certain data points (with some text annotation)
Be weary of using logarithmic scales. They may be useful to make sense of data that covers a wide scale from very big to very small values (e.g. GDP), but this may lead the viewer to misinterpret the chart. Be sure to note and explain the use of logarithmic scales.

<viz>

## Bubble plot

Similar to a scatter plot, but with a third variable added, shown through the size of the dots. The third variable can be numeric or categorical. Similar to scatter plots, you can use colour to show an additional variable. The most famous bubble chart was used by Hans Rosling to show the state of human development in the world - showing life expectancy (vertical axis), GDP per capita (horizontal axis), population size (dot size) and continent (dot colour).

Be mindful that the values of the first two variables (on the vertical and horizontal axis) are much easier to interpret than the third variable. Make sure to consider which variable to place on which visual element.
Do show a legend or description for bubble sizes, otherwise the viewer will not be able to interpret the sizes or what the sizes mean.

<viz>

Deviation and distribution

## Bee swarm

This chart is useful to show the distribution of a single numeric variable. It is similar to a scatter plot, however instead of 2 numeric variables, 1 variable is numeric and the other is categorical. Each item in the category is a dot, and the numeric value is the position of the dot along an axis. The categorical variable can be split into subcategories each with its own beeswarm, shown side by side (if the categorical variable is on the horizontal axis) or on top of each other (if the categorical variable is on the vertical axis). Similar to scatter and bubble charts, colour and size can be used to show additional variables. See also connected dot plots, histograms, box plots, violin charts, and ridge-line charts.

<viz>

Proportion

Pie chart (WARNING)

This is a circle (pie) split into sections (slices), where the size of each section represents the proportion of an item. While these charts are used often, they have some significant disadvantages and often there are better alternatives, so they are often avoided by professionals in the field. This is because angles of slices are very hard to differentiate, so a viewer may easily misinterpret the data. Read more on pie charts here. It is slightly better to use doughnut charts where the angles are easier to interpret. It is even better to use a bar or column chart, because viewers can perceive differences in length more easily than differences in angle and area. Just because the data may be part-to-whole does not mean you have to use a pie chart.

## Treemap

A tree map is composed of nested rectangles used to show the proportions of items to a whole and how a hierarchy is organized. For example a tree map may show the world’s population. Each rectangle represents a continent and the size of the rectangle is the population size. Each rectangle may be composed of smaller rectangles each for a country in the continent (the second order in the hierarchy). Avoid using more than 3 levels in the hierarchy as the chart will be difficult to interpret Generally these kinds of charts are greatly enhanced by interactivity.

<viz>

Geospatial

Maps are a very powerful tool to visualise geographic data. However, outside of geospatial applications, maps can be problematic to visualise data. That includes, for example, using choropleth maps and cartograms.

Spatial distortion is unavoidable with maps (because we are visualising a sphere on a 2-dimensional rectangular page). Depending on the map projection type you choose there may be more or less distortion making some regions appear more or less prominent. We use “natural earth” projection which balances limiting distortion while maintaining an aesthetically pleasing shape.

Maps will also hide regions with small areas or small populations while overemphasising the importance of large areas and areas with large populations. Maps will overemphasise political borders, drawing attention away from the actual data you are trying to show. Maps also rely on a viewer's familiarity with geographical positions and can increase the risk of misinterpretation.

Before designing a map for your visualisation, make sure to consider other charts that may better represent the data.

## Choropleth map

This map shows geographic areas coloured in relation to a numeric variable Colours scales may be a single colour of different shades, where the darker the colour the greater the value of the variable, or diverging (using 2 colours) e.g. reg blue scale, where small values are coloured more blue and large values are more red, and a midpoint is white. Be sure to include a colour legend and enough explanations and annotations for the viewer to understand the chart. Normalise the data. You cannot compare raw values among different regions, consider normalising the values based on population or some other variable to make values comparable.

See also hex maps and cartograms.

<viz>

## Non-standard chart types

Sometimes non standard data visualizations can be just as effective at communicating insights as standard charts. In fact, many are more engaging because of their irregularity and novelty.

Here are some examples:
Napoleon’s Russian campaign
Population rings by Pedro Cruz
Patchwork Kingdoms by Nadieh Bremer
Ed Hawkins’ Climate Stripes

The ONE Campaign has already created non standard data visualisations (perhaps without realising it). The Reform the Banks stunt in which the amount of money the could be unlocked from 
reforming the World Bank was printed as fake dollar bills show both a non standard visualisation form and data physicalisation which successfully communicated the message.
<ADD LINK TO REFORM THE BANKS>
