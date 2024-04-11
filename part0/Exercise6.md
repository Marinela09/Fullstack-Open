```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa <br> {content: "sap test 2", date: "2024-04-11T21:42:30.174Z"}

    activate server
    server-->>browser: The server responds with status code 201 created
    deactivate server

   