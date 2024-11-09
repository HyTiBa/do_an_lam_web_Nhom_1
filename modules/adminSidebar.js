const adminNavbar = document.querySelector(".admin-navbar ul")
import { adminNavbarLinks } from "./informationalObjects.js"

export function adminSidebarIconDisplay(){
    
    adminNavbarLinks.forEach((item) => {
        adminNavbar.innerHTML += `
   <li class="admin-navbar-item">
          <a page="${item.page}" class="pageButtonLink admin-navbar-link">
          ${item.icon}
            <span class="link-text">${item.text}</span>
          </a>
        </li>
        `;
      });
}