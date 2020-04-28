# zedland-hotels

////////////////////////////////////////////////////////////////////////
1. At least two examples of device integration (e.g. phone, email, SMS, etc.).
(5%)
Call, SMS and Email
Location: contact.html

<div data-role="content" class="center">
      <h2>Call:</h2>
      <a href="tel:+7810183041" class="ui-btn ui-icon-phone à
ui-btn-icon-left ui-corner-all ui-btn-icon-notext"></a>
      <br>
      <h2>Text: </h2>
      <a href="sms://+7551876198" class="ui-btn ui-icon-comment
      ui-btn-icon-left ui-corner-all ui-btn-icon-notext"></a>
      <br>
      <h2>By Email:</h2>
      <a href="mailto:zendland@example.com" class="ui-btn ui-icon-mail
      ui-btn-icon-left ui-corner-all ui-btn-icon-notext"></a>
      <br>
      <h2>Office Location:</h2>
      <p>4th Floor, Zedland Univerity, London SW15 3TG</p>
    </div>

//////////////////////////////////////////////////////////////////////////////
2. At least one example of page content presented using a jQM Collapsible Set.
(5%)
The query for the Accomodation queries are collapsible

Location: index.html
        <div data-role="collapsible">
            <h1>Query Accomodation</h1>
            <a href="#view_room_page">
            <button class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-arrow-r">
            View Room
                </button>
            </a>
            <button class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-mail">I'm Interested</button>
            <button class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-tag">Reserve</button>
            <button class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-heart">Save</button>
        </div>

/////////////////////////////////////////////////////////////////////////////
3. A registration form. The form should be built along jQuery Mobile/mobile
application guidelines. It should have the following fields: Student No., First
Name, Last Name, Programme (from a list of programmes), Start Date,
Requires (e.g. house, flat, room). Field controls should be appropriate for the
data. The form must work properly (e.g. tab order, etc.), but you are not
required to implement full validation or programmatic form submission (e.g.
PHP). The registration form should be located in the correct position within the
application. (15%)

Registration form available at id="register_page"

The registration for data is also being set on to the local storage.


/////////////////////////////////////////////////////////////////////////////
4. You should generate an appropriate colour swatch using ThemeRoller, and
apply that swatch to your application (Ideally, the swatch should implement the
colours you used in your original design). You may apply the swatch on a pageby-page basis. Howvever, full marks will only be given if you apply the swatch
at global level, by changing the framework default configuration. (15%) 

Themeroller styles located at: './css/theme-roller.css/'

/////////////////////////////////////////////////////////////////////////////
5. Advanced Programming. (36%)
a) Local Storage (24%)

Local storage available in main.js

b) Physical Events (12%)

Events are on main.js

Tried to dynamically create the Pop Up divs via jQuery strings, and using the JSON file. But somehow is not working. Had to hard code the Pop Up Divs in the HTML
