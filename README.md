## 1177-v2.0

## Install

Klona ner repot.<br>

run `npm ci`.

## Start

run `npx json-server --watch db.json` för att starta API. <br>

run `npm start`.<br>

Applikationens byggs nu med parcel och startar en server på http://localhost:1234

## Externa bibliotek

React-router: Används för routing i applikationen.

Json-server: Används för att skapa en "mock-API" som jag hämtar data ifrån.

Axios: Används för att hämta data från mina APIer.

MUI: Används för att importera vissa komponenter. Dessa komponenter används inte till så mycket för tillfället men kan komma att användas mer framöver i projektet.

## Tjänster

Har skapat ett "mock-API" med json-server. Består av två inbox-arrayer, en för mottagna emails och en för skickade. <br>
Anropen till APIt sker i en separat fil där funktionerna för att hämta data exporteras till-, och kallas på av de komponenter som ska använda datan.