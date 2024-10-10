interface Article {
    name: string;
    price: number;
    green: boolean;
    vendor: string;
    link?: string;
}

export const articles: Article[] = [
    {
        name: "M8 Threaded Rod 2 m",
        price: 100,
        green: false,
        vendor: "SP Road"
    },
    {
        name: "1.8 cm wooden sheets",
        price: 400,
        green: true,
        vendor: "B M Manohara"
    },
    {
        name: "Residual Plywood",
        price: 300,
        green: true,
        vendor: "B M Manohara"
    },
    {
        name: "M8 Lead High Quality Rod",
        price: 350,
        green: false,
        vendor: "SP Road"
    },
    {
        name: "Smooth rod kit",
        price: 330,
        green: false,
        vendor: "Robu",
        link: "https://robu.in/product/1000-mm-long-chrome-plated-smooth-rod-diameter-8-mm/"
    },
    {
        name: "Flexible motor connector x4",
        price: 25,
        green: false,
        vendor: "Robocraze"
    },
    {
        name: "NEMA 17 Stepper Motor x5",
        price: 474 * 5,
        green: true,
        vendor: "Robocraze"
    },
    {
        name: "Mk2b Heated Bed",
        price: 524,
        green: false,
        vendor: "Robocraze"
    },
    {
        name: "E3d (clone) hotend",
        price: 500,
        green: false,
        vendor: "Robocraze"
    },
    {
        name: "Arduino Mega",
        price: 1000,
        green: true,
        vendor: "Team dhRuVa",
    },
    {
        name: "Ramp 1.4 Control Board",
        price: 262,
        green: false,
        vendor: "Robocraze"
    },
    {
        name: "A4988 Stepper Motor Driver x4",
        price: 74 * 4,
        green: false,
        vendor: "Robocraze"
    },
    {
        name: "Endstops x3",
        price: 40 * 3,
        green: false,
        vendor: "Robocraze"
    },
    {
        name: "All metal extruder kit",
        price: 300,
        green: false,
        vendor: "Robocraze"
    }
]
