// document.addEventListener("DOMContentLoaded", function () {
//   var slickSlider = document.querySelector(".collection-grid.slick-slider");

//   if (slickSlider) {
//     // Set initial styles to prevent blinking
//     slickSlider.style.opacity = "0";
//     slickSlider.style.visibility = "hidden";
//     slickSlider.style.transition = "opacity 0.5s ease-in-out"; // Smooth fade-in

//     $(slickSlider).on("init", function () {
//       setTimeout(() => {
//         slickSlider.style.opacity = "1";
//         slickSlider.style.visibility = "visible";
//       }, 100); // Small delay to ensure proper rendering
//     });

//     $(slickSlider).slick({
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       arrows: false,
//       dots: true,
//       infinite: false,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//           },
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     } );

//     // Custom navigation arrows
//     document
//       .querySelector(".leftArrow")
//       ?.addEventListener("click", function () {
//         $(slickSlider).slick("slickPrev");
//       });

//     document
//       .querySelector(".rightArrow")
//       ?.addEventListener("click", function () {
//         $(slickSlider).slick("slickNext");
//       });
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const treatFilter = document.getElementById("treat-filter");
//   const occasionFilter = document.getElementById("occasion-filter");
//   const budgetFilter = document.getElementById("budget-filter");
//   const products = document.querySelectorAll(".product-card-section");
//   const productContainer = document.querySelector(".collection-grid");

//   // Function to filter products based on selected filters
//   function filterProducts() {
//     const treatValue = treatFilter.value.toLowerCase();
//     const occasionValue = occasionFilter.value.toLowerCase();
//     const budgetValue = budgetFilter.value.toLowerCase();

//     let filteredProducts = [];
//     let hasActiveFilter =
//       treatValue !== "all" || occasionValue !== "all" || budgetValue !== "all";

//     products.forEach((product) => {
//       const productTreats = product.dataset.treat
//         ? product.dataset.treat
//             .toLowerCase()
//             .split(",")
//             .map((tag) => tag.trim())
//         : [];
//       const productOccasions = product.dataset.occasion
//         ? product.dataset.occasion
//             .toLowerCase()
//             .split(",")
//             .map((tag) => tag.trim())
//         : [];
//       const productBudgets = product.dataset.budget
//         ? product.dataset.budget
//             .toLowerCase()
//             .split(",")
//             .map((tag) => tag.trim())
//         : [];

//       const matchTreat =
//         treatValue === "all" || productTreats.includes(treatValue);
//       const matchOccasion =
//         occasionValue === "all" || productOccasions.includes(occasionValue);
//       const matchBudget =
//         budgetValue === "all" || productBudgets.includes(budgetValue);

//       if (matchTreat && matchOccasion && matchBudget) {
//         filteredProducts.push(product);
//         product.style.display = "block";
//       } else {
//         product.style.display = "none";
//       }
//     });

//     // Show or hide the Reset option based on whether filters are applied
//     toggleResetOptionVisibility(hasActiveFilter);

//     // Update product layout
//     updateProductDisplay(filteredProducts);
//   }

//   // Function to toggle reset option visibility
//   function toggleResetOptionVisibility(isActive) {
//     const resetOptions = document.querySelectorAll(".reset-option");
//     resetOptions.forEach((option) => {
//       option.style.display = isActive ? "inline-block" : "none";
//     });
//   }

//   // Function to reset filters to their initial state
//   function resetFilters() {
//     treatFilter.value = "all";
//     occasionFilter.value = "all";
//     budgetFilter.value = "all";

//     // Hide the reset option after reset
//     toggleResetOptionVisibility(false);

//     // Reapply the filters with the initial state
//     filterProducts();
//   }

//   // Function to update product display based on filtered products
//   function updateProductDisplay(filteredProducts) {
//     if ($(".collection-grid").hasClass("slick-initialized")) {
//       $(".collection-grid").slick("unslick");
//     }

//     let slidesToShow = 4;
//     if (filteredProducts.length === 1) slidesToShow = 1;
//     if (filteredProducts.length === 2) slidesToShow = 2;
//     if (filteredProducts.length === 3) slidesToShow = 3;

