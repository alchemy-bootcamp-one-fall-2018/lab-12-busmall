# Bus Mall Charting

Your savvy marketing person has just informed you that you need a visual representation to grab the marketeers' attention!

## Charting

Add a new page `report.html`. It will need its own `report-app.js` (and `report-index.js` if you are using a separate bootstrap file).

Create a component that displays a bar chart, for the most recent survey, that shows for each product:
* name of product
* number of views
* number of clicks

## Stretch Goals

There is a lot more that can be done!

1. Add in the percent clicked (clicks/views). This will require a separate y axis on the right. Look through the ChartJS docs
1. Add an additional chart that aggregates the data across all of the surveys:
    1. Create a master list of products (hint: look at the original code that creates a survey from the product list. You could repeat this process)
    1. Loop through all the surveys
    1. Loop through all the products of the each survey and add the counts to your master list of products
    1. Use this new data with the Chart component!
1. Explore different charts. There may be better ways to visualize this data

## Rubric

* Handle survey data correctly between survey page and report page **2pts**
* Separate html page and app js for report page (and index js if using that) **2pts**
* Correctly wiring app and chart components(s) **2pts**
* Chart setup (functionally correct) **2pts**
* Chart style and visualization **2pts**
