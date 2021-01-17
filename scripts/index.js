// const MENS_TSHIRT = [
//   { id: "1", name: "YouTube Organic Cotton T-Shirt - Grey", price: "$14.75" },
//   { id: "2", name: "Inbox - Subtle Actions T-Shirt", price: "$17.05" },
//   { id: "3", name: "Adult Android Superhero T-Shirt", price: "$14.95" },
//   { id: "4", name: "Men's Vintage Heather T-Shirt", price: "$15.80" },
//   { id: "5", name: "Basic Black T-Shirt", price: "$16.90" },
//   { id: "6", name: "Local Guides T-Shirt", price: "$15.70" },
//   { id: "7", name: "Go Gopher T-Shirt in Teal", price: "$10.95" },
//   { id: "8", name: "Android Ringspun T-Shirt - Green", price: "$8.75" },
//   {
//     id: "9",
//     name: "Organic Cotton Android walking with dog T-shirt",
//     price: "$17.25",
//   },
//   { id: "10", name: "Organic Cotton T-Shirt - Red", price: "$14.40" },
//   { id: "11", name: "Unisex Gmail T-Shirt", price: "$15.00" },
//   { id: "12", name: "Android Soccer T-Shirt", price: "$15.20" },
//   { id: "13", name: "Basic Google T-Shirt", price: "$13.30" },
//   { id: "14", name: "Tri-Blend V-Neck Tee", price: "$14.95" },
//   { id: "15", name: "Heather Pocket Tee - Light Blue", price: "$23.30" },
//   { id: "16", name: "Google Now Skyline T-Shirt", price: "$20.20" },
//   { id: "17", name: "Tri-Blend G Logo Men's Polo", price: "$32.70" },
//   { id: "18", name: "Tri-Blend Leisure Shirt", price: "$32.95" },
//   { id: "19", name: "Wise Android T-Shirt", price: "$14.95" },
//   { id: "20", name: "Android Pride T-Shirt", price: "$19.10" },
//   { id: "21", name: "Chrome Unisex T-Shirt", price: "$11.35" },
//   { id: "22", name: "NY City Lights T-Shirt", price: "$18.35" },
//   { id: "23", name: "Omi Tech Tee", price: "$17.00" },
//   { id: "24", name: "YouTube S/S Triblend T-Shirt", price: "$14.90" },
//   { id: "25", name: "Nest T-Shirt", price: "$17.40" },
//   { id: "26", name: "98 Short Sleeve Tee", price: "$14.30" },
//   { id: "27", name: "Cardboard T-Shirt", price: "$14.20" },
//   { id: "28", name: "Short Sleeve Crew Neck Raglan", price: "$13.10" },
//   { id: "29", name: "MTV Unisex Blue T-Shirt", price: "$15.75" },
//   { id: "30", name: "Organic Me-To-We Tee", price: "$23.60" },
//   { id: "31", name: "Tri-Blend Raglan Long Sleeve", price: "$51.20" },
//   { id: "32", name: "Blueprint for a Better Inbox T-Shirt", price: "$14.30" },
//   { id: "33", name: "YouTube Player T-Shirt - Unisex", price: "$17.80" },
//   { id: "34", name: "G Logo White T-Shirt", price: "$13.00" },
//   { id: "35", name: "Android Concert T-Shirt", price: "$13.65" },
//   { id: "36", name: "Men's Bamboo T-Shirt", price: "$20.65" },
//   { id: "37", name: "Android Pay Crew Neck T-Shirt", price: "$19.40" },
//   { id: "38", name: "Google Maps T-Shirt", price: "$18.35" },
//   { id: "39", name: "Est. 98 Baseball Tee", price: "$17.90" },
//   { id: "40", name: "Mountain View T-Shirt", price: "$16.50" },
// ];

const mobileBreakpoint = 766;
var leftDrawerOpen = false;

window.onload = function () {
  handleWindowResize();
  handleWheelScroll();
  toggleLeftDrawer();
};

const handleWindowResize = () => {
  window.addEventListener("resize", () => {
    closeLeftDrawer();
  });
};

const handleWheelScroll = () => {
  window.addEventListener("wheel", (e) => {
    closeLeftDrawer();
    toggleAppNav(e);
    toggleAppHeader(e);
  });
};

const toggleLeftDrawer = () => {
  const hamburgerIcon = document.getElementById("main-drawer-btn");
  const drawer = document.getElementById("left-side-drawer");
  const backdrop = document.getElementById("backdrop");

  document.addEventListener("click", function (event) {
    const clickInsideDrawer = drawer.contains(event.target);
    const clickOnHamburgerIcon = hamburgerIcon.contains(event.target);

    if (!leftDrawerOpen && clickOnHamburgerIcon) {
      drawer.style.left = "0px";
      backdrop.style.visibility = "visible";
      backdrop.style.opacity = "1";
      leftDrawerOpen = true;
    } else if (leftDrawerOpen && !clickInsideDrawer && !clickOnHamburgerIcon) {
      drawer.style.left = "-256px";
      backdrop.style.opacity = "0";
      setTimeout(function () {
        backdrop.style.visibility = "hidden";
      }, 200);
      leftDrawerOpen = false;
    }
  });
};

const closeLeftDrawer = () => {
  if (window.innerWidth > mobileBreakpoint) {
    const drawer = document.getElementById("left-side-drawer");
    const backdrop = document.getElementById("backdrop");

    drawer.style.left = "-256px";
    backdrop.style.opacity = "0";
    setTimeout(() => {
      backdrop.style.visibility = "hidden";
    }, 200);
    leftDrawerOpen = false;
  }
};

const toggleAppNav = (e) => {
  if (window.innerWidth > mobileBreakpoint) {
    const Yaxis = e.deltaY;
    const appNav = document.getElementById("app-nav");

    if (Yaxis < 0) {
      appNav.style.top = "0px";
    } else {
      appNav.style.top = "-66px";
    }
  }
};

const toggleAppHeader = (e) => {
  if (window.innerWidth <= mobileBreakpoint) {
    const Yaxis = e.deltaY;
    const appHeader = document.getElementById("app-header");

    if (Yaxis < 0) {
      appHeader.style.top = "0px";
    } else if (Yaxis > 0) {
      appHeader.style.top = "-64px";
    }
  }
};
