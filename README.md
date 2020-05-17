# Widget Social
You can utilise for you web application...
We insert in your footer.
There are detection for browser (chrome, firefox , internet exploreur).

### class Widget
We declare a class Widget 
###  widgetCSS()
For inject CSS code. 
If we can change position or animation , it's here

### action()
The event is on mouseover and mouseout. If you want you can add event for click and keyboard...

## We display a widget on our page
```
const Social = new Widget();
```
## And we add CSS 
```
const apparence = Social.widgetCSS();
```
## Then create element width id and color
```
const yourNAMEID = Social.action('yourID', 'COLOR');
```
### If you can add element you add in index html
```
<a href="https://URL.com" class="link-social" id="yourID">
   <div class="icon-social"><i class="fontAwesome class"></i></div>
   <div class="label-social">Your text</div>
</a>
```
It's basic and we don't utilise a plug-in for wordpress.



