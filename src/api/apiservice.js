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

export function getMailboxes() {
    return emailsClient.get('/inboxes')
}

export function getEmails(inboxid) {
    return emailsClient.get(`/emails/?inboxid=${inboxid}`)
}

export function getSent() {
    return emailsClient.get('/sent')
}

export function deleteEmail(id) {
    return emailsClient.delete(`/emails/${id}`)
}