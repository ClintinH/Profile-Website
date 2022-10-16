const paginationNumbers = document.getElementById("pagination-numbers");

const paginationPanel = document.querySelector(".flexbox-leftPanel");
const listItems = paginationPanel.querySelectorAll("img");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 5;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  currentPage === 1 ? disableButton(prevButton) : enableButton(prevButton);
  pageCount === currentPage
    ? disableButton(nextButton)
    : enableButton(nextButton);
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

setCurrentPage(1);

prevButton.addEventListener("click", () => {
  setCurrentPage(currentPage - 1);
});

nextButton.addEventListener("click", () => {
  setCurrentPage(currentPage + 1);
});