//     $(".collection-grid").slick({
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       infinite: false,
//       arrows: false,
//       dots: true,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: { slidesToShow: 3, slidesToScroll: 3 },
//         },
//         {
//           breakpoint: 768,
//           settings: { slidesToShow: 2, slidesToScroll: 2 },
//         },
//         {
//           breakpoint: 480,
//           settings: { slidesToShow: 1, slidesToScroll: 1 },
//         },
//       ],
//     }, 500);
//   }

//   // Initialize Slick Slider after DOM is ready
//   $(productContainer).on("init", function () {
//     setTimeout(() => {
//       productContainer.style.opacity = "1";
//       productContainer.style.visibility = "visible";
//     }, 100);
//   });

//   $(productContainer).slick({
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     arrows: false,
//     dots: true,
//     infinite: false,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   });

//   // Custom navigation arrows
//   document.querySelector(".leftArrow")?.addEventListener("click", function () {
//     $(productContainer).slick("slickPrev");
//   });

//   document.querySelector(".rightArrow")?.addEventListener("click", function () {
//     $(productContainer).slick("slickNext");
//   });

//   // Add event listeners for filters
//   [treatFilter, occasionFilter, budgetFilter].forEach((filter) =>
//     filter.addEventListener("change", filterProducts)
//   );

//   // Add event listener for reset options
//   const resetOptions = document.querySelectorAll(".reset-option");
//   resetOptions.forEach((resetOption) => {
//     resetOption.addEventListener("click", resetFilters);
//   });

//   // Initialize filtering on page load
//   filterProducts();
// });




// document.addEventListener("DOMContentLoaded", function () {
//   const treatFilter = document.getElementById("treat-filter");
//   const occasionFilter = document.getElementById("occasion-filter");
//   const budgetFilter = document.getElementById("budget-filter");
//   const products = document.querySelectorAll(".product-card-section");
//   const productContainer = document.querySelector(".collection-grid");

//   function filterProducts() {
//     const treatValue = treatFilter?.value.toLowerCase();
//     const occasionValue = occasionFilter?.value.toLowerCase();
//     const budgetValue = budgetFilter?.value.toLowerCase();

//     let hasActiveFilter =
//       treatValue !== "all" || occasionValue !== "all" || budgetValue !== "all";

//     let filteredProducts = Array.from(products).filter((product) => {
//       const productTreats = (product.dataset.treat || "")
//         .toLowerCase()
//         .split(",");
//       const productOccasions = (product.dataset.occasion || "")
//         .toLowerCase()
//         .split(",");
//       const productBudgets = (product.dataset.budget || "")
//         .toLowerCase()
//         .split(",");

//       return (
//         (treatValue === "all" || productTreats.includes(treatValue)) &&
//         (occasionValue === "all" || productOccasions.includes(occasionValue)) &&
//         (budgetValue === "all" || productBudgets.includes(budgetValue))
//       );
//     });

//     products.forEach((product) => {
//       product.style.display = "none";
//     });

//     filteredProducts.forEach((product) => {
//       product.style.display = "block";
//     });

//     toggleResetOptionVisibility(hasActiveFilter);
//     updateProductDisplay(filteredProducts);
//   }

//   function toggleResetOptionVisibility(isActive) {
//     document.querySelectorAll(".reset-option").forEach((option) => {
//       option.style.display = isActive ? "inline-block" : "none";
//     });
//   }

//   function resetFilters() {
//     if (treatFilter) treatFilter.value = "all";
//     if (occasionFilter) occasionFilter.value = "all";
//     if (budgetFilter) budgetFilter.value = "all";

//     // Hide reset option after reset
//     toggleResetOptionVisibility(false);

//     products.forEach((product) => {
//       product.style.display = "block";
//     });

//     // Reset filters and display all products
//     updateProductDisplay(Array.from(products));
//   }

//   function updateProductDisplay(filteredProducts) {
//     if ($(productContainer).hasClass("slick-initialized")) {
//       $(productContainer).slick("unslick");
//     }

//     $(productContainer).empty().append(filteredProducts);

//     let slidesToShow = Math.min(filteredProducts.length, 4);
//     slidesToShow = slidesToShow === 0 ? 1 : slidesToShow;

//     $(productContainer).slick({
//       slidesToShow: slidesToShow,
//       slidesToScroll: slidesToShow,
//       infinite: false,
//       arrows: false,
//       dots: true,
//       responsive: [
//         // { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
//         // { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
//         { breakpoint: 776, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//       ],
//     });
//   }

