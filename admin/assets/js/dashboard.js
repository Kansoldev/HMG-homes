$(function () {
    ("use strict");
    // Morris bar chart
    Morris.Bar({
        element: "morris-bar-chart",
        data: [
            {
                y: "2006",
                Sale: 100,
                Rent: 90,
                c: 60,
            },
            {
                y: "2007",
                Sale: 75,
                Rent: 65,
                c: 40,
            },
            {
                y: "2008",
                Sale: 50,
                Rent: 40,
                c: 30,
            },
            {
                y: "2009",
                Sale: 75,
                Rent: 65,
                c: 40,
            },
            {
                y: "2010",
                Sale: 50,
                Rent: 40,
                c: 30,
            },
            {
                y: "2011",
                Sale: 75,
                Rent: 65,
                c: 40,
            },
            {
                y: "2012",
                Sale: 75,
                Rent: 65,
                c: 40,
            },
            {
                y: "2013",
                Sale: 100,
                Rent: 90,
                c: 40,
            },
        ],
        xkey: "y",
        ykeys: ["Sale", "Rent", "c"],
        labels: ["For-sale", "For-rent", "All"],
        barColors: ["#b8edf0", "#b4c1d7", "#fcc9ba"],
        hideHover: "auto",
        gridLineColor: "#eef0f2",
        resize: true,
    });
});
