const movies = [
    {
        name: "Fnaf",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVPivSEOPVmHn_Egmig4GtQdvv4pQiSXqO6_p9D_CyvH63jtoD",
        date: "26/10/2023",
        isReleased: true,
        releaseDate: "26/10/2023",
        price: 20.00,
        ticketsAvailable: 58
    },
    {
        name: "assassinos da lua",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWJpC9gU5KTv6VH2xEwJ6M-NftJBQY82u8IyiuWgb1adhvOcl",
        date: "27/10/2023",
        isReleased: false,
        releaseDate: "26/10/2023",
        price: 20.00,
        ticketsAvailable: 33
    },
    {
        name: "Gal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZ25OgvkhJTBnC9VGdUlaRsT6kbTXSjLZaHPBQdG5LmBIVtx3",
        date: "28/10/2023",
        isReleased: true,
        releaseDate: "27/10/2023",
        price: 20.00,
        ticketsAvailable: 49
    },
    {
        name: "nosso sonho",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHwrRKJzXpL7yEwGjcHYjQSizZsJ2TMDnaA-eCkkFOmE0Ud77",
        date: "29/10/2023",
        isReleased: false,
        releaseDate: "26/10/2023",
        price: 20.00,
        ticketsAvailable: 31
    },
    {
        name: "Jogos Mortais 10",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcToehUaqGYfDY9IrJhzgAKOGefo1bMwy24XtOY9vBW_pek5op8f",
        date: "30/10/2023",
        isReleased: true,
        releaseDate: "26/10/2023",
        price: 20.00,
        ticketsAvailable: 78
    },
    {
        name: "speak with me",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EoX8vv7rux4yd1HPBR5q82SZGer0Qy33Xp1D2q-N_0vFxy7m",
        date: "31/10/2023",
        isReleased: false,
        releaseDate: "26/10/2023",
        price: 20.00,
        ticketsAvailable: 19
    },
    {
        name: "Panico VI",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOQaicZ5YvrE5h9U3MBuadOW_Rl0RCoyk_kb52-i0TBfKBoAW",
        date: "01/11/2023",
        isReleased: true,
        releaseDate: "26/10/2023",
        price: 20.00,
        ticketsAvailable: 58
    },
    {
        name: "Freira 2",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEtpnOnlSI3UkF1Xkf_1pboQcKZ5nvIzhKw6Xqs4d_8xKF6JKN",
        date: "02/11/2023",
        isReleased: true,
        releaseDate: "27/10/2023",
        price: 20.00,
        ticketsAvailable: 26
    },
    {
        name: "Sorria",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpP0uXvUOTCMcvu_CTerznPt6HsWFPOr21zlejvAc5qvp0Qnsb",
        date: "03/11/2023",
        isReleased: false,
        releaseDate: "27/10/2023",
        price: 20.00,
        ticketsAvailable: 34
    },
    {
        name: "Nyad",
        image: "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/09/08/1838007874-nyad-netflix.jpg",
        date: "04/11/2023",
        isReleased: true,
        releaseDate: "27/10/2023",
        price: 20.00,
        ticketsAvailable: 28
    },
    {
        name: "Ecos do além",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBUZQUJyGj1cKq3RAUO2hdXgs75nMMI85VYtrnopgAxviemym",
        date: "26/10/2023",
        isReleased: true,
        releaseDate: "31/10/2023",
        price: 20.00,
        ticketsAvailable: 15
    },
    {
        name: "Dracula",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU_nxEcg9oEBIFmBBGStRpIRswy-WZSiRxHb8c-WyQc874l6bI",
        date: "26/10/2023",
        isReleased: true,
        releaseDate: "26/10/2023",
        price: 20.00,
        ticketsAvailable: 80
    },
];

        const movieList = document.getElementById("movie-list");

        // Adicionar cada filme à lista
        movies.forEach(movie => {
            const card = document.createElement("div");
            card.classList.add("movie-card");

            const image = document.createElement("img");
            image.src = movie.image;
            image.alt = movie.name;
            image.classList.add("movie-image");

            const name = document.createElement("h2");
            name.textContent = movie.name;

            const date = document.createElement("p");
            date.textContent = "Data: " + movie.date;

            const release = document.createElement("p");
            if (movie.isReleased) {
                release.textContent = "Lançado em: " + movie.releaseDate;
            } else {
                release.textContent = "Lançamento em: " + movie.releaseDate;
            }

            const price = document.createElement("p");
            price.textContent = "Preço: R$" + movie.price.toFixed(2);

            const tickets = document.createElement("p");
            tickets.textContent = "Ingressos Disponíveis: " + movie.ticketsAvailable;

            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(date);
            card.appendChild(release);
            card.appendChild(price);
            card.appendChild(tickets);

            movieList.appendChild(card);
        });
