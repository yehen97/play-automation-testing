export function generateEmail() {
    const timestamp = new Date().getTime();
    return `testuser${timestamp}@mail.com`;
}