
export function loadContact(){
    const content = document.querySelector('#content');
    const contactContainer = document.createElement('div');
    const header = document.createElement('h1');
    const contactDetails = document.createElement('ul');
    const email = document.createElement('li');
    const phone = document.createElement('li');
    const address = document.createElement('li');

    contactContainer.id = 'contact-container';
    header.id = 'contact-header';
    contactDetails.id = 'contact-details';

    header.textContent = 'Contact us!';
    email.textContent = 'example_email@yahoo.com';
    phone.textContent = '123-456-7890';
    address.textContent = '123 mapleWood dr, CandyLand, America';

    contactDetails.append(email);
    contactDetails.append(phone);
    contactDetails.append(address);

    contactContainer.append(header);
    contactContainer.append(contactDetails);
    content.append(contactContainer);
}