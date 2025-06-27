# How to choose the right chart

Most people are familiar with common chart types like line charts, 
bar charts, and column charts. These formats are widely used because 
they’re effective at communicating specific kinds of insights. But when designing a
chart, it’s not always obvious which type best suits your data or message. The 
wrong choice can make your chart confusing—or even misleading.

Below are some guidelines to help you select the right chart type for 
your data and intended message, along with tips on how to use each one effectively. 
This isn’t an exhaustive list, and many charts can serve multiple purposes—but it offers 
a solid starting point. Whatever chart you choose, always aim for clarity, engagement, and 
relevance to your audience.

## Quick chart reference

<div class="grid cards" markdown style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">

-   __Change over time__

    ---
    - Line
    - Area
    - Slope
    - Column/bar
    - Heatmap
    - Connected dot

-   __Magnitude__

    ---
    - bar/column
    - Area
    - Waffle

-   __Correlation/relationship__

    ---
    - Scatter
    - Bubble
    - Connected dot

-   __Correlation/relationship__

    ---
    - Scatter
    - Bubble
    - Connected dot

-   __Distribution/variance__

    ---
    - Bee swarm
    - Scatter
    - Ridge line
    - Histogram

-   __Part-to-whole__

    ---
    - Stacked bar/column
    - Stacked area
    - Treemap
    - Pie/donut (caution)
    - Sankey

</div>

## Line charts

Line charts are a classic way to show how a variable changes—usually over 
time—by connecting individual data points with a line. They can display a 
single line for one category or multiple lines for comparisons across several categories. 
Typically, time is plotted on the horizontal axis and numerical values on the vertical axis.

__Tips for Effective Line Charts:__

- __Avoid the “spaghetti chart”__: Including more than five 
lines often makes the chart hard to read. Use restraint or consider splitting 
into multiple charts.

- __Skip the dual axis__: Comparing two numeric variables on different 
scales with a dual axis can distort the data. Separate charts are usually
clearer and more honest.

- __Be intentional with your y-axis range__: Starting the vertical axis at zero isn’t 
always necessary—choose a range that best reveals the pattern you want to highlight.

- __Use markers thoughtfully__: Add a final dot or arrow to emphasize the 
latest value, and consider a dotted line for projections or forecasts. Show data point markers 
if you want to highlight individual values or indicate missing data.

**Examples**

<iframe src='https://flo.uri.sh/story/2988874/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:700px;margin-bottom: 2rem;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'>
</iframe>

## Area Charts

Area charts are similar to line charts but with the space beneath the lines filled in
to represent volume. They show how one or more variables change over time, 
often stacking areas for each group on top of one another. This allows you to see both the evolution of the total and the relative contribution of each group.

Area charts are useful for highlighting overall trends and proportions, but 
they’re less effective at showing precise changes in individual variables—especially 
when many are stacked.

**Examples**

<iframe src='https://flo.uri.sh/visualisation/22233748/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>


## Bar and column charts

Bar and column charts are among the most common ways to show 
the relationship between a numeric variable and a categorical one.
Each category is represented by a bar, with its length proportional to 
the corresponding numeric value. For example, to show GDP by country, each 
bar represents a country, and its length reflects its GDP.

In column charts, categories run along the horizontal axis; in bar charts, 
they run along the vertical axis. Bars can also be stacked to display proportions 
within each category.

__Tips for Effective Bar and Column Charts__:

**Tips for Effective Bar and Column Charts:**

- **Use bar charts for long or many category names:** Vertical labels are easier to read than horizontal ones.
- **Start bars at zero:** This avoids distorting the data and misleading viewers.
- **Sort bars:** Ordering them ascending or descending improves readability.
- **Limit colour use:** Avoid the “rainbow chart.” Use a consistent colour scheme, highlight selectively, and apply colour with purpose.
- **Use other charts for multiple values per category:** Consider bee swarm plots, box plots, or violin plots to show distributions.
- **Don’t confuse with histograms:** Bar charts use categorical axes; histograms show the distribution of numeric data.


**Examples**

<iframe src='https://flo.uri.sh/story/2990469/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:700px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'>
</iframe>


## Scatter plots

Scatter plots show the relationship between two 
numeric variables. Each data point is represented as a dot, with 
one variable plotted on the horizontal axis and the other on the vertical axis. 
The position of the dots reveals patterns, correlations, or the absence of a relationship.

__Tips for Effective Scatter Plots__:

- __Avoid over-plotting__: When many dots overlap, it becomes hard to read. 
Use smaller dot sizes and adjust opacity to improve visibility.

- __Use colour purposefully__: Colour can indicate a third 
variable—either categorical or numeric—or be used to highlight key data points, 
often alongside annotations.

- __Be cautious with logarithmic scales__: They’re helpful for data with a wide 
range (e.g. GDP), but can be misleading if not clearly explained.
Always label and clarify when using log scales.


**Examples**

<iframe src='https://flo.uri.sh/story/2990670/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:700px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>


## Bubble chart

