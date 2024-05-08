function parseURL(url) {
  const parsedURL = new URL(url);
  const parsedObject = {
    protocol: parsedURL.protocol,
    hostname: parsedURL.hostname,
    port: parsedURL.port,
    pathname: parsedURL.pathname,
    search: parsedURL.search,
    hash: parsedURL.hash,
  };
  return parsedObject;
}

// Example usage:
const url = "https://www.example.com:8080/path/to/page?query=string#section";
const parsedURL = parseURL(url);
console.log(parsedURL);
