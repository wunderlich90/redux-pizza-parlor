TODO
[x] create 4 component files
    [x] page one to select pizzas
    [x] page 2 to display customer form
    [x] page 3 to display checkout
    [x] page 4 to display admin table

[ ] Page 1
    [ ]axios GET to display pizzas
        [ ] use a dispatch to store pizza info in store
    [ ] need add button (conditional remove button)
        [ ] only add one of each pizza
        [ ] should add item to cart
        [ ] if remove button is clicked it should subtract item from cart
    [ ] display total price in upper right corner
    [ ] create `Next` button
        [ ] should navigate to page 2
        [ ] use react-router-dom

[x] Page 2
    [x] Need a form to store user info
    [x] Next button
        [x] should navigate to page 3
        [x] dispatch user info to send to page 3 and 4

[ ] Page 3
    [x] a section on the top of the page that 
        displays user info and delivery choice
        [x] info is pulled from page 2
    [ ] needs a table
        [ ] displays pizza name
        [ ] displays pizza cost
        [ ] pulls data fropm the store
    [ ] separate section to display order total
    [ ] checkout button
        [ ] should POST to the DB
        [ ] show an order confirmation (alert?)
        [ ] should clear the cart
        [ ] should navigate user back to page 1
        [ ] should dsend data to the Admin page (page 4)

[ ] Page 4
    [ ] needs a table
        [ ] display the following:
            [ ] Name
            [ ] Time Order PLaced
            [ ] Type
            [ ] Cost
    [ ] should not be visible from nav menu


