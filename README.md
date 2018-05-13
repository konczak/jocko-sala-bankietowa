Note: Bootstrap CSS isn't required in index.html as it is included via scss file in main.scss
Similar for JS - they are included one by one instead of minified one.

#Color

Light shades      F2F4ED<br/> (fafafa)
Light accent      DF958F<br/>
Main brand color  E83E8C<br/>
Dark accent       C36BA1<br/>
Dark shades       272C48 (1C2331)

#Init

    npm install

    bower install
    
#Docker

Build image

    docker build -t website-sala-bankietowa .

Run container

    docker run -d -p 80:80 --name website-sala-bankietowa website-sala-bankietowa

Open in browser

    http://192.168.99.100/

Remove container

    docker rm -f website-sala-bankietowa
    
Remove image

    docker rmi website-sala-bankietowa

#TODOs

on mobile when display contact phone number make it possible to call it

navbar - background color set to dark-shade
