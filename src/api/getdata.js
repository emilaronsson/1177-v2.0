import axios from "axios";

const caller = axios.create({
    baseURL: 'https://retoolapi.dev/na9kKT'
})

export function getContacts() {
    return caller.get('/data')
}

const emailsClient = axios.create({
    baseURL: 'http://localhost:3000'
})

export function getEmails() {
    return emailsClient.get('/inboxes')
}