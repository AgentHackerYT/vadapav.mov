declare module "vadapav.mov"


/**
 *     directory: require("./src/dir"),
    download: require("./src/download"),
    listContentsOfDir: require("./src/listContentsOfADir.js"),
    search: require("./src/search"),
 */

export interface dir{"message":"directory retrieved","data":{"id":"11111111-1111-1111-1111-111111111111","name":"/","dir":true,"mtime":"2023-06-29T01:33:04.737547Z","files":[{"id":"d29d69f1-dc2a-4573-9959-45a765406e4d","name":"Anime","dir":true,"parent":"11111111-1111-1111-1111-111111111111","mtime":"2023-06-29T01:33:12.812921Z"},{"id":"689371f2-8240-48d3-8ff5-2d7f31024304","name":"Bollywood","dir":true,"parent":"11111111-1111-1111-1111-111111111111","mtime":"2023-07-05T14:30:30.090722Z"},{"id":"251df62a-a79f-4e32-9765-d8c80f5a92b6","name":"Documentaries","dir":true,"parent":"11111111-1111-1111-1111-111111111111","mtime":"2023-10-30T04:05:59.817776Z"},{"id":"f36be06f-8edd-4173-99df-77bc4c7c2626","name":"Movies","dir":true,"parent":"11111111-1111-1111-1111-111111111111","mtime":"2023-10-31T12:19:42.236237Z"},{"id":"7f49cd8a-ce5a-4547-9869-1c8e6783cfe7","name":"Recent","dir":true,"parent":"11111111-1111-1111-1111-111111111111","mtime":"2023-11-17T14:12:50.22872Z"},{"id":"28dc7aeb-902b-4824-8be2-fa1e4f20383c","name":"TV","dir":true,"parent":"11111111-1111-1111-1111-111111111111","mtime":"2023-06-29T01:33:12.427637Z"}]}}
export interface searchint{"message":"search result retrieved","data":[{"id":"d7227d61-eb79-43bb-bb90-53e7ea125632","name":"Oppenheimer (2023)","dir":true,"parent":"accac8e8-f794-47fd-b40b-8486bc8ab531","mtime":"2023-11-26T15:05:49.792866Z"},{"id":"8e0148de-0ebd-4a47-8897-f8597f30d808","name":"Oppenheimer (2023)","dir":true,"parent":"f36be06f-8edd-4173-99df-77bc4c7c2626","mtime":"2023-11-14T09:33:12.046553Z"}]}


export async function directory(term: string): Promise<dir>

export async function download(term: string): Promise<WritableStream>

export async function listContentsOfDir(term: string): Promise<string[]>

export async function search(term): Promise<searchint>
