// const timeConversion = (s: string): string => {
//     const unit = s.at(-2);
//     let res = "";

//     let items = s.split(":");
//     items;

//     if (unit === "P") {
//         let hours = parseInt(items[0]);
//         hours += 12;

//         if (hours === 24) hours = 0;

//         items[0] = String(hours);
//     } else if (unit === "A") {
//         let hours = parseInt(items[0]);

//         if (hours === 12) hours = 0;

//         items[0] = String(hours);
//     }

//     if (Number(items[0]) < 10) items[0] = `0${items[0]}`;
//     res = items.join(":").replace(`${unit}M`, "");
//     console.log(res);
//     return res;
// };

const timeConversion = (s: string): string => {
    let hours = Number(s.slice(0, 2));
    hours;
    let unit = s.slice(8, s.length);
    unit;

    if (unit === "PM") {
    }

    return "";
};

timeConversion("12:45:54PM");
