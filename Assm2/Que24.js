const invalidJSONString = "{ key: 'value' }";

try {
  // Attempt to parse the JSON string
  const parsedJSON = JSON.parse(invalidJSONString);
  console.log("Parsed JSON:", parsedJSON);
} catch (error) {
  // Handle 'SyntaxError' if JSON parsing fails
  if (error instanceof SyntaxError) {
    console.log("Error:", error.message);
    console.log("Invalid JSON string:", invalidJSONString);
  } else {
    // Handle other types of errors
    console.log("An error occurred:", error);
  }
}
