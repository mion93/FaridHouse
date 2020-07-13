

# FARID HOUSE SPA WEBSITE

* This website was created as project for Code Institute as Interactive Front-end Project.
The main goal was representing a simple and elegant Spa Website that showcase the philosophy, the gallery, the team, the treatments and the location.


# UX 

* The website has been build for the clients and for the new customers who want to see the services of the Spa.
I tried to keep it really minimal in order to focus on the 'relax' part, I tried to make it harmonious as possible, so user can even relax by navigating in it.
In my prospective as a guest I would like to see a spa website really clean and simple and that avoids to be confusive.

* As a visitor I would like to see:
- A mobile-friendly website, to be intuitive, that allows to see their philosophy and their services and treatments. 
- A brief description of the company. 
- The services of the company.
- A responsive gallery, that changes size in mobile version, that has to be quick and accessible.
- Who works there? (The team).
- The SOCIAL MEDIA links, so I can contact them or tag the company in my images.
- The Cancellation Policy.
- Which kind of treatments and packages has the company? If the products are displayed, I would like too see a small description, the images and the prices.
- Appealing images, that attract the eye.
- A contact form so I can contact them about my enquiry. 
- Where are the company is located and a Map with the location.

* The color used for the website is #e7baa0 that fits with the concept of the SPA.

* Buttons are made all with the same style to make sure there is constancy.


# FEATURES

Farid House Spa website displays a sticky navbar, a footer, 3 pages (HOME, TREATMENTS AND CONTACT) and one modal(COVID).

* NAVBAR
Simple white coloured navbar that displays the logo of Farid House Spa, the homepage, treatments, COVID Modal and Contact Page. 
Displays also a span "Give yourself relax and wellness." in desktop and mobile version.
On mobile version the Navbar transforms in a hamburger menu.

* FOOTER 
Footer placed at the bottom of the page for appearence with Copyright, Cancellation Policy and Social Links. 
Its background was choosen to fit the style and the colors of the website.

* SCROLL TO TOP BUTTON
Scroll to top button made with Javascript allows users to go to the top of the page.

* HOME
The HOME page is created on the first section with a background image that shows an animation text made with Javascript: 'RELAX AT OUR MASSAGE AND THERAPHY SPA', with a RESERVE button that brings the user to the contact page, so the user can contact to reserve any treatment and check avaiability.
Are also displayed the philosophy of the compan, the services, a responsive carousel gallery and the team.

* COVID MODAL
Due to Coronavirus FARID HOUSE SPA will be closed, so I decided to create a Javascript Modal that shows the Governament advice. 

* TREATMENTS 
To make it simple as possible, Treatments page is divided in two categories, MASSAGES and SPA PACKAGES.
Every treatment and package has his own description and image, by clicking on the name, the price will be displayed. 
 

* CONTACT 
Contact page displays: 
-Contact Form (Using Email.js) for user that would like to send an equiry. When form is sent, an alert will be displayed on the website.
-Locations.
-Next Opening (Using a CountDown with Javascript) shows how many days left for the new opening.
-Contact Number and Email.
-Google Map (Using Google Maps Api) with two marker clusters.

# FEATURES LEFT TO IMPLEMENT

* Form Validation.
* Adding a booking system and cart that allows customers to book their treatment and to make the payments from the website.



# TECHNOLOGIES USED 

* Bootstrap
Used for grid layout, navbar and footer.
* FontAwesome
Used for icons.
* JQUERY
Used for Gallery Carousel, Toggle Animation for the massages/treatments.
* JAVASCRIPT
Used for Homepage Landing Text Animation, COVID-19 Modal, Scroll to Top Button, CountDown days of New Opening Location.
* APIS 
Email.js API used to receive the emails submitted. Added also an alert function that shows that the submission was successful. 
Google Maps API used to display the location and the new spa opening.
* ANIMEJS
Animejs used for landing page text animation.
* W3SCHOOLS 
Used for modal, timer and text animation.



# TESTING 

## Automated Testing 
* Chrome Dev Tools - Test done for Desktop and Mobile Versions.
* HTML Validator https://validator.w3.org/nu/ = 0 Errors
* CSS validator https://www.w3.org/  = 0 Errors 
* SEO = Meta description tag provided. 
* https://gtmetrix.com/
 ![alt text](https://img.techpowerup.org/200710/faridperformance.png)

* Images size reduced. Keept the Hero Landing Page to the original size to maintain the high resolution.


## Manual Testing 

* NAVBAR 
- Each page links to the correct html page = PASS
- LOGO is connected with the Hompage = PASS
- NAVBAR transforms in a Hamburger menu' on mobile friendly devices = PASS
- check that current nav bar link (excluding Brand) is correctly styled and distinguished from the others = PASS

* FOOTER
- Check that every social link take you to the external site = PASS
- Check in Mobile Version if informations are displayed centered and styled correctly = PASS
- Check hover effect of the social links. = PASS


* SCROLL TOP BUTTON
- Check responsiveness = PASS
- Check if the script is working correctly = PASS
- Check hover effect = PASS


* HOME 
- Check Hero Image is displayed correctly = PASS
- Check text animation is working correctly in Desktop/Mobile Versions = PASS
- Check RESERVE button links to contact page = PASS
- Check ABOUT US / SERVICES are responsive = PASS 
- Check Gallery Carousel if it's fluid to navigate and responsive = PASS
- Check Team Hover effect and responsiveness = PASS 


* TREATMENTS 
- Check responsiveness on desktop/mobile devices = PASS
- Check toggle script is working when buttons are pressed = PASS 
- Check informations are correctly displayed = PASS


* COVID MODAL
- Check responsiveness = PASS
- Check informations and style are displayed correctly = PASS
- Check NavBar is connected to Modal for every single page = PASS


* CONTACT 
- Check responsiveness of the form = PASS
- Check Email.js API is working and receiving emails = PASS
- Check if Alert is displayed when Enquiry is sent = PASS
- Check hover effect of SEND ENQUIRY = Pass
- Check informations are displayed correctly = PASS 
- Check COUNTDOWN script is displayed and working = PASS
- Check responsiveness of Google Maps = PASS
- Check Google Maps API is working correctly and displaying Marker Clusters = PASS 



# DEPLOYMENT

For deployment I choose to use GitHub Pages from its GitHub repository.
The following steps were taken:
- From the menu, find Setting page.
- Scroll down to the GitHub Pages section.
- Click on the drop-down menu (None) and select Master Branch.
- When selecting Master Branch the page will be refreshed and the website will be deployed.
- Scroll back to the GitHub Pages in Settings to find the link to the deployed website. It takes approximately 60 seconds to deploy.



# MEDIA

* All the images were provided by allthefreestock.com .
* Logo created with Adobe Photoshop. 



# ONLINE RESOURCES

* Stack Overflow
* W3SCHOOLS
* Wikipedia 