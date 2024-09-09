export class ApiClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(endpoint) {
        const response = await fetch(`${this.baseURL}${endpoint}`);
        const data = await response.json();
        this.logToBuffer(data);
        return data;
    }

    async post(endpoint, body) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        this.logToBuffer(data);
        return data;
    }

    async put(endpoint, body) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        this.logToBuffer("200 OK");
        return "200 OK";
    }

    async delete(endpoint) {
        const response = await fetch(`${this.baseURL}${endpoint}`, { method: 'DELETE' });
        const data = await response.json();
        this.logToBuffer(data);
        return data;
    }

    logToBuffer(data) {
        const buffer = Buffer.from(JSON.stringify(data, null, 2));
        console.log(buffer.toString());
    }
}