//   $(productContainer).on("init", function () {
//     setTimeout(() => {
//       productContainer.style.opacity = "1";
//       productContainer.style.visibility = "visible";
//     }, 100);
//   });

//   $(productContainer).slick({
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     arrows: false,
//     dots: true,
//     infinite: false,
//     responsive: [
//     //   { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
//     //   { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   });

//   document.querySelector(".leftArrow")?.addEventListener("click", function () {
//     $(productContainer).slick("slickPrev");
//   });

//   document.querySelector(".rightArrow")?.addEventListener("click", function () {
//     $(productContainer).slick("slickNext");
//   });

//   [treatFilter, occasionFilter, budgetFilter].forEach((filter) =>
//     filter?.addEventListener("change", filterProducts)
//   );

//   document
//     .querySelectorAll(".reset-option")
//     .forEach((resetOption) =>
//       resetOption.addEventListener("click", resetFilters)
//     );

//   // Call filterProducts to display products initially
//   filterProducts();
// });






// document.addEventListener("DOMContentLoaded", function () {
//   const treatFilter = document.getElementById("treat-filter");
//   const occasionFilter = document.getElementById("occasion-filter");
//   const budgetFilter = document.getElementById("budget-filter");
//   const products = document.querySelectorAll(".product-card-section");
//   const productContainer = document.querySelector(".collection-grid");

//   // Function to check if any filter is active
//   function isFilterActive() {
//     const treatValue = treatFilter?.value.toLowerCase();
//     const occasionValue = occasionFilter?.value.toLowerCase();
//     const budgetValue = budgetFilter?.value.toLowerCase();

//     return (
//       treatValue !== "all" || occasionValue !== "all" || budgetValue !== "all"
//     );
//   }

//   // Function to filter products
//   function filterProducts() {
//     const treatValue = treatFilter?.value.toLowerCase();
//     const occasionValue = occasionFilter?.value.toLowerCase();
//     const budgetValue = budgetFilter?.value.toLowerCase();

//     let filteredProducts = Array.from(products).filter((product) => {
//       const productTreats = (product.dataset.treat || "")
//         .toLowerCase()
//         .split(",");
//       const productOccasions = (product.dataset.occasion || "")
//         .toLowerCase()
//         .split(",");
//       const productBudgets = (product.dataset.budget || "")
//         .toLowerCase()
//         .split(",");

//       return (
//         (treatValue === "all" || productTreats.includes(treatValue)) &&
//         (occasionValue === "all" || productOccasions.includes(occasionValue)) &&
//         (budgetValue === "all" || productBudgets.includes(budgetValue))
//       );
//     });

//     // Hide all products and display only filtered products
//     products.forEach((product) => {
//       product.style.display = "none";
//     });

//     filteredProducts.forEach((product) => {
//       product.style.display = "block";
//     });

//     // Toggle reset option visibility based on filters
//     toggleResetOptionVisibility(isFilterActive());
//     updateProductDisplay(filteredProducts);
//   }

//   // Function to toggle the visibility of the reset option
//   function toggleResetOptionVisibility(isActive) {
//     document.querySelectorAll(".reset-option").forEach((option) => {
//       option.style.display = isActive ? "inline-block" : "none";
//     });
//   }

//   // Function to reset the filters
//   function resetFilters() {
//     if (treatFilter) treatFilter.value = "all";
//     if (occasionFilter) occasionFilter.value = "all";
//     if (budgetFilter) budgetFilter.value = "all";

//     // Hide reset option after reset
//     toggleResetOptionVisibility(false);

//     // Reset product display to show all products
//     products.forEach((product) => {
//       product.style.display = "block";
//     });

//     updateProductDisplay(Array.from(products));
//   }

//   // Update the product display after filtering or reset
//   function updateProductDisplay(filteredProducts) {
//     if ($(productContainer).hasClass("slick-initialized")) {
//       $(productContainer).slick("unslick");
//     }

//     $(productContainer).empty().append(filteredProducts);

//     let slidesToShow = Math.min(filteredProducts.length, 4);
//     slidesToShow = slidesToShow === 0 ? 1 : slidesToShow;

//     $(productContainer).slick({
//       slidesToShow: slidesToShow,
//       slidesToScroll: slidesToShow,
//       infinite: false,
//       arrows: false,
//       dots: true,
//       responsive: [
//         { breakpoint: 776, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//       ],
//     });
//   }