Bubble charts are an extension of scatter plots, adding a third variable represented by the 
size of each dot. Like scatter plots, colour can be used to introduce a fourth variable. 
A well-known example is 
[Hans Rosling’s chart](https://www.youtube.com/watch?v=jbkSRLYSojo)
on global development, which showed life expectancy 
(vertical axis), GDP per capita (horizontal axis), population size (dot size), and continent (dot colour).

**Tips for Effective Bubble Plots**:

- **Prioritise axis variables**: Values on the x and y axes are easier to interpret than bubble size. 
Assign the most important variables accordingly.

- **Include a bubble size legend**: Without it, viewers won’t understand what the sizes represent.

- **Use colour wisely**: As with scatter plots, colour can encode additional data or highlight specific 
points—just be careful not to overwhelm.


**Examples**
<iframe src='https://flo.uri.sh/visualisation/22235866/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>


## Bee swarm

Bee swarm plots show the distribution of a single numeric variable, similar to a scatter plot—but with one 
numeric and one categorical variable. Each dot represents an item in the category, positioned according to 
its numeric value. Categories can be split into subgroups, each forming its own “swarm,” arranged side by side
(horizontal layout) or stacked vertically.

Like scatter and bubble plots, colour and size can encode additional variables. Bee swarm plots are useful 
alternatives to histograms, box plots, violin plots, connected dot plots, and ridge-line charts.

**Examples**

<iframe src='https://flo.uri.sh/story/2990754/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:700px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>


## Pie charts

A pie chart is a circle divided into slices, with each slice representing the proportion of a category. 
While commonly used, pie charts have major limitations and are often avoided by data professionals.
The main issue is that people struggle to compare angles accurately, making it easy to misinterpret the data.

**Tips for pie charts**:

- **Use with caution**: Angles are hard to compare, especially when values are similar.

- **Prefer alternatives**: Doughnut charts are slightly better, but bar or column charts are 
often clearer—people interpret lengths more easily than angles.

- **Don’t default to pie charts for part-to-whole data**: Other chart types can convey proportions more 
effectively.


## Treemaps

A treemap uses nested rectangles to show proportions within a whole and illustrate hierarchical 
relationships. Each rectangle represents a category, with its size proportional to a numeric value. 
For example, a treemap of the world’s population might show continents as large rectangles, each 
subdivided into smaller rectangles for countries.

**Tips for effective treemaps**:

- **Limit hierarchy depth**: Avoid using more than three levels—too much nesting makes the 
chart hard to interpret.

- **Use interactivity when possible**: Tooltips, zoom, or filters can 
greatly improve clarity and engagement.

- **Ensure clear labelling**: Without space for text, the chart can become unreadable—consider 
alternative layouts if labels are essential.

**Examples**

<iframe src='https://flo.uri.sh/story/2990898/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:800px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

## Geospatial charts

Maps are powerful tools for visualising geographic data, especially when spatial relationships are central 
to the story. However, outside geospatial contexts, maps—such as choropleth maps or cartograms—can 
introduce issues that hinder clarity.

**Tips for using maps effectively**:

- Be aware of projection distortion: All maps distort the Earth’s surface. We use the
[“Natural Earth” projection](https://en.wikipedia.org/wiki/Natural_Earth_projection), 
which offers a good balance between limiting distortion and 
maintaining aesthetic appeal.

- Watch for size and population bias: Maps often underrepresent small regions or populations 
and overemphasise large areas, skewing perception.

- Limit distraction from political borders: These can visually dominate and shift attention 
away from your actual data.

- Consider audience familiarity: Maps assume geographic knowledge—some viewers may misinterpret 
data due to unfamiliarity.

- Evaluate alternatives: Before using a map, consider whether a non-geographic chart 
(e.g. bar, dot, or tile chart) might better serve your data and message.


### Choropleth maps

These maps colour geographic areas based on a numeric variable. Colour scales can be categorical
(different hues/shades representing a distinct categories), sequential 
(a single hue in varying shades, where darker means higher), or diverging (typically using two hues—e.g. 
blue to red—with a neutral midpoint like white).

- Always include a clear legend and provide enough annotations and explanations to help viewers 
interpret the data.

- Normalise your data: Avoid using raw values alone—adjust based on population, area, or other relevant 
factors to ensure meaningful comparisons.

*See also: hex maps and cartograms as alternative approaches to improve clarity and reduce geographic bias.*


**Examples**

<div class="flourish-embed" data-src="story/2990940?808445"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/story/2990940/thumbnail" width="100%" alt="visualization" /></noscript></div>


## Non-Standard Chart Types

While standard chart types are familiar and effective, non-standard visualisations can sometimes 
communicate insights just as well—if not better. Their novelty can make them more engaging and 
memorable, especially when used with purpose and clarity.

**Examples of Non-Standard Charts**:

- **[Napoleon’s Russian Campaign](https://datavizblog.com/2013/05/26/dataviz-history-charles-minards-flow-map-of-napoleons-russian-campaign-of-1812-part-5/)** – Charles Minard’s famous flow map visualising troop numbers, 
geography, and temperature in a single graphic.

- **[Population Rings](https://pmcruz.com/dendrochronology/)** – Pedro Cruz’s animated visualisation showing the aging of U.S. states as organic, 
ring-like forms.

- **[Patchwork Kingdoms](https://giga.global/patchwork-kingdoms/)** – Nadieh Bremer’s data art project combining UNICEF data with 
fantasy-style visuals to illustrate digital inequality.

- **[Climate Stripes](https://www.reading.ac.uk/planet/climate-resources/climate-stripes)** – Ed Hawkins’ minimalist representation of global warming, showing 
temperature change over time as colour stripes.

These charts demonstrate how creative approaches can be both informative and emotionally powerful—when 
aligned with the story and data.

























