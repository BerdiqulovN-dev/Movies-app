"use strict";

// {
//     "title": "Patton Oswalt: Annihilation",
//     "year": 2017,
//     "categories": ["Uncategorized"],
//     "imdbId": "tt7026230",
//     "imdbRating": 7.4,
//     "runtime": 66,
//     "language": "English",
//     "youtubeId": "4hZi5QaMBFc",
//     "summary": "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
//     "smallThumbnail": "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
//     "bigThumbnail": "http://i3.ytimg.com/vi/4hZi5QaMBFc/maxresdefault.jpg"
// }

movies.splice(1000);

// ============================= NORMALIZE ALL MOVIES =========================//

let allMovies = movies.map((item) => {
	return {
		id: item.imdbId,
		year: item.year,
		category: item.categories,
		rating: item.imdbRating,
		lang: item.language,
		link: `https://youtube.com/embed/${item.youtubeId}`,
		title: item.title,
		summary: item.summary,
		maxImg: item.bigThumbanil,
		minImg: item.smallThumbnail,
		time: `${Math.trunc(item.runtime / 60)} soat ${item.runtime % 60} min`,
	};
});

// console.log(allMovies);

// ============================= NORMALIZE ALL MOVIES END =========================//

function renderUi(array) {
	array.forEach((item) => {
		const card = createElement(
			"div",
			"card",
			`
       <div class="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light">
            <img src="${item.minImg}" class="img-fluid w-100"/>
            <a href="#!">
               <div class="mask"></div>  
            </a>
          </div>
          <div class="card-body position-relative">
            <h5 class="card-title  position-absolute">${item.title}</h5>
            <span class="card-span d-flex align-items-center justify-content-between">
                <p class="card-time">${item.time}</p>
                <span class="card-span-rating d-flex align-items-center gap-2 mb-3">
                  <img src="./images/star.jpg" alt="" class="star" width="20px">
                  <p class="card-text">Rating: ${item.rating}</p>
                </span>
            </span>
            <span class="card-span d-flex justify-content-between">
                <p class="card-text">${item.year} y. </p>
                <p class="card-text">${item.lang}</p>
            </span>
            <p class="card-text">${item.category}</p>
            <a href="${item.link}" class="btn btn-primary ">watch movie</a>
       </div>
    `,
		);

		$(".wrapper").append(card);
	});
}

renderUi(allMovies);

let elSelect = document.querySelector(".elSelect");
let selectArr2 = [];

allMovies.forEach((item) => {
	let elOption = document.createElement("option");
	const arr = item.category;
	// console.log(arr);
	arr.forEach((item) => {
		if (!selectArr2.includes(item)) {
			selectArr2.push(item);
			// console.log(selectArr2);
			for (let i = 0; i < selectArr2.length; i++) {
				elOption.textContent = selectArr2[i];
				elSelect.append(elOption);
			}
		}
	});
});

let wrapper = document.querySelector(".wrapper");

elSelect.addEventListener("change", (evt) => {
	evt.preventDefault();
	let value = evt.target.value;
	wrapper.innerHTML = "";
	if (value == "all") {
		renderUi(allMovies);
		search(allMovies);
	} else {
		const newItem = allMovies.filter((item) => {
			return value == item.category;
		});
		renderUi(newItem);
		search(newItem);
	}
});

let elSearch = document.querySelectorAll(".search");
function search(array) {
	elSearch.addEventListener("keyup", (evt) => {
		evt.preventDefault();
		let value = evt.target.value;
		wrapper.innerHTML = "";
		const newItem = array.filter((item) => {
			return item.title.includes(value);
		});
		renderUi(newItem);
	});
}
search(allMovies);



function rating(array) {
	elSearch.addEventListener("keyup", (evt) => {
		evt.preventDefault();
		let value = evt.target.value;
		wrapper.innerHTML = "";
		const newItem = array.filter((item) => {
			return item.title.includes(value);
		});
		renderUi(newItem);
	});
}