//   // Initialize slick carousel
//   $(productContainer).on("init", function () {
//     setTimeout(() => {
//       productContainer.style.opacity = "1";
//       productContainer.style.visibility = "visible";
//     }, 100);
//   });

//   $(productContainer).slick({
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     arrows: false,
//     dots: true,
//     infinite: false,
//     responsive: [
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   });

//   document.querySelector(".leftArrow")?.addEventListener("click", function () {
//     $(productContainer).slick("slickPrev");
//   });

//   document.querySelector(".rightArrow")?.addEventListener("click", function () {
//     $(productContainer).slick("slickNext");
//   });

//   // Attach filter change event listeners
//   [treatFilter, occasionFilter, budgetFilter].forEach((filter) =>
//     filter?.addEventListener("change", filterProducts)
//   );

//   // Attach reset option click event listener
//   document
//     .querySelectorAll(".reset-option")
//     .forEach((resetOption) =>
//       resetOption.addEventListener("click", resetFilters)
//     );

//   // Call filterProducts to display products initially
//   filterProducts();
// });





// document.addEventListener("DOMContentLoaded", function () {
//   const treatFilter = document.getElementById("treat-filter");
//   const occasionFilter = document.getElementById("occasion-filter");
//   const budgetFilter = document.getElementById("budget-filter");
//   const products = document.querySelectorAll(".product-card-section");
//   const productContainer = document.querySelector(".collection-grid");

//   // Function to check if any filter is active
//   function isFilterActive() {
//     const treatValue = treatFilter?.value.toLowerCase();
//     const occasionValue = occasionFilter?.value.toLowerCase();
//     const budgetValue = budgetFilter?.value.toLowerCase();

//     return (
//       treatValue !== "all" || occasionValue !== "all" || budgetValue !== "all"
//     );
//   }

//   // Function to filter products
//   function filterProducts() {
//     const treatValue = treatFilter?.value.toLowerCase();
//     const occasionValue = occasionFilter?.value.toLowerCase();
//     const budgetValue = budgetFilter?.value.toLowerCase();

//     let filteredProducts = Array.from(products).filter((product) => {
//       const productTreats = (product.dataset.treat || "")
//         .toLowerCase()
//         .split(",");
//       const productOccasions = (product.dataset.occasion || "")
//         .toLowerCase()
//         .split(",");
//       const productBudgets = (product.dataset.budget || "")
//         .toLowerCase()
//         .split(",");

//       return (
//         (treatValue === "all" || productTreats.includes(treatValue)) &&
//         (occasionValue === "all" || productOccasions.includes(occasionValue)) &&
//         (budgetValue === "all" || productBudgets.includes(budgetValue))
//       );
//     });

//     // Hide all products and display only filtered products
//     products.forEach((product) => {
//       product.style.display = "none";
//     });

//     filteredProducts.forEach((product) => {
//       product.style.display = "block";
//     });

//     // Update product display after filtering
//     updateProductDisplay(filteredProducts);
//   }

//   // Update the product display after filtering
//   function updateProductDisplay(filteredProducts) {
//     if ($(productContainer).hasClass("slick-initialized")) {
//       $(productContainer).slick("unslick");
//     }

//     $(productContainer).empty().append(filteredProducts);

//     let slidesToShow = Math.min(filteredProducts.length, 4);
//     slidesToShow = slidesToShow === 0 ? 1 : slidesToShow;

//     $(productContainer).slick({
//       slidesToShow: slidesToShow,
//       slidesToScroll: slidesToShow,
//       infinite: false,
//       arrows: false,
//       dots: true,
//       responsive: [
//         { breakpoint: 776, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//       ],
//     });
//   }

//   // Initialize slick carousel
//   $(productContainer).on("init", function () {
//     setTimeout(() => {
//       productContainer.style.opacity = "1";
//       productContainer.style.visibility = "visible";
//     }, 100);
//   });

//   $(productContainer).slick({
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     arrows: false,
//     dots: true,
//     infinite: false,
//     responsive: [
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   });


//   // Attach filter change event listeners only if filters exist
//   if (treatFilter) {
//     treatFilter.addEventListener("change", filterProducts);
//   }
//   if (occasionFilter) {
//     occasionFilter.addEventListener("change", filterProducts);
//   }
//   if (budgetFilter) {
//     budgetFilter.addEventListener("change", filterProducts);
//   }

//   // Call filterProducts to display products initially
//   filterProducts();
// });





