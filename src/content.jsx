import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import PopupFilter from "./popupFilter.jsx";

const thColor = indigo[50];
const useStyles = makeStyles({
  base: {
    maxWidth: 900,
    margin: "auto",
  },
  table: {
    maxWidth: 500,
    margin: "40px auto 50px auto",
  },
  tableHead: {
    fontWeight: "bold",
    backgroundColor: thColor,
  },
  textField: {
    margin: "30px 0 0 70px",
  },
  filterListIcon: {
    verticalAlign: "middle",
    marginLeft: "3px",
  },
});

function createData(book, name, brand, location, sales, catagory) {
  return { book, name, brand, location, sales, catagory };
}

// ROW DATA BELOW
// ROW DATA BELOW
// ROW DATA BELOW
// ROW DATA >
// ROW DATA >>>
// ROW DATA >>>>>
// >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const rows = [
  // AMERICINN BY WYNDHAM FISHERS INDIANAPOLIS, IN
  createData(
    <a
      href="https://www.wyndhamhotels.com/americinn/fishers-indiana/americinn-hotel-and-suites-fishers-indianapolis/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="AmericInn by Wyndham Fishers Indianapolis"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/aa/us/in/fishers/51929/51929_exterior_day_2.jpg?downsize=1200:*"
        width="100rem"
      ></img>
    </a>,
    // HOTEL BRAND
    "AmericInn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Fishers, Indiana",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // AMERICINN BY WYNDHAM KEARNEY, NE
  createData(
    <a
      href="https://www.wyndhamhotels.com/americinn/kearney-nebraska/americinn-lodge-and-suites-kearney/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="AmericInn by Wyndham Kearney"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/aa/us/ne/kearney/52021/52021_exterior_day_1.jpg?downsize=1200:*"
        width="100rem"
      ></img>
    </a>,
    // HOTEL BRAND
    "AmericInn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Kearney, Nebraska",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // AMERICINN BY WYNDHAM OMAHA, NE
  createData(
    <a
      href="https://www.wyndhamhotels.com/americinn/omaha-nebraska/americinn-hotel-and-suites-omaha/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="AmericInn by Wyndham Omaha"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/aa/us/ne/omaha/52024/52024_lobby_view_2.jpg?downsize=1200:*"
        width="100rem"
      ></img>
    </a>,
    // HOTEL BRAND
    "AmericInn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Omaha, Nebraska",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // AMERICINN BY WYNDHAM WORTHINGTON, MN
  createData(
    <a
      href="https://www.wyndhamhotels.com/americinn/worthington-minnesota/americinn-lodge-and-suites-worthington/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="AmericInn by Wyndham Worthington"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/aa/us/mn/worthington/52007/52007_exterior_day_1.jpg?crop=3000:2000;*,*&downsize=1200:*"
        width="100rem"
      ></img>
    </a>,
    // HOTEL BRAND
    "AmericInn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Worthington, Minnesota",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // AVID (MEDICAL DISTRICT) SOUTH TULSA, OK
  createData(
    <a
      href="https://www.ihg.com/avidhotels/hotels/us/en/tulsa/tulav/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="avid hotel Tulsa South - Medical District"
        src="https://digital.ihg.com/is/image/ihg/avid-hotels-tulsa-6039167954-2x1?wid=1024&hei=512&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100rem"
      ></img>
    </a>,
    // HOTEL BRAND
    "avid",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Tulsa, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // AVID OKC AIRPORT
  createData(
    <a
      href="https://www.ihg.com/avidhotels/hotels/us/en/oklahoma-city/okcam/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="avid hotel Oklahoma City Airport"
        src="https://digital.ihg.com/is/image/ihg/avid-hotels-oklahoma-city-6173642516-2x1?wid=1024&hei=512&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100rem"
      ></img>
    </a>,
    // HOTEL BRAND
    "avid",
    // FRANCHISE
    "IHG",
    // LOCATION
    "OKC Airport, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // AVID QUAIL SPRINGS MALL OKLAHOMA CITY, OK
  createData(
    <a
      href="https://www.ihg.com/avidhotels/hotels/us/en/oklahoma-city/okcav/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="avid hotel Oklahoma City - Quail Springs"
        src="https://digital.ihg.com/is/image/ihg/avid-hotels-oklahoma-city-5639357418-2x1?wid=1024&hei=512&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100rem"
      ></img>
    </a>,
    // HOTEL BRAND
    "avid",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Oklahoma City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // BAYMONT BY WYNDHAM DAVENPORT, IA
  createData(
    <a
      href="https://www.wyndhamhotels.com/baymont/davenport-iowa/baymont-inn-and-suites-davenport/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Baymont by Wyndham Davenport"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/bu/us/ia/davenport/18094/18094_exterior_view_2.jpg?downsize=1200:*"
        width="100rem"
      ></img>
    </a>,
    // HOTEL BRAND
    "Baymont",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Davenport, Iowa",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // BAYMONT BY WYNDHAM FT SMITH, AR
  createData(
    <a
      href="https://www.wyndhamhotels.com/baymont/fort-smith-arkansas/baymont-inn-and-suites-fort-smith/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Baymont by Wyndham Fort Smith"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/bu/us/ar/fort-smith/18096/18096_lobby_view_2.jpg?downsize=1200:*"
        width="100rem"
      ></img>
    </a>,
    // HOTEL BRAND
    "Baymont",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Fort Smith, Arkansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // BAYMONT BY WYNDHAM NORMAL BLOOMINGTON, IL
  createData(
    <a
      href="https://www.wyndhamhotels.com/baymont/normal-illinois/baymont-inn-and-suites-normal-bloomington/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Baymont by Wyndham Normal"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/bu/us/il/normal/46045/46045_exterior_day_4.jpg?downsize=1200:*"
        width="100rem"
      ></img>
    </a>,
    // HOTEL BRAND
    "Baymont",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Normal, Illinois",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // CANDLEWOOD SUITES (EAST MERRIL ROAD) JACKSONVILLE, FL
  createData(
    <a
      href="https://www.ihg.com/candlewood/hotels/us/en/jacksonville/jaxqt/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Candlewood Suites Jacksonville East Merril Road"
        src="https://digital.ihg.com/is/image/ihg/candlewood-suites-jacksonville-5315040978-2x1?wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Candlewood Suites",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Jacksonville, Florida",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "EXTENDED"
  ),
  // CANDLEWOOD SUITES MOORE, OK
  createData(
    <a
      href="https://www.ihg.com/candlewood/hotels/us/en/moore/okcnm/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Candlewood Suites Oklahoma City South - Moore"
        src="https://digital.ihg.com/is/image/ihg/candlewood-suites-jacksonville-5315040978-2x1?wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Candlewood Suites",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Moore, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "EXTENDED"
  ),
  // CANDLEWOOD SUITES OWASSO, OK
  createData(
    <a
      href="https://www.ihg.com/candlewood/hotels/us/en/owasso/owacw/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Candlewood Suites Owasso"
        src="https://digital.ihg.com/is/image/ihg/candlewood-suites-owasso-3977747893-2x1?wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Candlewood Suites",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Owasso, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "EXTENDED"
  ),
  // COMFORT INN (MIDTOWN) TULSA, OK
  createData(
    <a
      href="https://www.choicehotels.com/oklahoma/tulsa/comfort-inn-hotels/ok238"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn Midtown"
        src="https://www.choicehotels.com/hotelmedia/US/OK/tulsa/OK238/1280/ok238lobby2_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Tulsa, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN & SUITES (NEAR MEDICAL CENTER) SAN ANTONIO, TX
  createData(
    <a
      href="https://www.choicehotels.com/texas/san-antonio/comfort-inn-hotels/txa49"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn & Suites Near Medical Center"
        src="https://www.choicehotels.com/hotelmedia/US/TX/san-antonio/TXA49/1280/TXA49Exterior02_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "San Antonio, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN & SUITES (RT 66) TULSA, OK
  createData(
    <a
      href="https://www.choicehotels.com/oklahoma/tulsa/comfort-inn-hotels/ok254"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn & Suites Tulsa I-44 West - Rt 66"
        src="https://www.choicehotels.com/hotelmedia/US/OK/tulsa/OK254/1280/LobbyInterior2.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Tulsa, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN & SUITES LEES SUMMIT, MO
  createData(
    <a
      href="https://www.choicehotels.com/missouri/lees-summit/comfort-inn-hotels/mo188"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn & Suites Lees Summit - Kansas City"
        src="https://www.choicehotels.com/hotelmedia/US/MO/lees-summit/MO188/1280/MO188exterior2_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Lees Summit, Missouri",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN & SUITES NORMAN, OK
  createData(
    <a
      href="https://choicehotels.com/oklahoma/norman/comfort-inn-hotels/ok154"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn & Suites Norman Near University"
        src="https://www.choicehotels.com/hotelmedia/US/OK/norman/OK154/1280/ok154exterior01_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Norman, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN & SUITES OMAHA, NE
  createData(
    <a
      href="https://www.choicehotels.com/nebraska/omaha/comfort-inn-hotels/ne090"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn & Suites Omaha Central"
        src="https://www.choicehotels.com/hotelmedia/US/NE/omaha/NE090/1280/NE090restaurant1_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Omaha, Nebraska",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN & SUITES PAULS VALLEY, OK
  createData(
    <a
      href="https://www.choicehotels.com/oklahoma/pauls-valley/comfort-inn-hotels/ok131"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn & Suites Pauls Valley - City Lake"
        src="https://www.choicehotels.com/hotelmedia/US/OK/pauls-valley/OK131/1280/OK131lobby2_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Pauls Valley, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN & SUITES PONCA CITY, OK
  createData(
    <a
      href="https://www.choicehotels.com/oklahoma/ponca-city/comfort-inn-hotels/ok137"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn & Suites Ponca City Near Marland Mansion"
        src="https://www.choicehotels.com/hotelmedia/US/OK/ponca-city/OK137/1280/OK137lobby1_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Ponca City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN & SUITES QUAIL SPRINGS OKLAHOMA CITY, OK
  createData(
    <a
      href="https://www.choicehotels.com/oklahoma/oklahoma-city/comfort-inn-hotels/ok147"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn & Suites Quail Springs"
        src="https://www.choicehotels.com/hotelmedia/US/OK/oklahoma-city/OK147/1280/OK147lobby1_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Oklahoma City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN & SUITES SAN MARCOS, TX
  createData(
    <a
      href="https://www.choicehotels.com/texas/san-marcos/comfort-inn-hotels/txe27"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="COMFORT INN & SUITES SAN MARCOS, TX"
        src="https://www.choicehotels.com/hotelmedia/US/TX/san-marcos/TXE27/1280/Exterior1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "San Marcos Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN & SUITES SHAWNEE, OK
  createData(
    <a
      href="https://www.choicehotels.com/oklahoma/shawnee/comfort-inn-hotels/ok158"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn & Suites Shawnee North Near I-40"
        src="https://www.choicehotels.com/hotelmedia/US/OK/shawnee/OK158/1280/Exterior1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Shawnee, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN & SUITES WEATHERFORD, OK
  createData(
    <a
      href="https://www.choicehotels.com/oklahoma/weatherford/comfort-inn-hotels/ok129"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="COMFORT INN & SUITES WEATHERFORD, OK"
        src="https://www.choicehotels.com/hotelmedia/US/OK/weatherford/OK129/1280/LobbyInterior2.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Weatherford, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN GRISWOLD, CT
  createData(
    <a
      href="https://www.choicehotels.com/connecticut/griswold/comfort-inn-hotels/ct158"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="COMFORT INN GRISWOLD, CT"
        src="https://www.choicehotels.com/hotelmedia/US/CT/griswold/CT158/1280/ct158lobby2_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Griswold, Connecticut",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN INDIANAPOLIS, IN
  createData(
    <a
      href="https://www.choicehotels.com/indiana/indianapolis/comfort-inn-hotels/in372"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn Indianapolis North - Carmel"
        src="https://www.choicehotels.com/hotelmedia/US/IN/indianapolis/IN372/1280/IN372Lobby02_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Indianapolis, Indiana",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN LEES SUMMIT, MO
  createData(
    <a
      href="https://www.choicehotels.com/missouri/lees-summit/comfort-inn-hotels/mo321"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn Lees Summit @ Hwy 50 & Hwy 291"
        src="https://www.choicehotels.com/hotelmedia/US/MO/lees-summit/MO321/1280/LobbyInterior1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Lees Summit, Missouri",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN SUN CITY CENTER, FL
  createData(
    <a
      href="https://www.choicehotels.com/florida/sun-city-center/comfort-inn-hotels/fl303"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn Sun City Center-Tamps South"
        src="https://www.choicehotels.com/hotelmedia/US/FL/sun-city-center/FL303/1280/FL303pool1_2.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Tampa, Florida",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT INN WICHITA FALLS, TX
  createData(
    <a
      href="https://www.choicehotels.com/texas/wichita-falls/comfort-inn-hotels/txe81"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Inn Wichita Falls North"
        src="https://www.choicehotels.com/hotelmedia/US/TX/wichita-falls/TXE81/1280/TXE81Lobby2_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Wichita Falls, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT SUITES (BRANDON) TAMPA, FL
  createData(
    <a
      href="https://www.choicehotels.com/florida/tampa/comfort-suites-hotels/fl014"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Suites Tampa - Brandon"
        src="https://www.choicehotels.com/hotelmedia/US/FL/tampa/FL014/1280/BusinessCenter1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Suites",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Tampa, Florida",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT SUITES BASTROP, TX
  createData(
    <a
      href="https://www.choicehotels.com/texas/bastrop/comfort-suites-hotels/txe32"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="COMFORT SUITES BASTROP, TX"
        src="https://www.choicehotels.com/hotelmedia/US/TX/bastrop/TXE32/1280/LobbyInterior3.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Suites",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Bastrop, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT SUITES FAIRVIEW HEIGHTS, IL
  createData(
    <a
      href="https://www.choicehotels.com/illinois/fairview-heights/comfort-suites-hotels/il244"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="COMFORT SUITES FAIRVIEW HEIGHTS, IL"
        src="https://www.choicehotels.com/hotelmedia/US/IL/fairview-heights/IL244/1280/il244lobby3_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Suites",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Fairview Heights, Illinois",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT SUITES GEORGETOWN, TX
  createData(
    <a
      href="https://www.choicehotels.com/texas/georgetown/comfort-suites-hotels/tx819"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="COMFORT SUITES GEORGETOWN, TX"
        src="https://www.choicehotels.com/hotelmedia/US/TX/georgetown/TX819/1280/tx819exterior2_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Suites",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Georgetown, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT SUITES OKC AIRPORT OKLAHOMA CITY, OK
  createData(
    <a
      href="https://www.choicehotels.com/oklahoma/oklahoma-city/comfort-suites-hotels/ok259"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Suites Airport On Meridian"
        src="https://www.choicehotels.com/hotelmedia/US/OK/oklahoma-city/OK259/1280/OK259Lobby1_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Suites",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "OKC Airport, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT SUITES SAINT CHARLES, MO
  createData(
    <a
      href="https://www.choicehotels.com/missouri/saint-charles/comfort-suites-hotels/mo131"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Suites St Charles-St Louis"
        src="https://www.choicehotels.com/hotelmedia/US/MO/saint-charles/MO131/1280/MO131lobby1_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Suites",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Saint Charles, Missouri",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COMFORT SUITES WICHITA, KS
  createData(
    <a
      href="https://www.choicehotels.com/kansas/wichita/comfort-suites-hotels/ks118"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Comfort Suites Airport"
        src="https://www.choicehotels.com/hotelmedia/US/KS/wichita/KS118/1280/LobbyInterior3.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Comfort Suites",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Wichita, Kansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // COURTYARD AUSTIN, TX NORTHWEST/LAKELINE
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/ausnl-courtyard-austin-northwest-lakeline/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Courtyard Austin Northwest Lakeline"
        src="https://cache.marriott.com/marriottassets/marriott/AUSNL/ausnl-exterior-8688-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Courtyard",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "Austin, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "SELECT"
  ),
  // DAYS INN BY WYNDHAM HUTCHISON, KS
  createData(
    <a
      href="https://www.wyndhamhotels.com/days-inn/hutchinson-kansas/days-inn-and-suites-hutchinson/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Days Inn & Suites by Wyndham Hutchinson"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/di/us/ks/hutchinson/25877/25877_exterior_day_1.jpg?crop=3000:2000;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Days Inn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Hutchinson, Kansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // DAYS INN BY WYNDHAM KANSAS CITY, KS
  createData(
    <a
      href="https://www.wyndhamhotels.com/days-inn/kansas-city-kansas/days-inn-near-kansas-speedway/overview?iata=00093763&cid=PS:geq7qs0dz316wyl&gclid=CjwKCAiA0KmPBhBqEiwAJqKK4y88t0hrqU8z0KZQuRU4-7gEiKOskRsZmg-mSP8suGwP6lajt4LEhxoCfQEQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Days Inn by Wyndham near Kansas Speedway"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/di/us/ks/kansas-city/20293/20293_exterior_view_2.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Days Inn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Kansas City, Kansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // DAYS INN BY WYNDHAM NORMAN, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/days-inn/norman-oklahoma/days-inn-norman-ok/overview?iata=00093763&cid=PS:i4cxh5lynmxc3id&gclid=CjwKCAiA0KmPBhBqEiwAJqKK42yzLXZyO_jEIA3sClkPmDHu4csL2EO-KmG1cKiCendWjmsZ-s3fXBoCd4EQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Days Inn by Wyndham Norman"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/di/us/ok/norman/46150/46150_exterior_view_2.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Days Inn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Norman, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // DAYS INN BY WYNDHAM OKLAHOMA CITY NW, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/days-inn/oklahoma-oklahoma/days-inn-oklahoma-city-nw-expressway/overview?iata=00093763&cid=PS:w33baaa2kpxwaya&gclid=CjwKCAiA0KmPBhBqEiwAJqKK45Xj8vHGFlsoG9ub59jsbKeMJG4hD6uxoeGVu40AEb8c6MyHrPn7QBoCsFMQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Days Inn by Wyndham Oklahoma City NW Expressway"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/di/us/ok/oklahoma/51680/51680_lobby_view_1.JPG?crop=3258:2172;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Days Inn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Oklahoma City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // DAYS INN BY WYNDHAM OKLAHOMA CITY WEST, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/days-inn/oklahoma-city-oklahoma/days-inn-oklahoma-city-west/overview?iata=00093763&cid=PS:o0o7ek4t99755j3&gclid=CjwKCAiA0KmPBhBqEiwAJqKK46y5C5SnkkTY63xaZuxXWfKgmpH87cq_RoGU7d7-fRR4hL1Tp9KkbBoCbAgQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Days Inn by Wyndham Oklahoma City West"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/di/us/ok/oklahoma-city/13777/13777_exterior_view_1.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Days Inn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Oklahoma City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // DAYS INN BY WYNDHAM PAULS VALLEY, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/days-inn/pauls-valley-oklahoma/days-inn-pauls-valley/overview?iata=00093763&cid=PS:6htrdcg13pfzxsu&gclid=CjwKCAiA0KmPBhBqEiwAJqKK46qP6QFNFawr_DHKGtQekj6renn6hVHC7Lj_jrluDAxReZTSAmVTOxoC6GAQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Days Inn by Wyndham Pauls Valley"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/di/us/ok/pauls-valley/04102/04102_lobby_1.jpg?crop=3963:2642;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Days Inn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Pauls Valley, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // DAYS INN BY WYNDHAM SALADO, TX
  createData(
    <a
      href="https://www.wyndhamhotels.com/days-inn/salado-texas/days-inn-salado/overview?iata=00093763&cid=PS:tsby1kjzdgwaqhx&gclid=CjwKCAiA0KmPBhBqEiwAJqKK43AFQzyIb-fFlQ94nd1v1xIxO2EElUiz8n9rJRXtYzkPFwmITDW7kxoCP8AQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Days Inn by Wyndham Salado"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/di/us/tx/salado/44771/44771_exterior_day_1.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Days Inn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Salado, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // DAYS INN BY WYNDHAM SHAWNEE, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/days-inn/shawnee-oklahoma/days-inn-shawnee/overview?iata=00093763&cid=PS:lav9fpnca5bnt89&gclid=CjwKCAiA0KmPBhBqEiwAJqKK4wNYu4QSOGqtHiaiLxQTzjBE3pGx6PazjMD8cQyUALtgwu9jF4xWCxoCKGMQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Days Inn by Wyndham Shawnee"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/di/us/ok/shawnee/02636/02636_lobby_view_1.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Days Inn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Shawnee, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // DAYS INN BY WYNDHAM WICHITA, KS
  createData(
    <a
      href="https://www.wyndhamhotels.com/days-inn/wichita-kansas/days-inn-and-suites-wichita/overview?iata=00580881"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Days Inn & Suites by Wyndham Wichita"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/di/us/ks/wichita/10313/10313_lobby_view_2.jpg?crop=3000:2000;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Days Inn",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Wichita, Kansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // EMBASSY SUITES OKC NW EXPRESSWAY
  createData(
    <a
      href="https://www.hilton.com/en/hotels/okcones-embassy-suites-oklahoma-city-northwest/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="EMBASSY SUITES OKC NW EXPRESSWAY"
        src="https://www.hilton.com/im/en/OKCONES/14594011/gyl-okc-embassy-suites-0058-59-60.jpg?impolicy=crop&cw=6717&ch=3585&gravity=NorthWest&xposition=0&yposition=445&rw=768&rh=410"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Embassy Suites",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "Oklahoma City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "UPSCALE"
  ),
  // FAIRFIELD INN & SUITES EDMOND, OK
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/okced-fairfield-inn-and-suites-edmond/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Fairfield Inn and Suites Edmond"
        src="https://cache.marriott.com/marriottassets/marriott/OKCED/okced-lobby-4190-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Fairfield",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "Edmond, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // FAIRFIELD INN & SUITES NORTH STONE OAK SAN ANTONIO, TX
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/satfn-fairfield-inn-and-suites-san-antonio-north-stone-oak/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Fairfield Inn and Suites San Antonio North Stone Oak"
        src="https://cache.marriott.com/marriottassets/marriott/SATFN/satfn-lobby-4225-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Fairfield",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "San Antonio, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // FAIRFIELD INN & SUITES OKC AIRPORT
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/okcap-fairfield-inn-and-suites-oklahoma-city-airport/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Fairfield Inn and Suites San Oklahoma City Airport"
        src="https://cache.marriott.com/marriottassets/marriott/OKCAP/okcap-exterior-0010-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Fairfield",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "OKC Airport, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // FAIRFIELD INN & SUITES PALM COAST, FL
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/dabpc-fairfield-inn-and-suites-palm-coast-i-95/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Fairfield Inn & Suites Palm Coast I-95"
        src="https://cache.marriott.com/marriottassets/marriott/DABPC/dabpc-pool-6087-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Fairfield",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "Palm Coast, Florida",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // FAIRFIELD INN & SUITES WARR ACRES, OK
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/okcex-fairfield-inn-and-suites-oklahoma-city-nw-expressway-warr-acres/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Fairfield Inn & Suites Oklahoma City NW Expressway/Warr Acres"
        src="https://cache.marriott.com/marriottassets/marriott/OKCEX/okcex-lobby-0032-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Fairfield",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "Oklahoma City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // FAIRFIELD INN & SUITES WEATHERFORD, OK
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/ojafi-fairfield-inn-and-suites-weatherford/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Fairfield Inn & Suites Weatherford"
        src="https://cache.marriott.com/marriottassets/marriott/OJAFI/ojafi-lobby-0001-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Fairfield",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "Weatherford, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // FAIRFIELD INN & SUITES YUKON, OK
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/okcyk-fairfield-inn-and-suites-oklahoma-city-yukon/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Fairfield Inn & Suites Oklahoma City Yukon"
        src="https://cache.marriott.com/marriottassets/marriott/OKCYK/okcyk-lobby-0005-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Fairfield",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "Yukon, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // FAIRFIELD INN BROOKS BASE SAN ANTONIO, TX
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/satse-fairfield-inn-and-suites-san-antonio-brooks-city-base/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Fairfield Inn & Suites San Antonio Brooks City Base"
        src="https://cache.marriott.com/marriottassets/marriott/SATSE/satse-business-0035-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Fairfield",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "San Antonio, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HAMPTON INN & SUITES ELK CITY, OK
  createData(
    <a
      href="https://www.hilton.com/en/hotels/elkcyhx-hampton-suites-elk-city/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Hampton Inn & Suites Elk City"
        src="https://www.hilton.com/im/en/ELKCYHX/389506/elkcyhx-front1.jpg?impolicy=crop&cw=2655&ch=1486&gravity=NorthWest&xposition=0&yposition=6&rw=768&rh=430"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Hampton Inn",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "Elk City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HAMPTON INN & SUITES MOORE, OK
  createData(
    <a
      href="https://www.hilton.com/en/hotels/okcmohx-hampton-suites-moore/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Hampton Inn & Suites Moore"
        src="https://www.hilton.com/im/en/OKCMOHX/3000884/public-space-.jpg?impolicy=crop&cw=4032&ch=2257&gravity=NorthWest&xposition=0&yposition=383&rw=768&rh=430"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Hampton Inn",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "Moore, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HAMPTON INN & SUITES PAULS VALLEY, OK
  createData(
    <a
      href="https://www.hilton.com/en/hotels/okcpvhx-hampton-suites-pauls-valley/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Hampton Inn & Suites Pauls Valley"
        src="https://www.hilton.com/im/en/OKCPVHX/3001510/lobby2.jpg?impolicy=crop&cw=4517&ch=2529&gravity=NorthWest&xposition=0&yposition=235&rw=768&rh=430"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Hampton Inn",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "Pauls Valley, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HAMPTON INN & SUITES PRYOR, OK
  createData(
    <a
      href="https://www.hilton.com/en/hotels/tulprhx-hampton-suites-pryor/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Hampton Inn & Suites Pryor"
        src="https://www.hilton.com/im/en/TULPRHX/6085644/breakfast-area-3.jpg?impolicy=crop&cw=6000&ch=3359&gravity=NorthWest&xposition=0&yposition=322&rw=768&rh=430"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Hampton Inn",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "Pryor, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HAMPTON INN & SUITES WOODLAND HILLS MALL TULSA, OK
  createData(
    <a
      href="https://www.hilton.com/en/hotels/tulhshx-hampton-suites-tulsa-woodland-hills-71st-memorial/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Hampton Inn & Suites Tulsa-Woodland Hills 71st-Memorial"
        src="https://www.hilton.com/im/en/TULHSHX/4526868/breakfastarea.jpg?impolicy=crop&cw=2252&ch=1260&gravity=NorthWest&xposition=0&yposition=119&rw=768&rh=430"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Hampton Inn",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "Tulsa, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HAMPTON INN EDMOND, OK
  createData(
    <a
      href="https://www.hilton.com/en/hotels/okcedhx-hampton-oklahoma-city-edmond/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Hampton Inn Oklahoma City/Edmond"
        src="https://www.hilton.com/im/en/OKCEDHX/13879095/lobby1.jpg?impolicy=crop&cw=4592&ch=2571&gravity=NorthWest&xposition=0&yposition=438&rw=768&rh=430"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Hampton Inn",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "Edmond, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HAMPTON INN MIAMI, OK
  createData(
    <a
      href="https://www.hilton.com/en/hotels/mmiokhx-hampton-miami/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Hampton Inn Miami"
        src="https://www.hilton.com/im/en/MMIOKHX/10656752/30-pa220108.jpg?impolicy=crop&cw=4608&ch=2580&gravity=NorthWest&xposition=0&yposition=438&rw=768&rh=430"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Hampton Inn",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "Miami, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HAMPTON INN SILOAM SPRINGS, AR
  createData(
    <a
      href="https://www.hilton.com/en/hotels/fyvsshx-hampton-siloam-springs/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Hampton Inn Siloam Springs"
        src="https://www.hilton.com/im/en/FYVSSHX/2844551/fyvsshx-hampton-inn-and-suites-siloam-springs-lobby-1.jpg?impolicy=crop&cw=4500&ch=2519&gravity=NorthWest&xposition=0&yposition=240&rw=768&rh=430"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Hampton Inn",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "Siloam Springs, Arkansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HAMPTON INN YUKON, OK
  createData(
    <a
      href="https://www.hilton.com/en/hotels/okcykhx-hampton-oklahoma-city-yukon/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Hampton Inn Oklahoma City/Yukon"
        src="https://www.hilton.com/im/en/OKCYKHX/14469359/treat-shop.jpeg?impolicy=crop&cw=6000&ch=3359&gravity=NorthWest&xposition=0&yposition=320&rw=768&rh=430"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Hampton Inn",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "Yukon, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HILTON GARDEN INN MIDTOWN TULSA, OK
  createData(
    <a
      href="https://www.hilton.com/en/hotels/tulmdgi-hilton-garden-inn-tulsa-midtown/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Hilton Garden Inn Tulsa Midtown"
        src="https://www.hilton.com/im/en/TULMDGI/10378934/exterior-0010.jpg?impolicy=crop&cw=4035&ch=2259&gravity=NorthWest&xposition=0&yposition=370&rw=768&rh=430"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Hilton Garden Inn",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "Tulsa, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "SELECT"
  ),
  // HILTON GARDEN INN OKC AIRPORT
  createData(
    <a
      href="https://www.hilton.com/en/hotels/okcahgi-hilton-garden-inn-oklahoma-city-airport/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Hilton Garden Inn Oklahoma City Airport"
        src="https://www.hilton.com/im/en/OKCAHGI/8091735/exterior2-2018.jpg?impolicy=crop&cw=4500&ch=2519&gravity=NorthWest&xposition=0&yposition=240&rw=768&rh=430"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Hilton Garden Inn",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "OKC Airport, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "SELECT"
  ),
  // HOLIDAY INN (HOLTSVILLE) LONG ISLAND, NY
  createData(
    <a
      href="https://www.ihg.com/holidayinn/hotels/us/en/holtsville/ispcp/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Holiday Inn Long Island - ISLIP Arpt East"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-holtsville-6118581513-2x1?wid=1440&hei=720&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Long Island, New York",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "SELECT"
  ),
  // HOLIDAY INN DOWNTOWN INDIANAPOLIS, IN
  createData(
    <a
      href="https://www.ihg.com/holidayinn/hotels/us/en/indianapolis/indwe/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Holiday Inn Indianapolis Downtown"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-indianapolis-5516574170-2x1?wid=1440&hei=720&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Indianapolis, Indiana",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "SELECT"
  ),
  // HOLIDAY INN EXPRESS & SUITES (BY AT&T CENTER) SAN ANTONIO, TX
  createData(
    <a
      href="https://www.ihg.com/holidayinnexpress/hotels/us/en/san-antonio/satrg/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Holiday Inn Express & Suites San Antonio SE by AT&T Center"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-express-and-suites-san-antonio-4137148239-2x1?wid=500&hei=250&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn Express",
    // FRANCHISE
    "IHG",
    // LOCATION
    "San Antonio, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HOLIDAY INN EXPRESS & SUITES (SOUTH BARTRAM PARK) JACKSONVILLE, FL
  createData(
    <a
      href="https://www.ihg.com/holidayinnexpress/hotels/us/en/jacksonville/jaxau/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Holiday Inn Express Jacksonville South Bartram Prk"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-express-jacksonville-6192767139-2x1?wid=500&hei=250&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn Express",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Jacksonville, Florida",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HOLIDAY INN EXPRESS & SUITES ELK CITY, OK
  createData(
    <a
      href="https://www.ihg.com/holidayinnexpress/hotels/us/en/elk-city/elkeo/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Holiday Inn Express & Suites Elk City"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-express-and-suites-elk-city-4017227399-2x1?wid=500&hei=250&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn Express",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Elk City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HOLIDAY INN EXPRESS & SUITES MIDTOWN TULSA, OK
  createData(
    <a
      href="https://www.ihg.com/holidayinnexpress/hotels/us/en/tulsa/tulxs/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Holiday Inn Express & Suites Tulsa Midtown"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-express-and-suites-tulsa-4198449044-2x1?wid=500&hei=250&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn Express",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Tulsa, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HOLIDAY INN EXPRESS & SUITES MIDWEST CITY, OK
  createData(
    <a
      href="https://www.ihg.com/holidayinnexpress/hotels/us/en/midwest-city/okcmw/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Holiday Inn Express & Suites Midwest City"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-express-and-suites-midwest-city-4288590119-2x1?wid=500&hei=250&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn Express",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Midwest City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HOLIDAY INN EXPRESS & SUITES MOORE, OK
  createData(
    <a
      href="https://www.ihg.com/holidayinnexpress/hotels/us/en/moore/okcem/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Holiday Inn Express & Suites Moore"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-express-and-suites-moore-6122879615-2x1?wid=500&hei=250&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn Express",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Moore, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HOLIDAY INN EXPRESS & SUITES OKC AIRPORT
  createData(
    <a
      href="https://www.ihg.com/holidayinnexpress/hotels/us/en/oklahoma-city/okcmd/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Holiday Inn Express & Suites Oklahoma City Airport"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-express-and-suites-oklahoma-city-6114282577-2x1?wid=500&hei=250&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn Express",
    // FRANCHISE
    "IHG",
    // LOCATION
    "OKC Airport, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HOLIDAY INN EXPRESS & SUITES PRYOR, OK
  createData(
    <a
      href="https://www.ihg.com/holidayinnexpress/hotels/us/en/pryor/propr/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Holiday Inn Express & Suites Pryor"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-express-and-suites-pryor-6701466538-2x1?wid=500&hei=250&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn Express",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Pryor, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HOLIDAY INN EXPRESS SALADO, TX
  createData(
    <a
      href="https://www.ihg.com/holidayinnexpress/hotels/us/en/salado/llotx/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Holiday Inn Express & Suites Pryor"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-express-salado-2532908274-2x1?wid=500&hei=250&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn Express",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Saledo, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // HOLIDAY INN EXPRESS WICHITA, TX
  createData(
    <a
      href="https://www.ihg.com/holidayinnexpress/hotels/us/en/wichita-falls/spskb/hoteldetail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Holiday Inn Express & Suites Wichita Falls"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-express-and-suites-wichita-falls-5328791816-2x1?wid=500&hei=250&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn Express",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Wichita Falls, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // LAQUINTA INN & SUITES BY WYNDHAM CINCINNATI NE - MASON, OH
  createData(
    <a
      href="https://www.wyndhamhotels.com/laquinta/mason-ohio/la-quinta-cincinnati-ne-mason/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="La Quinta Inn & Suites by Wyndham Cincinnati NE - Mason"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/oh/mason/52988/52988_exterior_view_4.jpg?crop=5967:3978;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "La Quinta",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Cincinnati, Ohio",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // LAQUINTA INN & SUITES BY WYNDHAM EDMOND, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/laquinta/edmond-oklahoma/la-quinta-edmond/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="La Quinta Inn & Suites by Wyndham Edmond"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/ok/edmond/53002/53002_Lobby_1.jpg?crop=3336:2224;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "La Quinta",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Edmond, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // LAQUINTA INN & SUITES BY WYNDHAM EMPORIA, KS
  createData(
    <a
      href="https://www.wyndhamhotels.com/laquinta/emporia-kansas/la-quinta-emporia/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="La Quinta Inn & Suites by Wyndham Emporia"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/ks/emporia/52864/52864_lobby_view_1.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "La Quinta",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Emporia, Kansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // LAQUINTA INN & SUITES BY WYNDHAM MIDWEST CITY - TINKER AFB, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/laquinta/midwest-city-oklahoma/la-quinta-midwest-city-tinker-afb/overview?iata=00093763&cid=PS:8elic7o80qrfh4d&gclid=CjwKCAiA3L6PBhBvEiwAINlJ9Kzuk21ZBB1F7PtisAEokOgDI0NLl9P9CCAliJu8AOWrCBhCnRpgxBoCW2cQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="La Quinta Inn & Suites by Wyndham Midwest City - Tinker AFB"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/ok/midwest-city/53322/53322_lobby_view_2.jpg?crop=3000:2000;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "La Quinta",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Midwest City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // LAQUINTA INN & SUITES BY WYNDHAM MOORE, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/laquinta/moore-oklahoma/la-quinta-oklahoma-city-moore/overview?iata=00093763&cid=PS:4fsyypn8r139sg2&gclid=CjwKCAiA3L6PBhBvEiwAINlJ9PPUOY0_jNs7or2JPLghl44yAy4jHBzLG9SkaPXO7ZR3yFcNlZcsPBoCX-IQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="La Quinta Inn & Suites by Wyndham Oklahoma City - Moore"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/ok/moore/53323/53323_lobby_view_2.jpg?crop=3000:2000;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "La Quinta",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Moore, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // LAQUINTA INN & SUITES BY WYNDHAM O'FALLON IL - ST. LOUIS
  createData(
    <a
      href="https://www.wyndhamhotels.com/laquinta/o-fallon-illinois/la-quinta-inn-suites-o-fallon-il-st-louis/overview?iata=00093763&cid=PS:y5iw4giiqzpjt4t&gclid=CjwKCAiA3L6PBhBvEiwAINlJ9D1I6wKW_CONx6pWCDlg4Uv-PCrHWi28B12M9ga-7t5MFCMcCp9nrBoCQHIQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="La Quinta Inn & Suites by Wyndham O'Fallon, IL - St. Louis"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/il/o'fallon/17867/17867_Lobby_2.jpg?crop=5997:3998;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "La Quinta",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "O'Fallon, Illinois",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // LAQUINTA INN & SUITES BY WYNDHAM OKLAHOMA CITY AIRPORT, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/laquinta/oklahoma-city-oklahoma/la-quinta-oklahoma-city-airport/overview?iata=00093763&cid=PS:pq9v64k6f5nrh6h&gclid=CjwKCAiA3L6PBhBvEiwAINlJ9NE266gqim8uEF6lVhmtkiADFciGUcGFl1grHiY9FKIHFCgsvKWZeBoCaJ0QAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="La Quinta Inn & Suites by Wyndham Oklahoma City Airport"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/ok/oklahoma-city/53328/53328_exterior_day_2.jpg?crop=3000:2000;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "La Quinta",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "OKC Airport, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // LAQUINTA INN & SUITES BY WYNDHAM OWASSO, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/laquinta/owasso-oklahoma/la-quinta-owasso/overview?iata=00093763&cid=PS:pce66p525fa12qt&gclid=CjwKCAiA3L6PBhBvEiwAINlJ9P63R7TT5t39wrueO1BXsUdIPSoUPZWDdKparEoqTIcapy56wkzvTxoCTTIQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="La Quinta Inn & Suites by Wyndham Owasso"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/ok/owasso/53329/53329_exterior_dusk_1.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "La Quinta",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Owasso, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // LAQUINTA INN & SUITES BY WYNDHAM SHAWNEE, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/laquinta/shawnee-oklahoma/la-quinta-shawnee/overview?iata=00093763&cid=PS:d2s1kpq25z3vr8r&gclid=CjwKCAiA3L6PBhBvEiwAINlJ9INVgtZz7-bYhOebdshrFarKg0s947J1ZRLQ6n5KchsNmh541FNedxoCpSgQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="La Quinta Inn & Suites by Wyndham Shawnee"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/ok/shawnee/53331/53331_exterior_night_1.jpg?crop=3000:2000;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "La Quinta",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Shawnee, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // LAQUINTA INN & SUITES BY WYNDHAM ST. LOUIS HAZELWOOD, MO
  createData(
    <a
      href="https://www.wyndhamhotels.com/laquinta/hazelwood-missouri/la-quinta-inn-st-louis-hazelwood-airport-north/overview?iata=00093763&cid=PS:ano5ox9kmo6lqpk&gclid=CjwKCAiA3L6PBhBvEiwAINlJ9Hexck6cTivnpzYQZhx8NxEffu0VfjstiqIeotAZ0lXc5nRmxnBQbxoCjdoQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="La Quinta Inn by Wyndham St. Louis Hazelwood - Airport North"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/mo/hazelwood/52933/52933_lobby_view_5.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "La Quinta",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Hazelwood, Missouri",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // LAQUINTA INN & SUITES DURANT, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/laquinta/durant-oklahoma/la-quinta-durant/overview?iata=00093763&cid=PS:7tztclxqc3byjhe&gclid=CjwKCAiA3L6PBhBvEiwAINlJ9JxIWVJQJW7NUfB7AVHS704QAxFsB1EGLiDsSGnnfDwHF592h-L7MxoCOFcQAvD_BwE&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="La Quinta Inn & Suites by Wyndham Durant"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/lq/us/ok/durant/53001/53001_lobby_view_4.jpg?crop=3000:2000;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "La Quinta",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Durant, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // QUALITY INN & SUITES BROWNSBURG, IN
  createData(
    <a
      href="https://www.choicehotels.com/indiana/brownsburg/quality-inn-hotels/in441"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Quality Inn & Suites Brownsburg - Indianapolis West"
        src="https://www.choicehotels.com/hotelmedia/US/IN/brownsburg/IN441/1280/in441pool1_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Quality Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Indianapolis, Indiana",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "BUDGET"
  ),
  // QUALITY INN & SUITES EMPORIA, KS
  createData(
    <a
      href="https://www.choicehotels.com/kansas/emporia/quality-inn-hotels/ks209"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="QUALITY INN & SUITES EMPORIA, KS"
        src="https://www.choicehotels.com/hotelmedia/US/KS/emporia/KS209/1280/ks209lobby2_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Quality Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Emporia, Kansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "BUDGET"
  ),
  // QUALITY INN BRADENTON, FL
  createData(
    <a
      href="https://www.choicehotels.com/florida/bradenton/quality-inn-hotels/fl572"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Quality Inn Bradenton North I-75"
        src="https://www.choicehotels.com/hotelmedia/US/FL/bradenton/FL572/1280/FL572exterior1_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Quality Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Bradenton, Florida",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "BUDGET"
  ),
  // QUALITY INN DUNCAN, OK
  createData(
    <a
      href="https://www.choicehotels.com/oklahoma/duncan/quality-inn-hotels/ok211"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Quality Inn Duncan HWY 81"
        src="https://www.choicehotels.com/hotelmedia/US/OK/duncan/OK211/1280/OK211LOBBY1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Quality Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Duncan, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "BUDGET"
  ),
  // QUALITY INN FT SMITH, AR
  createData(
    <a
      href="https://www.choicehotels.com/arkansas/fort-smith/quality-inn-hotels/ar610"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Quality Inn Fort Smith I-540"
        src="https://www.choicehotels.com/hotelmedia/US/AR/fort-smith/AR610/1280/LobbyInterior1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Quality Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Fort Smith, Arkansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "BUDGET"
  ),
  // QUALITY INN HARLINGEN, TX
  createData(
    <a
      href="https://www.choicehotels.com/texas/harlingen/quality-inn-hotels/txi15"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Quality Inn Harlingen"
        src="https://www.choicehotels.com/hotelmedia/US/TX/harlingen/TXI15/1280/TXI15FrontDeskTemp01_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Quality Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Harlingen, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "BUDGET"
  ),
  // QUALITY INN MOORE, OK
  createData(
    <a
      href="https://www.choicehotels.com/oklahoma/moore/quality-inn-hotels/ok016"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Quality Inn Moore - Oklahoma City"
        src="https://www.choicehotels.com/hotelmedia/US/OK/moore/OK016/1280/OK016Lobby06_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Quality Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Moore, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "BUDGET"
  ),
  // QUALITY INN OVERLAND PARK, KS
  createData(
    <a
      href="https://www.choicehotels.com/kansas/overland-park/quality-inn-hotels/ks303"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Quality Inn Moore - Oklahoma City"
        src="https://www.choicehotels.com/hotelmedia/US/KS/overland-park/KS303/1280/KS303lobby3_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Quality Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Overland Park, Kansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "BUDGET"
  ),
  // QUALITY INN ROCHESTER, IN
  createData(
    <a
      href="https://www.choicehotels.com/indiana/rochester/quality-inn-hotels/in063"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="QUALITY INN ROCHESTER, IN"
        src="https://www.choicehotels.com/hotelmedia/US/IN/rochester/IN063/1280/LobbyInterior4.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Quality Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Rochester, Indiana",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "BUDGET"
  ),
  // QUALITY INN SALLISAW, OK
  createData(
    <a
      href="https://www.choicehotels.com/oklahoma/sallisaw/quality-inn-hotels/ok339"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="QUALITY INN SALLISAW, OK"
        src="https://www.choicehotels.com/hotelmedia/US/OK/sallisaw/OK339/1280/OK339ExteriorStock_1.jpg"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Quality Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Sallisaw, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "BUDGET"
  ),
  // QUALITY INN SOUTH WICHITA, KS
  createData(
    <a
      href="https://www.choicehotels.com/kansas/wichita/quality-inn-hotels/ks401"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Quality Inn South"
        src="https://www.choicehotels.com/hotelmedia/US/KS/wichita/KS401/1280/KS401Lobby02_1.webp"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Quality Inn",
    // FRANCHISE
    "Choice Hotels",
    // LOCATION
    "Wichita, Kansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "BUDGET"
  ),
  // RESIDENCE INN MEMORIAL OKLAHOMA CITY, OK
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/okcxw-residence-inn-oklahoma-city-north-quail-springs/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="RESIDENCE INN OKLAHOMA CITY NORTH/QUAIL SPRINGS"
        src="https://cache.marriott.com/marriottassets/marriott/OKCXW/okcxw-exterior-9195-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Residence Inn",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "Oklahoma City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "EXTENDED"
  ),
  // RESIDENCE INN MIDTOWN TULSA, OK
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/tultc-residence-inn-tulsa-midtown/?gclid=Cj0KCQiA0eOPBhCGARIsAFIwTs7ZP92kcEsrIP_OlhnEP7V2L1d6J-Z8_1i4e21oq3hLFOz3IgFPRXkaAukeEALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="RESIDENCE INN TULSA MIDTOWN"
        src="https://cache.marriott.com/marriottassets/marriott/TULTC/tultc-exterior-6595-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Residence Inn",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "Tulsa, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "EXTENDED"
  ),
  // RESIDENCE INN NORTHWEST EXPRESSWAY OKLAHOMA CITY, OK
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/okcrw-residence-inn-oklahoma-city-northwest/?gclid=Cj0KCQiA0eOPBhCGARIsAFIwTs4h3jykT-PFtVCoYvZutQzdgP4dRtrsZ5LtLOHD7F1OFg7mqFp4L44aAmabEALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="RESIDENCE INN OKLAHOMA CITY NORTHWEST"
        src="https://cache.marriott.com/marriottassets/marriott/OKCRW/okcrw-exterior-0001-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Residence Inn",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "Oklahoma City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "EXTENDED"
  ),
  // RESIDENCE INN OKC AIRPORT
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/okcrw-residence-inn-oklahoma-city-northwest/?gclid=Cj0KCQiA0eOPBhCGARIsAFIwTs4h3jykT-PFtVCoYvZutQzdgP4dRtrsZ5LtLOHD7F1OFg7mqFp4L44aAmabEALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="RESIDENCE INN OKLAHOMA CITY AIRPORT"
        src="https://cache.marriott.com/marriottassets/marriott/OKCRA/okcra-lobby-0571-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Residence Inn",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "OKC Airport, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "EXTENDED"
  ),
  // SPRINGHILL SUITES MACARTHUR OKLAHOMA CITY, OK
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/okcaw-springhill-suites-oklahoma-city-airport/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="RESIDENCE INN OKLAHOMA CITY AIRPORT"
        src="https://cache.marriott.com/marriottassets/marriott/OKCAW/okcaw-suite-0028-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Springhill Suites",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "OKC Airport, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // SPRINGHILL SUITES MOORE, OK
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/okcmo-springhill-suites-oklahoma-city-moore/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="SPRINGHILL SUITES OKLAHOMA CITY MOORE"
        src="https://cache.marriott.com/marriottassets/marriott/OKCMO/okcmo-lobby-0025-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1024px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Springhill Suites",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "Moore, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
  // SUPER 8 BY WYNDHAM ALTON, IL
  createData(
    <a
      href="https://www.wyndhamhotels.com/super-8/alton-illinois/super-8-alton/overview?iata=00093763&cid=PS:xcuw2s7fmycvlp8&gclid=Cj0KCQiA0eOPBhCGARIsAFIwTs5uTCVuojcImMMpUXwxT93EQs9YlggEJFqSAZFbmnbhVOl0aY2_MAsaAtt4EALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Super 8 by Wyndham Alton"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/il/alton/02857/02857_exterior_view_1.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Super 8",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Alton, Illinois",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // SUPER 8 BY WYNDHAM DUNCAN, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/super-8/duncan-oklahoma/super-8-duncan-ok/overview"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Super 8 by Wyndham Duncan"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/ok/duncan/47345/47345_exterior_day_1.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Super 8",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Duncan, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // SUPER 8 BY WYNDHAM EFFINGHAM, IL
  createData(
    <a
      href="https://www.wyndhamhotels.com/super-8/effingham-illinois/super-8-effingham/overview?iata=00093763&cid=PS:2e4a3k200odb7l5&gclid=Cj0KCQiA0eOPBhCGARIsAFIwTs7YNeppaMI8hoXHzA1yZ2U1657A7ZAchEIfTEWKOB_JxITU3HChjrYaAv23EALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Super 8 by Wyndham Effingham"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/il/effingham/02862/02862_guest_room_2.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Super 8",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Effingham, Illinois",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // SUPER 8 BY WYNDHAM FAIRVIEW HEIGHTS - ST. LOUIS, IL
  createData(
    <a
      href="https://www.wyndhamhotels.com/super-8/fairview-heights-illinois/super-8-fairview-heights-st-louis/overview?iata=00093763&cid=PS:lhr1g85en5mn0yt&gclid=Cj0KCQiA0eOPBhCGARIsAFIwTs5H2XCSGho7ytW59MJ_zXAxXSLjF_RQyWIb1BRt-Rdvxl_SbaGH8LcaApBqEALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Super 8 by Wyndham Fairview Heights-St. Louis"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/il/fairview-heights/02885/02885_lobby_view_1.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Super 8",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "St Louis, Illinois",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // SUPER 8 BY WYNDHAM LEES SUMMIT, MO
  createData(
    <a
      href="https://www.wyndhamhotels.com/super-8/lees-summit-missouri/super-8-lees-summit/overview?iata=00093763&cid=PS:dx29d3m6mpd1q08&gclid=Cj0KCQiA0eOPBhCGARIsAFIwTs7_oJxp3kF77kmqHk0W_lnZKegBifYXIBZIpyB_1wxdj_uQ19OoiksaAuXrEALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Super 8 by Wyndham Lees Summit"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/mo/lees-summit/46333/46333_guest_room_7.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Super 8",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Lees Summit, Missouri",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // SUPER 8 BY WYNDHAM ROCHESTER, IN
  createData(
    <a
      href="https://www.wyndhamhotels.com/super-8/lees-summit-missouri/super-8-lees-summit/overview?iata=00093763&cid=PS:dx29d3m6mpd1q08&gclid=Cj0KCQiA0eOPBhCGARIsAFIwTs7_oJxp3kF77kmqHk0W_lnZKegBifYXIBZIpyB_1wxdj_uQ19OoiksaAuXrEALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Super 8 by Wyndham Lees Summit"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/mo/lees-summit/46333/46333_guest_room_7.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Super 8",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Lees Summit, Missouri",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // SUPER 8 BY WYNDHAM SALEM, IL
  createData(
    <a
      href="https://www.wyndhamhotels.com/super-8/salem-illinois/super-8-salem-il/overview?iata=00093763&cid=PS:bihzavk088hf4a0&gclid=Cj0KCQiA0eOPBhCGARIsAFIwTs5xWBvZj64VRbA2f2mMnv6kIzmH3Ulrq2Jet91VRwxMRrWAOlRZpv8aAlO2EALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Super 8 by Wyndham Salem"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/il/salem/03950/03950_guest_room_4.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Super 8",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Salem, Illinois",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // SUPER 8 BY WYNDHAM SALLISAW, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/super-8/sallisaw-oklahoma/super-8-sallisaw/overview?iata=00093763&cid=PS:5tvh92lzmeisom0&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71A46p7Y623t5hXYtx_KpNToGI6_bERAEWPGXqLjfFn0Y5W4W_2QK3IaAvHDEALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Super 8 by Wyndham Sallisaw"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/ok/sallisaw/03887/03887_lobby_view_1.jpg?downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Super 8",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Sallisaw, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // SUPER 8 BY WYNDHAM TULSA, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/super-8/tulsa-oklahoma/super-8-tulsa/overview?iata=00093763&cid=PS:3g4u2y3yytv8gef&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71C8C_mP2gLcwbW7PmmoWqzi7u1G5jpRgrT-Zs3y3-s9Q8GwUWuJD7YaAvW5EALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Super 8 by Wyndham Tulsa"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/ok/tulsa/11082/11082_lobby_view_2.jpg?crop=3000:2000;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Super 8",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Tulsa, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // SUPER 8 BY WYNDHAM WICHITA SOUTH, KS
  createData(
    <a
      href="https://www.wyndhamhotels.com/super-8/wichita-kansas/super-8-wichita-south/overview?iata=00093763&cid=PS:e93nfkti5b7n6zd&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71B4CaZ8h1XXZS7alcRyD2yR1ZxCuNsX0Htjm4YSCVGq5ch1JPjKAxIaAtTWEALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Super 8 by Wyndham Wichita South"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/ks/wichita/47201/47201_lobby_view_1.jpg?crop=3000:2000;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Super 8",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Wichita, Kansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // SUPER 8 BY WYNDHAM WICHITA SOUTH, KS
  createData(
    <a
      href="https://www.wyndhamhotels.com/super-8/wichita-kansas/super-8-wichita-south/overview?iata=00093763&cid=PS:e93nfkti5b7n6zd&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71B4CaZ8h1XXZS7alcRyD2yR1ZxCuNsX0Htjm4YSCVGq5ch1JPjKAxIaAtTWEALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Super 8 by Wyndham Wichita South"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/ks/wichita/47201/47201_lobby_view_1.jpg?crop=3000:2000;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Super 8",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "Wichita, Kansas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // SUPER 8 SAN ANTONIO / ALAMODOME AREA, TX
  createData(
    <a
      href="https://www.wyndhamhotels.com/super-8/san-antonio-texas/super-8-san-antonio-alamodome-area/overview?iata=00580881"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Super 8 by Wyndham San Antonio/Alamodome Area"
        src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/tx/san-antonio/14805/14805_guestroom_6.jpg?crop=3000:2000;*,*&downsize=1200:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Super 8",
    // FRANCHISE
    "Wyndham",
    // LOCATION
    "San Antonio, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "ESSENTIAL"
  ),
  // TOWNEPLACE SUITES DAYTON, OH
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/dayts-towneplace-suites-dayton-north/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="TownePlace Suites Dayton North"
        src="https://cache.marriott.com/marriottassets/marriott/DAYTS/dayts-suite-0026-hor-clsc.jpg?downsize=1440px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "TownePlace Suites",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "Dayton, Ohio",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "EXTENDED"
  ),
  // TOWNEPLACE SUITES JACKSONVILLE, FL
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/jaxse-towneplace-suites-jacksonville-east/?gclid=Cj0KCQiA9OiPBhCOARIsAI0y71C22RH933XSJVTtW8MFaV9x0mW5YxA4yNemqC3N3CIS6yRXfCWPAbQaAjZjEALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="TownePlace Suites Jacksonville East"
        src="https://cache.marriott.com/marriottassets/marriott/TP/tps-lobby-0014-hor-clsc.jpg?downsize=1440px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "TownePlace Suites",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "Jacksonville, Florida",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "EXTENDED"
  ),
  // TOWNEPLACE SUITES MCKINNEY, TX
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/daldm-towneplace-suites-dallas-mckinney/?gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BUxWXu2UbSb1NKbpqQKJyM_993nmwmbpQJwWfbBSsAuJiO6I2JhxMaAs4YEALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="TownePlace Suites Dallas McKinney"
        src="https://cache.marriott.com/marriottassets/marriott/DALDM/daldm-lobby-0003-hor-clsc.jpg?downsize=1440px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "TownePlace Suites",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "McKinney, Texas",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "EXTENDED"
  ),
  // TOWNEPLACE SUITES OKC AIRPORT
  createData(
    <a
      href="https://www.marriott.com/hotels/travel/okcts-towneplace-suites-oklahoma-city-airport/?gclid=Cj0KCQiA9OiPBhCOARIsAI0y71A5qYM7KKcVkTIBCF-sSiA1mK959IoKLxlSaSMhS4a09035Ikk0EvwaArl-EALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="TownePlace Suites Oklahoma City Airport"
        src="https://cache.marriott.com/marriottassets/marriott/OKCTS/okcts-exterior-0001-hor-clsc.jpg?downsize=1440px:*"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "TownePlace Suites",
    // FRANCHISE
    "Marriott",
    // LOCATION
    "OKC Airport",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "EXTENDED"
  ),
  // TRU BY HILTON OKC AIRPORT
  createData(
    <a
      href="https://www.hilton.com/en/hotels/okcjwru-tru-oklahoma-city-airport/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Tru by Hilton Oklahoma City Airport"
        src="https://www.hilton.com/im/en/OKCJWRU/1116564/tru-standard-double-queen.jpg?impolicy=crop&cw=4608&ch=2400&gravity=NorthWest&xposition=374&yposition=808&rw=959&rh=512"
        width="100rem"
      ></img>
    </a>,
    // HOTEL BRAND
    "Tru",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "OKC Airport, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // TRU BY HILTON OKC NW EXPRESSWAY
  createData(
    <a
      href="https://www.hilton.com/en/hotels/okcruru-tru-oklahoma-city-nw-expressway/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Tru by Hilton Oklahoma City NW Expressway"
        src="https://www.hilton.com/im/en/OKCRURU/14954958/c2435db5-0ccc-4af2-9ec5-a7d02739dc0b-271-00000027f3a8f428.jpg?impolicy=crop&cw=5677&ch=3030&gravity=NorthWest&xposition=0&yposition=377&rw=959&rh=512"
        width="100rem"
      ></img>
    </a>,
    // HOTEL BRAND
    "Tru",
    // FRANCHISE
    "Hilton",
    // LOCATION
    "Oklahoma City, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE"
  ),
  // WYNDHAM GARDEN STILLWATER, OK
  createData(
    <a
      href="https://www.wyndhamhotels.com/wyndham-garden/stillwater-oklahoma/wyndham-garden-stillwater/overview?iata=00093763&cid=PS:2hbi7pm08by07zh&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71CABJzBkUHZmifuir806DPXbhDYQQ5kyoLfMBc0e8Q5KiN5LU5iZ5gaAngrEALw_wcB&gclsrc=aw.ds"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        border="0"
        alt="Wyndham Garden Stillwater"
        src="https://digital.ihg.com/is/image/ihg/holiday-inn-indianapolis-5516574170-2x1?wid=1440&hei=720&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"
        width="100px"
      ></img>
    </a>,
    // HOTEL BRAND
    "Holiday Inn",
    // FRANCHISE
    "IHG",
    // LOCATION
    "Stillwater, Oklahoma",
    // BOOK SALES
    <a href="https://www.choicehotels.com">Sales Inquiries</a>,
    // CATAGORY / SEGMENT
    "MIDSCALE+"
  ),
];

// CODE BELOW
// CODE BELOW
// CODE BELOW
// CODE >
// CODE >>>
// CODE >>>>>
// >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const getColumns = (rows) => {
  return {
    book: Array.from(new Set(rows.map((row) => row.book))),
    name: Array.from(new Set(rows.map((row) => row.name))),
    brand: Array.from(new Set(rows.map((row) => row.brand))),
    location: Array.from(new Set(rows.map((row) => row.location))),
    sales: Array.from(new Set(rows.map((row) => row.sales))),
    catagory: Array.from(new Set(rows.map((row) => row.catagory))),
  };
};

const filterRows = (obj, rows) => {
  const keys = Object.keys(obj);

  const filterRecursive = (keys, rows) => {
    if (keys.length === 0) return rows;

    if (obj[keys[0]].length === 0) {
      return filterRecursive(keys.slice(1), rows);
    }

    const filtered = rows.filter((row) => {
      return obj[keys[0]].indexOf(row[keys[0]]) > -1;
    });

    return filterRecursive(keys.slice(1), filtered);
  };

  return filterRecursive(keys, rows);
};

export default function Content() {
  const classes = useStyles();
  const [checkedItems, setCheckedItems] = React.useState({
    book: [],
    name: [],
    brand: [],
    location: [],
    sales: [],
    catagory: [],
  });
  const [keywords, setKeywords] = React.useState({
    book: "",
    name: "",
    brand: "",
    location: "",
    sales: "",
    catagory: "",
  });

  const filteredRows = filterRows(checkedItems, rows);
  const filteredColumns = getColumns(rows);

  return (
    <TableContainer component={Paper} className={classes.base}>
      <Table className={classes.table} aria-label="table-filterable">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="center">
              <PopupFilter
                stateCheckedItems={[checkedItems, setCheckedItems]}
                stateKeywords={[keywords, setKeywords]}
                data={filteredColumns.book}
                columnName="book"
              />
            </TableCell>
            <TableCell align="center">
              <PopupFilter
                stateCheckedItems={[checkedItems, setCheckedItems]}
                stateKeywords={[keywords, setKeywords]}
                data={filteredColumns.name}
                columnName="name"
              />
            </TableCell>
            <TableCell align="center">
              <PopupFilter
                stateCheckedItems={[checkedItems, setCheckedItems]}
                stateKeywords={[keywords, setKeywords]}
                data={filteredColumns.brand}
                columnName="brand"
              />
            </TableCell>
            <TableCell align="center">
              <PopupFilter
                stateCheckedItems={[checkedItems, setCheckedItems]}
                stateKeywords={[keywords, setKeywords]}
                data={filteredColumns.location}
                columnName="location"
              />
            </TableCell>
            <TableCell align="center">
              <PopupFilter
                stateCheckedItems={[checkedItems, setCheckedItems]}
                stateKeywords={[keywords, setKeywords]}
                data={filteredColumns.sales}
                columnName="sales"
              />
            </TableCell>
            <TableCell align="center">
              <PopupFilter
                stateCheckedItems={[checkedItems, setCheckedItems]}
                stateKeywords={[keywords, setKeywords]}
                data={filteredColumns.catagory}
                columnName="catagory"
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center">{row.book}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.brand} </TableCell>
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">{row.sales}</TableCell>
              <TableCell align="center">{row.catagory}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
