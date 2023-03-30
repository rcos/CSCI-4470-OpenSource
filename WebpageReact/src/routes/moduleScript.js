/* Simple script for collapsible buttons that displays
 * the list of links for each module if a button is clicked
 */
var modules = document.getElementsByClassName("collapsible");
for (var i = 0; i < modules.length; i++) {
  modules[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    // if clicked, each button content's maxHeight switches
    // between 0 and the necessary height + padding to display the links
    content.style.maxHeight = (content.style.maxHeight) ? null : content.scrollHeight + "px";
  });
}